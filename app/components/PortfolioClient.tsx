"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  certificates,
  profile,
  projects,
} from "../../content/portfolio";
import { DigitalTwin } from "./DigitalTwin";
import type { PerformanceMode } from "./VoyageScene";
import { VoyageScene } from "./VoyageScene";

const navigation = [
  ["Home", "home"],
  ["Work", "projects"],
  ["Certificates", "certificates"],
  ["Twin", "twin"],
  ["Contact", "contact"],
];

const selectedProjectCount = 4;

function ExternalIcon() {
  return <span aria-hidden="true">↗</span>;
}
function SectionLabel({ code, children }: { code: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{code}</span>
      {children}
    </div>
  );
}

function ArchitectureRoute({ steps }: { steps: string[] }) {
  return (
    <ol className="architecture-route" aria-label="Project data flow">
      {steps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}

export function PortfolioClient() {
  const rootRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<PerformanceMode>("balanced");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [certificateQuery, setCertificateQuery] = useState("");
  const [certificateFilter, setCertificateFilter] = useState("All");
  const [emailCopied, setEmailCopied] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((item) => item.category)))],
    [],
  );
  const visibleCertificates = certificates.filter((certificate) => {
    const categoryMatches =
      certificateFilter === "All" || certificate.category === certificateFilter;
    const haystack =
      `${certificate.title} ${certificate.issuer} ${certificate.date}`.toLowerCase();
    return categoryMatches && haystack.includes(certificateQuery.toLowerCase());
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactViewport = window.matchMedia("(max-width: 820px)").matches;
    const cores = navigator.hardwareConcurrency || 4;
    const timer = window.setTimeout(
      () =>
        setMode(
          reduced
            ? "minimal"
            : compactViewport
              ? "balanced"
              : cores >= 8
                ? "full"
                : "balanced",
        ),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handlePointer(event: React.PointerEvent<HTMLElement>) {
    if (mode === "minimal" || !rootRef.current) return;
    rootRef.current.style.setProperty(
      "--pointer-x",
      `${event.clientX / window.innerWidth - 0.5}`,
    );
    rootRef.current.style.setProperty(
      "--pointer-y",
      `${event.clientY / window.innerHeight - 0.5}`,
    );
  }

  async function copyEmail() {
    const email = "aryantripathi.9910@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2200);
  }

  return (
    <main
      className={`portfolio mode-${mode}`}
      ref={rootRef}
      onPointerMove={handlePointer}
    >
      <a className="skip-link" href="#main-content">Skip to portfolio</a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Aryan Tripathi, home">
          <span className="brand-mark">AT</span>
          <span className="brand-copy">
            <strong>Aryan Tripathi</strong>
            <small>Digital Twin / 01</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>

        <nav
          id="site-navigation"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          {navigation.map(([label, id]) => (
            <a
              href={`#${id}`}
              className={activeSection === id ? "is-active" : ""}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
              key={id}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mode-control" aria-label="Animation performance">
          <span>Motion</span>
          <select
            value={mode}
            onChange={(event) =>
              setMode(event.target.value as PerformanceMode)
            }
            aria-label="Animation performance mode"
          >
            <option value="full">Full</option>
            <option value="balanced">Balanced</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>
      </header>

      <aside className="voyage-progress" aria-hidden="true">
        <span style={{ height: `${progress}%` }} />
        <b>{String(Math.round(progress)).padStart(2, "0")}</b>
      </aside>

      <div id="main-content">
        <section className="hero section-shell" id="home">
          <VoyageScene mode={mode} />
          <div className="hero-word" aria-hidden="true">AWAKEN</div>
          <div className="cloud cloud-one" aria-hidden="true"><i /><i /><i /></div>
          <div className="cloud cloud-two" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                {profile.status}
              </div>
              <p className="hero-kicker">Independent engineering · Mumbai / India</p>
              <h1>
                Ideas that <span>bend limits.</span>
                <strong>Systems that decide.</strong>
              </h1>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Enter the system <span aria-hidden="true">↓</span>
                </a>
                <a className="button button-quiet" href="#twin">
                  Ask my digital twin
                </a>
              </div>
              <div className="signal-row" aria-label="Engineering focus">
                {["AI / ML", "Data systems", "Computer vision", "Python"].map(
                  (signal, index) => (
                    <span key={signal}>
                      <i>{String(index + 1).padStart(2, "0")}</i>
                      {signal}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="identity-wrap">
              <div className="identity-card">
                <div className="energy-ring" aria-hidden="true" />
                <div className="ink-burst" aria-hidden="true"><i /><i /><i /><i /></div>
                <div className="motion-ribbon ribbon-one" aria-hidden="true" />
                <div className="motion-ribbon ribbon-two" aria-hidden="true" />
                <div className="portrait-frame">
                  {/* Identity-preserving animated illustration derived from Aryan's photo. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aryan-awakened-4k.webp"
                    alt="Animated illustration of Aryan Tripathi"
                    width={2160}
                    height={3600}
                  />
                </div>
                <div className="character-shadow" aria-hidden="true" />
                <div className="identity-meta">
                  <span>ID / AT-03</span>
                  <strong>Aryan Tripathi</strong>
                  <p>AI/ML Engineer · Systems Builder</p>
                </div>
                <div className="identity-coordinates">
                  <span>19.076° N</span>
                  <span>72.878° E</span>
                </div>
              </div>
              <div className="orbit-label orbit-one">Identity preserved</div>
              <div className="orbit-label orbit-two">Open systems</div>
            </div>
          </div>

          <div className="hero-footer">
            <span>Scroll to release the system</span>
            <div className="compass" aria-hidden="true"><i /><b>AT</b></div>
            <span>Evidence over hype</span>
          </div>
        </section>

        <aside className="experience-signal section-shell" aria-label="Professional experience">
          <div className="experience-signal-label">
            <span>Professional experience</span>
            <small>Public, non-confidential context</small>
          </div>
          <div className="experience-signal-item">
            <span>Completed internship</span>
            <strong>Aditya Birla Housing Finance Ltd</strong>
            <small>AI/ML Intern</small>
          </div>
          <div className="experience-signal-item">
            <span>Completed internship</span>
            <strong>Berry Alloys Ltd</strong>
            <small>AI/ML Intern</small>
          </div>
        </aside>

        <section className="projects section-shell" id="projects">
          <SectionLabel code="01 / SYSTEM WORLDS">Explorable work</SectionLabel>
          <div className="section-heading">
            <div>
              <p className="micro-copy">
                {selectedProjectCount} selected systems · {projects.length - selectedProjectCount} more available
              </p>
              <h2>Built to move in the real world.</h2>
            </div>
            <p>
              Every route shows what the code implements, where it is used, what
              remains limited, and where the evidence lives.
            </p>
          </div>

          <div
            className={`project-grid ${showAllProjects ? "is-expanded" : "is-curated"}`}
            id="project-atlas"
          >
            {projects.map((project, index) => (
              <article
                className={`project-card ${project.featured ? "is-featured" : ""} ${project.live || project.repository ? "is-linked" : ""} ${project.cover ? "has-cover" : ""}`}
                id={`project-${project.slug}`}
                key={project.slug}
                hidden={!showAllProjects && index >= selectedProjectCount}
                onClick={(event) => {
                  const target = event.target as HTMLElement;
                  if (target.closest("a, button, summary, details, input")) return;
                  const destination = project.live ?? project.repository;
                  if (!destination) return;
                  window.open(
                    destination,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                <div className="project-top">
                  <span className="project-index">{project.index}</span>
                  <div className="project-status">
                    <i aria-hidden="true" />
                    {project.status}
                    {project.status === "Active workflow" && (
                      <small>user confirmed</small>
                    )}
                  </div>
                </div>
                {project.cover && (
                  <figure className="project-cover">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.cover.src}
                      alt={project.cover.alt}
                      width={1672}
                      height={942}
                      loading="lazy"
                    />
                    <figcaption>{project.cover.caption}</figcaption>
                  </figure>
                )}
                <p className="project-domain">{project.domain}</p>
                <h3>
                  {project.live || project.repository ? (
                    <a
                      href={project.live ?? project.repository}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}${project.live ? " live project" : " source repository"}`}
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <dl className="project-proof">
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Proof</dt>
                    <dd>{project.proof}</dd>
                  </div>
                </dl>
                <p className="project-purpose">{project.purpose}</p>
                <div className="stack-row">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <details>
                  <summary>
                    Open field notes <span aria-hidden="true">+</span>
                  </summary>
                  <div className="case-study">
                    <div>
                      <h4>Context</h4>
                      <p>{project.context}</p>
                    </div>
                    <div>
                      <h4>Implemented solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div>
                      <h4>Data route</h4>
                      <ArchitectureRoute steps={project.architecture} />
                    </div>
                    <div className="case-columns">
                      <div>
                        <h4>Evidence</h4>
                        <ul>
                          {project.evidence.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Known limits</h4>
                        <ul>
                          {project.limitations.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
                <div className="project-links">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      Source <ExternalIcon />
                    </a>
                  ) : (
                    <span className="project-link-pending">
                      {project.sourceLabel ?? "Public source publishing"}
                    </span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Public demo <ExternalIcon />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <button
            className="project-atlas-toggle"
            type="button"
            aria-controls="project-atlas"
            aria-expanded={showAllProjects}
            onClick={() => setShowAllProjects((current) => !current)}
          >
            <span>
              {showAllProjects
                ? "Return to selected systems"
                : `Explore ${projects.length - selectedProjectCount} more systems`}
            </span>
            <small>
              {showAllProjects
                ? "Keep the strongest evidence in view"
                : "Additional engineering, computer vision, risk, and agentic work"}
            </small>
            <b aria-hidden="true">{showAllProjects ? "−" : "+"}</b>
          </button>
        </section>




        <section className="certificates section-shell" id="certificates">
          <SectionLabel code="02 / CREDENTIAL VAULT">Searchable evidence</SectionLabel>
          <div className="certificate-tools">
            <label>
              <span>Search vault</span>
              <input
                value={certificateQuery}
                onChange={(event) => setCertificateQuery(event.target.value)}
                placeholder="Search credential or issuer"
              />
            </label>
            <div className="filter-row" aria-label="Filter certificates">
              {categories.map((category) => (
                <button
                  type="button"
                  className={certificateFilter === category ? "is-active" : ""}
                  onClick={() => setCertificateFilter(category)}
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="certificate-grid">
            {visibleCertificates.map((certificate) => (
              <article key={certificate.title}>
                <div className="certificate-seal" aria-hidden="true">AT</div>
                <p>{certificate.date}</p>
                <h3>{certificate.title}</h3>
                <span>{certificate.issuer}</span>
                <small>{certificate.evidence}</small>
                {certificate.href ? (
                  <a href={certificate.href} target="_blank" rel="noreferrer">
                    Open credential <ExternalIcon />
                  </a>
                ) : (
                  <span className="pending-link">PDF not supplied</span>
                )}
              </article>
            ))}
          </div>
          {visibleCertificates.length === 0 && (
            <p className="empty-state">No credentials match this search.</p>
          )}
        </section>




        <section className="twin section-shell" id="twin">
          <SectionLabel code="03 / DIGITAL TWIN">Ask the evidence layer</SectionLabel>
          <div className="section-heading">
            <div>
              <p className="micro-copy">Deterministic · cited · private</p>
              <h2>Questions in. Sources out.</h2>
            </div>
            <p>
              The assistant runs without a paid model, retrieves only from
              verified portfolio knowledge, and keeps this conversation local.
            </p>
          </div>
          <DigitalTwin />
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-card">
            <div>
              <SectionLabel code="04 / NEXT MOVE">Professional contact</SectionLabel>
              <h2>Let’s build something that earns its complexity.</h2>
              <p>
                Open to AI/ML, analytics engineering, data systems, computer
                vision, and Python full-stack opportunities.
              </p>
            </div>
            <div className="contact-actions">
              <div className="resume-hub">
                <div className="resume-hub-heading">
                  <span>Latest résumé</span>
                  <strong>One current profile, kept accurate.</strong>
                </div>
                <div className="resume-options">
                  <a href="mailto:aryantripathi.9910@gmail.com?subject=Request%3A%20latest%20r%C3%A9sum%C3%A9%20%E2%80%94%20Aryan%20Tripathi">
                    <span>Aryan Tripathi · Professional résumé</span>
                    <small>AI/ML, analytics, automation, computer vision, and full-stack systems</small>
                    <b>Request latest →</b>
                  </a>
                </div>
                <p>
                  Sent directly on request so recruiters always receive the
                  current version instead of an outdated public file.
                </p>
              </div>
              <a className="contact-direct" href="mailto:aryantripathi.9910@gmail.com">
                <span>Email</span>
                aryantripathi.9910@gmail.com
              </a>
              <button className="contact-copy" type="button" onClick={copyEmail} aria-live="polite">
                {emailCopied ? "Email copied ✓" : "Copy email"}
              </button>
              <a className="contact-direct" href="tel:+917977027708">
                <span>Phone</span>
                +91 79770 27708
              </a>
              <a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn <ExternalIcon />
              </a>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer">
                Inspect GitHub <ExternalIcon />
              </a>
              <small>Available for internships, graduate roles, and serious build collaborations.</small>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <div>
          <span className="brand-mark">AT</span>
          <p>Aryan Digital Twin<small>Evidence-led engineering portfolio</small></p>
        </div>
        <p>Original interactive engineering system · © 2026 Aryan Tripathi</p>
        <a href="#home">Return to top ↑</a>
      </footer>
    </main>
  );
}
