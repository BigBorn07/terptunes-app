// Spotify Web API Integration for TerpTunes
export default class SpotifyService {
  private static readonly API_BASE = 'https://api.spotify.com/v1';
  private static readonly AUTH_BASE = 'https://accounts.spotify.com';

  /**
   * Generate Spotify authorization URL
   */
  static generateAuthUrl(state: string): string {
    const scopes = [
      'playlist-modify-public',
      'playlist-modify-private',
      'user-read-private',
      'user-read-email'
    ].join(' ');

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      scope: scopes,
      redirect_uri: this.getRedirectUri(),
      state
    });

    return `${this.AUTH_BASE}/authorize?${params.toString()}`;
  }

  /**
   * Exchange authorization code for access token
   */
  static async exchangeCodeForTokens(code: string): Promise<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }> {
    const response = await fetch(`${this.AUTH_BASE}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: this.getRedirectUri()
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Spotify token exchange failed: ${error}`);
    }

    return await response.json();
  }

  /**
   * Get redirect URI
   */
  private static getRedirectUri(): string {
    // Use environment variable or construct from current domain
    return process.env.SPOTIFY_REDIRECT_URI || 
           `https://${process.env.REPLIT_DEV_DOMAIN || 'localhost:5000'}/api/spotify/callback`;
  }
}