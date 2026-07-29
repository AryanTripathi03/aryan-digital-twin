# Project Inventory

Audit date: 29 July 2026  
Evidence scope: empty shared workspace, 16 public GitHub repositories cloned read-only for inspection, supplied portrait, public-profile text supplied by Aryan.

| Repository | Public status | Source-verified implementation | Portfolio status | Usage / deployment evidence | Priority and cautions |
|---|---|---|---|---|---|
| ForgeSense-Intelligence | Public | Streamlit, Pandas, NumPy, Plotly and OpenPyXL; workbook header detection, cleaning, derived furnace metrics, anomaly rules and insight views | Functional prototype | Public Streamlit URL exists | Flagship public analytics project. Multiple app variants; do not publish confidential workbooks or unsupported impact metrics. |
| Berry-Excel-Merger | Public | FastAPI/HTML upload flow, metadata and TIME-header detection, furnace cycling, dataframe merge and XLSX export | Active workflow · user confirmed | Aryan confirms use at Berry Alloys | High priority. Public source includes demonstration-grade credentials and permissive CORS; harden before promoting the live endpoint. |
| Workbook-Converter | Public | FastAPI multi-file ingestion, CSV/XLS/XLSX branches, in-memory ExcelWriter and streamed workbook response | Active workflow · user confirmed | Aryan confirms use at Berry Alloys | High priority. Replace hard-coded authentication and add MIME, size and formula protections. |
| Gajanan-Merger | Public | FastAPI metadata detection, in-memory merge and streamed workbook response | Functional prototype | GitHub Pages URL exists | Supporting industrial utility. Login accepts any non-empty credentials; do not present as secure authentication. |
| Driver-Drowsiness-Monitoring | Public | OpenCV/Dlib facial landmarks, EAR, MAR, rolling PERCLOS, SolvePnP head pose and asynchronous Windows alert | Academic project | No deployment | Strong computer-vision evidence. Machine-specific model path and no safety evaluation. |
| Pothole-Detection-System | Public | YOLO training-resume script; float16 TensorFlow Lite inference, bounding-box decode, OpenCV NMS and live HUD | Academic project | No deployment | Strong CV evidence. Machine-specific paths and no published benchmark. |
| RAMS_Risk-and-Anomaly-Management-System | Public | Django models/views, CSV ingestion, Isolation Forest inference, DTI override, review queue and history | Functional prototype | No verified deployment | Strong human-in-the-loop workflow. Machine-specific model artifacts, no fairness/model card. |
| Student-success-agent | Public | FastAPI, four rule/analysis agents, CSV data layer, local Ollama/DeepSeek adapter, dashboard/chat/roadmap routes | In development | No verified deployment | Good local-AI architecture. Review sample data privacy and add deterministic LLM fallback. |
| Finsight-AI | Public | Django banking models, schema-prompted SQL generation, keyword safety filter and result summarization | Experimental | No verified deployment | Useful NL analytics experiment. Requires read-only DB controls and parser-based SQL validation. |
| Aryan-Travels-Billing | Public | Streamlit trip forms, invoice counter, charge rules and PDF generation | Active workflow · user confirmed | Public Streamlit URL; owner use confirmed | Present as real small-business software. Local counter is not concurrency-safe. |
| Priyanshu-Travels-Billing | Public | Streamlit invoice workflow and PDF generation | Active workflow · user confirmed | Public Streamlit URL; owner use confirmed | Combine into Travel Billing Suite case study. Protect customer data. |
| Shidhi-Travels-Billing | Public | Streamlit invoice workflow and PDF generation | Active workflow · user confirmed | Public Streamlit URL; owner use confirmed | Combine into Travel Billing Suite case study. Protect customer data. |
| Energy-consumption-prediction | Public | Jupyter notebook for energy-consumption modelling | Experimental notebook | No deployment | Supporting ML evidence; requires a reproducible evaluation summary. |
| Certificates- | Public | Five credential PDFs plus credential metadata | Evidence repository | Public GitHub repository | Used for the credential vault. One public README has inconsistent link labels; portfolio paths are normalized. |
| AryanTripathi03 | Public profile repository | Profile README and public links | Profile evidence | GitHub profile | Use as self-authored context, not independent proof of impact. |
| 3d-portfolio | Public | Empty README only | Empty / not presentable | None | Exclude from project showcase. |

## Local/private project search

No local project repositories were present inside the shared workspace. Orvion/ExcelAI could not be audited and is documented separately in `docs/project-audit/orvion-audit.md`.

## Confidentiality notes

- Do not upload or publish raw furnace, lending, student, customer, trip, loan, or company data.
- Public merger repositories contain authentication and CORS patterns that must be replaced before security-sensitive deployment.
- Public source contains machine-specific absolute paths; those paths reveal development layout and prevent portability.
- Portfolio links primarily point to source. Public demos are presented as external demonstrations, not as security-reviewed production services.
