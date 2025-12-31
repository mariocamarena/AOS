// Decorative L-shaped corner brackets for technical/brutalist aesthetic
// Wraps children with corner bracket decorations

interface CornerBracketsProps {
  children: React.ReactNode;
  className?: string;
  all?: boolean; // show all 4 corners instead of just top-left and bottom-right
  static?: boolean; // always show cobalt color, no hover effect
  corner?: "tl" | "tr" | "bl" | "br"; // show only a single corner
}

export function CornerBrackets({ children, className = "", all = false, static: isStatic = false, corner }: CornerBracketsProps) {
  const staticClass = isStatic ? "corner-brackets-static" : "";

  // Single corner mode
  if (corner) {
    return (
      <div className={`corner-bracket-single corner-bracket-${corner} ${staticClass} ${className}`}>
        {children}
      </div>
    );
  }

  if (all) {
    return (
      <div className={`corner-brackets-full ${staticClass} ${className}`}>
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />
        {children}
      </div>
    );
  }

  return (
    <div className={`corner-brackets ${staticClass} ${className}`}>
      {children}
    </div>
  );
}
