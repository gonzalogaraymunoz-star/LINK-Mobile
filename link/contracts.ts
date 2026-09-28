export type LinkMobileTransport = "auto" | "local" | "cloud";

export type LinkMobileRisk = "read" | "reversible" | "external_effect";

export interface LinkMobileMission {
  missionId: string;
  project: string;
  objective: string;
  transport?: LinkMobileTransport;
  target?: {
    platform?: "ios" | "android";
    app?: string;
    deviceAlias?: string;
  };
  policy: {
    maxSteps?: number;
    allow: Array<"observe" | "tap" | "type" | "swipe" | "launch" | "navigate">;
    externalEffects: boolean;
  };
  context?: Record<string, unknown>;
}

export interface LinkMobileObservation {
  missionId: string;
  sequence: number;
  timestamp: string;
  device?: string;
  app?: string;
  screen?: string;
  elements?: unknown[];
  summary?: string;
  evidence?: string[];
}

export interface LinkMobileResult {
  missionId: string;
  project: string;
  status: "completed" | "blocked" | "failed";
  answer?: unknown;
  observations: LinkMobileObservation[];
  reusableFlow?: {
    name: string;
    confidence: number;
    steps: unknown[];
  };
  error?: string;
}
