
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TerpTunes - Cannabis Terpene to Music Playlist Generator',
  description: 'Transform cannabis terpene profiles into personalized Spotify playlists that match your mood and experience.',
  keywords: 'cannabis, terpenes, music, spotify, playlist, generator, mood, effects',
  authors: [{ name: 'TerpTunes Team' }],
  openGraph: {
    title: 'TerpTunes - Cannabis Terpene to Music Playlist Generator',
    description: 'Transform cannabis terpene profiles into personalized Spotify playlists that match your mood and experience.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TerpTunes - Cannabis Terpene to Music Playlist Generator',
    description: 'Transform cannabis terpene profiles into personalized Spotify playlists that match your mood and experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
