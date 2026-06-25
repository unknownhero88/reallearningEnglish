import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import FloatingCallButton from "./components/common/FloatingCallButton";

// Lazy-loaded page components for optimization
import Home from "./pages/Home";
import Learners from "./pages/Learners";
import PracticeContent from "./pages/PracticeContent";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import StoryViewer from "./pages/StoryViewer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Global Navigation Layer */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-grow">
        <Routes>
          <Route path="/practice-content" element={<PracticeContent />} />
          <Route path="/practice-content/:storyId" element={<StoryViewer />} />
          <Route path="/refund_returns" element={<RefundPolicy />} />
          <Route
            path="/terms-conditions-for-the-english-learning-whatsapp-group"
            element={<TermsConditions />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Home />} />
          <Route path="/learners" element={<Learners />} />
          <Route path="/practice-content" element={<PracticeContent />} />
          <Route path="/about-teena-patidar" element={<AboutUs />} />
          <Route path="/contact-us-english-classes" element={<Contact />} />
          {/* Fallback redirect or basic 404 handler can go here */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Persistent Global Interaction Overlays */}
      <FloatingWhatsApp />
      <FloatingCallButton />

      {/* Global Footer Layer */}
      <Footer />
    </div>
  );
}
