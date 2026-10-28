import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../Data/problems";

function defineEditorTheme(monaco) {
  const tokens = getComputedStyle(document.documentElement);
  const readToken = (name) => tokens.getPropertyValue(name).trim();
  const background = readToken("--color-base-100");
  const primary = readToken("--color-primary");

  monaco.editor.defineTheme("midnight-emerald-editor", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": background,
      "editorGutter.background": background,
      "editorLineNumber.foreground": readToken("--cb-muted"),
      "editorLineNumber.activeForeground": readToken("--color-base-content"),
      "editorCursor.foreground": primary,
      "editor.lineHighlightBackground": readToken("--color-base-200"),
      "editor.selectionBackground": `${primary}55`,
      "editor.inactiveSelectionBackground": `${primary}30`,
      "editorIndentGuide.background1": readToken("--color-base-300"),
      "editorOverviewRuler.border": readToken("--cb-border"),
    },
  });
}

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  const activeLanguage = LANGUAGE_CONFIG[selectedLanguage] || LANGUAGE_CONFIG.javascript;

  return (
    <section className="cb-panel flex h-full min-h-0 flex-col overflow-hidden" aria-label="Code editor">
      <header className="cb-panel-header flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          <h2 className="truncate text-sm font-semibold">Solution</h2>
          <span className="hidden text-xs cb-muted sm:inline">{activeLanguage.name}</span>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <div className="join border border-base-content/15" role="group" aria-label="Programming language">
            {Object.entries(LANGUAGE_CONFIG).map(([key, language]) => (
              <button
                key={key}
                type="button"
                className={`join-item inline-flex min-h-8 items-center gap-1.5 px-2 text-xs font-medium transition-colors focus-visible:z-10 ${
                  selectedLanguage === key
                    ? "bg-primary text-primary-content"
                    : "bg-base-300 cb-muted hover:border-primary/50 hover:text-base-content"
                }`}
                onClick={() => onLanguageChange(key)}
                aria-pressed={selectedLanguage === key}
                aria-label={`Switch to ${language.name}`}
                disabled={isRunning}
              >
                <img src={language.icon} alt="" className="size-4" />
                <span>{language.name}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-primary btn-sm min-h-8 gap-1.5 px-3"
            disabled={isRunning}
            onClick={onRunCode}
            aria-label={isRunning ? "Code is running" : "Run code"}
          >
            {isRunning ? <Loader2Icon className="size-4 animate-spin" aria-hidden="true" /> : <PlayIcon className="size-4" aria-hidden="true" />}
            <span>{isRunning ? "Running" : "Run"}</span>
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 bg-base-100">
        <Editor
          height="100%"
          language={activeLanguage.monacoLang}
          value={code}
          onChange={(value) => onCodeChange(value ?? "")}
          theme="midnight-emerald-editor"
          beforeMount={defineEditorTheme}
          options={{
            fontSize: 14,
            fontFamily: "JetBrains Mono, Cascadia Code, monospace",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            smoothScrolling: true,
            lineNumbers: "on",
            cursorBlinking: "smooth",
            renderLineHighlight: "all",
            padding: { top: 14, bottom: 14 },
            tabSize: 2,
            wordWrap: "on",
            scrollbar: { verticalScrollbarSize: 10, horizontalScrollbarSize: 10 },
          }}
        />
      </div>
    </section>
  );
}

export default CodeEditorPanel;
