import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../Data/problems";
import Navbar from "../Components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../Components/ProblemDescription";
import OutputPanel from "../Components/OutputPanel";
import CodeEditorPanel from "../Components/CodeEditorPanel";
import { executeCode } from "../lib/jdoodle.js";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [resultStatus, setResultStatus] = useState("idle");
  const [isNarrowViewport, setIsNarrowViewport] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // update problem when URL param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
      setResultStatus("idle");
    }
  }, [id, selectedLanguage]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsNarrowViewport(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const handleLanguageChange = (newLang) => {
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
    setResultStatus("idle");
  };

  const handleProblemChange = (newProblemId) => navigate(`/problems/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    setResultStatus("running");

    try {
      const result = await executeCode(selectedLanguage, code);
      setOutput(result);

      if (!result.success) {
        setResultStatus(result.kind || "execution-error");
        toast.error(result.error || "Code execution failed.");
        return;
      }

      const expectedOutput = currentProblem.expectedOutput[selectedLanguage] || "";
      const testsPassed = checkIfTestsPassed(result.output || "", expectedOutput);
      setResultStatus(testsPassed ? "success" : "wrong-answer");

      if (testsPassed) {
        triggerConfetti();
        toast.success("All examples match.");
      } else {
        toast.error("Output differs from the expected examples.");
      }
    } catch {
      const result = {
        success: false,
        kind: "network-error",
        error: "The execution request could not be completed. Please try again.",
      };
      setOutput(result);
      setResultStatus(result.kind);
      toast.error(result.error);
    } finally {
      setIsRunning(false);
    }
  };

  const problemPanel = (
    <ProblemDescription
      problem={currentProblem}
      currentProblemId={currentProblemId}
      onProblemChange={handleProblemChange}
      allProblems={Object.values(PROBLEMS)}
    />
  );
  const editorPanel = (
    <CodeEditorPanel
      selectedLanguage={selectedLanguage}
      code={code}
      isRunning={isRunning}
      onLanguageChange={handleLanguageChange}
      onCodeChange={setCode}
      onRunCode={handleRunCode}
    />
  );
  const outputPanel = <OutputPanel output={output} isRunning={isRunning} resultStatus={resultStatus} />;
  const resizeHandleClass = "group relative z-10 bg-base-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary data-[separator=horizontal]:h-2 data-[separator=vertical]:w-2";

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-base-100">
      <Navbar />
      <main className="min-h-0 flex-1 overflow-hidden p-2 sm:p-3">
        <div className="h-full overflow-hidden rounded-lg border border-[var(--cb-border)] bg-base-100">
          {isNarrowViewport ? (
            <PanelGroup direction="vertical" className="h-full">
              <Panel defaultSize={35} minSize={22}>{problemPanel}</Panel>
              <PanelResizeHandle className={`${resizeHandleClass} h-2 cursor-row-resize`} aria-label="Resize problem and editor panels" />
              <Panel defaultSize={47} minSize={30}>{editorPanel}</Panel>
              <PanelResizeHandle className={`${resizeHandleClass} h-2 cursor-row-resize`} aria-label="Resize editor and output panels" />
              <Panel defaultSize={18} minSize={14}>{outputPanel}</Panel>
            </PanelGroup>
          ) : (
            <PanelGroup direction="horizontal" className="h-full">
              <Panel defaultSize={40} minSize={28}>{problemPanel}</Panel>
              <PanelResizeHandle className={`${resizeHandleClass} w-2 cursor-col-resize`} aria-label="Resize problem and editor columns" />
              <Panel defaultSize={60} minSize={38}>
                <PanelGroup direction="vertical" className="h-full">
                  <Panel defaultSize={70} minSize={30}>{editorPanel}</Panel>
                  <PanelResizeHandle className={`${resizeHandleClass} h-2 cursor-row-resize`} aria-label="Resize editor and output panels" />
                  <Panel defaultSize={30} minSize={18}>{outputPanel}</Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProblemPage;
