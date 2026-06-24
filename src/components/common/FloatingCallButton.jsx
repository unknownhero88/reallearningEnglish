import React from "react";

export default function FloatingCallButton() {
  const primaryPhone = "+919630524297";

  return (
    <a
      href={`tel:${primaryPhone}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Call Institute Representative"
    >
      <svg
        className="w-6 h-6 text-white fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-5.597-5.597c-.154-.44.012-.927.39-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z"
        />
      </svg>
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Call Instantly
      </span>
    </a>
  );
}
