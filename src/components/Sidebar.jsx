import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const items = [
    { name: "Home", path: "/" },
    { name: "My Watchlist", path: "/watchlist" },
    { name: "Favourites", path: "/favourites" },
    { name: "Compare Movies", path: "/compare" },
  ];

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-56 bg-[#111] text-white pt-[60px] z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
    >
      {/* Header of sidebar */}
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Nav Links */}
      <nav>
        <ul className="list-none p-0 m-0">
          {items.map((item) => (
            <li key={item.name} className="mb-1">
            <NavLink
  to={item.path}
  onClick={() => setIsOpen(false)}
  className={({ isActive }) =>
    `block px-4 py-2 rounded transition font-medium ${
      isActive
        ? "bg-blue-500 text-white shadow-md"
        : "text-white hover:text-blue-400"
    }`
  }
>
  {item.name}
</NavLink>

            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
