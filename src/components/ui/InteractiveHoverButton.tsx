"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

interface InteractiveHoverLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden border border-cobalt bg-cobalt px-6 py-2 font-mono text-xs uppercase tracking-mega hover-brackets",
        className
      )}
      {...props}
    >
      {/* default text */}
      <span className="relative z-20 inline-block text-surface transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
        {text}
      </span>

      {/* hover text + arrow */}
      <div className="absolute inset-0 z-20 flex -translate-x-full items-center justify-center gap-2 text-surface opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight size={14} strokeWidth={2} />
      </div>

      {/* bg fill */}
      <div className="absolute left-0 top-0 z-10 h-full w-0 bg-dark transition-all duration-300 ease-out group-hover:w-full"></div>
    </button>
  );
});

const InteractiveHoverLink = React.forwardRef<
  HTMLAnchorElement,
  InteractiveHoverLinkProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden border border-cobalt bg-cobalt px-6 py-2 font-mono text-xs uppercase tracking-mega hover-brackets inline-flex items-center",
        className
      )}
      {...props}
    >
      {/* default text */}
      <span className="relative z-20 inline-block text-surface transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
        {text}
      </span>

      {/* hover text + arrow */}
      <div className="absolute inset-0 z-20 flex -translate-x-full items-center justify-center gap-2 text-surface opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight size={14} strokeWidth={2} />
      </div>

      {/* bg fill */}
      <div className="absolute left-0 top-0 z-10 h-full w-0 bg-dark transition-all duration-300 ease-out group-hover:w-full"></div>
    </a>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
InteractiveHoverLink.displayName = "InteractiveHoverLink";

export { InteractiveHoverButton, InteractiveHoverLink };
