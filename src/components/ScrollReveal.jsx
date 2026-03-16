import React from 'react';
import { motion } from 'framer-motion';

function ScrollReveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const MotionTag = motion[Tag] ? motion[Tag] : motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  );
}

export default ScrollReveal;

