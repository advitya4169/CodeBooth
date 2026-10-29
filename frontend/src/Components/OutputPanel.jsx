import {
  AlertCircleIcon,
  CheckCircle2Icon,
  CircleHelpIcon,
  Loader2Icon,
  TerminalIcon,
  XCircleIcon,
} from "lucide-react";

const STATUS = {
  idle: {
    label: "Ready",
    icon: CircleHelpIcon,
    color: "cb-muted",
  },
  running: {
    label: "Running",
    icon: Loader2Icon,
    color: "text-info",
  },
  success: {
    label: "Executed",
    icon: CheckCircle2Icon,
    color: "text-success",
  },
  "wrong-answer": {
    label: "Output differs",
    icon: XCircleIcon,
    color: "text-warning",
  },
  "execution-error": {
    label: "Execution error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-error": {
    label: "Provider error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-auth-error": {
    label: "Provider configuration error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-rate-limit": {
    label: "Provider limit reached",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-request-error": {
    label: "Provider request error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-response-error": {
    label: "Provider response error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-timeout": {
    label: "Provider timeout",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "execution-unavailable": {
    label: "Execution unavailable",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "invalid-request": {
    label: "Invalid execution request",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "provider-network-error": {
    label: "Connection error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
  "network-error": {
    label: "Connection error",
    icon: AlertCircleIcon,
    color: "text-error",
  },
};

function OutputPanel({ output, isRunning = false, resultStatus }) {
  const status = isRunning
    ? "running"
    : resultStatus || (output ? (output.success ? "success" : output.kind || "execution-error") : "idle");
  const statusConfig = STATUS[status] || STATUS["execution-error"];
  const StatusIcon = statusConfig.icon;
  const details = output?.error || output?.output;

  return (
    <section className="cb-panel flex h-full min-h-0 flex-col overflow-hidden" aria-label="Code output">
      <header className="cb-panel-header flex min-h-12 items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <TerminalIcon className="size-4 shrink-0 cb-muted" aria-hidden="true" />
          <h2 className="text-sm font-semibold">Output</h2>
        </div>
        <div className={`flex items-center gap-1.5 text-xs font-medium ${statusConfig.color}`} role="status" aria-live="polite">
          <StatusIcon className={`size-3.5 ${isRunning ? "animate-spin" : ""}`} aria-hidden="true" />
          <span>{status === "success" && resultStatus ? "All examples match" : statusConfig.label}</span>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-auto bg-neutral px-4 py-3 font-mono text-xs leading-6 text-neutral-content sm:text-sm">
        {isRunning ? (
          <p className="text-neutral-content/70">Executing your code…</p>
        ) : !output ? (
          <p className="text-neutral-content/60">Run your code to see the program output.</p>
        ) : output.success ? (
          <>
            {status === "wrong-answer" && (
              <p className="mb-2 font-sans text-warning">The program ran, but its output does not match the expected result.</p>
            )}
            <pre className="whitespace-pre-wrap break-words">{output.output || "No output was produced."}</pre>
          </>
        ) : (
          <div className="space-y-2">
            {output.output && output.error && output.output !== output.error && (
              <pre className="whitespace-pre-wrap break-words text-neutral-content/75">{output.output}</pre>
            )}
            <pre className="whitespace-pre-wrap break-words text-error-content">{details || "Execution failed. Try again in a moment."}</pre>
          </div>
        )}
      </div>
    </section>
  );
}

export default OutputPanel;
