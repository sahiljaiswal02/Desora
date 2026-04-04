import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export function Portfolio() {
  const navigate = useNavigate();

  // Triple the projects for infinite loop effect
  const extendedProjects = [...projects, ...projects, ...projects];
  const [activeProjectIndex, setActiveProjectIndex] = useState(projects.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveProjectIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveProjectIndex((prev) => prev - 1);
  };

  // Silent reset for infinite loop
  useEffect(() => {
    if (activeProjectIndex >= projects.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveProjectIndex(projects.length);
      }, 800);
      return () => clearTimeout(timer);
    } else if (activeProjectIndex < projects.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveProjectIndex(projects.length * 2 - 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [activeProjectIndex, projects.length]);

  return (
    <div id="projects" className="mt-64 relative">
      <div className="flex items-center justify-between mb-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[10vw] leading-none tracking-tighter uppercase flex items-center gap-8"
        >
          Recent <span className="text-gray-300">Works</span>
        </motion.h2>

        <div className="hidden md:flex gap-4">
          <button
            onClick={handlePrev}
            className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={handleNext}
            className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative h-[750px] w-full overflow-hidden flex items-center">
        <div
          className="flex gap-8 absolute left-1/2"
          style={{
            transform: `translateX(-${activeProjectIndex * 432 + 200}px)`,
            transition: isTransitioning
              ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
              : "none",
          }}
        >
          {extendedProjects.map((project, i) => {
            const isActive = activeProjectIndex === i;
            return (
              <motion.div
                key={`${project.id}-${i}`}
                animate={{
                  scale: isActive ? 1.1 : 0.8,
                  opacity: isActive ? 1 : 0.2,
                  zIndex: isActive ? 10 : 1,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[400px] flex-shrink-0 group cursor-pointer"
                onClick={() => {
                  if (isActive) {
                    navigate(`/project/${project.slug}`);
                  } else {
                    setIsTransitioning(true);
                    setActiveProjectIndex(i);
                  }
                }}
              >
                <div className="relative aspect-3/4 rounded-[3rem] overflow-hidden bg-gray-100 mb-8 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card Overlays */}
                  <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                    <span className="text-white font-display text-2xl">
                      {project.id}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white font-display text-6xl uppercase tracking-tighter leading-none mb-6">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-center justify-between px-4 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <span className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {projects.map((_, i) => {
          const normalizedIndex = activeProjectIndex % projects.length;
          return (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setActiveProjectIndex(projects.length + i);
              }}
              className={`h-3 rounded-full transition-all duration-500 ${normalizedIndex === i ? "w-12 bg-black" : "w-3 bg-gray-200"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
