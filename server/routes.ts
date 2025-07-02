import { type Express } from "express";
import { nanoid } from "nanoid";
import SpotifyService from "./services/spotifyService";

export function registerRoutes(app: Express) {
  // Health check endpoints
  app.get("/ready", (req, res) => {
    res.status(200).send("READY");
  });

  app.get("/alive", (req, res) => {
    res.status(200).send("ALIVE");
  });

  // Spotify Authentication Routes
  app.get("/api/spotify/auth", async (req: any, res) => {
    try {
      const state = nanoid();
      const authUrl = SpotifyService.generateAuthUrl(state);
      
      // Store state in session for validation (in a real app, use proper session storage)
      res.redirect(authUrl);
    } catch (error) {
      console.error("Spotify auth error:", error);
      res.status(500).json({ message: "Failed to initiate Spotify authentication" });
    }
  });

  app.get("/api/spotify/callback", async (req, res) => {
    try {
      const { code, state } = req.query;
      
      if (!code) {
        return res.status(400).json({ message: "Authorization code missing" });
      }

      // Exchange authorization code for tokens
      const tokens = await SpotifyService.exchangeCodeForTokens(code as string);
      
      // In a real app, you'd store these tokens securely associated with the user
      // For now, we'll send them back to close the popup
      res.send(`
        <script>
          window.opener.postMessage({
            type: 'SPOTIFY_AUTH_SUCCESS',
            tokens: ${JSON.stringify(tokens)}
          }, '*');
          window.close();
        </script>
      `);
    } catch (error) {
      console.error("Spotify callback error:", error);
      res.send(`
        <script>
          window.opener.postMessage({
            type: 'SPOTIFY_AUTH_ERROR',
            error: '${error instanceof Error ? error.message : 'Authentication failed'}'
          }, '*');
          window.close();
        </script>
      `);
    }
  });

  app.get("/api/spotify/status", (req, res) => {
    // In a real app, check if user has valid Spotify tokens
    res.json({ connected: false });
  });

  // Basic API endpoints for the app to function
  app.get("/api/auth/user", (req, res) => {
    // Mock user data for now
    res.json({
      id: "42777913",
      email: "user@example.com",
      name: "Test User"
    });
  });

  app.get("/api/strains/user-submissions", (req, res) => {
    res.status(400).json({ message: "Invalid strain ID" });
  });

  app.get("/api/playlists/likes", (req, res) => {
    res.json([]);
  });

  app.get("/api/playlists", (req, res) => {
    res.json([]);
  });

  // Catch-all for unmatched API routes
  app.use("/api/*", (req, res) => {
    res.status(404).json({ message: "API endpoint not found" });
  });
}