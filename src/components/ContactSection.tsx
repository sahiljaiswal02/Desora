import { motion } from "motion/react";
import { MessageCircle, Smartphone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const steps = [
    { num: "01", text: "Discuss your vision & goals" },
    { num: "02", text: "Get a strategic roadmap" },
    { num: "03", text: "Launch & scale your product" },
  ];

  const contactItems = [
    {
      icon: <MessageCircle className="w-5 h-5 text-gray-700" />,
      title: "WhatsApp",
      details: "+91 9519399750",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-gray-700" />,
      title: "Phone",
      details: "+91 9519399750",
    },
    {
      icon: <Mail className="w-5 h-5 text-gray-700" />,
      title: "Email",
      details: "desora@protonmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gray-700" />,
      title: "Address",
      details: "Working remotely worldwide",
    },
  ];

  return (
    <section
      className="bg-[#F8F9FA] py-24 px-6 relative z-10 w-full"
      id="contact"
    >
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto flex flex-col items-center">
        {/* Header Area */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-[52px] 2xl:text-7xl font-black uppercase text-[#1B1F2D] leading-normal tracking-normal mb-4 font-display text-center"
          >
            CONTACT US
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-medium text-lg max-w-2xl mx-auto"
          >
            Don't wait! Build your product now and transform your vision into
            reality.
          </motion.p>
        </div>

        {/* Content Two Columns */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h3 className="text-3xl md:text-4xl font-black uppercase text-[#1B1F2D] leading-[1.15] tracking-normal font-display mb-6">
              READY TO ACCELERATE
              <br />
              YOUR GROWTH?
            </h3>

            <p className="text-gray-600 font-medium text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[420px]">
              Transform your vision into a high-performing digital product. Chat
              with our experts to strategize, design, and engineer your future
              success.
            </p>

            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-orange-500 transition-colors rounded-lg text-white font-bold text-[13px] md:text-[14px] uppercase tracking-wide py-4 px-8 mb-16 shadow-[0_4px_14px_rgba(86,125,244,0.39)] text-center cursor-pointer"
            >
              BOOK FREE CONSULTATION
            </a>

            {/* Steps List */}
            <div className="relative flex flex-col gap-8 w-full max-w-sm">
              {/* Connecting line */}
              <div className="absolute top-6 bottom-6 left-[1.35rem] w-px border-l border-dashed border-gray-300 z-0" />

              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-6 relative z-10">
                  <div className="w-11 h-11 shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center font-bold text-gray-800 text-[13px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    {step.num}
                  </div>
                  <div className="text-gray-700 font-medium text-[15px]">
                    {step.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-3xl md:text-[34px] font-black uppercase text-[#1B1F2D] tracking-normal font-display mb-5">
              GET IN TOUCH
            </h3>

            <div className="w-full border-b border-dashed border-gray-300 mb-10" />

            <div className="flex flex-col gap-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-2xl bg-[#F6F7F9] flex items-center justify-center group-hover:bg-[#F0F2F6] transition-colors border border-gray-100/50">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[17px] font-bold text-gray-900 leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[15px] font-medium text-gray-500">
                      {item.details}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
