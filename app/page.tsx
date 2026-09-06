import type { Metadata } from "next";
import { PortfolioClient } from "./components/PortfolioClient";

export const metadata: Metadata = {
  title: "Aryan Tripathi · AI/ML Engineer & Systems Builder",
  description:
    "Aryan Tripathi’s evidence-led AI/ML portfolio, led by Orvion decision intelligence and Vaani conversation intelligence.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Tripathi",
  url: "https://aryan-digital-twin.aryantripathi-9910.workers.dev",
  sameAs: [
    "https://github.com/AryanTripathi03",
    "https://www.linkedin.com/in/aryantripathi-ai/",
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
