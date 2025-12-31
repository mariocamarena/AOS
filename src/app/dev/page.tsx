import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";

export default function DevPage() {
  return (
    <div className="min-h-screen bg-field p-12">
      <h1 className="font-mono text-xs uppercase tracking-mega text-muted mb-8">
        Component Playground
      </h1>

      {/* InteractiveHoverButton Demo */}
      <div className="space-y-6">
        <h2 className="font-mono text-[10px] uppercase tracking-mega text-muted">
          Interactive Hover Button
        </h2>

        <div className="flex flex-wrap gap-4">
          <InteractiveHoverButton text="GET IN TOUCH" />
          <InteractiveHoverButton text="SUBMIT" />
          <InteractiveHoverButton text="VIEW WORK" />
        </div>
      </div>
    </div>
  );
}
