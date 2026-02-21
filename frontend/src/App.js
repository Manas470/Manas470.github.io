import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { analyticsAPI } from "@/services/api";

const Home = () => {
  useEffect(() => {
    // Track page visit
    analyticsAPI.logVisit({
      page: '/',
      referrer: document.referrer || 'direct',
      user_agent: navigator.userAgent
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
