# LINK Mobile Mission Protocol v0.1

## Input
A mission states WHAT LINK needs to learn or accomplish, not coordinates or a hard-coded tap script.

Example:

```json
{
  "missionId": "m-001",
  "project": "caracol",
  "objective": "Find today's publication status in the mobile application",
  "transport": "auto",
  "target": {"platform": "ios"},
  "policy": {
    "allow": ["observe", "tap", "swipe", "launch", "navigate"],
    "externalEffects": false
  }
}
```

## Execution
1. Resolve an available device/transport.
2. Perceive the current mobile state using accessibility-first Mobile Next tools.
3. Return observations to the LINK reasoning layer.
4. The reasoning layer chooses the next permitted primitive action.
5. Observe the result after every action.
6. Stop when the objective is answered, blocked, or policy limits are reached.
7. Emit a structured result and optionally a reusable learned flow.

## Memory
A learned flow is a hint, not truth. On reuse, LINK must re-observe the interface and adapt when the UI changed.

## Side effects
Reading/exploration is the default. Sending messages, publishing, purchasing, deleting, confirming bookings, changing account/security settings, or equivalent external effects require an explicitly authorized mission policy and should be surfaced to the calling layer for confirmation where appropriate.
