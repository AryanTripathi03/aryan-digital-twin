# Security Model

## Assets and trust

Public assets are the portfolio content, supplied portrait and credential PDFs already published in Aryan's public repository. Company data, customer data, private source and credentials are not assets of this deployment and must never enter the repository or build.

## Threat model

| Threat | Current control | Follow-up if capability is added |
|---|---|---|
| Contact form abuse | No form or message storage; verified LinkedIn/GitHub routes only | Add server validation, origin/CSRF control, rate limiting, spam challenge, message-size cap and a configured delivery adapter |
| Admin access | No web admin; repository permissions are the boundary | Use server-side identity and authorization; never client-only auth |
| File upload | No upload route | Add MIME sniffing, extension allowlist, size and count limits, decompression limits, antivirus scanning, isolated storage and signed access |
| Digital Twin prompt injection | Deterministic local keyword retrieval; no tool execution, secrets or private corpus | Treat retrieved text as data, isolate instructions, validate citations, cap input/output and keep tools allowlisted |
| Secret exposure | No client secrets; `.env*` ignored; public source secrets are not copied | Rotate exposed credentials in original repositories and add automated secret scanning |
| Private company documents | Explicitly excluded from source and content model | Create an approved redaction and review workflow before any addition |
| Cross-site scripting | React output encoding; no user HTML rendering | Sanitize any future MDX/Markdown and prohibit unsafe HTML by default |
| Dependency risk | Small pinned stack and production build validation | Run dependency audit and upgrade through reviewed lockfile changes |
| Data leakage | No analytics/chat persistence and no backend state | Create data retention, logging and incident policies before adding persistence |

## Public project security findings

The portfolio does not copy or expose credential values, but the source audit found demonstration-grade authentication, permissive CORS and machine-specific paths in some public repositories. Before those services are promoted as hardened deployments:

1. remove and rotate hard-coded credentials;
2. store secrets in environment configuration;
3. use hashed credentials or a managed identity provider;
4. restrict CORS to known origins;
5. add file-size, MIME and workbook safety checks;
6. use per-request isolated temporary storage and cleanup;
7. add rate limiting and structured safe error responses.

## Headers

The application should be hosted with:

- `Content-Security-Policy` restricted to self plus required font/asset origins
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling unused sensors and camera/microphone
- `Strict-Transport-Security` on the final HTTPS domain
- frame restrictions through CSP `frame-ancestors`

## Privacy

No analytics is configured. Digital Twin questions remain in React memory for the current page session and are not sent to a server. Direct email is not exposed in prominent HTML.
