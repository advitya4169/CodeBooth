import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../Data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div
      className="modal modal-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-session-title"
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
    >
      <div className="modal-box max-w-xl">
        <h2 id="create-session-title" className="mb-1 text-xl font-semibold tracking-tight">Create a session</h2>
        <p className="mb-5 text-sm cb-muted">Choose a problem for your 1-on-1 interview room.</p>

        <div className="space-y-6">
          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="label" htmlFor="session-problem">
              <span className="label-text font-semibold">Problem</span>
              <span className="label-text-alt text-error">Required</span>
            </label>

            <select
              id="session-problem"
              autoFocus
              required
              className="select select-bordered w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find((p) => p.title === e.target.value);
                if (!selectedProblem) return;
                setRoomConfig({
                  difficulty: selectedProblem.difficulty,
                  problem: e.target.value,
                });
              }}
            >
              <option value="" disabled>
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title}>
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.problem && (
            <div className="alert border border-primary/20 bg-primary/5 text-base-content">
              <Code2Icon className="size-5" />
              <div>
                <p className="font-semibold">Session details</p>
                <p>
                  Problem: <span className="font-medium">{roomConfig.problem}</span>
                </p>
                <p>
                  Max Participants: <span className="font-medium">2 (1-on-1 session)</span>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button
            type="button"
            className="btn btn-primary gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} role="presentation"></div>
    </div>
  );
}
export default CreateSessionModal;
