import React from "react";

export default function TermsConditions() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* HEADER TITLE */}
      <div className="border-b pb-6 border-slate-200 space-y-2">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
          Academy Guidelines
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last updated: June 2026 • Real Learning English Classes
        </p>
      </div>

      {/* CORE INTRO */}
      <section className="text-slate-600 text-base leading-relaxed space-y-4">
        <p>
          Welcome to <strong>Real Learning English Classes</strong>. These terms
          outline the mutual commitment required to protect our interactive
          training environment and guarantee real fluency results for every
          batch.
        </p>
        <p>
          Our courses are explicitly designed to enhance your spoken English,
          workplace communication, public speaking abilities, and overall
          personality metrics through intensive verbal drilling and personalized
          feedback diagnostics.
        </p>
      </section>

      {/* DETAILED TERMS BLOCKS */}
      <div className="space-y-10 pt-4">
        {/* 1. FEE & SATISFACTION POLICY */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-sm inline-block"></span>
            1. Fee Structure &amp; Satisfaction Window
          </h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-3.5">
            <p>
              Enrollment tuition fees are generally non-refundable. However, to
              ensure absolute transparency, we back our quality with a{" "}
              <strong>15-day conditional refund framework</strong>. To qualify
              for a review, the participant must strictly adhere to the
              following baseline engagement metrics during their first 15 days:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-medium">
              <li>
                Maintain 100% attendance across all scheduled live sessions.
              </li>
              <li>
                Actively speak and participate in class discussions with full
                mental focus.
              </li>
              <li>
                Complete and submit all custom homework training assignments
                daily and on time.
              </li>
              <li>
                Demonstrate genuine, verifiable effort to implement mentor
                feedback loops.
              </li>
            </ul>
            <p className="text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs italic">
              *If these parameters are fully met and you are still unsatisfied,
              a formal written request detailing the specific issues faced must
              be submitted. Our team will audit course interaction logs to
              process the request.
            </p>
          </div>
        </div>

        {/* 2. CLASS VALIDITY & EMERGENCY PAUSES */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-sm inline-block"></span>
            2. Package Validity &amp; Emergency Leaves
          </h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-3.5">
            <p>
              Your class package allocation is strictly valid for the specific
              calendar duration agreed upon during your registration checkout
              sequence.
            </p>
            <p>
              <strong>
                In case of a genuine medical or personal emergency:
              </strong>{" "}
              The participant must inform the support team immediately. Upon
              formal approval, we will pause your seat metrics and issue a{" "}
              <strong>one-month backup training window</strong>, which can be
              claimed anytime within 6 months following your original course
              conclusion date.
            </p>
          </div>
        </div>

        {/* 3. HARDWARE & NOTE-TAKING MATERIAL POLICY */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-sm inline-block"></span>
            3. Note-Taking &amp; Classroom Study Materials
          </h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-3.5">
            <p>
              Because language is caught through active cognitive focus rather
              than passive textbook reading,{" "}
              <strong>
                Real Learning does not provide static study material booklets
              </strong>
              . Learners are required to actively maintain their own personal
              note frameworks during sessions.
            </p>
            <p>
              However, the academy will happily share copies of the specific{" "}
              <strong>teaching presentations (PPTs)</strong> used by the mentor
              in class. Your trainers remain fully accessible for continuous,
              personalized guidance and direct assistance outside of active
              hours.
            </p>
          </div>
        </div>

        {/* 4. CLASSROOM ETIQUETTE & CODE OF CONDUCT */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-sm inline-block"></span>
            4. Active English Etiquette &amp; Respectful Conduct
          </h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-3.5">
            <p>
              <strong>Language Enforcement:</strong> To break mental translation
              habits, English is the strict primary language of communication.
              Passive observation (attending without verbally contributing) is
              strongly discouraged.
            </p>
            <p>
              <strong>Zero-Tolerance Boundary:</strong> Participants must treat
              mentors and peers with kindness and professional courtesy. Any
              form of harassment, discrimination, or conversational disruption
              (including spamming irrelevant links, media, or excessive emojis)
              will result in immediate removal from the course without a refund.
            </p>
            <p>
              <strong>Confidentiality:</strong> To maintain a safe space for
              public speaking, whatever is shared inside the classroom
              environment remains strictly confidential. Do not share classmate
              data or personal messages outside the academy boundaries.
            </p>
          </div>
        </div>

        {/* 5. MODERATION & REVISIONS */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-sm inline-block"></span>
            5. Moderation Rights &amp; Policy Amendments
          </h2>
          <div className="text-sm text-slate-600 leading-relaxed pl-3.5">
            <p>
              The management team reserves the explicit right to moderate
              classroom boards, enforce training rules, and revoke seats for
              active policy breaches. These terms may be updated dynamically
              from time to time to accommodate new batch configurations.
              Continued participation following a revision notice constitutes
              full agreement.
            </p>
          </div>
        </div>
      </div>

      {/* SEPARATOR RULE */}
      <hr className="border-slate-200 my-8" />

      {/* CLOSING DISCOVERY BLOCK */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60 text-center space-y-4">
        <h3 className="font-bold text-slate-900 text-base sm:text-lg">
          Have a question regarding our operations policy?
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
          Please do not hesitate to contact our compliance desk directly. We are
          fully committed to providing a transparent, elite learning experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs font-bold pt-2">
          <a
            href="mailto:teenapatidar097@gmail.com"
            className="text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            📧 teenapatidar097@gmail.com
          </a>
          <a
            href="tel:+919630524297"
            className="text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            📞 +91 96305 24297
          </a>
        </div>
      </div>
    </div>
  );
}
