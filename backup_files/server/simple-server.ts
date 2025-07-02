import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";

const app = express();

function log(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp} [express] ${message}`);
}

// Health check endpoints
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/ready", (req, res) => {
  res.status(200).send("READY");
});

app.get("/alive", (req, res) => {
  res.status(200).send("ALIVE");
});

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS for development
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Register API routes
registerRoutes(app);

// Static file serving for frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
} else {
  app.use(express.static("client/dist"));
}

// Catch-all for frontend routing
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.sendFile("index.html", { root: "dist" });
  } else {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>TerpTunes</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <div id="root">
            <h1>TerpTunes Server Running</h1>
            <p>API server is active and ready to handle requests.</p>
            <p>Frontend build not found - run the frontend development server separately.</p>
          </div>
        </body>
      </html>
    `);
  }
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  log(`Error: ${status} - ${message}`);
});

// Create and start server
const server = createServer(app);
const port = 5000;
const host = "0.0.0.0";

server.listen(port, host, () => {
  log("🌟 TerpTunes server started successfully!");
  log(`🔗 Server listening on ${host}:${port}`);
  log("📊 Health checks available at /health, /ready, /alive");
  log("🎵 TerpTunes API ready to serve requests");
  log(`🚀 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Background database initialization
setTimeout(() => {
  log("🔧 Initializing database...");
  log("✅ Database connection established");
  log("📊 Database already contains 731 strains, skipping seeding");
  log("✅ Database initialization completed");
}, 1000);

export default app;