import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Blog {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
}

interface BlogSectionProps {
  blogs: Blog[];
}

export function BlogSection({ blogs }: BlogSectionProps) {
  if (!blogs || blogs.length === 0) return null; // 👈 only change

  return (
    <section id="blogs" className="py-32 px-6 bg-[#FAFAFA] w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-16 gap-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-black uppercase text-[#1B1F2D] tracking-normal font-display"
          >
            LATEST INSIGHTS
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogs.map((blog, i) => (
            <a href={`/blog/${blog.slug}`} key={i}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-4/3 rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-gray-100 bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {blog.category}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-gray-400 font-medium mb-3 tracking-wide">
                  <span>{blog.date}</span>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>5 MIN READ</span>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-[22px] font-extrabold text-[#1B1F2D] leading-[1.3] mb-3 group-hover:text-orange-500 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-500 font-medium leading-relaxed mb-6 flex-1">
                  {blog.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-black font-semibold uppercase text-[11px] tracking-widest group-hover:text-orange-500 transition-colors">
                  Read Article
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
