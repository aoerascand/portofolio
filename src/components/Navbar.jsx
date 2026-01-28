import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          Radytia
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="border-b pb-2"
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className="border-b pb-2"
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="border-b pb-2"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
