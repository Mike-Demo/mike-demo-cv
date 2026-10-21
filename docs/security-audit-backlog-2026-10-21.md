# Security audit backlog — 2026-10-21

Issue creation was unavailable in this session. The following are the prioritized
issue drafts to file; each links back to [parent issue #3](https://github.com/Mike-Demo/mike-demo-cv/issues/3).

## Priority

1. **Low — mutable third-party analytics script executes in the site origin.**
   This is the only confirmed finding. It is loaded on every page visit, but
   exploitation requires compromise or malicious content at the third-party
   host; the confirmed impact is limited to this static site. Self-hosting is a
   small, safe fix.

## Remediation issue draft

### `[security][low] Self-host mutable analytics script`

**Parent:** [Security audit 2026-10-21 — prioritize findings and create remediation issues](https://github.com/Mike-Demo/mike-demo-cv/issues/3)

**Finding:** Mutable third-party analytics script executes in site origin with
no integrity pin
**Fingerprint:** `remote-analytics-script-no-integrity-pin`

**Evidence:** Every page load includes
`https://umami-lite.view.fast/tracker.js` without a Subresource Integrity hash,
version pin, or self-hosted copy. The meta Content-Security-Policy explicitly
allows that host in `script-src`, so its served content executes in the
`https://mikedemo.work/` origin. A compromise or malicious turn of that host is
the precondition; the reported impact on this fully static site is confined to
defacement, redirect, …

**Root cause:** The root head loads an unversioned, mutable remote script without
an integrity attribute, and the meta CSP allowlists its host, delegating
in-origin code execution to that external host's current content with no
mechanism to detect a change.

**Smallest fix:** Self-host the tracker script (as was done for the Web Awesome
JS bundle) so it is served from `'self'` under the site's own release process.
If it must stay remote, add an integrity hash plus `crossorigin` to the script
entry in `src/routes/__root.tsx` and remove `https://umami-lite.view.fast` from
`script-src` once self-hosted.

## Needs-validation issue draft

### `[security][needs-validation] Audit leads to validate`

**Parent:** [Security audit 2026-10-21 — prioritize findings and create remediation issues](https://github.com/Mike-Demo/mike-demo-cv/issues/3)

- [ ] **No framing protection in source: CSP is meta-only and sets no
  frame-ancestors**

  **Fingerprint:** `meta-csp-only-no-framing-protection-needs-validation`

  **Claimed root cause:** Framing protection relies solely on a meta-delivered
  CSP that cannot carry `frame-ancestors`, with no `X-Frame-Options` or
  header-based CSP configuration in the repository.

  **Exact missing fact:** Whether the SpaceFast production host adds a
  Content-Security-Policy frame-ancestors directive and/or an X-Frame-Options
  header to responses for https://mikedemo.work/ outside the repository —
  resolvable only by an owner-observed check of the deployed response headers
  (e.g. browser devtools / host configuration), not from source and not by auditor…

The rejected candidate `bunfig-release-age-guard-bypassed-for-lovable-build-packages`
is intentionally not included; do not re-raise it without new evidence.
