"use client"

import { motion } from "framer-motion"

export function HeroTicker() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.06] pointer-events-none">
      <motion.div
        className="flex whitespace-nowrap text-6xl font-mono font-bold tracking-tight text-cobalt uppercase"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8">
            BRANDING / IDENTITY / WEB / PRINT / MOTION /
          </span>
        ))}
      </motion.div>
    </div>
  )
}
