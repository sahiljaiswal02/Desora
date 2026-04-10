import { useScroll } from "motion/react";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/ProcessSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { Portfolio } from "./components/Portfolio";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";
import { ServicesGrid } from "./components/ServicesGrid";
import { ContactSection } from "./components/ContactSection";
import { BlogPost } from "./components/BlogPost";
import { ProjectPage } from "./components/ProjectPage";

import blogsData from "./data/blogs.json";
import { useScrollToSection } from "./hooks/useScrollToSection";

interface Blog {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
  content: string;
}

const blogs = blogsData as Blog[];

function HomePage() {
  useScrollToSection();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black selection:bg-orange-500/30 font-sans"
    >
      <Navigation />
      <Hero scrollYProgress={scrollYProgress} />

      <section className="relative bg-white z-20">
        <div className="absolute top-0 left-0 w-full h-18 -translate-y-full bg-linear-to-t from-white to-transparent pointer-events-none" />
        <div className="pt-32 px-4 md:px-6 relative overflow-visible">
          <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
            <ProcessSection />
            <ServicesGrid />
            <CapabilitiesSection />
            <Portfolio />
            <BlogSection blogs={blogs.slice(0, 3)} />
            <ContactSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:slug" element={<BlogPost blogs={blogs} />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
