import test, { afterEach, beforeEach } from "node:test";
import assert from "node:assert/strict";

process.env.JDOODLE_CLIENT_ID = "test-client-id";
process.env.JDOODLE_CLIENT_SECRET = "test-client-secret";

const [{ default: axios }, { executeCode }, codeExecutionRoutes, { protectRoute }] = await Promise.all([
  import("axios"),
  import("../src/controllers/codeExecutionController.js"),
  import("../src/routes/codeExecutionRoutes.js"),
  import("../src/middleware/protectRoute.js"),
]);

let originalPost;

beforeEach(() => {
  originalPost = axios.post;
});

afterEach(() => {
  axios.post = originalPost;
});

function createResponse() {
  return {
    statusCode: null,
    body: null,
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
}

test("execution route requires the existing Clerk-protected middleware", () => {
  const route = codeExecutionRoutes.default.stack.find((layer) => layer.route?.path === "/")?.route;
  assert.ok(route);
  assert.equal(route.stack[0].handle, protectRoute[0]);
});

test("validates script and supported language before calling the provider", async () => {
  let called = false;
  axios.post = async () => { called = true; };
  const res = createResponse();

  await executeCode({ body: { script: " ", language: "nodejs" } }, res);

  assert.equal(res.statusCode, 400);
  assert.equal(res.body.kind, "invalid-request");
  assert.equal(called, false);
});

test("forwards valid provider output with a bounded request timeout", async () => {
  axios.post = async (url, payload, options) => {
    assert.equal(url, "https://api.jdoodle.com/v1/execute");
    assert.equal(payload.language, "python3");
    assert.equal(payload.versionIndex, "0");
    assert.equal(payload.script, "print('ok')");
    assert.equal(options.timeout, 25_000);
    return { data: { output: "ok\n", statusCode: 200, memory: "10", cpuTime: "0.01" } };
  };
  const res = createResponse();

  await executeCode({ body: { script: "print('ok')", language: "python3" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { output: "ok\n", statusCode: 200, memory: "10", cpuTime: "0.01" });
});

test("returns a sanitized credential-provider error", async () => {
  axios.post = async () => {
    const error = new Error("upstream rejected request");
    error.response = { status: 401, data: { message: "contains-sensitive-provider-detail" } };
    throw error;
  };
  const res = createResponse();

  await executeCode({ body: { script: "console.log(1)", language: "nodejs" } }, res);

  assert.equal(res.statusCode, 502);
  assert.equal(res.body.kind, "provider-auth-error");
  assert.equal(JSON.stringify(res.body).includes("contains-sensitive-provider-detail"), false);
});

test("maps provider timeouts and rejects malformed success responses", async () => {
  axios.post = async () => {
    const error = new Error("timeout");
    error.code = "ECONNABORTED";
    throw error;
  };
  const timeoutRes = createResponse();
  await executeCode({ body: { script: "console.log(1)", language: "nodejs" } }, timeoutRes);
  assert.equal(timeoutRes.statusCode, 504);
  assert.equal(timeoutRes.body.kind, "provider-timeout");

  axios.post = async () => ({ data: { unexpected: true } });
  const malformedRes = createResponse();
  await executeCode({ body: { script: "console.log(1)", language: "nodejs" } }, malformedRes);
  assert.equal(malformedRes.statusCode, 502);
  assert.equal(malformedRes.body.kind, "provider-response-error");
});
