# Aryan Digital Twin

## Current mode

Deterministic, browser-local retrieval is the production baseline. It has no external provider, API key, vector database or persistent chat log.

## Pipeline

1. Trim input to 240 characters.
2. Normalize case and punctuation.
3. Refuse a small set of private/personal topics.
4. Score verified knowledge entries by phrase and token overlap.
5. Return the highest-evidence answer.
6. Attach section citations.
7. If there is no match, say so and suggest supported topics.

## Safety

- No tool execution
- No arbitrary file retrieval
- No private corpus
- No HTML rendering from user input
- No unsupported biography answers
- No company/customer data
- No claim without a visible cited section

## Optional future adapters

An Ollama or hosted provider may be added only after deterministic retrieval. The model receives the retrieved public facts, not arbitrary files. Provider output must preserve citations, pass an unsupported-claim check and fall back to deterministic composition on error.
