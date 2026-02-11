'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <motion.section
      className="card mt-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p className="m-0 inline-flex items-center gap-2 uppercase tracking-wider text-brand">
        <Sparkles size={16} />
        Phase 1 Complete
      </p>
      <h1 className="mb-3 mt-2 text-3xl font-semibold">ORIGYN Technical Foundation</h1>
      <p className="leading-7 text-slate-300">
        The website baseline now includes production-oriented structure, CI checks, security headers,
        deployment readiness, and documented workflow conventions.
      </p>
    </motion.section>
  );
}
