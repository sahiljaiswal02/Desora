"use client";
import React, { useRef, createContext, useContext } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValue,
} from "motion/react";
import { cn } from "../../lib/utils";

const ScrollContext = createContext<MotionValue<number> | null>(null);

interface ContainerScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerScroll = ({
  children,
  className,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalCards = React.Children.count(children);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <div
        ref={containerRef}
        style={{ height: `${totalCards * 100 + 100}vh` }}
        className={cn("relative w-full", className)}
      >
        <div className="sticky top-28 h-screen w-full overflow-hidden">
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

interface CardStickyProps {
  children: React.ReactNode;
  index: number;
  total: number;
  incrementY?: number;
  incrementZ?: number;
  className?: string;
}

export const CardSticky = ({
  children,
  index,
  total,
  incrementY = 30,
  incrementZ = 0.04,
  className,
}: CardStickyProps) => {
  const progressFromContext = useContext(ScrollContext);
  const fallbackProgress = useMotionValue(0);
  const progress = progressFromContext || fallbackProgress;

  const safeTotal = Math.max(total, 2);
  const usable = safeTotal / (safeTotal + 1);
  const cardSize = usable / safeTotal;
  const EPS = 0.0001;

  // Each card slides in during its own slice of the scroll range
  const slideStart = index * cardSize;
  const slideEnd = slideStart + cardSize;

  // --- y: slide up from below, no opacity change ---
  const yStart = Math.max(slideStart, 0);
  const yEnd = Math.max(slideEnd, yStart + EPS);
  const y = useTransform(progress, [yStart, yEnd], ["110vh", "0vh"]);

  // --- scale: compress when later cards stack on top ---
  const cardsAbove = total - index - 1;
  const scaleTarget = Math.max(1 - cardsAbove * incrementZ, 0.5);

  const nextSlideStart = (index + 1) * cardSize;
  const scaleAnimStart = Math.min(nextSlideStart, 1 - EPS);
  const scaleAnimEnd = Math.min(scaleAnimStart + cardSize, 1 - EPS / 2);

  const scale =
    cardsAbove === 0
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useMotionValue(1)
      : useTransform(
          progress,
          [
            Math.min(scaleAnimStart, scaleAnimEnd - EPS),
            Math.max(scaleAnimEnd, scaleAnimStart + EPS),
          ],
          [1, scaleTarget],
        );

  return (
    <motion.div
      style={{
        y,
        scale,
        // opacity intentionally omitted — cards are always fully visible
        zIndex: index,
        top: `${index * incrementY}px`,
      }}
      className={cn(
        "absolute inset-x-0 h-[70vh] md:h-[80vh] flex items-center justify-center px-4",
        className,
      )}
    >
      <div className="w-full h-fit max-w-7xl">{children}</div>
    </motion.div>
  );
};
