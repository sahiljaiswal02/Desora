import { motion } from "motion/react";
import { useState } from "react";

export function CapabilitiesSection() {
  const [activeCapability, setActiveCapability] = useState<string | null>(
    "UI/UX",
  );

  return (
    <div
      id="whyus"
      className="mt-36 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-32"
        >
          <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg">
            Why Us
          </span>
          <h2 className="font-display text-[8vw] lg:text-[6vw] leading-[0.9] tracking-tighter uppercase text-black mb-12">
            Good Reasons <br />
            To Choose <br />
            <span className="text-green-500">Desora</span>
          </h2>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <img
              src="https://picsum.photos/seed/tech-coding/1200/800"
              alt="Tech Innovation"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>

      <div className="pt-12 lg:pt-48">
        <p className="text-black font-bold text-xl mb-12">
          Our process and capabilities include:
        </p>

        <div className="flex flex-col border-t border-gray-200">
          {[
            {
              title: "Branding",
              desc: "Creating unique identities that resonate.",
            },
            { title: "UI/UX", desc: "Designing seamless digital experiences." },
            {
              title: "Development",
              desc: "Building scalable and robust solutions.",
            },
            {
              title: "Scaling",
              desc: "Visual storytelling through precision.",
            },
          ].map((capability, i) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() =>
                setActiveCapability(
                  activeCapability === capability.title
                    ? null
                    : capability.title,
                )
              }
              className="group py-10 border-b border-gray-200 cursor-pointer"
            >
              <h4
                className={`font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase transition-colors duration-500 ${activeCapability === capability.title ? "text-black" : "text-gray-300 group-hover:text-black"}`}
              >
                {capability.title}
              </h4>
              {activeCapability === capability.title && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-gray-600 text-lg md:text-xl font-medium mt-4 max-w-md"
                >
                  {capability.desc}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
