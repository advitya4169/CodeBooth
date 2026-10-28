import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight, BookOpen, ListFilter, Search, X } from "lucide-react";
import Navbar from "../Components/Navbar";
import { PROBLEMS } from "../Data/problems";
import { getDifficultyBadgeClass } from "../lib/utils";
import { filterProblems, getDifficultyCounts, getProblemTopics } from "../lib/problemFilters";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function ProblemsPage() {
  const problems = useMemo(() => Object.values(PROBLEMS), []);
  const topics = useMemo(() => getProblemTopics(problems), [problems]);
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const counts = useMemo(() => getDifficultyCounts(problems), [problems]);

  const filteredProblems = useMemo(() => {
    return filterProblems(problems, { query, topic, difficulty });
  }, [problems, query, topic, difficulty]);

  const hasFilters = Boolean(query || topic || difficulty);

  const clearFilters = () => {
    setQuery("");
    setTopic("");
    setDifficulty("");
  };

  return (
    <div className="cb-page">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-4 border-b border-base-content/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] cb-muted">
              <BookOpen className="size-4" aria-hidden="true" />
              Practice library
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Problems</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 cb-muted">
              Browse interview exercises by topic and difficulty, then open a problem to work through it.
            </p>
          </div>

          <div className="flex shrink-0 items-baseline gap-2 text-sm cb-muted">
            <span className="text-2xl font-semibold tabular-nums text-base-content">{problems.length}</span>
            <span>problems in the library</span>
          </div>
        </header>

        <section aria-label="Filter problems" className="cb-panel mb-5 p-3 sm:p-4">
          <div className="grid gap-3 md:grid-cols-[minmax(220px,1fr)_minmax(180px,0.55fr)_minmax(150px,0.4fr)]">
            <label className="form-control w-full">
              <span className="mb-1.5 text-xs font-medium cb-muted">Search title</span>
              <span className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 cb-muted" aria-hidden="true" />
                <input
                  type="search"
                  className="input input-bordered h-10 w-full pl-9 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  placeholder="e.g. lower bound"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search problem titles"
                />
              </span>
            </label>

            <label className="form-control w-full">
              <span className="mb-1.5 text-xs font-medium cb-muted">Topic</span>
              <select
                className="select select-bordered h-10 min-h-10 w-full text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                aria-label="Filter by topic"
              >
                <option value="">All topics</option>
                {topics.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
            </label>

            <label className="form-control w-full">
              <span className="mb-1.5 text-xs font-medium cb-muted">Difficulty</span>
              <select
                className="select select-bordered h-10 min-h-10 w-full text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                aria-label="Filter by difficulty"
              >
                <option value="">All levels</option>
                {DIFFICULTIES.map((level) => <option key={level} value={level}>{level} · {counts[level]}</option>)}
              </select>
            </label>
          </div>

          <div className="mt-3 flex min-h-7 flex-wrap items-center justify-between gap-2 border-t border-base-content/10 pt-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs cb-muted" aria-label="Problem counts by difficulty">
              <span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-success" />Easy <strong className="font-semibold text-base-content">{counts.Easy}</strong></span>
              <span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-warning" />Medium <strong className="font-semibold text-base-content">{counts.Medium}</strong></span>
              <span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-error" />Hard <strong className="font-semibold text-base-content">{counts.Hard}</strong></span>
            </div>
            <div className="flex items-center gap-3 text-xs cb-muted" aria-live="polite">
              <span>{filteredProblems.length} of {problems.length} shown</span>
              {hasFilters && (
                <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1 font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <X className="size-3.5" aria-hidden="true" /> Clear filters
                </button>
              )}
            </div>
          </div>
        </section>

        <div className="mb-2 hidden grid-cols-[3rem_minmax(0,1fr)_7rem_10rem_2rem] gap-3 px-4 text-[11px] font-semibold uppercase tracking-wider cb-muted sm:grid">
          <span>#</span><span>Problem</span><span>Difficulty</span><span>Topic</span><span />
        </div>

        {filteredProblems.length > 0 ? (
          <ul className="cb-panel overflow-hidden">
            {filteredProblems.map((problem, index) => (
              <li key={problem.id} className="border-b border-base-content/10 last:border-b-0">
                <Link
                  to={`/problems/${problem.id}`}
                  className="group grid min-h-16 grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 px-3 py-3 transition-colors hover:bg-base-300 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary sm:grid-cols-[3rem_minmax(0,1fr)_7rem_10rem_2rem] sm:gap-3 sm:px-4"
                >
                  <span className="font-mono text-xs tabular-nums cb-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium group-hover:text-primary">{problem.title}</span>
                    <span className="mt-1 block truncate text-xs cb-muted sm:hidden">{problem.category}</span>
                  </span>
                  <span className={`badge badge-sm w-fit ${getDifficultyBadgeClass(problem.difficulty)}`}>{problem.difficulty}</span>
                  <span className="hidden truncate text-xs cb-muted sm:block">{problem.category}</span>
                  <ArrowUpRight className="hidden size-4 cb-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="cb-panel px-5 py-14 text-center">
            <ListFilter className="mx-auto size-7 cb-muted" aria-hidden="true" />
            <h2 className="mt-3 text-base font-semibold">No problems match those filters</h2>
            <p className="mt-1 text-sm cb-muted">Try a different title or clear one of the selected filters.</p>
            <button type="button" onClick={clearFilters} className="btn btn-sm btn-outline mt-4">Clear filters</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProblemsPage;
