"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  certificates,
  profile,
  projects,
  skills,
  timeline,
} from "../../content/portfolio";
import { DigitalTwin } from "./DigitalTwin";
import type { PerformanceMode } from "./VoyageScene";
import { VoyageScene } from "./VoyageScene";

const navigation = [
  ["Home", "home"],
  ["Work", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Timeline", "timeline"],
  ["Twin", "twin"],
  ["Contact", "contact"],
];

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
    const cores = navigator.hardwareConcurrency || 4;
    const timer = window.setTimeout(
      () => setMode(reduced ? "minimal" : cores >= 8 ? "full" : "balanced"),
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

        <section className="manifesto section-shell" id="about">
          <SectionLabel code="01 / MANIFESTO">About the engineer</SectionLabel>
          <div className="manifesto-grid">
            <h2>
              I build the bridge between <em>messy data</em> and{" "}
              <em>useful action.</em>
            </h2>
            <div>
              <p>
                My work moves across industrial reporting, computer vision,
                backend services, analytics workflows, and local AI. The common
                thread is practical: inspect the input, make the reasoning
                traceable, and return something a person can use.
              </p>
              <p>
                This portfolio is itself an evidence layer. Public claims map to
                source code, documents, or clearly marked user-provided context.
              </p>
            </div>
          </div>
          <div className="principle-strip">
            <span>01 · Systems before screens</span>
            <span>02 · Deterministic before generative</span>
            <span>03 · Privacy by default</span>
            <span>04 · Evidence attached</span>
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <SectionLabel code="02 / SYSTEM WORLDS">Explorable work</SectionLabel>
          <div className="section-heading">
            <div>
              <p className="micro-copy">Nine public systems · source audited</p>
              <h2>Built to move in the real world.</h2>
            </div>
            <p>
              Every route shows what the code implements, where it is used, what
              remains limited, and where the evidence lives.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? "is-featured" : ""}`}
                id={`project-${project.slug}`}
                key={project.slug}
                onClick={(event) => {
                  const target = event.target as HTMLElement;
                  if (target.closest("a, button, summary, details, input")) return;
                  window.open(
                    project.live ?? project.repository,
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
                <p className="project-domain">{project.domain}</p>
                <h3>
                  <a
                    href={project.live ?? project.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}${project.live ? " live project" : " source repository"}`}
                  >
                    {project.title}
                  </a>
                </h3>
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
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    Source <ExternalIcon />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Public demo <ExternalIcon />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="orvion section-shell" id="orvion">
          <div className="orvion-card">
            <div className="orvion-orbit" aria-hidden="true">
              <i /><i /><i /><span>O</span>
            </div>
            <div>
              <SectionLabel code="03 / PRIVATE COORDINATE">
                Orvion audit status
              </SectionLabel>
              <h2>A flagship system, deliberately unclaimed.</h2>
              <p>
                The Orvion / ExcelAI source was not present in the shared
                portfolio workspace. Its architecture, feature status, security
                model, screenshots, and performance claims are withheld until a
                private source audit is available.
              </p>
              <div className="orvion-status">
                <span>Source audit</span>
                <strong>Pending local repository</strong>
              </div>
              <a href="#contact">Arrange a private technical walkthrough →</a>
            </div>
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <SectionLabel code="04 / EXPERIENCE LOG">Professional context</SectionLabel>
          <div className="section-heading">
            <div>
              <p className="micro-copy">Public, restrained, non-confidential</p>
              <h2>Work near real decisions.</h2>
            </div>
            <p>
              Company details stay high-level. Public repositories supply
              technical proof; internal data and processes stay private.
            </p>
          </div>
          <div className="experience-list">
            <article>
              <div className="experience-time">
                <span>Jun 2026 — Present</span>
                <small>Current coordinate</small>
              </div>
              <div className="experience-body">
                <p>Aditya Birla Housing Finance Limited</p>
                <h3>AI/ML Intern</h3>
                <p>
                  Current internship in a financial-services environment. The
                  public description is intentionally limited: no customer data,
                  business logic, internal dashboards, or unapproved outcomes.
                </p>
                <div className="evidence-chip">Source · Public profile</div>
              </div>
              <span className="experience-number">01</span>
            </article>
            <article>
              <div className="experience-time">
                <span>From Dec 2025</span>
                <small>Completed internship</small>
              </div>
              <div className="experience-body">
                <p>Berry Alloys Ltd</p>
                <h3>AI/ML Intern</h3>
                <p>
                  Worked on industrial analytics and reporting automation.
                  Public code verifies furnace-workbook consolidation, heuristic
                  metadata detection, analytics metrics, and reporting
                  interfaces. Use of two merger tools is confirmed by Aryan.
                </p>
                <div className="evidence-chip">
                  Source · Public profile + repositories + user confirmation
                </div>
              </div>
              <span className="experience-number">02</span>
            </article>
          </div>
        </section>

        <section className="skills section-shell" id="skills">
          <SectionLabel code="05 / SYSTEM LOADOUT">Skills with evidence</SectionLabel>
          <div className="section-heading">
            <div>
              <p className="micro-copy">No arbitrary percentages</p>
              <h2>Tools connected to shipped code.</h2>
            </div>
            <p>
              Every item maps back to a named project or verified experience
              area, not a self-rated progress bar.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map((group, groupIndex) => (
              <article key={group.group}>
                <div className="skill-title">
                  <span>0{groupIndex + 1}</span>
                  <h3>{group.group}</h3>
                </div>
                <ul>
                  {group.items.map(([skill, evidence]) => (
                    <li key={skill}>
                      <strong>{skill}</strong>
                      <small>{evidence}</small>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="certificates section-shell" id="certificates">
          <SectionLabel code="06 / CREDENTIAL VAULT">Searchable evidence</SectionLabel>
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

        <section className="timeline section-shell" id="timeline">
          <SectionLabel code="07 / BUILD LOG">Engineering timeline</SectionLabel>
          <div className="timeline-track">
            {timeline.map((item, index) => (
              <article key={`${item.date}-${item.title}`}>
                <div className="timeline-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="twin section-shell" id="twin">
          <SectionLabel code="08 / DIGITAL TWIN">Ask the evidence layer</SectionLabel>
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

        <section className="evidence section-shell" id="evidence">
          <SectionLabel code="09 / TRUST LAYER">How claims are made</SectionLabel>
          <div className="evidence-grid">
            <article>
              <span>01</span>
              <h3>Source-verified</h3>
              <p>Architectures and features were checked against public code, routes, models, and project structure.</p>
            </article>
            <article>
              <span>02</span>
              <h3>User-confirmed</h3>
              <p>Education, experience, and active workflow context comes from the information Aryan supplied for this build.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Deliberately withheld</h3>
              <p>Confidential company material, unsupported metrics, and unaudited private-product claims are not published.</p>
            </article>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-card">
            <div>
              <SectionLabel code="10 / NEXT MOVE">Professional contact</SectionLabel>
              <h2>Let’s build something that earns its complexity.</h2>
              <p>
                Open to AI/ML, analytics engineering, data systems, computer
                vision, and Python full-stack opportunities.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-direct" href="mailto:aryantripathi.9910@gmail.com">
                <span>Email</span>
                aryantripathi.9910@gmail.com
              </a>
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
