import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { BlogSection } from "./BlogSection";

interface Blog {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
  content: string;
}

interface BlogPostProps {
  blogs: Blog[];
}

export function BlogPost({ blogs }: BlogPostProps) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const blog = blogs.find((b) => b.slug === slug);
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3rem] max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tag className="w-10 h-10 text-orange-500" />
          </div>
          <h2 className="text-white text-3xl font-black uppercase mb-4 tracking-normal">
            Post Not Found
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The article you're looking for might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Agency
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-orange-500/30">
      <Navigation />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 z-100 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-end justify-center overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={blog.image}
            alt={blog.title}
            onError={(e) => {
              e.currentTarget.src = `https://picsum.photos/seed/${blog.slug}/1200/800`;
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </motion.div>

        <div className="max-w-7xl w-full mx-auto px-6 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
                {blog.category}
              </span>
              <div className="h-px w-12 bg-white/30" />
              <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5" />
                <span>5 Min Read</span>
              </div>
            </div>

            <h1 className="text-white text-[10vw] md:text-[6vw] font-black leading-none uppercase mb-8 tracking-normal font-display">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden bg-white/5 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                  <span className="text-orange-500 font-black text-xs uppercase">
                    DS
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-widest">
                    Desora Team
                  </p>
                  <p className="text-white/40 text-[11px] font-medium uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Main Content Area */}
      <div className="relative pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-20">
          {/* Article Body */}
          <article className="pb-32">
            {/* Excerpt/Intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-20"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-full" />
              <p className="text-2xl md:text-3xl font-bold text-[#1B1F2D] leading-relaxed pl-10 italic font-serif">
                {blog.excerpt}
              </p>
            </motion.div>

            {/* Markdown */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-xl max-w-none 
                prose-headings:font-black prose-headings:text-[#1B1F2D] prose-headings:uppercase prose-headings:tracking-normal prose-headings:font-display
                prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-8
                prose-a:text-orange-500 prose-a:font-bold prose-a:underline-offset-4 hover:prose-a:text-[#1B1F2D] transition-colors
                prose-strong:text-[#1B1F2D] prose-strong:font-black
                prose-blockquote:border-l-8 prose-blockquote:border-orange-500 prose-blockquote:bg-[#FAFAFA] prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-[2rem] prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-bold prose-blockquote:text-[#1B1F2D]
                prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-16
                prose-ul:list-none prose-ul:pl-0
                prose-li:before:content-[''] prose-li:before:inline-block prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-orange-500 prose-li:before:rounded-full prose-li:before:mr-4 prose-li:before:mb-0.5"
            >
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </motion.div>

            {/* Post Footer/Tags */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-black font-black uppercase text-[11px] tracking-[0.2em] group hover:text-orange-500 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-12">
              {/* Sidebar Header */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#1B1F2D] mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-orange-500" />
                  Inside this post
                </h4>
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-500 leading-relaxed italic">
                    A deep dive into {blog.category.toLowerCase()} and how it
                    shapes the future of digital experiences at Desora.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Suggested Reading */}
      <section className="bg-[#FAFAFA] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[40px] md:text-[56px] font-black uppercase text-[#1B1F2D] tracking-normal leading-none font-display mb-6">
                Deepen Your <br />
                <span className="text-orange-500">Knowledge</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium">
                Continue exploring the topics that define our perspective on
                innovation and design.
              </p>
            </div>
            <Link
              to="/"
              className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl active:scale-95"
            >
              See All Articles
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <BlogSection blogs={relatedBlogs} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
