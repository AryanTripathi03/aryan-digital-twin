export type ProjectStatus =
  | "Active workflow"
  | "Functional prototype"
  | "Academic project"
  | "Experimental"
  | "In development";

export type Project = {
  slug: string;
  index: string;
  title: string;
  purpose: string;
  status: ProjectStatus;
  domain: string;
  stack: string[];
  context: string;
  solution: string;
  architecture: string[];
  evidence: string[];
  limitations: string[];
  repository: string;
  live?: string;
  featured?: boolean;
};

export const profile = {
  name: "Aryan Tripathi",
  shortName: "AT",
  headline: "Building intelligent systems for real-world decisions.",
  summary:
    "AI/ML engineer and full-stack systems builder focused on reliable analytics, industrial automation, computer vision, and practical data products.",
  location: "Mumbai Metropolitan Region",
  status: "AI/ML Intern · Open to engineering opportunities",
  github: "https://github.com/AryanTripathi03",
  linkedin: "https://www.linkedin.com/in/aryan-tripathi-61a14a372/",
};

export const projects: Project[] = [
  {
    slug: "forgesense",
    index: "01",
    title: "ForgeSense Intelligence",
    purpose:
      "Turns furnace workbooks into performance metrics, anomaly signals, and operational insights.",
    status: "Functional prototype",
    domain: "Industrial analytics",
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
    featured: true,
  },
  {
    slug: "berry-merger",
    index: "02",
    title: "Berry Excel Merger",
    purpose:
      "Consolidates irregular furnace workbooks into a single reporting-ready dataset.",
    status: "Active workflow",
    domain: "Industrial automation",
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
    featured: true,
  },
  {
    slug: "workbook-converter",
    index: "03",
    title: "Workbook Converter",
    purpose:
      "Packages CSV and Excel uploads into a multi-sheet workbook in memory.",
    status: "Active workflow",
    domain: "Backend engineering",
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
    index: "04",
    title: "Travel Billing Suite",
    purpose:
      "Generates operational travel invoices for outstation, local, and drop trips.",
    status: "Active workflow",
    domain: "Business software",
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
    index: "05",
    title: "Driver Drowsiness Monitoring",
    purpose:
      "Detects fatigue and distraction cues from a live camera feed.",
    status: "Academic project",
    domain: "Computer vision",
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
    index: "06",
    title: "RAMS",
    purpose:
      "Routes anomalous lending records into a review queue with traceable decisions.",
    status: "Functional prototype",
    domain: "Risk analytics",
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
    index: "07",
    title: "Pothole Detection System",
    purpose:
      "Runs local object detection on road imagery with a real-time monitoring HUD.",
    status: "Academic project",
    domain: "Computer vision",
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
    index: "08",
    title: "Student Success Agent",
    purpose:
      "Combines deterministic academic-risk analysis with optional local mentoring responses.",
    status: "In development",
    domain: "Agentic systems",
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
    index: "09",
    title: "Finsight AI",
    purpose:
      "Explores natural-language questions over a relational banking dataset.",
    status: "Experimental",
    domain: "Analytics assistant",
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

export const timeline = [
  ["2023", "B.Tech CSE (AI & ML)", "Started engineering studies at the University of Mumbai."],
  ["2024", "Application development", "Completed an app development workshop and expanded into full-stack work."],
  ["2025", "Data and AI foundations", "Completed IBM data credentials and the Green Skills & AI programme."],
  ["Dec 2025", "Berry Alloys Ltd", "AI/ML internship focused on industrial analytics and workflow automation."],
  ["2025–26", "Applied systems portfolio", "Built public systems across furnace analytics, computer vision, anomaly review, and data utilities."],
  ["Jun 2026", "Aditya Birla Housing Finance", "Joined as an AI/ML Intern; public details remain intentionally high-level."],
  ["Now", "Decision-focused engineering", "Building toward AI/ML, analytics engineering, data, and full-stack roles."],
].map(([date, title, text]) => ({ date, title, text }));

export const twinKnowledge = [
  {
    keywords: ["who", "aryan", "about", "biography", "role", "engineer"],
    answer:
      "Aryan Tripathi is a B.Tech CSE (AI & ML) student and AI/ML intern who builds data-intensive software across industrial analytics, computer vision, workflow automation, and backend systems.",
    sources: [["About", "#about"], ["Experience", "#experience"]],
  },
  {
    keywords: ["experience", "intern", "aditya", "birla", "berry", "work", "company"],
    answer:
      "Aryan is an AI/ML Intern at Aditya Birla Housing Finance and completed AI/ML internship work with Berry Alloys. Company details stay high-level; public source code supplies the engineering evidence.",
    sources: [["Experience", "#experience"], ["Evidence policy", "#evidence"]],
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
    sources: [["Project atlas", "#projects"], ["Skills evidence", "#skills"]],
  },
  {
    keywords: ["computer", "vision", "opencv", "pothole", "drowsiness", "driver", "yolo"],
    answer:
      "Driver Drowsiness Monitoring uses facial landmarks, EAR, MAR, PERCLOS, and SolvePnP. Pothole Detection uses YOLO training and TensorFlow Lite inference with non-maximum suppression.",
    sources: [["Driver monitoring", "#project-driver-safety"], ["Pothole detection", "#project-pothole"]],
  },
  {
    keywords: ["orvion", "excelai", "private", "flagship"],
    answer:
      "Orvion is intentionally not presented as verified yet. Its source was not in the shared portfolio workspace, so architecture and feature claims are withheld until a private audit is completed.",
    sources: [["Orvion audit status", "#orvion"]],
  },
  {
    keywords: ["job", "roles", "fit", "hire", "career", "position"],
    answer:
      "The evidence best supports graduate or internship roles in AI/ML engineering, analytics engineering, data-focused backend development, computer vision, and Python full-stack development.",
    sources: [["Skills evidence", "#skills"], ["Project atlas", "#projects"]],
  },
  {
    keywords: ["contact", "linkedin", "github", "reach", "collaborate"],
    answer:
      "Reach Aryan at aryantripathi.9910@gmail.com or +91 79770 27708. LinkedIn is available for professional networking, and GitHub contains the source evidence.",
    sources: [["Contact", "#contact"]],
  },
];
