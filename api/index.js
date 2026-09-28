module.exports = function handler(_req, res) {
  res.status(200).json({
    service: "link-mobile",
    protocol: "link-mobile/0.1",
    status: "ready",
    role: "mobile-intelligence-gateway",
    endpoints: { health: "/health", mcp: "/mcp" },
    transport: "mobile-next-cloud"
  });
};
