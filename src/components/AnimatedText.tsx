import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words to preserve natural wrapping
  const words = text.split(' ');

  return (
    <p ref={ref} className={className} style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.3em]">
          {word.split('').map((char, ci) => {
            // Calculate the global character index for animation timing
            const globalIndex = text.indexOf(word) + ci;
            const totalChars = text.length;
            return (
              <AnimatedChar
                key={ci}
                char={char}
                globalIndex={globalIndex}
                totalChars={totalChars}
                progress={scrollYProgress}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}

function AnimatedChar({
  char,
  globalIndex,
  totalChars,
  progress,
}: {
  char: string;
  globalIndex: number;
  totalChars: number;
  progress: MotionValue<number>;
}) {
  const start = globalIndex / totalChars;
  const end = Math.min(start + 3 / totalChars, 1);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span className="inline" style={{ opacity }}>
      {char}
    </motion.span>
  );
}
