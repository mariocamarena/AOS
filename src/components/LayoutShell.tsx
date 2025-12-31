"use client";

import Link from "next/link";
import Image from "next/image";

// system header nav + content wrapper
interface LayoutShellProps {
  children: React.ReactNode;
}

const navItems = [
  { href: "#hero", label: "INDEX" },
  { href: "#info", label: "INFO" },
  { href: "#archive", label: "ARCHIVE" },
  { href: "#contact", label: "CONTACT" },
];

export function LayoutShell({ children }: LayoutShellProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col crt-scanlines crt-grain crt-vignette">
      {/* system header */}
      <header className="bg-surface border-b border-cyan px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* logo */}
          <Link
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="block"
          >
            <Image
              src="/logo.svg"
              alt="AOS"
              width={84}
              height={48}
              priority
            />
          </Link>

          {/* nav */}
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-mono text-xs uppercase tracking-mega transition-colors text-muted hover:text-cobalt"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* tiny meta line */}
        <div className="max-w-6xl mx-auto mt-2 flex gap-4 font-mono text-[10px] uppercase tracking-mega text-muted">
          <span>LOCATION / XXXX</span>
          <span>STATUS / ONLINE</span>
        </div>
      </header>

      {/* main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* minimal footer */}
      <footer className="border-t border-cyan bg-surface px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-mono text-[10px] uppercase tracking-mega text-muted">
            © 20XX PLACEHOLDER
          </span>
          <span className="font-mono text-[10px] uppercase tracking-mega text-muted">
            ALL RIGHTS RESERVED
          </span>
        </div>
      </footer>
    </div>
  );
}
