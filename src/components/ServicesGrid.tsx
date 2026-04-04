import { motion } from "motion/react";
import { Plane, ShoppingCart, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ServicesGrid() {
  const capabilities = [
    {
      title: "STARTUP & MVP DEVELOPMENT",
      desc: "Quickly validate your concept with a market-ready MVP that captures your core idea.",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Phone Wireframe */}
          <div className="w-[180px] h-full max-h-[300px] bg-white rounded-[2.5rem] border-[6px] border-gray-100 shadow-xl overflow-hidden relative z-10 flex flex-col items-center pt-8 px-4">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-100 rounded-full" />

            <div className="text-[10px] font-semibold text-gray-800 mb-6 flex items-center gap-3 w-full justify-center relative mt-2">
              <span className="text-gray-400 absolute left-0">←</span> Flight
              Details
            </div>

            <div className="w-full flex justify-between items-center mb-6 px-2">
              <div className="text-center">
                <div className="text-[9px] font-medium text-gray-400 tracking-wider">
                  DAC
                </div>
                <div className="text-lg font-medium text-gray-800 tracking-tight">
                  10.30
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center relative px-2">
                <div className="h-px w-full border-b border-dashed border-gray-300" />
                <Plane className="w-3 h-3 text-gray-400 absolute bg-white px-px" />
              </div>
              <div className="text-center">
                <div className="text-[9px] font-medium text-gray-400 tracking-wider">
                  JFK
                </div>
                <div className="text-lg font-medium text-gray-800 tracking-tight">
                  10.30
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-50/80 rounded-xl p-2.5 mb-5 flex items-center gap-2 border border-gray-100/50 relative overflow-hidden">
              <div className="w-4 h-4 bg-gray-600 rounded-full shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 border-[1.5px] border-white rounded-full opacity-80" />
              </div>
              <div className="text-[8px] font-medium text-gray-600">
                Fly Emirates
              </div>
              <div className="text-[8px] text-gray-400 ml-auto font-mono">
                OJ453
              </div>
            </div>

            <div className="w-full space-y-3 px-1">
              <div className="h-2 w-1/3 bg-gray-200 rounded-full" />
              <div className="h-[2px] w-full bg-gray-100" />
              <div className="h-2 w-1/2 bg-gray-200 rounded-full mt-2" />
              <div className="h-[2px] w-full bg-gray-100" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "FULL-CYCLE DEVELOPMENT",
      desc: "End-to-end app creation: design, development, testing, and store deployment.",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center py-6">
          {/* Center Line */}
          <div className="absolute top-10 bottom-10 w-[2px] bg-blue-500 z-0" />
          {/* Nodes */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center max-w-[220px]">
            <div className="w-full flex justify-end">
              <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full px-5 py-2 flex items-center gap-2.5 mr-[-20px]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[11px] text-gray-600 font-medium">
                  Planning
                </span>
              </div>
            </div>

            <div className="w-full flex justify-start">
              <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full px-5 py-2 flex items-center gap-2.5 ml-[-30px]">
                <span className="text-[11px] text-gray-600 font-medium">
                  Design & Prototyping
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full px-5 py-2 flex items-center gap-2.5 mr-[-30px]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[11px] text-gray-600 font-medium">
                  Development
                </span>
              </div>
            </div>

            <div className="w-full flex justify-start">
              <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full px-5 py-2 flex items-center gap-2.5 ml-[-20px]">
                <span className="text-[11px] text-gray-600 font-medium">
                  Testing & QA
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full px-5 py-2 flex items-center gap-2.5 mr-[-24px]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[11px] text-gray-600 font-medium">
                  Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "CUSTOM SOLUTION",
      desc: "Bespoke applications tailored to your unique business challenges and goals.",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
          <div className="w-[85%] max-w-[240px] bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 relative z-10 pt-5">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2.5 text-gray-800 font-semibold text-[13px] tracking-tight">
                <ShoppingCart
                  className="w-4 h-4 text-gray-600"
                  strokeWidth={2.5}
                />{" "}
                order.placed
              </div>
              <div className="bg-gray-100/80 text-gray-500 font-medium text-[10px] px-2 py-0.5 rounded-md">
                #8756
              </div>
            </div>
            <div className="bg-[#1C1F26] rounded-xl p-5 font-mono text-[12px] text-blue-300 leading-relaxed shadow-inner">
              <span className="text-gray-400">{"}"}</span>
              <br />
              id: <span className="text-blue-400">"order_8756"</span>
            </div>
          </div>

          {/* Connecting line */}
          <div className="h-6 w-[2px] bg-blue-100 relative z-0 origin-top flex flex-col items-center justify-end" />
          {/* Arrow */}
          <div className="w-3 h-3 border-b-2 border-r-2 border-blue-200 rotate-45 transform translate-y-[-5px]" />

          <div className="bg-white border border-gray-100 shadow-sm rounded-full px-4 py-2 flex items-center gap-2 z-10 transform -translate-y-1">
            <Loader2 className="w-3.5 h-3.5 text-gray-400 animate-spin" />
            <span className="text-[11px] text-gray-600 font-medium">
              Executing...
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="services" className=" grid grid-cols-1 md:grid-cols-3 gap-6">
      {capabilities.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Card className="rounded-[2rem] border border-gray-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden h-full flex flex-col bg-white hover:shadow-lg transition-shadow duration-500">
            {/* Top Graphics Area */}
            <div
              className="h-[320px] w-full relative border-b border-gray-100"
              style={{
                // Subtle striped background
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 6px, rgba(0,0,0,0.02) 6px, rgba(0,0,0,0.02) 7px)`,
              }}
            >
              {item.graphic}
            </div>

            {/* Bottom Content "} */}
            <div className="p-8 flex-1 flex flex-col justify-start">
              <h3 className="font-display font-extrabold text-[1.1rem] tracking-normal text-[#1E232E] uppercase mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
