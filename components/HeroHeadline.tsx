'use client';

import { motion } from 'framer-motion';

export default function HeroHeadline({ headline }: { headline: string }) {
  const words = headline.split(' ');

  return (
    <h1
      className="mb-5 leading-tight"
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 700,
        color: '#1A1A1A',
        letterSpacing: '-0.02em',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="inline-block mr-2.5"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
