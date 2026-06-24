import React from "react";

// Import your custom profile picture asset cleanly from the assets folder
import founderPic from "../assets/image_dc2268.jpg";

export default function AboutUs() {
  const accountabilityPoints = [
    {
      title: "Direct Mentor Line",
      desc: "No call centers or generic support email queues. You have direct line access to discuss conversational roadblocks anytime.",
    },
    {
      title: "Daily Verbal Check-Ins",
      desc: "Short, impactful verbal interactions that make sure you are actively practicing your English every single day.",
    },
    {
      title: "Personal Expression Sheets",
      desc: "Vocabulary mapping customized entirely to your job profile, college major, or unique social context.",
    },
    {
      title: "Rapid Feedback Diagnostics",
      desc: "One-on-one constructive breakdowns at the end of interactive sessions so you know exactly where to tweak your speaking posture.",
    },
  ];

  const approachPillars = [
    {
      title: "Immersive Visual Situations",
      desc: "We completely ditch dry textbook worksheets and replace them with real-world conversational scenarios and media review drills.",
    },
    {
      title: "Spontaneous Public Speaking",
      desc: "You practice talking on your feet through engaging social challenges, debates, and mock boardroom presentations.",
    },
    {
      title: "80% Active Talking Rule",
      desc: "Classroom time is dedicated entirely to your speaking production. We believe a language is caught through active use, not passive listening.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. FOUNDER PROFILE STORY NARRATIVE */}
      <section className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Linked your profilepic asset directly here */}
          <div className="lg:col-span-4 bg-slate-50 flex items-center justify-center p-8 lg:p-6 border-b lg:border-b-0 lg:border-r border-slate-100">
            <img
              src={founderPic}
              alt="Teena Patidar - Founder of Real Learning English Classes"
              className="w-full max-w-[280px] lg:max-w-full h-auto aspect-square object-cover rounded-2xl shadow-md"
              onError={(e) => {
                // Fallback wrapper just in case extension varies (.jpg/.png)
                e.target.src =
                  "https://via.placeholder.com/400?text=Teena+Patidar";
              }}
            />
          </div>

          <div className="lg:col-span-8 p-6 sm:p-10 lg:p-16 flex flex-col justify-center space-y-6">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
              The Voice Behind The Academy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Teena Patidar
            </h1>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                "Let’s be completely honest: English is not an academic subject
                like History or chemistry. You cannot master fluid speaking by
                memorizing static rule definitions or rewriting sentences over
                and over in a quiet room."
              </p>
              <p>
                Real Learning was built out of a simple, powerful mission: to
                stop the cycle of fear and frustration. After spending over a
                decade coaching students and corporate professionals, I realized
                the absolute secret to fluency isn't a massive vocabulary
                database—it’s breaking the psychological hesitation barrier.
              </p>
              <p>
                My classroom ecosystem is modeled after how we naturally catch
                our mother tongue: through deep situational immersion, laughter,
                interactive friction, and constant verbal experimentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONAL ATTENTION PLAYBOOK */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            The Personal Attention Playbook
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            We deliberately avoid massive digital broadcast webinars. We back
            our results with intense, real-time mentorship accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accountabilityPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col space-y-3 hover:bg-white hover:border-emerald-200 transition-colors duration-150"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. APPROACH DIFFERENCES GRID */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 space-y-12 shadow-xl border border-slate-900">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block">
            The Classroom Environment
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            A Culture Built for Confident Speaking
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Here is what our day-to-day conversational practice formats actually
            look like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachPillars.map((theme, idx) => (
            <div key={idx} className="space-y-3 border-t border-slate-800 pt-6">
              <h3 className="text-base sm:text-lg font-bold text-emerald-400">
                {theme.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {theme.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
