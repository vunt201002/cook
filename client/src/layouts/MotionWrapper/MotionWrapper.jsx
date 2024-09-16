import React from 'react';
import { motion } from 'framer-motion';

export default function MotionWrapper({ children, variants }) {
  return (
    <motion.div
      variants={variants}
      initial='offscreen'
      animate='visible'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
