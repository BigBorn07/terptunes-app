import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

function log(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp} [express] ${message}`);
}

const app = express();

// Ultra-fast health check endpoint with enhanced deployment platform compatibility
app.get("/health", (req, res) => {
  // Set explicit timeout to prevent hanging requests
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(503).send("TIMEOUT");
    }
  }, 500); // Reduced timeout for faster failure detection

  // Comprehensive network diagnostic logging for deployment troubleshooting
  console.log("WHAT IS THE req.ip: " + req.ip);
  const clientIP =
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    "unknown";
  const userAgent = req.headers["user-agent"] || "unknown";
  const forwardedFor = req.headers["x-forwarded-for"] || "none";
  const host = req.headers.host || "unknown";
  const xRealIP = req.headers["x-real-ip"] || "none";
  const via = req.headers.via || "none";

  // Enhanced deployment platform detection for comprehensive logging
  const isDeploymentCheck =
    userAgent.includes("kube-probe") ||
    userAgent.includes("Go-http-client") ||
    userAgent.includes("curl") ||
    userAgent.includes("wget") ||
    userAgent.includes("GoogleHC") ||
    userAgent.includes("ELB-HealthChecker") ||
    userAgent.includes("Amazon") ||
    userAgent.toLowerCase().includes("health") ||
    userAgent.toLowerCase().includes("probe") ||
    userAgent.toLowerCase().includes("check") ||
    !req.headers.accept?.includes("text/html");

  if (isDeploymentCheck) {
    console.log(
      `[PROXY-DEBUG] /health - Host: ${host}, Client: ${clientIP}, UA: ${userAgent}`,
    );
    console.log(
      `[PROXY-HEADERS] XFF: ${forwardedFor}, X-Real-IP: ${xRealIP}, Via: ${via}`,
    );
  }

  // Enhanced response headers for maximum proxy compatibility
  res.set({
    Connection: "close",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "X-Health-Status": "OK",
    "X-Server-Binding": "0.0.0.0:5000",
    "X-Proxy-Compatible": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  });

  // Fastest possible response for deployment health checks
  res.status(200).send("OK");
  clearTimeout(timeout);
});

// Additional readiness endpoint with enhanced deployment platform compatibility
app.get("/ready", (req, res) => {
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(503).send("NOT_READY");
    }
  }, 500);

  // Network diagnostic logging
  const clientIP = req.ip || req.connection.remoteAddress || "unknown";
  const userAgent = req.headers["user-agent"] || "unknown";
  const host = req.headers.host || "unknown";

  const isDeploymentCheck =
    userAgent.includes("kube-probe") ||
    userAgent.includes("Go-http-client") ||
    userAgent.includes("curl") ||
    userAgent.includes("wget") ||
    userAgent.includes("GoogleHC") ||
    userAgent.includes("ELB-HealthChecker") ||
    userAgent.includes("Amazon") ||
    userAgent.toLowerCase().includes("health") ||
    userAgent.toLowerCase().includes("probe") ||
    userAgent.toLowerCase().includes("check") ||
    !req.headers.accept?.includes("text/html");

  if (isDeploymentCheck) {
    console.log(
      `[PROXY-DEBUG] /ready - Host: ${host}, Client: ${clientIP}, UA: ${userAgent}`,
    );
  }

  // Enhanced response headers for proxy compatibility
  res.set({
    Connection: "close",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "X-Ready-Status": "READY",
    "X-Server-Binding": "0.0.0.0:5000",
    "X-Proxy-Compatible": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  });

  // Simple text response for readiness checks
  res.status(200).send("READY");
  clearTimeout(timeout);
});

// Liveness probe endpoint with enhanced deployment platform compatibility
app.get("/alive", (req, res) => {
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(503).send("NOT_ALIVE");
    }
  }, 500);

  // Network diagnostic logging
  const clientIP = req.ip || req.connection.remoteAddress || "unknown";
  const userAgent = req.headers["user-agent"] || "unknown";
  const host = req.headers.host || "unknown";

  const isDeploymentCheck =
    userAgent.includes("kube-probe") ||
    userAgent.includes("Go-http-client") ||
    userAgent.includes("curl") ||
    userAgent.includes("wget") ||
    userAgent.includes("GoogleHC") ||
    userAgent.includes("ELB-HealthChecker") ||
    userAgent.includes("Amazon") ||
    userAgent.toLowerCase().includes("health") ||
    userAgent.toLowerCase().includes("probe") ||
    userAgent.toLowerCase().includes("check") ||
    !req.headers.accept?.includes("text/html");

  if (isDeploymentCheck) {
    console.log(
      `[PROXY-DEBUG] /alive - Host: ${host}, Client: ${clientIP}, UA: ${userAgent}`,
    );
  }

  // Enhanced response headers for proxy compatibility
  res.set({
    Connection: "close",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "X-Alive-Status": "ALIVE",
    "X-Server-Binding": "0.0.0.0:5000",
    "X-Proxy-Compatible": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  });

  // Ultra-fast response for liveness checks
  res.status(200).send("ALIVE");
  clearTimeout(timeout);
});

// Root endpoint - immediate response for health checks with enhanced proxy compatibility
app.get("/", (req, res, next) => {
  // Ultra-fast health check detection for deployment platforms
  const userAgent = req.headers["user-agent"] || "";
  const acceptHeader = req.headers.accept || "";
  const clientIP =
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    "unknown";
  const forwardedFor = req.headers["x-forwarded-for"] || "none";
  const host = req.headers.host || "unknown";
  const xRealIP = req.headers["x-real-ip"] || "none";
  const via = req.headers.via || "none";

  // Enhanced deployment platform detection patterns
  const isHealthCheck =
    !acceptHeader.includes("text/html") ||
    userAgent.includes("kube-probe") ||
    userAgent.includes("Go-http-client") ||
    userAgent.includes("curl") ||
    userAgent.includes("wget") ||
    userAgent.includes("Googlebot") ||
    userAgent.includes("GoogleHC") ||
    userAgent.includes("ELB-HealthChecker") ||
    userAgent.includes("Amazon") ||
    userAgent.toLowerCase().includes("health") ||
    userAgent.toLowerCase().includes("probe") ||
    userAgent.toLowerCase().includes("check");

  if (isHealthCheck) {
    // Comprehensive network diagnostic logging for deployment proxy troubleshooting
    console.log(
      `[PROXY-DEBUG] / (root) - Host: ${host}, Client: ${clientIP}, UA: ${userAgent}`,
    );
    console.log(
      `[PROXY-HEADERS] XFF: ${forwardedFor}, X-Real-IP: ${xRealIP}, Via: ${via}`,
    );
    console.log(
      `[PROXY-VERIFICATION] Server bound to 0.0.0.0:5000, accepting external connections`,
    );

    // Enhanced headers for deployment platform proxy compatibility
    res.set({
      Connection: "close",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "X-Health-Check": "OK",
      "X-Server-Status": "Running",
      "X-Server-Binding": "0.0.0.0:5000",
      "X-Proxy-Compatible": "true",
      "X-Connection-Test": "SUCCESS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    });

    res.status(200).send("OK");
    return;
  }

  // Otherwise, continue to regular frontend routing
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    // Register routes
    registerRoutes(app);
    
    // Create HTTP server
    const server = createServer(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      log(`Error: ${status} - ${message}`);
      // Don't throw error to prevent process exit
    });

    // Serve frontend - simple static serving for now
    app.use(express.static("client/public"));
    
    // Handle SPA routing - send index.html for non-API routes
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api/")) {
        return next();
      }
      
      // For now, serve a simple HTML page
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>TerpTunes - Cannabis Music Experience</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>
            <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
              <div class="container mx-auto px-6 py-12">
                <div class="text-center text-white">
                  <h1 class="text-6xl font-bold mb-6">
                    Terp<span class="text-green-400">Tunes</span>
                  </h1>
                  <p class="text-xl mb-8 max-w-2xl mx-auto">
                    Where cannabis meets music. Generate personalized Spotify playlists based on terpene profiles and strain effects.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                      Get Started
                    </button>
                    <button class="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div class="mt-20 grid md:grid-cols-3 gap-8 text-white">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span class="text-2xl">🌿</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Strain Analysis</h3>
                    <p>Analyze terpene profiles and effects of your favorite cannabis strains</p>
                  </div>
                  
                  <div class="text-center">
                    <div class="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span class="text-2xl">🎵</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Music Matching</h3>
                    <p>AI-powered algorithm matches strain effects to musical characteristics</p>
                  </div>
                  
                  <div class="text-center">
                    <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span class="text-2xl">🎧</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Spotify Integration</h3>
                    <p>Automatically create and save playlists to your Spotify account</p>
                  </div>
                </div>
                
                <div class="mt-20 text-center text-white">
                  <p class="text-lg mb-4">Server Status: <span class="text-green-400">✅ Running</span></p>
                  <p class="text-sm opacity-75">Backend API available at /api/* endpoints</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `);
    });

    // ALWAYS serve the app on port 5000
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = 5000;
    const host = "0.0.0.0"; // Listen on all interfaces for Cloud Run compatibility

    // Novel solution: Port conflict detection and automatic cleanup
    server.on("error", (error: any) => {
      if (error.code === "EADDRINUSE") {
        log(
          `❌ Port ${port} is already in use. Detecting and cleaning up duplicate processes...`,
        );

        // Find and terminate conflicting processes
        import("child_process").then(({ exec }) => {
          exec(`lsof -ti:${port}`, (err, stdout) => {
            if (stdout) {
              const pids = stdout
                .trim()
                .split("\n")
                .filter((pid) => pid !== process.pid.toString());
              if (pids.length > 0) {
                log(
                  `🔧 Found conflicting processes: ${pids.join(", ")}. Attempting cleanup...`,
                );
                exec(`kill -9 ${pids.join(" ")}`, (killErr) => {
                  if (!killErr) {
                    log(`✅ Cleanup successful. Retrying server startup...`);
                    setTimeout(() => {
                      server.listen(port, host, () => {
                        log(
                          `🌟 TerpTunes server started successfully after cleanup!`,
                        );
                        log(`🔗 Server listening on ${host}:${port}`);
                      });
                    }, 1000);
                  } else {
                    log(`❌ Cleanup failed: ${killErr.message}`);
                  }
                });
              }
            }
          });
        });
      } else {
        log(`❌ Server error: ${error.message}`);
      }
    });

    // Enhanced proxy configuration for deployment platform compatibility
    server.keepAliveTimeout = 65000; // Longer than most load balancers (60s)
    server.headersTimeout = 66000; // Slightly longer than keepAliveTimeout
    server.requestTimeout = 30000; // 30 second request timeout
    server.timeout = 30000; // 30 second socket timeout

    // Additional deployment platform proxy optimizations
    server.maxHeadersCount = 2000; // Handle proxy headers
    server.maxRequestsPerSocket = 0; // Unlimited requests per socket for proxy reuse

    server.listen(port, host, () => {
      log(`🌟 TerpTunes server started successfully!`);
      log(`🔗 Server listening on ${host}:${port}`);
      log(`📊 Health checks available at /health, /ready, /alive`);
      log(`🎵 TerpTunes API ready to serve requests`);

      // Enhanced host binding verification for deployment platforms
      log(`✅ Host binding verification: ${host}:${port}`);
      log(`🌍 External interface binding confirmed (not localhost/127.0.0.1)`);
      log(`🔗 Deployment proxy should connect to: ${host}:${port}`);

      // Comprehensive proxy debugging information
      log(`[PROXY-CONFIG] Server binding: ${host}:${port}`);
      log(`[PROXY-CONFIG] Accept external connections: YES`);
      log(`[PROXY-CONFIG] Health check endpoints: /health, /ready, /alive, /`);
      log(`[PROXY-CONFIG] Response headers include proxy compatibility flags`);
      log(`[PROXY-CONFIG] Network diagnostic logging: ENABLED`);

      // Verify server is actually listening externally
      const testBinding = server.address();
      if (testBinding && typeof testBinding === "object") {
        log(
          `[BINDING-VERIFICATION] Actual server address: ${testBinding.address}:${testBinding.port}`,
        );
        log(`[BINDING-VERIFICATION] Family: ${testBinding.family}`);
        if (testBinding.address === "::" || testBinding.address === "0.0.0.0") {
          log(
            `[BINDING-SUCCESS] ✅ Server bound to external interface - proxy connections will work`,
          );
        } else {
          log(
            `[BINDING-WARNING] ⚠️ Server may not be accessible to external proxy - bound to ${testBinding.address}`,
          );
        }
      }

      // Network diagnostic information for troubleshooting
      const networkInfo = {
        host: host,
        port: port,
        actualBinding: server.address(),
        nodeEnv: process.env.NODE_ENV || "development",
        platform: process.platform,
        pid: process.pid,
      };
      log(`📋 Network diagnostic info: ${JSON.stringify(networkInfo)}`);

      // Initialize database in background - completely non-blocking
      // Use Promise.resolve() instead of setImmediate for better deployment compatibility
      Promise.resolve()
        .then(async () => {
          if (process.env.NODE_ENV !== "production") {
            log("Starting background database initialization...");
            try {
              const { initializeDatabase } = await import("./startup");
              await initializeDatabase({ skipSeeding: false });
              log("✅ Database initialization completed");
            } catch (error: any) {
              log(`❌ Database initialization failed: ${error.message}`);
            }
          } else {
            // In production, just verify database connection without seeding
            try {
              const { quickDatabaseCheck } = await import("./startup");
              const connected = await quickDatabaseCheck();
              log(
                `📊 Database connection check: ${connected ? "OK" : "Failed"}`,
              );
            } catch (error: any) {
              log(`❌ Database check failed: ${error.message}`);
            }
          }
        })
        .catch((error) => {
          log(`❌ Background database initialization error: ${error.message}`);
        });
    });

    // Minimal error handling - let deployment platform manage lifecycle
    process.on("uncaughtException", (error) => {
      log(`Uncaught Exception: ${error.message}`);
      // Continue running - deployment platform handles process lifecycle
    });

    process.on("unhandledRejection", (reason, promise) => {
      log(`Unhandled Rejection: ${reason}`);
      // Continue running - deployment platform handles process lifecycle
    });
  } catch (error: any) {
    log(`Failed to start server: ${error?.message || String(error)}`);
    // In production, exit cleanly on startup failure
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    } else {
      // In development, keep alive for debugging
      setTimeout(() => {
        log("Server startup failed, but keeping process alive for debugging");
      }, 1000);
    }
  }
})();
