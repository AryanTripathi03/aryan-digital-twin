"use client";

import { FormEvent, useState } from "react";
import { twinKnowledge } from "../../content/portfolio";

type TwinSource = [string, string];
type Message = {
  role: "user" | "twin";
  text: string;
  sources?: TwinSource[];
};

const prompts = [
  "Why is Orvion the priority project?",
  "What does Vaani AI do?",
  "Which projects are used in real workflows?",
  "Which résumé should I request?",
];

const blockedTopics = [
  "address",
  "phone",
  "family",
  "salary",
  "religion",
  "politics",
  "password",
  "secret",
];

function findAnswer(question: string) {
  const normalized = question.toLowerCase();
  if (blockedTopics.some((topic) => normalized.includes(topic))) {
    return {
      answer:
        "I only answer from Aryan’s verified professional portfolio. Ask about projects, skills, experience, education, architecture, or contact routes.",
      sources: [["Project portfolio", "#projects"]] as TwinSource[],
    };
  }

  const terms = normalized
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 2);
  const ranked = twinKnowledge
    .map((entry) => ({
      entry,
      score: entry.keywords.reduce(
        (total, keyword) =>
          total +
          (normalized.includes(keyword) ? 3 : 0) +
          (terms.includes(keyword) ? 2 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score === 0) {
    return {
      answer:
        "I don’t have a verified source for that. Try asking about Aryan’s projects, internships, engineering stack, computer vision work, or role fit.",
      sources: [["Project atlas", "#projects"]] as TwinSource[],
    };
  }
  return {
    answer: ranked[0].entry.answer,
    sources: ranked[0].entry.sources as TwinSource[],
  };
}

export function DigitalTwin() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "twin",
      text: "Online in verified mode. I answer from the portfolio knowledge base and cite the relevant section.",
      sources: [["Project portfolio", "#projects"]],
    },
  ]);

  function ask(question: string) {
    const clean = question.trim().slice(0, 240);
    if (!clean) return;
    const result = findAnswer(clean);
    setMessages((current) => [
      ...current.slice(-5),
      { role: "user", text: clean },
      { role: "twin", text: result.answer, sources: result.sources },
    ]);
    setInput("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className="twin-console">
      <div className="twin-bar">
        <div>
          <span className="status-dot" aria-hidden="true" />
          Verified retrieval mode
        </div>
        <span>Local · no external model</span>
      </div>
      <div className="twin-messages" aria-live="polite">
        {messages.map((message, index) => (
          <div className={`message message-${message.role}`} key={`${message.role}-${index}`}>
            <span className="message-label">{message.role === "twin" ? "AT / TWIN" : "YOU"}</span>
            <p>{message.text}</p>
            {message.sources && (
              <div className="message-sources">
                {message.sources.map(([label, href]) => (
                  <a href={href} key={href}>{label}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="suggested-prompts" aria-label="Suggested questions">
        {prompts.map((prompt) => (
          <button type="button" onClick={() => ask(prompt)} key={prompt}>{prompt}</button>
        ))}
      </div>
      <form className="twin-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="twin-question">Ask Aryan Digital Twin</label>
        <input
          id="twin-question"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          maxLength={240}
          placeholder="Ask about projects, experience, architecture…"
        />
        <button type="submit">Transmit</button>
      </form>
    </div>
  );
}
