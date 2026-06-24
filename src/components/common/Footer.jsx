import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT COLUMN: BRAND PROFILE & SOCIAL MEDIA PLATFORMS */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div>
                <span className="text-white font-bold text-lg tracking-tight block">
                  REAL LEARNING
                </span>
                <span className="text-emerald-500 font-semibold text-xs tracking-wider block">
                  ENGLISH CLASSES
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Helping students speak English fluently and confidently without
              relying on obsolete translation methods.
            </p>

            {/* EXTERNAL BRAND LOGOS WITH USERNAME HANDLES */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 font-medium text-xs text-slate-350">
              {/* Instagram Handle Layout Wrapper */}
              <a
                href="https://www.instagram.com/teenapatidar_003/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                aria-label="Follow Teena Patidar on Instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="Instagram Official Vector Logo"
                  className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-150"
                />
                <span className="tracking-wide">@teenapatidar_003</span>
              </a>

              {/* Layout Divider Line */}
              <span className="hidden sm:inline text-slate-800">|</span>

              {/* YouTube Handle Layout Wrapper */}
              <a
                href="https://www.youtube.com/@teenapatidar003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                aria-label="Subscribe to Real Learning on YouTube"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt="YouTube Official Vector Logo"
                  className="w-5.5 h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-150"
                />
                <span className="tracking-wide">@teenapatidar003</span>
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: COMPLETE ROUTING LINKS TREE */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-emerald-400 transition-colors font-semibold text-slate-200"
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-content"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Practice Content
                </Link>
              </li>
              <li>
                <Link
                  to="/learners"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Learners
                </Link>
              </li>
              <li>
                <Link
                  to="/about-teena-patidar"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us-english-classes"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN: CAMPUS ADDRESS METADATA */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              Academy Location
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">
              16/1 Teen Batti Chouraha, Freeganj,
              <br />
              Ujjain, Madhya Pradesh, India
            </p>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Mon - Fri (7 AM - 10 PM)
            </p>
          </div>
        </div>

        {/* BOTTOM MATRIX: INTELLECTUAL PROPERTY & LEGAL OVERLAYS */}
        <div className="mt-10 pt-8 border-t border-slate-900/60 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Real Learning English Classes. All
            rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] font-medium">
            <Link
              to="/terms-conditions-for-the-english-learning-whatsapp-group/"
              className="hover:text-slate-300 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/refund_returns/"
              className="hover:text-slate-300 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
