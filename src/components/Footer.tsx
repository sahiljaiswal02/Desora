import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-300 pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-32">
          <div className="col-span-1">
            <h4 className="font-bold text-black mb-8 uppercase tracking-widest text-sm">
              Sitemap
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "Why Us", href: "/#whyus" },
                { name: "Projects", href: "/#projects" },
              ].map((item) => (
                <li key={item.name}>
                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      to={item.href}
                      className="text-black/70 hover:text-black transition-colors font-bold text-sm"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-black/70 hover:text-black transition-colors font-bold text-sm"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-black mb-8 uppercase tracking-widest text-sm">
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Web App Development",
                "UX/ UI Design",
                "App Maintenance",
                "Deployment",
                "Scaling",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#services"
                    className="text-black/70 hover:text-black transition-colors font-bold text-sm whitespace-nowrap"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-black mb-8 uppercase tracking-widest text-sm">
              Social
            </h4>
            <ul className="flex flex-col gap-4">
              {["Instagram", "Linkedin"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors font-bold text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-start md:items-end">
            <a
              href="mailto:desoracreations@proton.me"
              className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter text-black hover:opacity-70 transition-opacity underline decoration-1 underline-offset-8"
            >
              desoracreations@proton.me
            </a>
          </div>
        </div>

        <div className="relative mb-12 flex justify-center lg:justify-start">
          <h1 className="font-display text-[22vw] 2xl:text-[350px] leading-none tracking-tighter uppercase text-black font-black flex items-start">
            DESORA<span className="text-black">*</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-black/10">
          <p className="text-black font-bold text-xs mb-4 md:mb-0">
            © 2026 Desora. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-black font-bold text-xs group"
          >
            Back to top{" "}
            <ArrowRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
