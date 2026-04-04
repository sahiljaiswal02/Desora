import { motion } from "motion/react";
import { Globe, Zap, Shield, ArrowRight } from "lucide-react";

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
          className="font-display text-[10vw] md:text-[9vw] leading-[1] tracking-tighter uppercase text-black"
        >
          <div className="block">Empowering Your</div>
          <div className="block text-gray-500">Business With</div>
          <div className="block">
            Tailored <span className="text-orange-500">Creative</span>
          </div>
          <div className="block text-gray-500">Solutions</div>
        </motion.h2>
      </div>

      {/* Capabilities Grid */}
      <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Website",
            desc: "Crafting immersive digital experiences that captivate and convert.",
            icon: <Globe className="w-6 h-6" />,
            color: "bg-blue-500",
          },
          {
            title: "App",
            desc: "Building powerful mobile solutions for iOS and Android platforms.",
            icon: <Zap className="w-6 h-6" />,
            color: "bg-orange-500",
          },
          {
            title: "Admin Panel",
            desc: "Developing robust internal tools to streamline your operations.",
            icon: <Shield className="w-6 h-6" />,
            color: "bg-green-500",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-gray-50 rounded-[3rem] p-12 flex flex-col justify-between min-h-[500px] overflow-hidden hover:bg-black transition-all duration-700 ease-[0.16, 1, 0.3, 1]"
          >
            <div className="relative z-10">
              <div
                className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500`}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-6xl text-black uppercase tracking-tighter leading-none mb-6 group-hover:text-white transition-colors duration-500">
                {item.title}
                <span className="text-orange-500">.</span>
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                {item.desc}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white transition-all duration-500">
                <ArrowRight className="w-6 h-6 text-black group-hover:text-black transition-colors" />
              </div>
              <span className="text-black/5 font-display text-9xl leading-none select-none group-hover:text-white/5 transition-colors duration-700">
                0{index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
