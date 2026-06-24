import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Import your brand new logo asset cleanly from the assets folder
import logoImage from "../../assets/image_dd6881.png"; // Ensure this matches where you saved it, e.g., ../assets/logo.png

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Practice Content", path: "/practice-content" },
    { name: "Learners", path: "/learners" },
    { name: "About Us", path: "/about-teena-patidar" },
    { name: "Contact", path: "/contact-us-english-classes" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* BRAND LOGO CONTAINER WITH NEW IMAGE ASSET */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logoImage}
                alt="Real Learning English Classes Logo"
                className="h-12 w-auto object-contain sm:h-14 transition-transform duration-200 hover:scale-102"
                onError={(e) => {
                  // Production safety fallback wrapper if asset name path mismatches locally
                  e.target.style.display = "none";
                }}
              />
              {/* Invisible fallback layout text to keep screen-readers happy if image fails to render */}
              <span className="sr-only">Real Learning English Classes</span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION LAYOUT */}
          <div className="hidden lg:flex items-center space-x-1 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-150 min-h-[40px] flex items-center ${
                  isActive(link.path)
                    ? "bg-emerald-50 text-emerald-600 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pl-4">
              <a
                href="https://wa.me/919630524297"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition-colors duration-150 inline-flex items-center justify-center min-h-[44px]"
              >
                Book Free Trial
              </a>
            </div>
          </div>

          {/* MOBILE INTERACTIVE BUTTON HAMBURGER */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none min-h-[48px] min-w-[48px]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE PANEL MENU OVERLAY */}
      <div
        className={`${isOpen ? "block" : "hidden"} lg:hidden bg-white border-t border-slate-100`}
        id="mobile-menu"
      >
        <div className="px-2 pt-3 pb-4 space-y-1 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold min-h-[48px] flex items-center ${
                isActive(link.path)
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4 pb-2">
            <a
              href="https://wa.me/919630524297"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-md text-center block text-sm uppercase tracking-wider min-h-[48px] flex items-center justify-center"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
