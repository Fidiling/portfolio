import { useState, useEffect } from "react";

const DATA = {
  name: "Marc Fernandes",
  title: "Computer Science Student | Security · Data · Systems",
  tagline: "Building thoughtful digital experiences — from API to interface.",
  about:
    "I'm a second-year student specialising in server-side development and cybersecurity. While I build full-stack systems, my real passion sits at the intersection of code and security — understanding how things break and how to make them resilient. Off-screen, I play rugby for my university — same mindset: read the system, find the gaps, move fast.",
  location: "Reading",
  email: "marcferns12404@gmail.com",
  github: "https://github.com/Fidiling",
  linkedin: "www.linkedin.com/in/marc-fernandes-0377a5259",
  skills: ["SQL", "TypeScript", "Node.js", "PostgreSQL", "RedHat system adminstration", "Linux", "Python", "Claude Code", "Git"],
  projects: [
    {
      title: "AI Phishing Detector",
      year: "Sept 2025",
      description:
        "Independently trained and optimised a threat-detection bot using supervised learning on extensive phishing link datasets, targeting a high-risk demographic (elderly users) to directly reduce financial fraud. Achieved high-accuracy identification through iterative ML model tuning.",
      tech: ["Python", "Supervised Learning", "NLP", "Cybersecurity"],
      link: "#",
    },
    {
      title: "Rogue AP Attack — Pico W",
      year: "Jan 2026",
      description:
        "Built a rogue access point attack simulation using a Raspberry Pi Pico W, with live data collection to demonstrate network interception risks. A hands-on exploration of wireless threat vectors and adversarial hardware techniques.",
      tech: ["Raspberry Pi Pico W", "MicroPython", "Networking", "Cybersecurity"],
      link: "#",
    },
    {
      title: "NHS GP Surgery Analytics",
      year: "Feb 2026",
      description:
        "Designed and implemented a PostgreSQL database modelling patient appointments, referrals, and prescriptions across GP surgeries. Generated realistic synthetic data via Python and authored 20+ SQL queries addressing real NHS operational challenges including demand forecasting.",
      tech: ["PostgreSQL", "Python", "SQL", "Data Modelling"],
      link: "#",
    },
  ],
};

const BG       = "#EEE6FA";   // Lavender — page background
const SURFACE  = "#F7F3FE";   // Slightly lighter — nav / hover tint
const BORDER   = "#CCADFC";   // Mauve — all dividers
const ACCENT   = "#6600FF";   // Electric Indigo — links & highlights
const ACCENT2  = "#883AFE";   // Electric Purple — labels & icons
const TEXTMAIN = "#1C0A4A";   // Near-black indigo
const TEXTSUB  = "#6B5A8A";   // Muted purple-gray

const MONO = "'Spline Sans Mono', 'Courier New', monospace";
const SANS = "'Plus Jakarta Sans', system-ui, sans-serif";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Spline+Sans+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
    const t = setTimeout(() => setLoaded(true), 80);
    return () => {
      clearTimeout(t);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: SANS,
        backgroundColor: BG,
        minHeight: "100vh",
        color: TEXTMAIN,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* ── Nav ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 3rem",
          borderBottom: `1px solid ${BORDER}`,
          position: "sticky",
          top: 0,
          background: "rgba(238,230,250,0.92)",
          backdropFilter: "blur(10px)",
          zIndex: 50,
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.04em", color: TEXTMAIN }}>
          {DATA.name.toLowerCase().replace(" ", ".")}
        </span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["Work", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: 14,
                color: TEXTSUB,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = ACCENT)}
              onMouseLeave={(e) => (e.target.style.color = TEXTSUB)}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <header style={{ padding: "6rem 3rem 4rem", maxWidth: 880 }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.14em",
            color: ACCENT2,
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          // {DATA.title}
        </p>
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 1.75rem",
            color: TEXTMAIN,
          }}
        >
          {DATA.name}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: TEXTSUB,
            lineHeight: 1.7,
            maxWidth: 460,
            margin: 0,
          }}
        >
          {DATA.tagline}
        </p>
      </header>

      {/* ── Work ── */}
      <section id="work" style={{ borderTop: `1px solid ${BORDER}`, padding: "4.5rem 3rem" }}>
        <SectionLabel>Selected Work</SectionLabel>
        {DATA.projects.map((p, i) => (
          <ProjectRow key={i} project={p} />
        ))}
      </section>

      {/* ── About ── */}
      <section id="about" style={{ borderTop: `1px solid ${BORDER}`, padding: "4.5rem 3rem" }}>
        <SectionLabel>About</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: TEXTSUB, margin: 0 }}>
            {DATA.about}
          </p>
          <div>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.14em",
                color: BORDER,
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Skills
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {DATA.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: MONO,
                    fontSize: 13,
                    color: "#555",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: ACCENT2 }}>▸</span> {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ borderTop: `1px solid ${BORDER}`, padding: "4.5rem 3rem" }}>
        <SectionLabel>Contact</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 2.5rem",
            color: TEXTMAIN,
          }}
        >
          Let's work
          <br />
          together.
        </h2>
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          {[
            { label: DATA.email, href: `mailto:${DATA.email}` },
            { label: DATA.github, href: `https://${DATA.github}` },
            { label: DATA.linkedin, href: `https://${DATA.linkedin}` },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: MONO,
                fontSize: 13,
                color: ACCENT,
                textDecoration: "none",
                borderBottom: `1px solid ${ACCENT}`,
                paddingBottom: 2,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.65")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "1.75rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: 12, color: BORDER }}>
          {DATA.name} © {new Date().getFullYear()}
        </span>
        <span style={{ fontFamily: MONO, fontSize: 12, color: BORDER }}>
          {DATA.location}
        </span>
      </footer>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: MONO,
        fontSize: 11,
        letterSpacing: "0.14em",
        color: BORDER,
        textTransform: "uppercase",
        marginBottom: "2.5rem",
        marginTop: 0,
      }}
    >
      {children}
    </p>
  );
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr 40px",
        gap: "2rem",
        alignItems: "start",
        padding: "2rem 0",
        borderBottom: `1px solid ${BORDER}`,
        cursor: "pointer",
        transition: "all 0.25s ease",
        paddingLeft: hovered ? "1rem" : 0,
        borderLeft: hovered ? `2px solid ${ACCENT}` : "2px solid transparent",
      }}
    >
      <div>
        <div style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: "-0.02em", color: TEXTMAIN }}>
          {project.title}
        </div>
        <div style={{ fontFamily: MONO, fontSize: 12, color: BORDER, marginTop: 4 }}>
          {project.year}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "0.9rem", color: TEXTSUB, lineHeight: 1.75, margin: "0 0 0.75rem" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: MONO,
                fontSize: 11,
                padding: "3px 8px",
                border: `1px solid ${BORDER}`,
                borderRadius: 3,
                color: ACCENT2,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <span
        style={{
          fontSize: "1.25rem",
          color: hovered ? ACCENT : BORDER,
          alignSelf: "center",
          transition: "color 0.2s, transform 0.2s",
          display: "block",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </div>
  );
}
