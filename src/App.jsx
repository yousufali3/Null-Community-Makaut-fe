import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import DiscussionSection from "./components/DiscussionSection";
import AboutSection from "./components/AboutSection";
import WebinarSection from "./components/WebinarSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <WebinarSection />
      <FeaturesSection />
      <DiscussionSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
