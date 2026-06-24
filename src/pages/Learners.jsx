import React, { useState } from "react";
import YouTubeEmbed from "../components/ui/YouTubeEmbed";
import BookingForm from "../components/business/BookingForm";

export default function Learners() {
  const vaultVideos = [
    {
      url: "https://youtu.be/zuUJITikFg4",
      title: "Live Interactive Session: Overcoming Speaking Anxiety",
    },
    {
      url: "https://youtu.be/suy57I-cepQ",
      title: "Fluency Mechanics: Shifting Away From Mental Translation",
    },
    {
      url: "https://youtu.be/Bq0d0IZZBmM?si=7TwD8oCYD_ibOgKu",
      title: "Real-World Scenarios: Building Instant Conversational Pacing",
    },
    {
      url: "https://youtu.be/2lkDl3u1Ou0?si=NqDzDd4cCKwDrAde",
      title: "Classroom Group Activity: Debate & Spontaneous Presentation",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Who is this program ideally designed for?",
      a: "This ecosystem is built specifically for college students preparing for campus placements, professionals struggling to clear job interviews, and working corporate employees who know English grammar but lock up, hesitate, or stutter during team meetings and client calls.",
    },
    {
      q: "I can write English perfectly but can't speak it. Can I still join?",
      a: "Absolutely. In fact, over 80% of our learners face this exact problem. You don't need more vocabulary or writing exercises—your brain just needs to build muscle memory through our practical talking drills so you can speak without thinking or translating.",
    },
    {
      q: "How large are the batches? Will I get a chance to speak?",
      a: "We keep our conversational training batches intentionally small and intimate. We firmly believe you cannot learn a language by sitting passively in a massive lecture hall. Our small-batch architecture ensures you get ample time to practice verbally and receive personalized feedback every single session.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
          Inside the Classroom
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Real Practice. Real Transformations.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We don't hide behind stock images or theoretical text rules. Watch how
          our actual learners step up, tackle stage fear, and build fluid
          communication confidence.
        </p>
      </div>

      {/* 2. VIDEO PRACTICE VAULT SHOWCASE */}
      <section className="space-y-8">
        <div className="border-b pb-4 border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Classroom Drill Highlights
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Take a look inside our daily conversational environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vaultVideos.map((video, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 transition-all duration-200 hover:shadow-md"
            >
              <YouTubeEmbed videoUrl={video.url} title={video.title} />
              <h3 className="font-bold text-sm sm:text-base text-slate-900 px-1 leading-snug">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DOUBLE-COLUMN FORM & FAQ LAYER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
        {/* LEFT COLUMN: THE BOOKING SUBMISSION FIELDSET */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <BookingForm />
        </div>

        {/* RIGHT COLUMN: INTERACTIVE ACCORDION BLOCK */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Got Questions? Let’s Clear Them Up.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything you need to know about how our sessions run.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 py-4 flex justify-between items-center text-left text-sm sm:text-base text-slate-900 font-bold hover:bg-slate-50 transition-colors duration-150 min-h-[48px]"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-slate-400 shrink-0 transform transition-transform duration-200 ml-4 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`transition-all duration-200 ease-in-out ${
                      isOpen
                        ? "max-h-60 border-t border-slate-100 p-5 bg-slate-50/50 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
