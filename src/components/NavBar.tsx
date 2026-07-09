import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="font-mono mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <h1>jemma.crosby</h1>

      <div className="flex items-center gap-6">
        <NavLink to="/">Home</NavLink>

        <div className="relative">
          <button
            type="button"
            onClick={() => setProjectsOpen((prev) => !prev)}
            className="rounded-lg border border-gray-300 px-3 py-2 cursor-pointer"
          >
            Projects
          </button>

          {projectsOpen && (
            <div className="absolute right-0 mt-2 flex w-40 flex-col rounded-lg border border-gray-300 bg-white p-2 shadow-md">
              <NavLink
                to="/crosby-snacks"
                onClick={() => setProjectsOpen(false)}
                className="rounded px-2 py-1 hover:bg-gray-100"
              >
                Crosby Snacks
              </NavLink>
              <NavLink
                to="/strava-stats"
                onClick={() => setProjectsOpen(false)}
                className="rounded px-2 py-1 hover:bg-gray-100"
              >
                Strava Stats
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
