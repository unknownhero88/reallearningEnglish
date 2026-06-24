import React from "react";
import BookingForm from "../components/business/BookingForm";

export default function Contact() {
  const contactChannels = [
    {
      title: "Give Us a Direct Ring",
      details: ["+91 96305 24297", "+91 95894 73121"],
      sub: "Available for quick enrollment queries morning to evening.",
      icon: (
        <svg
          className="w-5 h-5 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Drop an Email",
      details: ["teenapatidar097@gmail.com"],
      sub: "For custom corporate training workshops or institution partnerships.",
      icon: (
        <svg
          className="w-5 h-5 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Visit Our Campus",
      details: ["16/1 Teen Batti Chouraha, Freeganj, Ujjain (M.P.)"],
      sub: "Drop by our physical headquarters to see an active batch live in person.",
      icon: (
        <svg
          className="w-5 h-5 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. HEADER HERO */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let’s talk about your goals
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have a question about class batches, timings, or corporate sessions?
          Drop us a line below or reach out directly.
        </p>
      </div>

      {/* 2. SPLIT LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: INTERACTIVE FORM WORKSPACE */}
        <div className="lg:col-span-6">
          <BookingForm />
        </div>

        {/* RIGHT COLUMN: INSTITUTIONAL CHANNELS & DESK */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Direct Channels
            </h3>

            <div className="space-y-6">
              {contactChannels.map((channel, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-50 rounded-xl shrink-0">
                    {channel.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      {channel.title}
                    </h4>
                    <div className="space-y-0.5">
                      {channel.details.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          className="text-sm font-semibold text-slate-700"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
                      {channel.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAP CANVAS PLACEHOLDER */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-1">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Campus Route Finder
                </h4>
                <p className="text-xs text-slate-500">
                  Located centrally inside Freeganj, Ujjain
                </p>
              </div>
              <a
                href="https://g.co/kgs/agN2hFW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-lg transition-colors min-h-[40px]"
              >
                Open Google Maps &rarr;
              </a>
            </div>

            {/* Styled Map Block Layout */}
            <div className="w-full aspect-[16/9] bg-slate-50 border border-slate-100 rounded-xl relative flex flex-col items-center justify-center text-center p-6 overflow-hidden">
              <svg
                className="w-6 h-6 text-emerald-600 animate-bounce mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <span className="text-xs font-bold text-slate-800">
                16/1 Teen Batti Chouraha, Freeganj
              </span>
              <p className="text-[11px] text-slate-400 max-w-xs mt-1">
                Click the routing button above to immediately overlay street
                navigation vectors via Google Business profile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
