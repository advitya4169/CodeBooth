import { Activity, ArrowRight, Clock3, Users } from "lucide-react";
import { Link } from "react-router";
import { formatDistanceToNow } from "date-fns";
import { getDifficultyBadgeClass } from "../lib/utils";

function SessionSkeleton() {
  return (
    <li className="animate-pulse border-t border-base-content/10 px-4 py-4 sm:px-5" aria-hidden="true">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1 space-y-3">
          <div className="h-4 w-48 rounded bg-base-300" />
          <div className="h-3 w-64 max-w-full rounded bg-base-300" />
        </div>
        <div className="h-9 w-28 rounded-md bg-base-300" />
      </div>
    </li>
  );
}

function ActiveSessions({
  sessions,
  isLoading,
  isError,
  errorMessage,
  onRetry,
  isUserInSession,
  onCreateSession,
}) {
  return (
    <section className="cb-panel overflow-hidden" aria-labelledby="active-sessions-heading">
      <header className="cb-panel-header flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Activity className="size-[18px]" aria-hidden="true" />
          </span>
          <div>
            <h2 id="active-sessions-heading" className="text-lg font-semibold tracking-tight">Active interviews</h2>
            <p className="text-xs cb-muted">Join an open room or return to one of your sessions.</p>
          </div>
        </div>
        {!isLoading && !isError && (
          <span className="text-xs tabular-nums cb-muted">{sessions.length} {sessions.length === 1 ? "room" : "rooms"} listed</span>
        )}
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
        <ul aria-label="Loading active interviews" aria-busy="true">
          {[0, 1, 2].map((item) => <SessionSkeleton key={item} />)}
        </ul>
      ) : sessions.length > 0 ? (
        <ul className="divide-y divide-base-content/10">
          {sessions.map((session) => {
            const isMine = isUserInSession(session);
            const isFull = Boolean(session.participant);
            const startedAt = session.createdAt ? new Date(session.createdAt) : null;
            const startedLabel = startedAt && !Number.isNaN(startedAt.getTime())
              ? formatDistanceToNow(startedAt, { addSuffix: true })
              : null;

            return (
              <li key={session._id} className="px-4 py-4 transition-colors hover:bg-base-300 sm:px-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-semibold sm:text-base">{session.problem}</h3>
                      <span className={`badge badge-sm ${getDifficultyBadgeClass(session.difficulty)}`}>
                        {session.difficulty?.charAt(0).toUpperCase() + session.difficulty?.slice(1)}
                      </span>
                      <span className={`badge badge-sm ${isFull ? "badge-ghost" : "badge-success"}`}>
                        {isFull ? "Full" : "Open"}
                      </span>
                      {isMine && <span className="badge badge-sm badge-outline">Your session</span>}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs cb-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="size-3.5" aria-hidden="true" />
                        Host: {session.host?.name || "Host"}
                        {isFull ? " · 2 participants" : " · Waiting for partner"}
                      </span>
                      {startedLabel && (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="size-3.5" aria-hidden="true" />
                          Started {startedLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {isFull && !isMine ? (
                    <button type="button" className="btn btn-sm min-h-9 h-9 shrink-0" disabled aria-label={`Session full: ${session.problem}`}>
                      Session full
                    </button>
                  ) : (
                    <Link
                      to={`/session/${session._id}`}
                      className="btn btn-sm btn-primary min-h-9 h-9 shrink-0 gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      aria-label={`${isMine ? "Rejoin" : "Join"} ${session.problem}`}
                    >
                      {isMine ? "Rejoin" : "Join session"}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : !isError ? (
        <div className="border-t border-base-content/10 px-5 py-9 text-center">
          <h3 className="text-base font-semibold">No active interviews</h3>
          <p className="mx-auto mt-1 max-w-sm text-sm cb-muted">Create a room and invite someone to start a mock interview.</p>
          <button type="button" onClick={onCreateSession} className="btn btn-sm btn-primary mt-4 min-h-9 h-9 gap-2">
            Create session
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default ActiveSessions;
