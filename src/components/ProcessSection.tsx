import { motion } from "motion/react";
import { ServicesGrid } from "./ServicesGrid";

export function ProcessSection() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
            Our Methodology
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-[8vw] lg:text-[7vw] 2xl:text-[9rem] leading-[1.1] md:leading-none tracking-tighter uppercase text-black"
        >
          <div className="block">Empowering Your</div>
          <div className="block text-gray-300">Business With</div>
          <div className="block">
            Tailored <span className="text-orange-500">Creative</span>
          </div>
          <div className="block text-gray-300">Solutions</div>
        </motion.h2>
      </div>
    </>
  );
}
