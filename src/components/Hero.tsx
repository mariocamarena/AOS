"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { CornerBrackets } from "@/components/CornerBrackets"
import { InteractiveHoverLink } from "@/components/ui/InteractiveHoverButton"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  return (
    <div className="relative flex items-center min-h-[70vh]">
      <div ref={containerRef} className="relative w-full max-w-5xl px-4 overflow-x-clip" onMouseMove={handleMouseMove}>
        {/* big bg number */}
        <motion.div
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-[28rem] font-mono font-bold text-cobalt/[0.04] select-none pointer-events-none leading-none tracking-tighter"
          style={{ x: numberX, y: numberY }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            01
          </motion.span>
        </motion.div>

        {/* main content */}
        <div className="relative flex">
          {/* left sidebar */}
          <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-cyan">
            <motion.span
              className="font-mono text-[10px] text-muted tracking-mega uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              INDEX
            </motion.span>

            {/* accent line */}
            <div className="relative h-32 w-px bg-cyan mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-cobalt origin-top"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              />
            </div>

            {/* number */}
            <motion.div
              className="mt-6 font-mono text-xs text-cobalt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              0001
            </motion.div>
          </div>

          {/* center content */}
          <div className="flex-1 pl-0 md:pl-16 py-12">
            {/* logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <Image
                src="/aos_logo_ext.svg"
                alt="OS.web"
                width={252}
                height={144}
                className="w-48 md:w-64 h-auto"
                priority
              />
            </motion.div>

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-mega text-muted border border-cyan px-3 py-1">
                <span className="w-1.5 h-1.5 bg-cobalt" />
                GRAPHIC DESIGN STUDIO
              </span>
            </motion.div>

            {/* headline */}
            <CornerBrackets static className="relative mb-10 min-h-[140px]">
              <motion.h1
                className="text-4xl md:text-5xl font-sans font-bold text-dark leading-[1.1] tracking-tight uppercase"
                initial="hidden"
                animate="visible"
              >
                {["SYSTEMATIC", "DESIGN", "FOR", "DIGITAL", "PRODUCTS."].map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-[0.25em] ${
                      word === "SYSTEMATIC" ? "text-cobalt" : ""
                    }`}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.3 + i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </CornerBrackets>

            {/* meta row */}
            <div className="flex flex-wrap items-end justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-6"
              >
                {/* location */}
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-mega text-muted mb-1">
                    LOCATION
                  </span>
                  <span className="font-mono text-sm text-dark uppercase">
                    XXXX
                  </span>
                </div>

                <div className="h-8 w-px bg-cyan" />

                {/* status */}
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-mega text-muted mb-1">
                    STATUS
                  </span>
                  <span className="font-mono text-sm text-cobalt font-semibold uppercase">
                    AVAILABLE
                  </span>
                </div>

                <div className="h-8 w-px bg-cyan hidden sm:block" />

                {/* year */}
                <div className="hidden sm:block">
                  <span className="block font-mono text-[10px] uppercase tracking-mega text-muted mb-1">
                    EST.
                  </span>
                  <span className="font-mono text-sm text-dark uppercase">
                    20XX
                  </span>
                </div>
              </motion.div>

              {/* cta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <InteractiveHoverLink href="#contact" text="GET IN TOUCH" />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
