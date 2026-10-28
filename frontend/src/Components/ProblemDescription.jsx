import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  if (!problem) {
    return (
      <div className="flex h-full items-center justify-center" role="status" aria-live="polite">
        <span className="loading loading-spinner loading-md text-primary" aria-label="Loading problem" />
      </div>
    );
  }

  return (
    <article className="h-full overflow-y-auto bg-base-200">
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-5 sm:px-6 sm:py-6">
        <header className="space-y-4 border-b border-base-content/10 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`badge badge-sm ${getDifficultyBadgeClass(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
            <span className="text-xs cb-muted">{problem.category}</span>
          </div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">{problem.title}</h1>
          <div>
            <label htmlFor="problem-switcher" className="mb-1.5 block text-xs font-medium cb-muted">
              Problem
            </label>
            <select
              id="problem-switcher"
              className="select select-sm w-full rounded-md border-[var(--cb-border)] bg-base-300"
              value={currentProblemId}
              onChange={(event) => onProblemChange(event.target.value)}
            >
              {allProblems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title} · {item.difficulty}
                </option>
              ))}
            </select>
          </div>
        </header>

        <section aria-labelledby="problem-description-heading">
          <h2 id="problem-description-heading" className="mb-2 text-sm font-semibold">Description</h2>
          <div className="space-y-3 text-sm leading-6 text-base-content/80">
            <p>{problem.description.text}</p>
            {problem.description.notes.map((note, index) => <p key={index}>{note}</p>)}
          </div>
        </section>

        <section aria-labelledby="problem-examples-heading">
          <h2 id="problem-examples-heading" className="mb-3 text-sm font-semibold">Examples</h2>
          <div className="space-y-3">
            {problem.examples.map((example, index) => (
              <div key={index} className="border-l-2 border-base-300 pl-3">
                <h3 className="mb-2 text-xs font-semibold cb-muted">Example {index + 1}</h3>
                <dl className="space-y-1.5 rounded-md bg-base-300 px-3 py-2.5 font-mono text-xs leading-5 sm:text-[13px]">
                  <div className="grid grid-cols-[4.5rem_1fr] gap-2">
                    <dt className="font-sans cb-muted">Input</dt>
                    <dd className="break-words">{example.input}</dd>
                  </div>
                  <div className="grid grid-cols-[4.5rem_1fr] gap-2">
                    <dt className="font-sans cb-muted">Output</dt>
                    <dd className="break-words">{example.output}</dd>
                  </div>
                  {example.explanation && (
                    <div className="grid grid-cols-[4.5rem_1fr] gap-2 border-t border-base-content/10 pt-1.5">
                      <dt className="font-sans cb-muted">Why</dt>
                      <dd className="break-words font-sans cb-muted">{example.explanation}</dd>
                    </div>
                  )}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="problem-constraints-heading" className="pb-4">
          <h2 id="problem-constraints-heading" className="mb-2 text-sm font-semibold">Constraints</h2>
          <ul className="space-y-1.5 font-mono text-xs leading-5 cb-muted sm:text-[13px]">
            {problem.constraints.map((constraint, index) => <li key={index}>• {constraint}</li>)}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default ProblemDescription;
