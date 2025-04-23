"use client";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Certificate from "./components/Certificate.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import MusicNotification from "./components/MusicNotification.jsx";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <About />
          </>
        );
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "certificates":
        return <Certificate />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        {renderSection()}
      </main>
      <Footer />
      <MusicNotification/>
      <MusicPlayer/>
    </div>
  );
}