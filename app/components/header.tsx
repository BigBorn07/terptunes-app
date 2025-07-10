"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Leaf, User, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Leaf className="h-6 w-6 text-terp-green-600" />
            <Music className="h-6 w-6 text-emerald-600" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-terp-green-600 to-emerald-600 bg-clip-text text-transparent">
            TerpTunes
          </span>
          <span className="text-xs bg-terp-green-100 text-terp-green-800 px-2 py-1 rounded-full">
            Beta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/generate" className="text-sm font-medium hover:text-terp-green-600 transition-colors">
            🎵 Generate Playlist
          </Link>
          <Link href="/cultivators" className="text-sm font-medium hover:text-terp-green-600 transition-colors">
            🌿 For Cultivators
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-terp-green-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/api/auth/spotify">
              <Music className="h-4 w-4 mr-2" />
              Spotify
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/generate" 
              className="block text-sm font-medium hover:text-terp-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              🎵 Generate Playlist
            </Link>
            <Link 
              href="/cultivators" 
              className="block text-sm font-medium hover:text-terp-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              🌿 For Cultivators
            </Link>
            <Link 
              href="/about" 
              className="block text-sm font-medium hover:text-terp-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-2 pt-4 border-t">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link href="/login">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link href="/api/auth/spotify">
                  <Music className="h-4 w-4 mr-2" />
                  Spotify
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}