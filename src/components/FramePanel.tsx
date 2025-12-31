// white panel with cyan border - the "window" object
// pass brutalist=true for the hover lift + shadow effect
interface FramePanelProps {
  children: React.ReactNode;
  className?: string;
  brutalist?: boolean;
}

export function FramePanel({ children, className = "", brutalist = true }: FramePanelProps) {
  return (
    <div className={`frame p-6 ${brutalist ? "frame-brutalist" : ""} ${className}`}>
      {children}
    </div>
  );
}
