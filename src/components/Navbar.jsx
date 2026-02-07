import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-emerald-900 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-900"
    : "text-emerald-700 hover:text-emerald-900 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-900 after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll untuk add shadow/backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-emerald-100" 
          : "bg-white border-b border-emerald-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO - Improved */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          aoerascand
        </Link>

        {/* DESKTOP MENU - dengan underline animation */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink 
            to="/contact" 
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition transform hover:scale-105 font-medium shadow-sm"
          >
            Contact
          </NavLink>
        </div>

        {/* MOBILE BUTTON - Improved animation */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-900 p-2 hover:bg-emerald-50 rounded-lg transition"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU - Improved animation & backdrop */}
      {open && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          
          {/* Mobile menu */}
          <div className="md:hidden px-6 py-6 flex flex-col gap-2 bg-white border-t border-emerald-100 shadow-lg relative">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg transition ${
                  isActive 
                    ? "bg-emerald-900 text-white font-semibold" 
                    : "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg transition ${
                  isActive 
                    ? "bg-emerald-900 text-white font-semibold" 
                    : "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg transition ${
                  isActive 
                    ? "bg-emerald-900 text-white font-semibold" 
                    : "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="px-4 py-3 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition font-medium text-center mt-2"
            >
              Contact Me
            </NavLink>
          </div>
        </>
      )}
    </header>
  );
}