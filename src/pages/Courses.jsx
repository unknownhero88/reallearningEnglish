import React from "react";
import BookingForm from "../components/business/BookingForm";

export default function Courses() {
  const roadmapLevels = [
    {
      level: "Level 0",
      title: "The Hesitation Break",
      timeline: "Day 1 Orientation",
      status:
        "Zyaadaatar students thoda dara hua feel karte hain aur bolne se pehle galti karne se darte hain.",
      action:
        "Confidence aur Mindset par kaam shuru hota hai. Student first day se hi hamari guidance ke saath bolna start kar deta hai.",
    },
    {
      level: "Level 1",
      title: "Confidence Ignition",
      timeline: "Month 1 Milestones",
      status:
        "Aap notice karoge ki jab koi English bolta hai to aapko samajh aane lagta hai aur aap daily life ke simple sentences bina dare bol paate ho.",
      action:
        "Roz ke kaam English me batana start kar dete ho aur yakin ho jata hai: 'English difficult nahi hai, main bhi bol sakta hoon!'",
    },
    {
      level: "Level 2",
      title: "Fearless Foundation",
      timeline: "Month 2 Milestones",
      status:
        "Basic conversations completely confidently karne lag jaate ho. Confidence naturally badhne lagta hai.",
      action:
        "English ab clearly samajh me aane lagti hai aur bolna easy aur comfortable feel hone lagta hai.",
    },
    {
      level: "Level 3",
      title: "Comfortable Flow",
      timeline: "Month 3 Milestones",
      status:
        "Classroom ke bahar bhi English bolna start kar dete ho. Logon se baat karte time hesitation kam ho jata hai.",
      action:
        "Galti ka dar aur stress almost khatam ho jata hai. Confidence aapke words me clearly jhalakne lagta hai.",
    },
    {
      level: "Level 4",
      title: "Intermediate Mastery",
      timeline: "Month 4 Milestones",
      status:
        "Aap apni baat clearly aur confidently express kar paate ho. Logon ke saamne bolna comfortable lagne lagta hai.",
      action:
        "Communication ka flow kaafi improve ho jata hai aur English natural feel hone lagti hai.",
    },
    {
      level: "Level 5",
      title: "Advanced & Professional Impact",
      timeline: "Months 5 & 6 Final Phase",
      status:
        "Yahin se aap fully professional level me enter karte ho jahan standard presentation patterns seekhe jaate hain.",
      action:
        "Deep focus on Storytelling, Corporate Interview Preparation, Business English, Public Speaking, and Personality Grooming.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. INTRO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block">
          Curriculum Blueprint
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Your 6-Month Learning Journey
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Six months ago you were afraid to speak. Today, you speak with
          absolute confidence. Take a transparent look at how your fluency
          shapes up step-by-step.
        </p>
      </div>

      {/* 2. THE COUNSELLING MATRIX INTEGRATION */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Our Methodology Focus
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              We Start With You, Not With a Batch
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Yahan par aapko{" "}
                <strong>
                  direct kisi bhi running batch me nahi bheja jaata
                </strong>
                . Sabse pehle aapka ek personal counselling session hota hai
                jahan hum deeply analyse karte hain:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-400 text-xs sm:text-sm font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span> Aapka current
                  English level kya hai
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span> Aapko exact
                  problem kahan aati hai
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span> Hesitation kis
                  wajah se hota hai
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span> Purpose aur
                  short-term goals kya hain
                </li>
              </ul>
              <p className="pt-2 text-slate-300">
                Simple shabdon me bolein to—yahan English ke liye aapko adjust
                nahi karni padti,{" "}
                <strong>
                  yahan classes aapke profile ke according adjust hoti hain
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 w-full bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-inner">
            <h3 className="text-base font-bold text-slate-200 mb-4 text-center">
              Request Your Intake Evaluation
            </h3>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 3. TIMELINE ITERATION CARDS */}
      <section className="space-y-10">
        <div className="border-b pb-4 border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Program Progression Milestones
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track how your daily habits evolve over 24 structured weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapLevels.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-200 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs tracking-wider rounded-md uppercase">
                    {item.level}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 tracking-wide">
                    {item.timeline}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <div className="space-y-3 pt-1">
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic">
                    " {item.status} "
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <strong className="text-emerald-600 block text-[11px] uppercase tracking-wider font-bold mb-1">
                      Our Focus In Class:
                    </strong>
                    {item.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
