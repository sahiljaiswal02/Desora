/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useScroll } from "motion/react";
import { useRef } from "react";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/ProcessSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { Portfolio } from "./components/Portfolio";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black selection:bg-orange-500/30 font-sans">
      <Navigation />
      
      <Hero scrollYProgress={scrollYProgress} />

      {/* Creative Transition Section */}
      <section className="relative bg-white z-20">
        {/* The "Wipe" Transition */}
        <div className="absolute top-0 left-0 w-full h-18 -translate-y-full bg-gradient-to-t from-white to-transparent pointer-events-none" />
        
        {/* Process & Portfolio Section Wrapper */}
        <div className="pt-32 pb-48 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <ProcessSection />
            <CapabilitiesSection />
            <Portfolio />
          </div>
        </div>
      </section>

      <Banner />
      <Footer />
    </div>
  );
}
