import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [time, setTime] = useState(new Date());

  const [location, setLocation] = useState("Local");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Auto-fetch location from timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) {
        const parts = tz.split("/");
        // Make e.g. "Asia/Kolkata" into "Kolkata", "America/New_York" into "New York"
        setLocation(parts[parts.length - 1].replace(/_/g, " "));
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-black font-semibold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-black font-semibold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#whyus"
            className="text-black font-semibold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
          >
            Why us
          </a>
          <a
            href="#projects"
            className="text-black font-semibold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
          >
            Projects
          </a>
        </div>

        <div className="flex items-center gap-1.5 group cursor-pointer">
          <a href="#">
            <span className="font-display text-2xl tracking-tighter text-black uppercase group-hover:text-orange-500 transition-colors">
              DESORA
            </span>
          </a>
          <Star className="w-4 h-4 text-black fill-black group-hover:text-orange-500 group-hover:fill-orange-500 transition-all" />
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2 text-black text-sm font-medium tabular-nums">
            {location}, {formattedTime}
          </div>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-orange-500 transition-all duration-300 shadow-lg active:scale-95 inline-flex items-center justify-center"
          >
            Book Free Consultation
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
