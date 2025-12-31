"use client";

import { motion } from "framer-motion";

interface SectionSidebarProps {
  label: string;
  number: string;
}

export function SectionSidebar({ label, number }: SectionSidebarProps) {
  return (
    <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-cyan">
      <motion.span
        className="font-mono text-[10px] text-muted tracking-mega uppercase"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.span>

      {/* line */}
      <div className="relative h-32 w-px bg-cyan mt-8">
        <motion.div
          className="absolute top-0 left-0 w-full bg-cobalt origin-top"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
      </div>

      {/* number */}
      <motion.div
        className="mt-6 font-mono text-xs text-cobalt"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        {number}
      </motion.div>
    </div>
  );
}
