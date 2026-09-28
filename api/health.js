module.exports = function handler(_req, res) {
  res.status(200).json({
    service: "link-mobile",
    protocol: "link-mobile/0.1",
    status: "ready",
    role: "gateway",
    deviceTransport: "mobile-next-cloud"
  });
};
