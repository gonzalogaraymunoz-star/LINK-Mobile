const { NodeStreamableHTTPServerTransport } = require("@modelcontextprotocol/node");
const { createMcpServer } = require("../lib/server");

module.exports = async function handler(req, res) {
  const authToken = process.env.MOBILEMCP_AUTH;
  if (authToken && req.headers.authorization !== `Bearer ${authToken}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (req.method !== "POST") {
    return res.status(405).json({ jsonrpc: "2.0", error: { code: -32000, message: "Method not allowed." }, id: null });
  }
  const server = createMcpServer();
  const transport = new NodeStreamableHTTPServerTransport({ sessionIdGenerator: undefined });
  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (err) {
    if (!res.headersSent) return res.status(500).json({ jsonrpc:"2.0", error:{code:-32603,message:"Internal server error"}, id:null });
  } finally {
    transport.close();
    server.close();
  }
};
