import React, { useState } from "react";

export default function RefundPolicy() {
  const [openFaq, setOpenFaq] = useState(null);

  const policyConditions = [
    {
      label: "Full Attendance",
      desc: "You must attend all scheduled live training sessions during your initial 15 days.",
    },
    {
      label: "Active Engagement",
      desc: "Passive listening doesn't build fluency. Active speaking participation in drills is required.",
    },
    {
      label: "On-Time Assignments",
      desc: "All daily practical homework must be fully completed and submitted within specified deadlines.",
    },
    {
      label: "Verifiable Effort",
      desc: "A genuine, visible commitment to practicing and applying mentor corrections must be demonstrated.",
    },
  ];

  const faqs = [
    {
      q: "Can I get a refund if I don’t feel any progress?",
      a: "Yes! We stand completely behind our interactive training ecosystem. If you honestly fulfill the daily practice rules for the first 15 days and still notice no improvement in your speaking confidence, we will honor your request.",
    },
    {
      q: "What are the exact conditions required to qualify?",
      a: "To protect our intensive batch system, you must maintain 100% attendance, actively participate in verbal classroom drills, submit homework daily, and display an earnest effort to learn during your initial 15-day window.",
    },
    {
      q: "How exactly do I submit a request?",
      a: "Send a formal request in writing to teenapatidar097@gmail.com within the first 15 days of enrollment. Please outline the specific conversational challenges you're experiencing so our internal team can cross-reference your classroom interaction logs.",
    },
    {
      q: "Will I receive a 100% refund of my tuition fee?",
      a: "Yes. Once your course engagement logs are reviewed and verified against our baseline parameters, approved claims are processed back to your original source account with zero hidden deductibles.",
    },
    {
      q: "Why do you maintain a conditional structure?",
      a: "Because communication is a behavioral habit, not a theoretical lecture. You cannot improve by simply sitting in a class. This framework is designed to hold you accountable to your own professional transformation goals.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
      {/* 1. HERO HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
          Satisfaction Window
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Refund &amp; Returns Policy
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          We believe in transparent learning and stand firmly behind our
          training with a 15-day conditional satisfaction framework.
        </p>
      </div>

      {/* 2. CONDITIONS GRID */}
      <section className="space-y-6">
        <div className="border-b pb-3 border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">
            Baseline Qualification Metrics
          </h2>
          <p className="text-xs text-slate-500">
            To maintain eligibility for a refund review, you must actively
            complete these four criteria:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {policyConditions.map((cond, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  {cond.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {cond.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POLICY EXECUTION CLAUSE */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4 shadow-md">
        <h3 className="text-base sm:text-lg font-bold">
          Review Process Transparency
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          If you have met all the baseline engagement metrics mentioned above
          but still feel unsatisfied with your progress, you may request a
          refund in writing within your first 15 days of enrollment. Your claim
          must outline your exact area of dissatisfaction. Our administration
          team will review your class data profiles and process the transaction
          fairly based on your interaction history.
        </p>
      </section>

      {/* 4. FREQUENTLY ASKED POLICY ACCORDION */}
      <section className="space-y-6">
        <div className="border-b pb-3 border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Policy FAQs</h2>
          <p className="text-xs text-slate-500">
            Quick answers to clear up any structural or process doubts.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
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
                  className={`transition-all duration-200 ease-in-out ${isOpen ? "max-h-48 border-t border-slate-100 p-5 bg-slate-50/50 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FOOTER ASSISTANCE CONTACT DESK */}
      <section className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-6 sm:p-8 text-center space-y-3">
        <h3 className="font-bold text-slate-900 text-sm sm:text-base">
          Still Have Queries Before Enrolling?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          We want you to feel 100% confident about your training roadmap before
          you commit. Reach out directly for support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs font-bold pt-1">
          <a
            href="mailto:teenapatidar097@gmail.com"
            className="text-emerald-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm transition-colors hover:bg-slate-50"
          >
            ✉ teenapatidar097@gmail.com
          </a>
          <a
            href="tel:+919630524297"
            className="text-emerald-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm transition-colors hover:bg-slate-50"
          >
            📞 +91 96305 24297
          </a>
        </div>
      </section>
    </div>
  );
}
