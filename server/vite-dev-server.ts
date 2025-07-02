import { createServer as createViteServer, type ViteDevServer } from 'vite';
import path from 'path';

export async function createViteDevServer(): Promise<ViteDevServer> {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
    root: path.resolve(process.cwd(), 'client'),
    configFile: false, // Use inline config
    plugins: [
      (await import('@vitejs/plugin-react')).default(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'client', 'src'),
        '@shared': path.resolve(process.cwd(), 'shared'),
        '@assets': path.resolve(process.cwd(), 'attached_assets'),
      },
    },
  });

  return vite;
}