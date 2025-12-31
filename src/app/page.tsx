import { FramePanel } from "@/components/FramePanel";
import { MetaRow } from "@/components/MetaRow";
import { Hero } from "@/components/Hero";
import { HeroTicker } from "@/components/HeroTicker";
import { CornerBrackets } from "@/components/CornerBrackets";
import { ContactForm } from "@/components/ContactForm";

// full project archive
const projects = [
  { id: "0001", year: "2024", tags: ["BRANDING", "IDENTITY"], title: "PROJECT ALPHA", desc: "VISUAL IDENTITY SYSTEM FOR PLACEHOLDER CLIENT" },
  { id: "0002", year: "2024", tags: ["WEB"], title: "PROJECT BETA", desc: "WEBSITE DESIGN AND DEVELOPMENT" },
  { id: "0003", year: "2024", tags: ["POSTERS"], title: "PROJECT GAMMA", desc: "EVENT POSTER SERIES" },
  { id: "0004", year: "2023", tags: ["BRANDING"], title: "PROJECT DELTA", desc: "BRAND REFRESH FOR TECH STARTUP" },
  { id: "0005", year: "2023", tags: ["WEB", "IDENTITY"], title: "PROJECT EPSILON", desc: "DIGITAL PLATFORM DESIGN" },
  { id: "0006", year: "2023", tags: ["MISC"], title: "PROJECT ZETA", desc: "EXPERIMENTAL TYPE EXPLORATION" },
  { id: "0007", year: "2022", tags: ["POSTERS"], title: "PROJECT ETA", desc: "CULTURAL INSTITUTION CAMPAIGN" },
  { id: "0008", year: "2022", tags: ["BRANDING", "WEB"], title: "PROJECT THETA", desc: "FULL BRAND AND DIGITAL PACKAGE" },
];

const filters = ["ALL", "BRANDING", "POSTERS", "WEB", "MISC"];

// info section data
const tools = ["FIGMA", "ILLUSTRATOR", "PHOTOSHOP", "AFTER EFFECTS", "INDESIGN", "BLENDER"];

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION (INDEX)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="scroll-mt-24 bg-field overflow-visible relative">
        <div className="max-w-6xl px-6 pt-8 pb-12 overflow-visible">
          <Hero />
        </div>
        <HeroTicker />
      </section>

      {/* Section divider */}
      <div className="divider-animated" />

      {/* ═══════════════════════════════════════════════════════════════════
          INFO SECTION (ABOUT)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="info" className="scroll-mt-24 bg-field-alt">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-3 h-px bg-cobalt" />
            <h2 className="text-5xl font-sans font-bold text-cobalt chromatic-hover">INFO</h2>
          </div>
          <div className="flex gap-6">
            <MetaRow label="SECTION" value="ABOUT" />
            <MetaRow label="UPDATED" value="20XX" />
          </div>

          {/* bio */}
          <CornerBrackets static corner="tl" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FramePanel>
                <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-4">
                  BIO
                </h3>
              <div className="space-y-4 text-sm text-dark">
                <p>
                  PLACEHOLDER NAME IS A GRAPHIC DESIGNER BASED IN XXXX.
                  FOCUSED ON CREATING SYSTEMATIC, GRID-DRIVEN VISUAL IDENTITIES.
                </p>
                <p>
                  WITH XX YEARS OF EXPERIENCE WORKING ACROSS BRANDING,
                  DIGITAL, AND PRINT MEDIUMS. CURRENTLY ACCEPTING NEW PROJECTS.
                </p>
              </div>
            </FramePanel>

            <FramePanel>
              <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-4">
                APPROACH
              </h3>
              <div className="space-y-4 text-sm text-dark">
                <p>
                  METHODICAL PROCESS. CLEAN EXECUTION.
                  EVERY PROJECT BEGINS WITH RESEARCH AND ENDS WITH SYSTEMS.
                </p>
                <p>
                  DESIGN SHOULD COMMUNICATE CLEARLY.
                  NO DECORATION WITHOUT PURPOSE.
                </p>
              </div>
            </FramePanel>
            </div>
          </CornerBrackets>

          {/* quick info row */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FramePanel>
              <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-2">
                SERVICES
              </h3>
              <p className="text-sm text-dark">
                BRANDING / IDENTITY / WEB / PRINT / MOTION
              </p>
            </FramePanel>

            <FramePanel>
              <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-2">
                STATUS
              </h3>
              <p className="text-sm text-cobalt font-semibold">
                AVAILABLE FOR PROJECTS
              </p>
            </FramePanel>

            <FramePanel>
              <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-2">
                CONTACT
              </h3>
              <p className="text-sm text-dark">
                HELLO@PLACEHOLDER.COM
              </p>
            </FramePanel>
          </div>

          {/* toolbox */}
          <CornerBrackets static corner="br" className="mt-4">
            <FramePanel>
              <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-4">
                TOOLBOX
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cobalt"></span>
                    <span className="font-mono text-xs text-dark">{tool}</span>
                  </div>
                ))}
              </div>
            </FramePanel>
          </CornerBrackets>
        </div>
      </section>

      {/* Section divider */}
      <div className="divider-animated" />

      {/* ═══════════════════════════════════════════════════════════════════
          ARCHIVE SECTION (PROJECTS)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="archive" className="scroll-mt-24 bg-field">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-3 h-px bg-cobalt" />
            <h2 className="text-5xl font-sans font-bold text-cobalt chromatic-hover">ARCHIVE</h2>
          </div>
          <div className="flex gap-6">
            <MetaRow label="TOTAL" value={`${projects.length.toString().padStart(4, "0")}`} />
            <MetaRow label="VIEW" value="ALL" />
          </div>

          {/* filter stub */}
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`font-mono text-xs uppercase tracking-wide px-3 py-1 border transition-colors hover-brackets ${
                  i === 0
                    ? "border-cobalt text-cobalt bg-surface"
                    : "border-cyan text-muted hover:border-cobalt hover:text-cobalt"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* project grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <FramePanel key={project.id} brutalist className="cursor-pointer project-card stagger-brackets">
                <span className="bracket bracket-tl" />
                <span className="bracket bracket-tr" />
                <span className="bracket bracket-bl" />
                <span className="bracket bracket-br" />
                {/* meta row */}
                <div className="flex gap-4 mb-4">
                  <MetaRow label="ID" value={project.id} />
                  <MetaRow label="YEAR" value={project.year} />
                </div>

                {/* tags */}
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-mega text-cyan-dim bg-dark px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* title + desc */}
                <h3 className="text-lg font-sans font-semibold text-cobalt card-title">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted card-desc">
                  {project.desc}
                </p>
              </FramePanel>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="divider-animated" />

      {/* ═══════════════════════════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="scroll-mt-24 bg-field-alt">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-3 h-px bg-cobalt" />
            <h2 className="text-5xl font-sans font-bold text-cobalt chromatic-hover">CONTACT</h2>
          </div>
          <div className="flex gap-6">
            <MetaRow label="STATUS" value="ONLINE" />
            <MetaRow label="RESPONSE" value="24-48H" />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* contact form */}
            <FramePanel>
              <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-6">
                SEND MESSAGE
              </h3>
              <ContactForm />
            </FramePanel>

            {/* contact info + QR */}
            <div className="space-y-4">
              <FramePanel>
                <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-4">
                  DIRECT
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-mega text-muted">
                      EMAIL
                    </span>
                    <span className="font-mono text-sm text-cobalt">
                      HELLO@PLACEHOLDER.COM
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-mega text-muted">
                      SOCIAL
                    </span>
                    <span className="font-mono text-sm text-dark">
                      @PLACEHOLDER
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-mega text-muted">
                      LOCATION
                    </span>
                    <span className="font-mono text-sm text-dark">
                      XXXX, COUNTRY
                    </span>
                  </div>
                </div>
              </FramePanel>

              {/* QR block - graphic element */}
              <FramePanel className="flex flex-col items-center py-8">
                <h3 className="font-mono text-[10px] uppercase tracking-mega text-muted mb-4">
                  SCAN TO CONTACT
                </h3>
                {/* placeholder QR - just a styled box */}
                <CornerBrackets all className="p-2">
                  <div className="w-32 h-32 border-2 border-cobalt bg-surface grid grid-cols-4 grid-rows-4 gap-0.5 p-2">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          [0, 2, 3, 5, 6, 8, 10, 12, 13, 15].includes(i)
                            ? "bg-cobalt"
                            : "bg-surface"
                        }`}
                      />
                    ))}
                  </div>
                </CornerBrackets>
                <span className="mt-4 font-mono text-[10px] uppercase tracking-mega text-muted">
                  PLACEHOLDER QR
                </span>
              </FramePanel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
