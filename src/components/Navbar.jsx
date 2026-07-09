import { Moon, Sun, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  // Apply dark mode
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-md">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-red-900 text-white font-bold text-lg hover:bg-red-950 transition-all"
          >
            TV
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-slate-500 dark:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              to="/education"
              className="hover:text-slate-500 dark:text-white transition-colors"
            >
              Education
            </Link>

            <Link
              to="/skills"
              className="hover:text-slate-500 dark:text-white transition-colors"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              className="hover:text-slate-500 dark:text-white transition-colors"
            >
              Projects
            </Link>

            <Link
              to="/certifications"
              className="hover:text-slate-500 dark:text-white transition-colors"
            >
              Certifications
            </Link>

            <Link
              to="/contact"
              className="hover:text-slate-500 dark:text-white transition-colors"
            >
              Contact
            </Link>

            <a
               href={`${import.meta.env.BASE_URL}resume.pdf`} 
               download="Vaishnavi_Thorat_Resume.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
             
            >
              Download Resume
            </a>

            {/* Dark Mode Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md bg-gray-200 dark:bg-zinc-800 dark:text-white transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900 border-t dark:border-zinc-700">
            <div className="flex flex-col px-6 py-5 gap-5">
              <Link
                to="/"
                className="dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/education"
                className="dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>

              <Link
                to="/skills"
                className="dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className="dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/certifications"
                className="dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>

              <Link
                to="/contact"
                className="dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`} 
                download="Vaishnavi_Thorat_Resume.pdf"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-center transition-colors"
                
              >
                Download Resume
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="flex justify-center items-center p-2 rounded-md bg-gray-200 dark:bg-zinc-800 dark:text-white transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;