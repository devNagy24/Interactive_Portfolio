import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Phone,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import {
  experience,
  navItems,
  profile,
  projects,
  quickStats,
  resumeHighlights,
  signals,
  skillGroups,
} from "./content.js";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max <= 0 ? 0 : window.scrollY / max);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function usePointerVars() {
  useEffect(() => {
    const update = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);
}

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section className="section" id={id} data-reveal>
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function TiltCard({ children, className = "" }) {
  const [style, setStyle] = useState({});

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translateY(-4px)`,
    });
  };

  return (
    <article
      className={`tilt-card ${className}`}
      style={style}
      onPointerMove={handleMove}
      onPointerLeave={() => setStyle({})}
    >
      {children}
    </article>
  );
}

function DraggableChip({ children, startX = 0, startY = 0, target }) {
  const [position, setPosition] = useState({ x: startX, y: startY });
  const dragRef = useRef(null);
  const originRef = useRef(null);
  const wasDraggedRef = useRef(false);

  const startDrag = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    wasDraggedRef.current = false;
    originRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: position.x,
      y: position.y,
    };
  };

  const drag = (event) => {
    if (!originRef.current) return;
    const deltaX = event.clientX - originRef.current.pointerX;
    const deltaY = event.clientY - originRef.current.pointerY;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 6) {
      wasDraggedRef.current = true;
    }
    const next = {
      x: originRef.current.x + deltaX,
      y: originRef.current.y + deltaY,
    };
    setPosition(next);
  };

  const jumpToTarget = () => {
    if (wasDraggedRef.current) return;
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      ref={dragRef}
      className="drag-chip"
      type="button"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      onPointerDown={startDrag}
      onPointerMove={drag}
      onPointerUp={() => {
        originRef.current = null;
      }}
      onClick={jumpToTarget}
      aria-label={`Jump to ${children} details`}
      title={`Jump to ${children} details`}
    >
      <MousePointer2 size={14} />
      {children}
    </button>
  );
}

function Header({ progress, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        <span className="brand-mark">DN</span>
        <span>{profile.role}</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="icon-button mobile-menu" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
        <Menu size={20} />
      </button>
      <div className="scroll-meter" style={{ transform: `scaleX(${progress})` }} />
      {menuOpen && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button className="icon-button close-menu" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero({ openCommand }) {
  const [active, setActive] = useState(0);
  const signal = signals[active];

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img src="./assets/hero-data-landscape.png" alt="" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">
            <Sparkles size={16} />
            Interactive portfolio
          </span>
          <h1>{profile.heroName}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View work
              <ArrowRight size={18} />
            </a>
            <button className="button secondary" type="button" onClick={openCommand}>
              <Terminal size={18} />
              Command palette
            </button>
          </div>
        </div>

        <div className="hero-panel" data-reveal>
          <div className="panel-topline">
            <span>live signal</span>
            <span className="pulse-dot" />
          </div>
          <div className="terminal-window">
            <div className="terminal-command">
              <Terminal size={16} />
              {signal.command}
            </div>
            <p>{signal.output}</p>
          </div>
          <div className="signal-buttons" role="tablist" aria-label="Hero signals">
            {signals.map((item, index) => (
              <button
                key={item.command}
                className={index === active ? "is-active" : ""}
                type="button"
                onClick={() => setActive(index)}
              >
                0{index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="drag-layer" aria-label="Quick links">
        <DraggableChip startX={10} startY={0} target="#skills">SQL</DraggableChip>
        <DraggableChip startX={130} startY={40} target="#projects">React</DraggableChip>
        <DraggableChip startX={250} startY={-10} target="#experience">Reports</DraggableChip>
      </div>
    </section>
  );
}

function CommandPalette({ open, onClose }) {
  const links = useMemo(
    () => [
      { label: "Open Projects", href: "#projects", icon: Code2 },
      { label: "Download Resume", href: profile.resumeUrl, icon: Download },
      { label: "Open Contact", href: "#contact", icon: Send },
      { label: "Open GitHub", href: profile.github, icon: Github },
    ],
    [],
  );

  useEffect(() => {
    const handleKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onClose("toggle");
      }
      if (event.key === "Escape") onClose(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="palette-backdrop" onMouseDown={() => onClose(false)}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
        <div className="palette-input">
          <Terminal size={18} />
          <span>Jump to...</span>
        </div>
        <div className="palette-list">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} onClick={() => onClose(false)}>
                <Icon size={18} />
                {item.label}
                <ExternalLink size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function App() {
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  usePointerVars();
  useReveal();

  const togglePalette = (value) => {
    setPaletteOpen((current) => (value === "toggle" ? !current : Boolean(value)));
  };

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <Header progress={progress} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero openCommand={() => setPaletteOpen(true)} />

        <Section id="about" eyebrow="About Me" title="Practical systems, polished delivery.">
          <div className="about-grid">
            <div className="about-copy">
              <p>{profile.signature}</p>
              <p>
                I like work where the details matter: schema decisions, user workflows, reporting accuracy, and the
                small improvements that make tools feel calm instead of brittle.
              </p>
              <div className="location-line">
                <MapPin size={18} />
                {profile.location}
              </div>
            </div>
            <div className="stat-grid">
              {quickStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where development meets operations.">
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <div className="timeline-marker">
                  {item.title.includes("Graduate") ? <GraduationCap size={20} /> : <BriefcaseBusiness size={20} />}
                </div>
                <div>
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p>{item.summary}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work and case studies.">
          <div className="project-grid">
            {projects.map((project, index) => (
              <TiltCard className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>{project.status}</span>
                </div>
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={`${project.title} screenshot`} />
                  </div>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.link && (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View on GitHub
                    <ExternalLink size={15} />
                  </a>
                )}
                <div className="project-number">0{index + 1}</div>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="A balanced dev + data toolbox.">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <TiltCard className="skill-card" key={group.label}>
                <div className="skill-icon">
                  {group.label === "Database" ? <Database size={20} /> : <Code2 size={20} />}
                </div>
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section id="resume" eyebrow="Resume" title="A concise snapshot for recruiters and collaborators.">
          <div className="resume-band">
            <div>
              <h3>Resume highlights</h3>
              <ul>
                {resumeHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <a className="button primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <Download size={18} />
              Download resume
            </a>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something useful.">
          <div className="contact-grid">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={20} />
              {profile.email}
            </a>
            <a className="contact-link" href={`tel:${profile.phone.replaceAll("-", "")}`}>
              <Phone size={20} />
              {profile.phone}
            </a>
            <a className="contact-link" href={profile.github}>
              <Github size={20} />
              GitHub
            </a>
            <a className="contact-link" href={profile.linkedin}>
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </Section>
      </main>
      <footer>
        <span>{profile.name}</span>
        <span>{profile.role}</span>
      </footer>
      <CommandPalette open={paletteOpen} onClose={togglePalette} />
    </>
  );
}

export default App;
