import { Plus } from "lucide-react";

function WelcomeSection({ firstName, onCreateSession }) {
  return (
    <header className="flex flex-col gap-4 border-b border-base-content/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] cb-muted">Interview workspace</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          {firstName ? `Welcome back, ${firstName}` : "Your dashboard"}
        </h1>
        <p className="mt-1.5 text-sm cb-muted">Create an interview room or join an open session.</p>
      </div>

      <button
        type="button"
        onClick={onCreateSession}
        className="btn btn-primary min-h-10 h-10 gap-2 px-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Plus className="size-4" aria-hidden="true" />
        Create session
      </button>
    </header>
  );
}

export default WelcomeSection;
