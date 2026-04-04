import { motion } from "motion/react";

export function Banner() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-6xl md:text-8xl tracking-tighter uppercase text-black max-w-2xl leading-[0.9]"
        >
          Let's make <br />
          awesome <br />
          collaboration
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md md:text-right"
        >
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            The agency studio specializes in creative design and development for
            businesses, offering services such as branding, UI/UX design, SEO,
            and website/application development.
          </p>
        </motion.div>
      </div>

      {/* Decorative 3D-like element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
        <img
          src="https://picsum.photos/seed/abstract-shape/1200/1200"
          alt="Abstract"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
