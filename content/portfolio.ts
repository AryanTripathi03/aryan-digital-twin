export type ProjectStatus =
  | "Active workflow"
  | "Functional prototype"
  | "Academic project"
  | "Experimental"
  | "Previously deployed"
  | "In development";

export type Project = {
  slug: string;
  index: string;
  title: string;
  purpose: string;
  status: ProjectStatus;
  domain: string;
  role: string;
  proof: string;
  stack: string[];
  context: string;
  solution: string;
  architecture: string[];
  evidence: string[];
  limitations: string[];
  repository?: string;
  sourceLabel?: string;
  live?: string;
  cover?: {
    src: string;
    alt: string;
    caption: string;
  };
  featured?: boolean;
};

export const profile = {
  name: "Aryan Tripathi",
  shortName: "AT",
  headline: "Building intelligent systems for real-world decisions.",
  summary:
    "AI/ML engineer and full-stack systems builder focused on reliable analytics, industrial automation, computer vision, and practical data products.",
  location: "Mumbai Metropolitan Region",
  status: "AI/ML Engineer · Open to engineering opportunities",
  github: "https://github.com/AryanTripathi03",
  linkedin: "https://www.linkedin.com/in/aryantripathi-ai/",
};

export const projects: Project[] = [
  {
    slug: "orvion",
    index: "01",
    title: "Orvion",
    purpose:
      "A local-first analytics workspace that turns business datasets into traceable answers, models, forecasts, and decision workflows.",
    status: "Active workflow",
    domain: "Decision intelligence · Analytics",
    role: "Product architect & full-stack engineer",
    proof: "Current company workflow · confidential data excluded",
    stack: ["Next.js", "FastAPI", "Pandas", "Ollama", "SQLite", "Docker"],
    context:
      "Business teams need flexible analytics without sending sensitive datasets to a paid external model or accepting untraceable generated numbers.",
    solution:
      "Orvion combines deterministic pandas execution with guarded local-model planning, schema-grounded analysis, account-scoped data, durable conversations, AutoML evaluation, simulation, and evidence-compatible reports.",
    architecture: [
      "Dataset intake",
      "Schema grounding",
      "Typed analysis plan",
      "Pandas execution",
      "Output validation",
      "Reports and decisions",
    ],
    evidence: [
      "Current use in a real company workflow is confirmed by Aryan; confidential data is excluded.",
      "Implements multi-format ingestion, dataset ownership, searchable conversations, and persistent analysis history.",
      "Validates schema, calculation coverage, and numeric evidence before returning business-language answers.",
      "Includes AutoML, forecasts, simulation, decision intelligence, and PDF, Excel, CSV, and JSON reports.",
    ],
    limitations: [
      "The full product is designed for a local or single-instance deployment with private model infrastructure.",
      "Horizontal scale requires managed storage, a distributed job queue, and a private or hosted model endpoint.",
      "Public showcase data must remain synthetic and exclude confidential business material.",
    ],
    cover: {
      src: "/projects/orvion-interface.webp",
      alt: "Authentic Orvion decision-intelligence workspace with analytics navigation and dataset conversation controls",
      caption: "Authentic live interface · original public demo",
    },
    sourceLabel: "Private source",
    live: "https://orvion-intelligence.aryantripathi-9910.workers.dev",
    featured: true,
  },
  {
    slug: "vaani",
    index: "02",
    title: "Vaani AI",
    purpose:
      "Turns multilingual recordings into English transcripts, reviewable evidence, and operational call intelligence without paid APIs.",
    status: "Active workflow",
    domain: "Local AI · Conversation intelligence",
    role: "AI pipeline & product engineer",
    proof: "Current company workflow · local-first processing",
    stack: ["Next.js", "FastAPI", "faster-whisper", "Celery", "Redis", "MySQL"],
    context:
      "Teams need a private, dependable way to process large batches of calls and voice notes while preserving timestamps, speaker evidence, and reviewability.",
    solution:
      "A local-first pipeline validates and normalizes uploaded media, transcribes multilingual and code-switched speech, translates it to English, separates speakers, and produces evidence-backed analysis and exports.",
    architecture: [
      "Protected upload",
      "Media validation",
      "Celery pipeline",
      "Local transcription",
      "Speaker alignment",
      "Evidence exports",
    ],
    evidence: [
      "Current use in a real company workflow is confirmed by Aryan; recordings and company data are excluded.",
      "Implements single, batch, and ZIP upload workflows with ownership and archive-safety controls.",
      "Uses local faster-whisper recognition, translation, diarization, and timestamped transcript evidence.",
      "Exports reviewable transcript, analysis, lead, follow-up, objection, Excel, CSV, JSON, and ZIP outputs.",
    ],
    limitations: [
      "The full accuracy stack depends on large local models and worker infrastructure; public previews must exclude private recordings.",
      "Audio quality, overlapping speech, and heavy compression still affect recognition confidence.",
      "Organisation-specific compliance and agent-scoring rubrics remain intentionally unconfigured.",
    ],
    sourceLabel: "Private source",
    live: "https://vaani-ai-evidence.aryantripathi-9910.workers.dev",
    cover: {
      src: "/projects/vaani-interface.webp",
      alt: "Authentic Vaani AI workspace with recording upload, batch processing queue, and evidence-first local pipeline",
      caption: "Authentic live interface · original public demo",
    },
    featured: true,
  },
  {
    slug: "forgesense",
    index: "03",
    title: "ForgeSense Intelligence",
    purpose:
      "Turns furnace workbooks into performance metrics, anomaly signals, and operational insights.",
    status: "Previously deployed",
    domain: "Industrial analytics",
    role: "Analytics engineer",
    proof: "Previously used in an industrial workflow",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "OpenPyXL"],
    context:
      "Industrial reporting workbooks contain production, cost, recovery, power, and breakdown fields that need structured analysis.",
    solution:
      "A Streamlit analytics suite detects likely header rows, cleans typed fields, derives cost and efficiency metrics, and presents interactive dashboards and severity-ranked recommendations.",
    architecture: [
      "Excel upload",
      "Header detection",
      "Pandas cleaning",
      "Metric engine",
      "Insight rules",
      "Plotly dashboard",
    ],
    evidence: [
      "Previous use in an industrial workflow is confirmed by Aryan.",
      "Source contains FurnaceDataLoader and FurnaceDataProcessor modules.",
      "Implemented metrics include cost per ton, yield, availability, and anomaly detection.",
      "A public Streamlit deployment is linked from the repository.",
    ],
    limitations: [
      "The repository contains several app variants rather than one canonical entry point.",
      "Measured time-saved claims require an external supporting artifact.",
      "Confidential industrial data is excluded from the public demonstration.",
    ],
    repository:
      "https://github.com/AryanTripathi03/ForgeSense-Intelligence",
    live: "https://forgesense-intel.streamlit.app/",
    cover: {
      src: "/projects/forgesense-interface.webp",
      alt: "Authentic live ForgeSense furnace performance intelligence dashboard with data upload and navigation controls",
      caption: "Authentic live interface · public Streamlit deployment",
    },
    featured: true,
  },
  {
    slug: "berry-merger",
    index: "04",
    title: "Berry Excel Merger",
    purpose:
      "Consolidates irregular furnace workbooks into a single reporting-ready dataset.",
    status: "Active workflow",
    domain: "Industrial automation",
    role: "Automation engineer",
    proof: "Active Berry Alloys workflow",
    stack: ["FastAPI", "Pandas", "OpenPyXL", "HTML", "JavaScript"],
    context:
      "Shift and furnace reports use repeated metadata and inconsistent header placement, creating repetitive consolidation work.",
    solution:
      "A FastAPI service inspects workbook metadata, finds the TIME header, assigns date, shift, and furnace fields, removes empty ranges, and exports a merged workbook.",
    architecture: [
      "Browser upload",
      "FastAPI endpoint",
      "Temporary file handling",
      "Metadata detection",
      "Dataframe merge",
      "XLSX response",
    ],
    evidence: [
      "Public source implements metadata extraction and furnace-cycling logic.",
      "Upload and merge routes are present in the FastAPI backend.",
      "Use in Berry Alloys workflows is confirmed by Aryan.",
    ],
    limitations: [
      "Authentication, CORS, and file validation need production hardening.",
      "Usage is user-confirmed rather than independently documented.",
      "Raw industrial workbooks are not suitable public demo material.",
    ],
    repository: "https://github.com/AryanTripathi03/Berry-Excel-Merger",
    live: "https://aryantripathi03.github.io/Berry-Excel-Merger/",
    cover: {
      src: "/projects/berry-excel-merger.webp",
      alt: "Berry Excel Merger repository presentation featured on Aryan Tripathi's LinkedIn profile",
      caption: "Authentic featured media · LinkedIn",
    },
    featured: true,
  },
  {
    slug: "workbook-converter",
    index: "05",
    title: "Workbook Converter",
    purpose:
      "Packages CSV and Excel uploads into a multi-sheet workbook in memory.",
    status: "Active workflow",
    domain: "Backend engineering",
    role: "Backend & automation engineer",
    proof: "Active Berry Alloys workflow",
    stack: ["FastAPI", "Pandas", "OpenPyXL", "HTML"],
    context:
      "Mixed file formats often need a consistent workbook container for downstream reporting.",
    solution:
      "The API accepts CSV, XLS, and XLSX uploads, maps each source to a safely truncated sheet name, and streams the result without intentionally persisting it.",
    architecture: [
      "Multi-file upload",
      "Type branch",
      "Pandas reader",
      "ExcelWriter",
      "Memory buffer",
      "Streaming response",
    ],
    evidence: [
      "Source includes FastAPI upload and streaming-response routes.",
      "CSV and workbook formats are handled separately in memory.",
      "Use in Berry Alloys workflows is confirmed by Aryan.",
    ],
    limitations: [
      "Authentication is demonstration-grade in the public repository.",
      "MIME, size, formula, and decompression protections require hardening.",
      "Usage is user-confirmed rather than independently documented.",
    ],
    repository: "https://github.com/AryanTripathi03/Workbook-Converter",
    live: "https://aryantripathi03.github.io/Workbook-Converter/",
    featured: true,
  },
  {
    slug: "travel-billing",
    index: "06",
    title: "Travel Billing Suite",
    purpose:
      "Generates operational travel invoices for outstation, local, and drop trips.",
    status: "Active workflow",
    domain: "Business software",
    role: "Product engineer",
    proof: "Active operator billing workflow",
    stack: ["Python", "Streamlit", "ReportLab", "PDF", "Local state"],
    context:
      "Small travel operators need a fast, mobile-friendly way to calculate trip charges and create consistent invoices.",
    solution:
      "Three tailored Streamlit applications calculate distance, time, tolls, advances, and balances, maintain invoice counters, and generate downloadable PDF bills.",
    architecture: [
      "Trip form",
      "Charge rules",
      "Balance calculation",
      "Invoice counter",
      "PDF composer",
      "Download",
    ],
    evidence: [
      "Public source implements three trip types and PDF generation.",
      "Separate deployments exist for different travel operators.",
      "Use by the respective business owners is confirmed by Aryan.",
    ],
    limitations: [
      "Local file counters can conflict under concurrent hosted usage.",
      "Customer details must not be stored or logged in public analytics.",
      "Usage is user-confirmed rather than independently documented.",
    ],
    repository: "https://github.com/AryanTripathi03/Aryan-Travels-Billing",
    live:
      "https://aryan-travels-billing-uejoagpc6k86bj5h5fjfwe.streamlit.app/",
    featured: true,
  },
  {
    slug: "driver-safety",
    index: "07",
    title: "Driver Drowsiness Monitoring",
    purpose:
      "Detects fatigue and distraction cues from a live camera feed.",
    status: "Academic project",
    domain: "Computer vision",
    role: "Computer-vision engineer",
    proof: "Academic real-time monitoring prototype",
    stack: ["Python", "OpenCV", "Dlib", "NumPy", "SolvePnP"],
    context:
      "Driver-monitoring systems need to combine several imperfect visual signals without blocking the camera pipeline.",
    solution:
      "The desktop application tracks facial landmarks, calculates eye and mouth ratios, estimates head pose, computes rolling PERCLOS, and triggers asynchronous alerts.",
    architecture: [
      "Webcam stream",
      "CLAHE lighting pass",
      "68-point landmarks",
      "EAR / MAR / PERCLOS",
      "SolvePnP pose",
      "Alert HUD",
    ],
    evidence: [
      "Source implements EAR, MAR, PERCLOS, and 3D head-pose calculation.",
      "Audio alerts run on a daemon thread to avoid blocking frames.",
      "The repository identifies the work as an engineering project.",
    ],
    limitations: [
      "Model assets use a machine-specific local path.",
      "No published evaluation dataset or safety validation was found.",
      "This is not a certified automotive safety system.",
    ],
    repository:
      "https://github.com/AryanTripathi03/Driver-Drowsiness-Monitoring",
    featured: true,
  },
  {
    slug: "rams",
    index: "08",
    title: "RAMS",
    purpose:
      "Routes anomalous lending records into a review queue with traceable decisions.",
    status: "Functional prototype",
    domain: "Risk analytics",
    role: "ML & full-stack engineer",
    proof: "Human-in-the-loop functional prototype",
    stack: ["Django", "Pandas", "Isolation Forest", "Plotly", "SQLite"],
    context:
      "Risk review benefits from combining statistical anomaly detection with a human approval workflow.",
    solution:
      "A Django app normalizes model features, applies an Isolation Forest plus a deterministic DTI rule, stores flagged records, and supports approve or dismiss actions.",
    architecture: [
      "CSV intake",
      "Feature cleaning",
      "Isolation Forest",
      "Rule override",
      "Django models",
      "Review queue",
    ],
    evidence: [
      "Source contains a multi-feature inference pipeline and anomaly scores.",
      "Django models persist review status and loan attributes.",
      "Dashboard and history views implement a human-in-the-loop queue.",
    ],
    limitations: [
      "Machine-specific model paths prevent reproducible startup as committed.",
      "No model card, fairness analysis, or validation report was found.",
      "The work is not presented as a deployed financial decision system.",
    ],
    repository:
      "https://github.com/AryanTripathi03/RAMS_Risk-and-Anomaly-Management-System",
    featured: true,
  },
  {
    slug: "pothole",
    index: "09",
    title: "Pothole Detection System",
    purpose:
      "Runs local object detection on road imagery with a real-time monitoring HUD.",
    status: "Academic project",
    domain: "Computer vision",
    role: "Computer-vision engineer",
    proof: "Academic edge-inference prototype",
    stack: ["Python", "YOLO", "TensorFlow Lite", "OpenCV", "NumPy"],
    context:
      "Road inspection can be assisted by automated detection, but edge deployment needs compact inference and post-processing.",
    solution:
      "The project trains a YOLO model, runs a float16 TensorFlow Lite export, decodes bounding boxes, applies non-maximum suppression, and overlays detections.",
    architecture: [
      "Camera frame",
      "Resize / normalize",
      "TFLite inference",
      "Decode boxes",
      "NMS",
      "Detection overlay",
    ],
    evidence: [
      "Source loads a TensorFlow Lite model and performs local inference.",
      "Bounding-box decoding and OpenCV NMS are implemented.",
      "Training-resume code uses the Ultralytics YOLO package.",
    ],
    limitations: [
      "Model paths are machine-specific.",
      "No verified benchmark or deployment was found.",
      "The repository lacks a reproducible evaluation report.",
    ],
    repository:
      "https://github.com/AryanTripathi03/Pothole-Detection-System",
    featured: true,
  },
  {
    slug: "student-success",
    index: "10",
    title: "Student Success Agent",
    purpose:
      "Combines deterministic academic-risk analysis with optional local mentoring responses.",
    status: "In development",
    domain: "Agentic systems",
    role: "AI systems engineer",
    proof: "Local agent system in development",
    stack: ["FastAPI", "Pandas", "Pydantic", "Ollama", "DeepSeek"],
    context:
      "Student performance data can support early intervention when risk and weak-subject logic remain inspectable.",
    solution:
      "A FastAPI backend precomputes weak-subject, risk, study-plan, and mentorship outputs, while a local Ollama adapter supplies optional chat and roadmap responses.",
    architecture: [
      "CSV datasets",
      "Rule agents",
      "FastAPI routes",
      "Context composer",
      "Local Ollama",
      "Mentor response",
    ],
    evidence: [
      "Four domain-specific agent classes are present in source.",
      "FastAPI exposes students, dashboard, chat, and roadmap routes.",
      "The LLM adapter targets a local Ollama endpoint.",
    ],
    limitations: [
      "Sample student data requires privacy review.",
      "No authentication or prompt-injection controls were found.",
      "The local model dependency lacks a deterministic fallback.",
    ],
    repository:
      "https://github.com/AryanTripathi03/Student-success-agent",
  },
  {
    slug: "finsight",
    index: "11",
    title: "Finsight AI",
    purpose:
      "Explores natural-language questions over a relational banking dataset.",
    status: "Experimental",
    domain: "Analytics assistant",
    role: "Full-stack AI engineer",
    proof: "Experimental schema-grounded analytics",
    stack: ["Django", "SQL", "OpenRouter", "Python"],
    context:
      "Natural-language analytics needs schema grounding and protection against unsafe generated queries.",
    solution:
      "Django models represent clients, accounts, loans, and transactions. A service composes schema prompts, requests SQL, filters several write operations, and summarizes limited result previews.",
    architecture: [
      "Question",
      "Schema prompt",
      "LLM SQL",
      "Safety filter",
      "Database query",
      "Result summary",
    ],
    evidence: [
      "Relational Django models and indexed transaction fields are implemented.",
      "The service separates SQL generation and result summarization.",
      "A basic forbidden-keyword SQL filter is present.",
    ],
    limitations: [
      "SQL safety needs parser-based validation and read-only database controls.",
      "Hosted-model use requires secret management and data-governance review.",
      "The project remains experimental.",
    ],
    repository: "https://github.com/AryanTripathi03/Finsight-AI",
  },
];

export const skills = [
  {
    group: "AI & computer vision",
    items: [
      ["OpenCV", "Driver monitoring · Pothole detection"],
      ["Dlib / facial geometry", "Driver drowsiness monitoring"],
      ["YOLO / TensorFlow Lite", "Pothole detection"],
      ["Isolation Forest", "RAMS anomaly review"],
    ],
  },
  {
    group: "Data & analytics",
    items: [
      ["Pandas / NumPy", "Industrial, finance, education, and billing projects"],
      ["Excel automation", "Berry Merger · Gajanan · Workbook Converter"],
      ["Plotly", "ForgeSense · RAMS"],
      ["SQL / data modelling", "Finsight AI"],
    ],
  },
  {
    group: "Software systems",
    items: [
      ["FastAPI", "Four verified public backends"],
      ["Django", "RAMS · Finsight AI"],
      ["Streamlit", "ForgeSense · Billing tools"],
      ["Local LLM integration", "Student Success Agent"],
    ],
  },
];

export const certificates = [
  {
    title: "CODE-A-THON 2026 · Finalist",
    issuer: "Vidyalankar Institute of Technology",
    date: "January 2026",
    category: "Competition",
    href: "/certificates/code-a-thon-2026.pdf",
    evidence: "Public certificate PDF",
  },
  {
    title: "Decoding Data: Insights & Impact through Analytics",
    issuer: "IBM SkillsBuild",
    date: "July 2025",
    category: "Data",
    href: "/certificates/decoding-data.pdf",
    evidence: "Public certificate PDF · PLAN-8A8FBB92E28B",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM SkillsBuild",
    date: "July 2025",
    category: "Data",
    href: "/certificates/data-analysis-python.pdf",
    evidence: "Public certificate PDF",
  },
  {
    title: "Big Data 101",
    issuer: "IBM SkillsBuild",
    date: "July 2025",
    category: "Data",
    href: "/certificates/big-data-101.pdf",
    evidence: "Public certificate PDF",
  },
  {
    title: "Foundation Course on Green Skills & AI",
    issuer: "Edunet Foundation · AICTE · Shell",
    date: "March 2025",
    category: "AI",
    href: "/certificates/green-skills-ai.pdf",
    evidence: "Credential S4F25_141108",
  },
  {
    title: "App Development Workshop",
    issuer: "Lokmanya Tilak College of Engineering",
    date: "September 2024",
    category: "Development",
    href: "",
    evidence: "User-provided LinkedIn record",
  },
];

export const twinKnowledge = [
  {
    keywords: ["who", "aryan", "about", "biography", "role", "engineer"],
    answer:
      "Aryan Tripathi is a B.Tech CSE (AI & ML) student and systems builder who has completed AI/ML internships and builds data-intensive software across industrial analytics, computer vision, workflow automation, and backend systems.",
    sources: [["Project portfolio", "#projects"], ["Contact", "#contact"]],
  },
  {
    keywords: ["experience", "intern", "aditya", "birla", "berry", "work", "company"],
    answer:
      "Aryan completed AI/ML internships with Aditya Birla Housing Finance Ltd and Berry Alloys Ltd. Company details stay high-level; public source code supplies the engineering evidence without publishing confidential material.",
    sources: [["Project portfolio", "#projects"], ["Contact", "#contact"]],
  },
  {
    keywords: ["industry", "industrial", "berry", "furnace", "excel", "workflow", "production", "used"],
    answer:
      "Berry Excel Merger and Workbook Converter are used in Berry Alloys workflows, as confirmed by Aryan. Public source verifies metadata extraction, dataframe consolidation, multi-format intake, and workbook export.",
    sources: [["Berry Excel Merger", "#project-berry-merger"], ["Workbook Converter", "#project-workbook-converter"]],
  },
  {
    keywords: ["travel", "billing", "invoice", "agency", "owners"],
    answer:
      "The travel billing applications are used by their respective business owners, as confirmed by Aryan. The source implements trip calculations, invoice numbering, and downloadable PDF generation.",
    sources: [["Travel Billing Suite", "#project-travel-billing"]],
  },
  {
    keywords: ["architecture", "backend", "fastapi", "django", "api", "pipeline", "system"],
    answer:
      "Aryan’s public systems typically separate intake, deterministic processing, domain logic, and presentation: FastAPI file pipelines, Django review workflows, Streamlit analytics, and local Ollama adapters.",
    sources: [["Project atlas", "#projects"]],
  },
  {
    keywords: ["computer", "vision", "opencv", "pothole", "drowsiness", "driver", "yolo"],
    answer:
      "Driver Drowsiness Monitoring uses facial landmarks, EAR, MAR, PERCLOS, and SolvePnP. Pothole Detection uses YOLO training and TensorFlow Lite inference with non-maximum suppression.",
    sources: [["Driver monitoring", "#project-driver-safety"], ["Pothole detection", "#project-pothole"]],
  },
  {
    keywords: ["orvion", "excelai", "analytics", "decision", "flagship", "automl"],
    answer:
      "Orvion is Aryan’s priority project: a local-first decision-intelligence platform that combines schema-grounded planning with deterministic pandas execution, output validation, AutoML, forecasting, simulation, durable conversations, and evidence-compatible reports.",
    sources: [["Orvion", "#project-orvion"]],
  },
  {
    keywords: ["vaani", "voice", "audio", "transcript", "transcription", "speaker", "conversation"],
    answer:
      "Vaani AI is Aryan’s local-first conversation-intelligence system. It validates recording uploads, transcribes multilingual and code-switched speech locally, translates to English, aligns speakers and timestamps, and exports evidence-backed call analysis without paid APIs.",
    sources: [["Vaani AI", "#project-vaani"]],
  },
  {
    keywords: ["certificate", "certificates", "credential", "credentials", "learning", "education"],
    answer:
      "Aryan’s credential record includes a CODE-A-THON 2026 finalist certificate, IBM SkillsBuild credentials in data analytics and Python, Big Data 101, Green Skills & AI, and an application-development workshop.",
    sources: [["Certificate vault", "#certificates"]],
  },
  {
    keywords: ["job", "roles", "fit", "hire", "career", "position"],
    answer:
      "The evidence best supports graduate or internship roles in AI/ML engineering, analytics engineering, data-focused backend development, computer vision, and Python full-stack development.",
    sources: [["Project atlas", "#projects"], ["Contact", "#contact"]],
  },
  {
    keywords: ["resume", "résumé", "cv", "download", "ai", "data", "full-stack", "request"],
    answer:
      "Aryan keeps one current professional résumé. Use the résumé action in Contact to request the latest copy directly, avoiding an outdated public document.",
    sources: [["Latest résumé", "#contact"]],
  },
  {
    keywords: ["contact", "linkedin", "github", "reach", "collaborate"],
    answer:
      "Reach Aryan at aryantripathi.9910@gmail.com or +91 79770 27708. LinkedIn is available for professional networking, and GitHub contains the source evidence.",
    sources: [["Contact", "#contact"]],
  },
];
