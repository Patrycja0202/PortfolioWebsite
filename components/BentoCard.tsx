'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'lavender' | 'mint';
  delay?: number;
}

const bgMap = {
  white: 'bg-white',
  lavender: 'bg-[#C9B8F0]',
  mint: 'bg-[#C8E6C9]',
};

export default function BentoCard({
  children,
  className = '',
  bgColor = 'white',
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={clsx(
        bgMap[bgColor],
        'rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
