// Nav.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
export function Nav({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Burger Icon (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
        aria-label="Toggle navigation"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {links.map((link, i) => (
          <li
            key={i}
            className="hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4 md:hidden z-50">
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
