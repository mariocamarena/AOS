// corner bracket wrapper

interface CornerBracketsProps {
  children: React.ReactNode;
  className?: string;
  all?: boolean; // all 4 corners
  static?: boolean; // no hover
  corner?: "tl" | "tr" | "bl" | "br"; // single corner
}

export function CornerBrackets({ children, className = "", all = false, static: isStatic = false, corner }: CornerBracketsProps) {
  const staticClass = isStatic ? "corner-brackets-static" : "";

  // single corner
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
