"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

interface AnimatedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

// For single-line inputs - label inside, animates up and out
const inputLetterVariants = {
  initial: {
    y: 0,
    color: "var(--muted)",
  },
  animate: {
    y: -28,
    color: "var(--cobalt)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

// For textarea - label inside, animates up and out
const textareaLetterVariants = {
  initial: {
    y: 0,
    color: "var(--muted)",
  },
  animate: {
    y: -24,
    color: "var(--cobalt)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export function AnimatedInput({
  label,
  value,
  className = "",
  ...props
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || value.length > 0;

  return (
    <div className={`relative pt-4 ${className}`}>
      <motion.div
        className="absolute left-4 top-[26px] pointer-events-none font-mono text-[10px] uppercase tracking-mega"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={inputLetterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        type="text"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className="w-full bg-surface border border-cyan px-4 py-3 font-mono text-sm text-dark focus:border-cobalt focus:outline-none transition-colors"
      />
    </div>
  );
}

export function AnimatedTextarea({
  label,
  value,
  className = "",
  ...props
}: AnimatedTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || value.length > 0;

  return (
    <div className={`relative pt-4 ${className}`}>
      <motion.div
        className="absolute left-4 top-[28px] pointer-events-none font-mono text-[10px] uppercase tracking-mega"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={textareaLetterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <textarea
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className="w-full bg-surface border border-cyan px-4 py-3 font-mono text-sm text-dark focus:border-cobalt focus:outline-none transition-colors resize-none"
      />
    </div>
  );
}
