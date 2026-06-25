import React from "react";
import { useParams, Link } from "react-router-dom";
import { practiceStories } from "../data/stories";

export default function StoryViewer() {
  const { storyId } = useParams();

  // Find the content item dynamically from our master array database
  const activeContent = practiceStories.find((item) => item.id === storyId);

  if (!activeContent) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Content Block Not Found
        </h2>
        <p className="text-slate-600">
          The requested practice parameter could not be tracked.
        </p>
        <Link
          to="/practice-content"
          className="text-emerald-600 font-bold hover:underline"
        >
          &larr; Back to Practice Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      {/* UNIVERSAL RETURN NAVIGATION BACK BUTTON */}
      <Link
        to="/practice-content"
        className="text-slate-500 hover:text-slate-900 text-sm font-semibold inline-flex items-center gap-2 transition-colors min-h-[40px]"
      >
        &larr; Back to Practice Content Hub
      </Link>

      {/* METADATA ACCENT DISPLAY BOX */}
      <div className="space-y-4 border-b pb-6 border-slate-100">
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md tracking-wider uppercase inline-block border border-emerald-100">
          {activeContent.genre} • Category: {activeContent.type}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          {activeContent.type === "idiom"
            ? `“ ${activeContent.title} ”`
            : activeContent.title}
        </h1>
      </div>

      {/* DYNAMIC LAYOUT SWITCHER BASED ON THE CONTENT PROFILE DATA TYPE */}
      <div className="pt-2">
        {/* CONDITION 1: RENDER PURE TEXT PARAGRAPHS STORY FORMAT */}
        {activeContent.type === "story" && (
          <div className="space-y-4">
            {activeContent.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm"
              >
                {para}
              </p>
            ))}
          </div>
        )}

        {/* CONDITION 2: RENDER LIVE ROLEPLAY DIALOGUE INTERFACES */}
        {activeContent.type === "conversation" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Practice Reading Script Aloud:
            </span>
            {activeContent.lines.map((line, idx) => (
              <div
                key={idx}
                className="py-2.5 px-4 rounded-xl border border-slate-100/60 font-medium text-base text-slate-700 flex gap-4 items-start odd:bg-slate-50/60"
              >
                <span className="font-black text-emerald-600 shrink-0 select-none bg-emerald-50 border border-emerald-100 w-7 h-7 rounded-md flex items-center justify-center text-xs">
                  {line.speaker}
                </span>
                <p className="leading-relaxed pt-0.5">{line.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* CONDITION 3: RENDER THE GLOSSARY MEMORY SLAT FOR IDIOMS */}
        {activeContent.type === "idiom" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                Literal Core Meaning:
              </span>
              <p className="text-slate-800 text-lg sm:text-xl font-bold leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-100">
                {activeContent.meaning}
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                How to use this in a sentence:
              </span>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-4 sm:pl-6 py-1 font-medium">
                "{activeContent.example}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* DYNAMIC, SECURE CALL-TO-ACTION CARD DISPLAY CONTAINER */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 rounded-2xl text-center space-y-5 shadow-lg border border-slate-800 mt-12">
        <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
          Want to practice this topic live with a partner?
        </h3>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Don't memorize rules alone. Book a trial batch run with Teena Ma'am to
          practice this context natively and fix hesitation loops instantly.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/919630524297"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all min-h-[44px] items-center justify-center"
          >
            Practice With Teena Ma'am Live 🚀
          </a>
        </div>
      </div>
    </div>
  );
}
