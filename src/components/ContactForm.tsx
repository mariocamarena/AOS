"use client";

import { useState } from "react";
import { AnimatedInput, AnimatedTextarea } from "./AnimatedInput";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatedInput
        label="ENTER NAME"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <AnimatedInput
        label="ENTER EMAIL"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AnimatedTextarea
        label="ENTER MESSAGE"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
      />

      <button
        type="submit"
        className="w-full bg-cobalt text-surface font-mono text-xs uppercase tracking-mega py-3 hover:bg-dark transition-colors hover-brackets"
      >
        SUBMIT
      </button>
    </form>
  );
}
