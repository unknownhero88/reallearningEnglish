import React, { useState } from "react";
import { Link } from "react-router-dom";
import { practiceStories } from "../data/stories";

export default function PracticeContent() {
  const [activeTab, setActiveTab] = useState("stories");

  // Parse centralized collection dynamically on the fly based on type parameters
  const storiesList = practiceStories.filter((item) => item.type === "story");
  const conversationsList = practiceStories.filter(
    (item) => item.type === "conversation",
  );
  const idiomsList = practiceStories.filter((item) => item.type === "idiom");

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* 1. VAULT ZONE HERO AREA */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
          Interactive Training Terminal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Real Learning Practice Vault
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Practice regularly to build natural fluency and confidence. Choose a
          practice category below to open a distraction-free screen.
        </p>
      </div>

      {/* 2. TAB CONTROL SWITCH CONTROLS */}
      <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
        {[
          { id: "stories", label: "📚 Spoken Stories" },
          { id: "conversations", label: "💬 Real Dialogues" },
          { id: "idioms", label: "✨ Idioms Deck" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center min-h-[44px] flex-1 ${
              activeTab === tab.id
                ? "bg-white text-slate-950 shadow-sm font-extrabold"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. GRID LAYOUT RENDER MATRIX */}
      <div className="pt-4">
        {/* TAB SLOT 1: STORIES CARDS */}
        {activeTab === "stories" && (
          <div className="space-y-6">
            <div className="border-b pb-3 border-slate-200">
              <h3 className="text-lg font-bold text-slate-950">
                Active Reading &amp; Comprehension Stories
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Select a text below to open its dedicated page view layout
                container.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {storiesList.map((story) => (
                <div
                  key={story.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow min-h-[220px]"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
                      {story.genre}
                    </span>
                    <h4 className="text-lg font-bold text-slate-950 tracking-tight">
                      {story.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {story.summary}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/practice-content/${story.id}`}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center block transition-colors min-h-[44px] flex items-center justify-center"
                    >
                      Open Story Drill &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB SLOT 2: CONVERSATION CARDS */}
        {activeTab === "conversations" && (
          <div className="space-y-6">
            <div className="border-b pb-3 border-slate-200">
              <h3 className="text-lg font-bold text-slate-950">
                Real Dialogue Scenario Sheets
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Click to expand any exchange scenario into its own full-screen
                page for pronunciation drills.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conversationsList.map((conv) => (
                <div
                  key={conv.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow min-h-[220px]"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
                      {conv.genre}
                    </span>
                    <h4 className="text-lg font-bold text-slate-950 tracking-tight">
                      {conv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {conv.summary}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/practice-content/${conv.id}`}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center block transition-colors min-h-[44px] flex items-center justify-center"
                    >
                      Open Full Dialogue Screen &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB SLOT 3: IDIOMS CARDS */}
        {activeTab === "idioms" && (
          <div className="space-y-6">
            <div className="border-b pb-3 border-slate-200">
              <h3 className="text-lg font-bold text-slate-950">
                The Native Expressions Dictionary Deck
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any idiom card to see its full definition breakdown and
                real-world usage examples.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {idiomsList.map((idiom) => (
                <div
                  key={idiom.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow min-h-[220px]"
                >
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded uppercase tracking-wide inline-block">
                      {idiom.genre}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 leading-tight">
                      “{idiom.title}”
                    </h4>
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/practice-content/${idiom.id}`}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center block transition-colors min-h-[44px] flex items-center justify-center"
                    >
                      View Meaning &amp; Examples &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
