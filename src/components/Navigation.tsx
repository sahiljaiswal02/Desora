import { motion, AnimatePresence } from "motion/react";
import { Star, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();
  const [locationName, setLocationName] = useState("Local");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) {
        const parts = tz.split("/");
        setLocationName(parts[parts.length - 1].replace(/_/g, " "));
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

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // Already on home — just scroll directly
      const el = document.getElementById(hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to home and carry the hash — HomePage will handle the scroll
      navigate("/", { state: { scrollTo: hash } });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", hash: "#services" },
    { label: "Why Us", hash: "#whyus" },
    { label: "Projects", hash: "#projects" },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[95%] max-w-7xl 2xl:max-w-[1600px] z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-[2rem] px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
      >
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="text-black font-semibold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          {navLinks.map(({ label, hash }) => (
            <a
              key={label}
              href={hash}
              onClick={(e) => handleSectionClick(e, hash)}
              className="text-black font-semibold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center gap-1.5 group cursor-pointer pl-2 lg:pl-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link to="/" onClick={handleHomeClick}>
            <span className="font-display text-2xl tracking-tighter text-black uppercase group-hover:text-orange-500 transition-colors">
              DESORA
            </span>
          </Link>
          <Star className="w-4 h-4 text-black fill-black group-hover:text-orange-500 group-hover:fill-orange-500 transition-all hidden md:block" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-2 text-black text-sm font-medium tabular-nums">
            {locationName}, {formattedTime}
          </div>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex bg-black text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-orange-500 transition-all duration-300 shadow-lg active:scale-95 items-center justify-center"
          >
            Book Free Consultation
          </a>
          <button
            className="lg:hidden p-2 text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl lg:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-black font-semibold text-lg uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              {navLinks.map(({ label, hash }) => (
                <a
                  key={label}
                  href={hash}
                  onClick={(e) => handleSectionClick(e, hash)}
                  className="text-black font-semibold text-lg uppercase tracking-widest hover:text-orange-500 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-black text-sm font-medium tabular-nums">
                {locationName}, {formattedTime}
              </div>
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold text-center hover:bg-orange-500 transition-all duration-300 shadow-lg active:scale-95"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
