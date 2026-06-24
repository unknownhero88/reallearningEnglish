import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    requirements: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Direct production interface formulation hook
    const smsBody = `Name: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}\nRequirements: ${formData.requirements}`;
    window.open(
      `https://wa.me/919630524297?text=${encodeURIComponent(smsBody)}`,
      "_blank",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Book your trial class now
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Your Requirements / Goals
          </label>
          <textarea
            rows="3"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            value={formData.requirements}
            onChange={(e) =>
              setFormData({ ...formData, requirements: e.target.value })
            }
            placeholder="e.g., Public speaking fear, clear interview preparation"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-lg shadow-md transition-all duration-200 text-center"
        >
          Submit Application via WhatsApp
        </button>
      </div>
    </form>
  );
}
