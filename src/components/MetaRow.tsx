// micro label row - uppercase tracked metadata
interface MetaRowProps {
  label: string;
  value: string;
  className?: string;
}

export function MetaRow({ label, value, className = "" }: MetaRowProps) {
  return (
    <div className={`group flex gap-2 font-mono text-[10px] uppercase tracking-mega meta-hover cursor-default ${className}`}>
      <span className="text-muted transition-colors duration-300 group-hover:text-cobalt">{label}</span>
      <span className="text-muted">/</span>
      <span className="text-dark transition-colors duration-300 group-hover:text-cobalt">{value}</span>
    </div>
  );
}
