import { motion } from "motion/react";
import { ProjectsStack } from "./ui/projects-stack";

export function Portfolio() {
  return (
    <div id="projects" className="mt-32 md:mt-64 relative">
      <div className="flex items-center justify-betwee px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[10vw] leading-none tracking-tighter uppercase flex items-center gap-8"
        >
          Recent <span className="text-gray-300">Works</span>
        </motion.h2>
      </div>

      <ProjectsStack />
    </div>
  );
}
