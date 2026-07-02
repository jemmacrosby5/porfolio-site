import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-mono mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <h1>jemma.crosby</h1>

      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
