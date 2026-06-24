import React from "react";
import { Link } from "react-router-dom";
import YouTubeEmbed from "../components/ui/YouTubeEmbed";

// Import your custom student profile asset cleanly
import studentProfilePic from "../assets/profilePic.png";

export default function Home() {
  const achievements = [
    { value: "15+ Years", label: "Mentoring Students & Professionals" },
    { value: "1,500+", label: "Confident English Speakers Graduated" },
    { value: "98%", label: "Success Rate from Word-of-Mouth Reviews" },
  ];

  const focuses = [
    {
      title: "Real-World Fluency",
      desc: "No grammar charts or translating in your head. Learn to think directly in English so words come to you naturally during a conversation.",
    },
    {
      title: "Workplace Communication",
      desc: "Crack job interviews, lead office meetings with authority, deliver impactful presentations, and handle client calls without sweating.",
    },
    {
      title: "Public Speaking Confidence",
      desc: "Overcome stage fright. Learn how to control your voice modulation, manage your pacing, and stand confidently in front of any crowd.",
    },
    {
      title: "Personality & Grooming",
      desc: "Fix baseline hesitation, polish your body language, and carry yourself with confidence in both social settings and corporate spaces.",
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. NEW 2-COLUMN HERO SECTION: BALANCED & DYNAMIC */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-emerald-500/20">
              Stop Memorizing Rules. Start Speaking.
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Tired of knowing grammar but{" "}
              <span className="text-emerald-400 block sm:inline">
                freezing when you try to speak?
              </span>
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed">
              Join a highly practical program designed specifically for college
              students and working professionals in India. Learn to speak
              English naturally, break through your hesitation, and build
              genuine stage confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
              <a
                href="https://wa.me/919630524297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/40 transition-all duration-200 text-center"
              >
                Book a Free Trial Session
              </a>
              <a
                href="https://wa.me/919630524297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl shadow-md transition-all duration-200 text-center border border-slate-700"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Instant Human Element Overlay */}
          <div className="lg:col-span-5 w-full">
            <div className="relative p-2 bg-slate-900/50 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-sm">
              <YouTubeEmbed
                videoUrl="https://youtu.be/zuUJITikFg4"
                title="Real Learning Classroom Preview"
              />
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md hidden sm:block">
                See Us In Action ⚡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL METRICS ACCENT BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`space-y-1 ${idx !== 0 ? "md:border-l md:border-slate-100 pt-4 md:pt-0" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. REAL LEARNER SPOTLIGHT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-50 to-emerald-50/40 rounded-2xl p-8 border border-slate-200/65 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative p-1 bg-white rounded-full shadow-md border border-slate-200">
              <img
                src={studentProfilePic}
                alt="Real Learning Graduate Spotlight"
                className="w-36 h-36 rounded-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/160?text=Learner+Success";
                }}
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">
              From Classroom to Corporate
            </span>
            <blockquote className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed italic">
              "I knew all the vocabulary rules but locked up completely whenever
              someone in the office asked me for my input. After joining Teena
              ma'am's sessions, the daily talking practice completely broke my
              hesitation loop."
            </blockquote>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Verified Real Learning Graduate
              </h4>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                Ujjain Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TRANSLATION TRAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase block">
              The Real Issue
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why knowing English grammar doesn't equal fluent speaking
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Think about it: when you try to speak, do you find yourself
                writing sentences in your head, translating them from your
                native language, checking for grammar rules, and then saying
                them out loud?
              </p>
              <p>
                <strong>
                  This translation trap is exactly why you stutter or freeze.
                </strong>{" "}
                It builds friction and breaks your confidence. You don't need
                another textbook filled with rule sets. You need a practical
                environment that forces your brain to immediately conceptualize
                and express your ideas directly in English.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 w-full">
            <YouTubeEmbed
              videoUrl="https://youtu.be/GoiDzAnvTZE"
              title="The Translation Trap Explained"
            />
          </div>
        </div>
      </section>

      {/* 5. WHAT WE ACTUALLY FOCUS ON */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Core Focus Areas
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Everything we do is designed around interactive conversational
              practice, not dry whiteboard lectures.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focuses.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-150 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-3 pl-9">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HONEST TRANSPARENT WARRANTY ACCENT
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-950">
            Our 15-Day Money-Back Guarantee
          </h2>
          <p className="text-rose-900/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We are completely transparent about our quality. If you attend your
            scheduled sessions regularly and don't notice a real improvement in
            your speaking confidence or fluency metrics within your first 15
            days, we will issue a full, unconditional refund of your tuition
            fee.
          </p>
          <div className="pt-2">
            <Link
              to="/refund_returns/"
              className="text-xs font-bold uppercase tracking-wider text-rose-700 hover:text-rose-800 underline transition-colors"
            >
              Read Our Refund Policy Framework &rarr;
            </Link>
          </div>
        </div>
      </section> */}
      {/* 5. HUMANIZED CALL-TO-ACTION: WARM INVITATION OVER TRANSACTIONAL GUARANTEES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-800 relative overflow-hidden">
          {/* Subtle design accent background ring */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-xs uppercase tracking-wider">
            Let's Take The First Step Together
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            See the difference in just 60 minutes.{" "}
            <br className="hidden sm:inline" />
            Book a personalized trial session.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We don't believe in high-pressure sales pitches or locking you into
            programs that don't fit your life. Every month, we open a strictly
            limited number of free trial slots so you can experience our
            interactive, no-translation conversational ecosystem firsthand
            before making any decisions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a
              href="https://wa.me/919630524297"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-150 text-center min-h-[48px] flex items-center justify-center text-sm"
            >
              Secure My Free Slot Now
            </a>
          </div>

          <p className="text-[11px] text-slate-500 font-medium pt-2">
            *No credit card required. Absolutely zero commitment. Just bring
            your passion to improve.
          </p>
        </div>
      </section>
    </div>
  );
}
