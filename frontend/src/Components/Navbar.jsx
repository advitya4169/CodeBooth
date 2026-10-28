import { Link, useLocation } from "react-router";
import { BookOpen, Code2, LayoutDashboard } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { pathname } = useLocation();
  const problemsActive = pathname.startsWith("/problems");
  const dashboardActive = pathname === "/dashboard";

  return (
    <nav className="cb-topbar sticky top-0 z-50" aria-label="Primary navigation">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-content">
            <Code2 className="size-[18px]" strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-[15px] font-semibold leading-5 tracking-tight">CodeBooth</span>
            <span className="hidden text-[11px] leading-4 cb-muted sm:block">Collaborative interview workspace</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/problems"
            aria-current={problemsActive ? "page" : undefined}
            className="cb-nav-link inline-flex min-h-9 items-center gap-2 px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Problems</span>
          </Link>
          <Link
            to="/dashboard"
            aria-current={dashboardActive ? "page" : undefined}
            className="cb-nav-link inline-flex min-h-9 items-center gap-2 px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <LayoutDashboard className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          <span className="mx-2 h-6 w-px bg-base-content/10" aria-hidden="true" />
          <div className="flex size-9 items-center justify-center rounded-md border border-[var(--cb-border)] bg-base-300 hover:border-primary/60">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
