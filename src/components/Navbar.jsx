import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-emerald-900 font-semibold"
    : "text-emerald-700 hover:text-emerald-900 transition";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-emerald-900"
        >
          Radytia
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white border-t">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
