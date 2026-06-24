import React from "react";
import { Link } from "react-router-dom";

export default function PracticeContent() {
  const stories = [
    {
      title: "Nikki the Squirrel's Nut Plan",
      path: "/nikki-the-squirrels-nut-plan/",
    },
    {
      title: "Tara the Tiny Elephant's Big Idea",
      path: "/english-story-tara-the-tiny-elephants-big-idea/",
    },
    {
      title: "Foxy and the Feather of Belief",
      path: "/english-story-foxy-and-the-feather-of-belief/",
    },
    {
      title: "Ollo the Owl's Day Out",
      path: "/english-story-ollo-the-owls-day-out/",
    },
    {
      title: "Meeku and the Forest Cleanup",
      path: "/english-story-meeku-and-the-forest-cleanup/",
    },
    {
      title: "Tippy the Turtle's Clever Race",
      path: "/english-story-tippy-the-turtles-clever-race/",
    },
  ];

  const scripts = [
    {
      title: "Inflection & Tone",
      desc: "Master volume pitch variance configurations to command absolute room authority.",
    },
    {
      title: "Voice Modulation",
      desc: "Practice mechanical structural shifts to deliver speech patterns that break social monotony.",
    },
    {
      title: "Text-to-Speech Scripts",
      desc: "Interactive dual-role conversation simulation outlines engineered for fluid personal feedback loops.",
    },
  ];

  const slides = [
    { label: "Learn Adjectives", path: "/learn-adjectives/" },
    { label: "Core Uses of Make", path: "/uses-of-make/" },
    { label: "Phrases with Make", path: "/phrases-with-make/" },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. HEADER HUB TEXT */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Welcome to Real Learning Practice Zone
        </h1>
        <p className="text-lg text-slate-600">
          Access high-impact self-study content configurations curated
          explicitly to train your linguistic processing and internal voice
          pacing.
        </p>
      </div>

      {/* 2. STORY COLLECTION MATRIX */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Fluency Practice Stories
          </h2>
          <span className="hidden sm:inline-block px-3 py-1 bg-brand-50 text-brand-500 font-bold text-xs uppercase tracking-wider rounded-md">
            Interactive Learning
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                <span className="inline-block px-2.5 py-0.5 bg-brand-500 text-white font-semibold text-[10px] tracking-wider uppercase rounded">
                  ENGLISH STORY
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-500 transition-colors duration-150">
                  {story.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Engineered reading drills to train standard vocabulary
                  recognition and immediate speech mechanics.
                </p>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={story.path}
                  className="w-full inline-flex items-center justify-center bg-slate-50 group-hover:bg-brand-50 border border-slate-200 group-hover:border-brand-500 text-slate-700 group-hover:text-brand-500 text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-150 min-h-[48px]"
                >
                  Start Reading Session &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DIALOGUE SCRIPTS GRID */}
      <section className="space-y-8 bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-inner">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Active Dialogue Roleplay Hub
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Eliminate monotonous vocal delivery patterns using intentional
            structural pitch shifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scripts.map((script, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700/60 p-6 rounded-xl space-y-3 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-lg text-brand-500">
                  {script.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {script.desc}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/english-conversations/"
                  className="text-xs font-bold uppercase tracking-wider text-white hover:text-brand-500 transition-colors inline-flex items-center gap-1 min-h-[48px]"
                >
                  Launch Script Engine <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. IDIOMS & QUICK-MODULE SLIDERS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-50/50 p-8 rounded-2xl border border-brand-100">
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            The Magic of Idioms
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Transition smoothly from textbook syntax definitions into native
            conversational shorthand phrases instantly.
          </p>
          <div className="pt-2">
            <Link
              to="/idioms-a-key-to-mastering-english/"
              className="inline-flex items-center text-sm font-bold text-brand-500 hover:text-brand-600 min-h-[48px]"
            >
              Explore Full Idiom Index &rarr;
            </Link>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {slides.map((slide, idx) => (
            <Link
              key={idx}
              to={slide.path}
              className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm hover:border-brand-500 hover:shadow-md transition-all duration-150 flex items-center justify-center min-h-[72px]"
            >
              <span className="text-sm font-bold text-slate-800 hover:text-brand-500">
                {slide.label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
