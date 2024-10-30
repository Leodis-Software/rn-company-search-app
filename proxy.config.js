var apiBaseUri = "https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest";

const PROXY_CONFIG = {
  "/api/**": {
    target: apiBaseUri,
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
    configure: (proxy) => {
      proxy.on("proxyReq", (proxyReq) => {
        proxyReq.setHeader("x-api-key", process.env.API_KEY);
      });
    },
  },
};

process.loadEnvFile();

module.exports = PROXY_CONFIG;
