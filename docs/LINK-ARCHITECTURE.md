# LINK Mobile — Adaptation v0.1

## Purpose
Turn the upstream Mobile MCP engine into LINK's mobile execution organ without modifying the upstream core prematurely.

## End-to-end path
Control Central / ChatGPT -> LINK mission -> LINK Mobile MCP running on a host Mac -> iOS automation bridge -> iPhone -> observation/evidence -> LINK memory.

## Layers
- missions: intent, project, expected result and allowed actions.
- observer: screen/device state before and after actions.
- evidence: screenshots, logs and execution result.
- memory: normalized execution events for later persistence.
- gateways: adapters for Supabase, GitHub, Vercel and Control Central.
- core: upstream Mobile MCP capabilities; keep isolated to simplify upstream sync.

## Development phases
1. Baseline: preserve upstream and establish LINK namespace/contracts.
2. Host: clone branch on a compatible Mac and install project dependencies.
3. Simulator: prove list/open/inspect/tap/type/screenshot on an iOS Simulator.
4. Physical iPhone: pair/trust device, configure Apple's development/automation requirements, then run a harmless smoke test.
5. Evidence: emit a LINK mission result with step status and screenshots/logs.
6. Supabase: persist missions, runs, steps, evidence metadata and device aliases.
7. Control Central: dispatch missions and read live/final status.
8. LINK World: expose health, last run, failures, evidence and learned reusable flows.
9. Closed loop: deployment -> mobile verification -> failure -> engineering task -> redeploy -> retest.

## Safety boundaries
- Start on simulator before a physical device.
- Use a dedicated test device/account where possible.
- No destructive, financial, publishing, messaging or irreversible action by default.
- A mission must declare its project and allowed action scope.
- Secrets stay outside Git and are injected through environment/configuration.
- Preserve upstream remote/history so security and compatibility fixes can be merged.

## First acceptance test
A LINK mission can identify an available iOS target, open a test application or safe screen, inspect it, perform one harmless interaction, capture evidence, and return a structured pass/fail result.

## Proposed LINK result contract
```json
{
  "mission_id": "uuid",
  "project": "taxihotel",
  "target": "ios",
  "status": "passed",
  "steps": [],
  "evidence": [],
  "started_at": "iso8601",
  "finished_at": "iso8601"
}
```
