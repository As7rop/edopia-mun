import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Copyright, Heart, Shield, Award, ExternalLink } from "lucide-react";

import Navigation from "./components/Navigation";
import HomeSection from "./components/HomeSection";
import CommitteesSection from "./components/CommitteesSection";
import DashboardSection from "./components/DashboardSection";
import ScheduleSection from "./components/ScheduleSection";
import GuideSection from "./components/GuideSection";
import Logo from "./components/Logo";
import AnimatedBackground from "./components/AnimatedBackground";

import { RegistrationData } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedCommitteeId, setSelectedCommitteeId] = useState<string | null>(null);

  // Persistence State: Read registered delegate ledger from localStorage
  const [registeredUser, setRegisteredUser] = useState<RegistrationData | null>(() => {
    const saved = localStorage.getItem("edopia_mun_registration");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Failed to parse local delegate credentials:", err);
        return null;
      }
    }
    return null;
  });

  // Watch tab switches to scroll content smoothly to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div id="edopia-mun-application" className="min-h-screen flex flex-col bg-transparent text-cream selection:bg-gold selection:text-brand-dark antialiased relative">
      
      {/* Dynamic Animated UN Background */}
      <AnimatedBackground />
      
      {/* Dynamic Persistent Navbar */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        registeredUser={registeredUser} 
      />

      {/* Primary Transition Stage */}
      <main id="application-transition-stage" className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {activeTab === "home" && (
              <HomeSection 
                setActiveTab={setActiveTab} 
                registeredUser={registeredUser} 
              />
            )}
            
            {activeTab === "committees" && (
              <CommitteesSection 
                setActiveTab={setActiveTab} 
                setSelectedCommitteeId={setSelectedCommitteeId} 
              />
            )}
            
            {activeTab === "dashboard" && (
              <DashboardSection 
                registeredUser={registeredUser} 
                setRegisteredUser={setRegisteredUser}
                selectedCommitteeId={selectedCommitteeId}
                setSelectedCommitteeId={setSelectedCommitteeId}
              />
            )}
            
            {activeTab === "schedule" && (
              <ScheduleSection />
            )}
            
            {activeTab === "guide" && (
              <GuideSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Elite Scholastic Footer */}
      <footer id="executive-footer-panel" className="bg-[#0b0607] border-t border-brand-light/20 pt-16 pb-8 text-cream-dark sm:px-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand block (4 cols) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" withText={false} />
              <div>
                <h4 className="font-serif font-black text-cream text-lg tracking-wide leading-none">EDOPIA MUN</h4>
                <p className="font-mono text-[9px] text-gold tracking-widest uppercase mt-0.5">ESTD 2026 • Administrative Desk</p>
              </div>
            </div>
            <p className="text-xs text-cream-dark/65 max-w-sm text-left leading-relaxed">
              We provide a premier, unbiased platform for secondary and tertiary level scholars to debate intricate geosecurity affairs and construct cohesive consensus directives.
            </p>
            {/* Quick stats tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand/30 border border-brand-light/30 text-gold-light">
                Secure SSL Checkout
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand/35 border border-brand-light/35 text-cream">
                6 Assembly desks
              </span>
            </div>
          </div>

          {/* Quick links block (3 cols) */}
          <div className="md:col-span-3 text-left">
            <h5 className="font-mono text-[10px] uppercase text-gold font-bold tracking-widest mb-4">
              Assembly Portals
            </h5>
            <ul className="space-y-2 text-xs">
              {["Overview", "Committees", "Schedule", "Guide & FAQ"].map((name, i) => {
                const tabIds = ["home", "committees", "schedule", "guide"];
                return (
                  <li key={name}>
                    <button
                      onClick={() => setActiveTab(tabIds[i])}
                      className="text-cream-dark/65 hover:text-gold hover:translate-x-1 duration-200 transition-transform font-medium"
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className="text-gold hover:text-gold-light hover:translate-x-1 duration-200 transition-transform font-bold"
                >
                  {registeredUser ? "Go to Delegate Portal" : "Register Now"}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact help block (4 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h3 className="font-mono text-[10px] uppercase text-gold font-bold tracking-widest leading-none">
              Inquiries & Crisis Desk
            </h3>
            <p className="text-xs text-cream-dark/60 leading-relaxed">
              Reach out directly for group delegations, chapter waivers, institutional billings or physical accommodations.
            </p>
            <div className="space-y-2 text-xs font-mono">
              <a 
                href="mailto:edopiamun@gmail.com" 
                className="flex items-center gap-2 text-cream-dark/75 hover:text-gold font-medium"
              >
                <Mail className="w-4 h-4 text-brand-light" />
                <span>edopiamun@gmail.com</span>
              </a>
              <div 
                className="flex items-center gap-2 text-cream-dark/75 font-medium"
              >
                <Phone className="w-4 h-4 text-brand-light" />
                <span>+91 98115 16377 (Secretariat Support)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal credentials sub bar */}
        <div className="max-w-7xl mx-auto px-4 border-t border-brand-light/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-cream-dark/45">
          <div className="flex items-center gap-1">
            <Copyright className="w-3.5 h-3.5" />
            <span>2026 Edopia Model United Nations. All Sovereign Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1.5 font-sans">
            <span>Deliberated with</span>
            <Heart className="w-3 h-3 text-brand-light fill-brand-light" />
            <span>by Edopia Secretariat</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
