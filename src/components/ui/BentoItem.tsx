// brutalist bento item - adds hover lift + shadow effect
interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoItem({ className = "", children }: BentoItemProps) {
  return (
    <div className={`bento-item ${className}`}>
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
}
