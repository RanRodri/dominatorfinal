import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // íconos opcionales (usa Heroicons o Lucide)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full border-b border-[#f5f2f0] px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="h-11 w-auto flex-shrink-0">
          <img
            src="/Images/logo.png"
            alt="Dominator Towing Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-9">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-[#181511] text-sm font-medium"
              >
                {name}
              </Link>
            ))}
          </div>
          <Link
            to="/request"
            className="h-10 px-4 bg-[#f39420] rounded-lg text-sm font-bold text-[#181511] flex items-center"
          >
            Request Assistance
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#181511] focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3">
          <nav className="flex flex-col gap-3">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-[#181511] text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </nav>
          <Link
            to="/request"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center h-10 px-4 bg-[#f39420] rounded-lg text-sm font-bold text-[#181511]"
          >
            Request Assistance
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
