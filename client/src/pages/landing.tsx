import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            Terp<span className="text-green-400">Tunes</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Where cannabis meets music. Generate personalized Spotify playlists based on terpene profiles and strain effects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Strain Analysis</h3>
            <p>Analyze terpene profiles and effects of your favorite cannabis strains</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Music Matching</h3>
            <p>AI-powered algorithm matches strain effects to musical characteristics</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Spotify Integration</h3>
            <p>Automatically create and save playlists to your Spotify account</p>
          </div>
        </div>
      </div>
    </div>
  );
}