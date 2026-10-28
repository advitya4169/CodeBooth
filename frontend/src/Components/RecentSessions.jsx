import { Check, Clock3, History, Users } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { getDifficultyBadgeClass } from "../lib/utils";

function RecentSessions({ sessions, isLoading, isError, errorMessage, onRetry }) {
  return (
    <section className="cb-panel overflow-hidden" aria-labelledby="recent-sessions-heading">
      <header className="cb-panel-header flex items-center gap-3 px-4 py-4 sm:px-5">
        <span className="flex size-9 items-center justify-center rounded-md bg-base-200 cb-muted">
          <History className="size-[18px]" aria-hidden="true" />
        </span>
        <div>
          <h2 id="recent-sessions-heading" className="text-lg font-semibold tracking-tight">Recent sessions</h2>
          <p className="text-xs cb-muted">Latest completed interviews</p>
        </div>
      </header>

      {isError && (
        <div className="mx-4 mb-4 flex flex-col gap-3 rounded-md border border-error/25 bg-error/5 p-3 sm:mx-5 sm:flex-row sm:items-center sm:justify-between" role="alert">
          <p className="text-sm text-base-content">{errorMessage}</p>
          <button type="button" onClick={() => onRetry()} className="btn btn-sm btn-outline min-h-8 h-8 border-base-content/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Try again
          </button>
        </div>
      )}

      {isLoading ? (
        <ul aria-label="Loading recent sessions" aria-busy="true">
          {[0, 1].map((item) => (
            <li key={item} aria-hidden="true" className="animate-pulse border-t border-base-content/10 px-4 py-4 sm:px-5">
              <div className="h-4 w-44 rounded bg-base-300" />
              <div className="mt-3 h-3 w-64 max-w-full rounded bg-base-300" />
            </li>
          ))}
        </ul>
      ) : sessions.length > 0 ? (
        <ul className="divide-y divide-base-content/10">
          {sessions.map((session) => {
            const completedAt = session.updatedAt || session.createdAt;
            const completedDate = completedAt ? new Date(completedAt) : null;
            const completedLabel = completedDate && !Number.isNaN(completedDate.getTime())
              ? formatDistanceToNow(completedDate, { addSuffix: true })
              : null;

            return (
              <li key={session._id} className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-sm font-semibold sm:text-base">{session.problem}</h3>
                    <span className={`badge badge-sm ${getDifficultyBadgeClass(session.difficulty)}`}>
                      {session.difficulty?.charAt(0).toUpperCase() + session.difficulty?.slice(1)}
                    </span>
                    <span className="badge badge-sm badge-ghost">Completed</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs cb-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-3.5" aria-hidden="true" />
                      {session.participant ? "2 participants" : "1 participant"}
                    </span>
                    {completedLabel && (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-3.5" aria-hidden="true" />
                        Completed {completedLabel}
                      </span>
                    )}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-success sm:self-auto">
                  <Check className="size-3.5" aria-hidden="true" />
                  Complete
                </span>
              </li>
            );
          })}
        </ul>
      ) : !isError ? (
        <div className="border-t border-base-content/10 px-5 py-8">
          <p className="text-sm font-medium">No completed sessions yet</p>
          <p className="mt-1 text-sm cb-muted">Completed interviews will appear here.</p>
        </div>
      ) : null}
    </section>
  );
}

export default RecentSessions;
