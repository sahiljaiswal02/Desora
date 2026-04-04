import { motion, useTransform, MotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  scrollYProgress: MotionValue<number>;
}

export function Hero({ scrollYProgress }: HeroProps) {
  const videoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-32">
      {/* Background Video with Parallax */}
      <motion.div
        style={{ opacity: videoOpacity, scale: videoScale }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90 z-1" />
        {/* Circular decorative element like in reference */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/5 rounded-full pointer-events-none" />
      </motion.div>

      <motion.div
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        className="max-w-7xl w-full text-center relative z-10 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[11vw] md:text-[9vw] leading-[1] tracking-tight uppercase flex flex-col items-center gap-y-1"
        >
          <div className="flex items-center justify-center text-white gap-x-4">
            Building Bridges
          </div>

          <div className="flex items-center justify-center gap-x-4 relative">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-orange-500"
            >
              <ArrowRight className="w-[1em] h-[1em] stroke-[5]" />
            </motion.div>
            <span className="text-white">Between You</span>
            <span className="text-orange-500 font-serif italic text-[1.2em]">
              &
            </span>
          </div>

          <div className="text-white gap-x-4 flex items-center justify-center">
            Your Customers
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="text-white text-sm md:text-base max-w-lg mx-auto font-medium leading-relaxed tracking-wide">
            We create seamless connections that turn users into loyal advocates
            through intentional design and strategic innovation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
