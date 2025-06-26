
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Leaf, Sparkles, Users, ArrowRight, Play, Headphones } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-terp-green-600" />,
      title: "Terpene Analysis",
      description: "Advanced analysis of cannabis terpene profiles to understand mood and effects"
    },
    {
      icon: <Music className="h-8 w-8 text-emerald-600" />,
      title: "Spotify Integration",
      description: "Connect your Spotify account to create and save playlists directly to your music library"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-forest-600" />,
      title: "Mood Matching",
      description: "AI-powered matching of terpene effects to musical characteristics"
    },
    {
      icon: <Users className="h-8 w-8 text-terp-green-700" />,
      title: "Community Sharing",
      description: "Share your generated playlists with the cannabis and music community"
    }
  ];

  const terpenes = [
    { name: "Limonene", mood: "Uplifting", color: "bg-terp-green-100 text-terp-green-800" },
    { name: "Myrcene", mood: "Relaxing", color: "bg-emerald-100 text-emerald-800" },
    { name: "Pinene", mood: "Focused", color: "bg-forest-100 text-forest-800" },
    { name: "Linalool", mood: "Calming", color: "bg-terp-green-200 text-terp-green-900" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-terp-green-50 via-emerald-50 to-forest-50 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="bg-white/50 backdrop-blur">
                <Sparkles className="h-3 w-3 mr-1" />
                Powered by Terpene Science
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-terp-green-600 via-emerald-600 to-forest-600 bg-clip-text text-transparent">
                  TerpTunes
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Transform cannabis terpene profiles into personalized Spotify playlists that match your mood and experience
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/api/auth/spotify">
                  <Music className="h-5 w-5 mr-2" />
                  Connect Spotify & Start
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/generate">
                  <Play className="h-5 w-5 mr-2" />
                  View Demo
                </Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Free to use • No subscription required • Powered by Spotify
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Leaf className="h-16 w-16 text-terp-green-600" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Music className="h-20 w-20 text-emerald-600" />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">How TerpTunes Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our advanced algorithm analyzes terpene profiles to create the perfect musical experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-terp-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-terp-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold">Select Products</h3>
                <p className="text-muted-foreground">
                  Choose from our extensive database of cannabis products with detailed terpene profiles
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-semibold">Analyze Terpenes</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes the terpene composition to determine mood, energy, and musical preferences
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-forest-600">3</span>
                </div>
                <h3 className="text-xl font-semibold">Generate Playlist</h3>
                <p className="text-muted-foreground">
                  Get a personalized Spotify playlist that perfectly matches your terpene-induced mood
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terpene Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Terpene to Mood Mapping</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each terpene creates a unique musical experience based on its effects and characteristics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {terpenes.map((terpene, index) => (
                <motion.div
                  key={terpene.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-200">
                    <CardHeader>
                      <CardTitle className="text-lg">{terpene.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className={terpene.color}>
                        {terpene.mood}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Why Choose TerpTunes?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The most advanced platform for cannabis-inspired music discovery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        {feature.icon}
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-terp-green-600 to-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Discover Your Perfect Playlist?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Connect your Spotify account and start generating playlists based on your favorite cannabis products
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/api/auth/spotify">
                  <Headphones className="h-5 w-5 mr-2" />
                  Get Started Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-terp-green-600">
                <Link href="/cultivator">
                  <Leaf className="h-5 w-5 mr-2" />
                  For Cultivators
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
