import { createElement } from "react";
import { SignInButton } from "@clerk/clerk-react";
import {
  ArrowRight,
  Aperture,
  BookOpen,
  Code2,
  Video,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "A shared coding workspace",
    description: "Work through a problem together in a multi-language editor with code execution built in.",
  },
  {
    icon: Video,
    title: "Face-to-face interviews",
    description: "Talk through trade-offs while you code, with video and session chat in the same room.",
  },
  {
    icon: BookOpen,
    title: "A focused problem library",
    description: "Choose an interview problem by title, topic, or difficulty before you start a room.",
  },
];

function HomePage() {
  return (
    <div className="cb-page overflow-hidden">
      <nav className="cb-topbar sticky top-0 z-50" aria-label="Primary navigation">
        <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="/" className="group flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-content">
              <Aperture className="size-[18px]" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[15px] font-semibold leading-5 tracking-tight">CodeBooth</span>
              <span className="block text-[11px] leading-4 cb-muted">Collaborative interview workspace</span>
            </span>
          </a>
          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm min-h-9 gap-2 px-4">
              Sign in <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </SignInButton>
        </div>
      </nav>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Mock interviews, together
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-base-content sm:text-5xl lg:text-[3.5rem]">
              Practice the conversation behind the code.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 cb-muted sm:text-lg">
              Pair on interview problems in a shared editor, talk through your approach, and run code without leaving the room.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <SignInButton mode="modal">
                <button className="btn btn-primary min-h-11 gap-2 px-5">
                  Start an interview <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="btn btn-ghost min-h-11 gap-2 px-4 cb-muted">
                  Explore the problem library <BookOpen className="size-4" aria-hidden="true" />
                </button>
              </SignInButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-base-content/10 pt-5 text-sm cb-muted">
              <span className="inline-flex items-center gap-2"><Code2 className="size-4 text-primary" aria-hidden="true" /> Shared editor</span>
              <span className="inline-flex items-center gap-2"><Video className="size-4 text-primary" aria-hidden="true" /> Live video</span>
              <span className="inline-flex items-center gap-2"><Users className="size-4 text-primary" aria-hidden="true" /> One-on-one rooms</span>
            </div>
          </div>

          <div className="cb-panel cb-panel-raised mx-auto w-full max-w-2xl overflow-hidden">
            <div className="cb-panel-header flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
              <div>
                <p className="text-sm font-semibold">Workspace preview</p>
                <p className="text-xs cb-muted">Illustrative interface · sample code</p>
              </div>
              <span className="badge badge-outline badge-sm">Two Sum · Easy</span>
            </div>
            <div className="grid min-h-[300px] sm:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-base-content/10 p-4 sm:border-b-0 sm:border-r sm:p-5">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide cb-muted">
                  <BookOpen className="size-3.5" aria-hidden="true" /> Problem
                </div>
                <h2 className="text-lg font-semibold tracking-tight">Two Sum</h2>
                <p className="mt-3 text-sm leading-6 cb-muted">
                  Find two values in the array that add up to the target and return their indices.
                </p>
                <div className="mt-5 rounded-md border border-[var(--cb-border)] bg-base-300 px-3 py-2.5 font-mono text-xs leading-5">
                  <p><span className="font-sans cb-muted">Input</span> [2, 7, 11, 15], 9</p>
                  <p className="mt-1"><span className="font-sans cb-muted">Output</span> [0, 1]</p>
                </div>
              </div>
              <div className="flex min-w-0 flex-col bg-base-100 text-base-content">
                <div className="flex items-center justify-between border-b border-[var(--cb-border)] px-4 py-3">
                  <span className="text-xs font-medium">solution.js</span>
                  <span className="text-[11px] cb-muted">JavaScript</span>
                </div>
                <pre className="min-h-[188px] flex-1 overflow-hidden px-4 py-4 font-mono text-xs leading-6 text-base-content/90 sm:px-5">{`function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i];
    if (seen.has(other)) return [seen.get(other), i];
    seen.set(nums[i], i);
  }
}`}</pre>
                <div className="border-t border-[var(--cb-border)] px-4 py-2.5 text-xs cb-muted">
                  <span className="mr-2 text-accent">$</span>Run code to inspect output
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--cb-border)] bg-base-200">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mb-7 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] cb-muted">Inside the room</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">A practical setup for working through problems.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {features.map(({ icon, title, description }) => (
                <article key={title} className="cb-panel cb-panel-nested p-5 sm:p-6">
                  <span className="mb-4 flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {createElement(icon, { className: "size-[18px]", "aria-hidden": true })}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-6 cb-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-base-content/10 px-4 py-5 text-center text-xs cb-muted">
        CodeBooth · Collaborative coding interviews
      </footer>
    </div>
  );
}

export default HomePage;
