import type { Metadata } from "next";
import { PortfolioClient } from "./components/PortfolioClient";

export const metadata: Metadata = {
  title: "Aryan Tripathi · AI/ML Engineer & Systems Builder",
  description:
    "Evidence-led portfolio of Aryan Tripathi: AI/ML engineering, industrial analytics, computer vision, data systems, and Python software.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Tripathi",
  url: "https://aryan-digital-twin.openai.site",
  sameAs: [
    "https://github.com/AryanTripathi03",
    "https://www.linkedin.com/in/aryan-tripathi-61a14a372/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Mumbai",
  },
  knowsAbout: [
    "Artificial intelligence",
    "Machine learning",
    "Computer vision",
    "Data analytics",
    "FastAPI",
    "Python",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PortfolioClient />
    </>
  );
}
