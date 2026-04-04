import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

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

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Blog post not found.</p>
        <button
          onClick={() => navigate("/blogs")}
          className="text-orange-500 font-semibold underline"
        >
          Go back home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          onError={(e) => {
            e.currentTarget.src = `https://picsum.photos/seed/${blog.slug}/800/400`;
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 flex items-center gap-2 bg-white/90 backdrop-blur text-black font-semibold px-4 py-2 rounded-full text-sm hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Category Badge */}
        <div className="absolute top-8 right-8 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-sm text-gray-400 font-medium mb-6 tracking-wide"
        >
          <span>{blog.date}</span>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>5 MIN READ</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[36px] md:text-[48px] font-black text-[#1B1F2D] leading-[1.15] mb-6"
        >
          {blog.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-500 leading-relaxed mb-12 border-l-4 border-orange-500 pl-6"
        >
          {blog.excerpt}
        </motion.p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12" />

        {/* Markdown Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg max-w-none
            prose-headings:font-black prose-headings:text-[#1B1F2D]
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#1B1F2D]
            prose-li:text-gray-600
            prose-code:text-orange-500 prose-code:bg-orange-50 prose-code:px-1 prose-code:rounded
            prose-blockquote:border-orange-500 prose-blockquote:text-gray-500"
        >
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </motion.div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-black font-semibold uppercase text-[11px] tracking-widest hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
