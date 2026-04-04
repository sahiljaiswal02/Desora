import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { projects } from "../data/projects";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-4xl font-display uppercase mb-6 tracking-tighter">Project Not Found</h2>
        <Link to="/" className="text-orange-500 font-bold flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 bg-black text-white relative overflow-hidden">
        {/* Decorative Circle like in Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/5 rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-12"
          >
            <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="opacity-50">Projects</span>
            <ChevronRight className="w-3 h-3" />
            <span>{project.title}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[10vw] leading-[0.9] tracking-tighter uppercase mb-20"
          >
            {project.title} — <br />
            <span className="text-white/30">{project.category}</span>
          </motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            {[
              { label: "Client", value: project.client },
              { label: "Industry", value: project.industry },
              { label: "Year", value: project.year },
              { label: "Live Site", value: "View Project", isLink: true },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                  {info.label}
                </span>
                {info.isLink ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold flex items-center gap-2 hover:text-orange-500 transition-colors"
                  >
                    {info.value} <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-lg font-bold">{info.value}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 -mt-20 relative z-20"
      >
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 aspect-21/9">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="font-display text-[6vw] leading-none uppercase mb-12 tracking-tighter">
              The <span className="text-orange-500">Core</span> Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              {project.about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-40 px-6 bg-[#1A1F2D] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:sticky md:top-40 max-w-sm"
            >
              <h2 className="font-display text-5xl leading-none uppercase mb-6 tracking-tighter">
                Project <br />Challenges
              </h2>
              <div className="w-12 h-1.5 bg-orange-500 rounded-full mb-8" />
              <p className="text-white/60 font-medium leading-relaxed uppercase tracking-widest text-xs">
                How we navigated complex requirements to deliver exceptional value.
              </p>
            </motion.div>

            <div className="flex-1 space-y-8">
              {project.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] group hover:border-orange-500 transition-colors duration-500"
                >
                  <h3 className="text-2xl font-black uppercase mb-6 text-orange-500 tracking-tight">
                    {challenge.title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Problem</p>
                      <p className="text-white/70 italic font-medium leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Solution</p>
                      <p className="text-white leading-relaxed font-bold">{challenge.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="font-display text-[6vw] leading-none uppercase mb-6 tracking-tighter">
              The <span className="text-orange-500 italic">Method</span>
            </h2>
            <div className="h-px w-32 bg-black/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] relative group hover:bg-orange-500 transition-colors duration-700"
              >
                <span className="text-orange-500 font-display text-3xl group-hover:text-white transition-colors">
                  {step.step}
                </span>
                <h3 className="text-xl font-black uppercase my-6 tracking-tight group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-40 px-6 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <CheckCircle2 className="w-64 h-64" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[4vw] font-black uppercase tracking-tighter mb-12 leading-tight"
          >
            The Result: <br />
            Project Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-20 max-w-4xl mx-auto"
          >
            {project.impact.text}
          </motion.p>

          {project.impact.testimonial && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black/10 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/20 max-w-5xl mx-auto"
            >
              <p className="text-3xl md:text-4xl font-serif italic mb-10 leading-[1.4]">
                "{project.impact.testimonial.quote}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="h-px w-10 bg-white/30" />
                <span className="text-sm font-black uppercase tracking-[0.3em]">
                  — {project.impact.testimonial.author}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
