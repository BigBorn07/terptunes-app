"use client"

import Link from "next/link"
import { Leaf, Music, Heart, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Leaf className="h-5 w-5 text-terp-green-600" />
                <Music className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-terp-green-600 to-emerald-600 bg-clip-text text-transparent">
                TerpTunes
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              🌿 Powered by Terpene Science
            </p>
            <p className="text-sm text-muted-foreground">
              Transform cannabis terpene profiles into personalized Spotify playlists that match your mood and experience.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/generate" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Generate Playlist
                </Link>
              </li>
              <li>
                <Link href="/cultivators" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  For Cultivators
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2025 TerpTunes. All rights reserved.</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>for the cannabis community</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/terptunes" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/terptunes" className="text-muted-foreground hover:text-terp-green-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}