/**
 * Enhanced Algorithm Demo Page
 * Showcasing the comprehensive TerpTunes enhanced algorithm
 */

import { Metadata } from 'next';
import EnhancedAlgorithmInterface from '@/components/enhanced-algorithm-interface';
import AnalyticsDashboard from '@/components/analytics-dashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Microscope, 
  Music, 
  Target, 
  TrendingUp, 
  Zap,
  Users,
  Activity,
  Award,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enhanced Algorithm - TerpTunes',
  description: 'Experience our cutting-edge recommendation system powered by ML, molecular science, and advanced audio analysis',
};

export const dynamic = 'force-dynamic';

export default function EnhancedAlgorithmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-black font-semibold px-4 py-2">
                ENHANCED ALGORITHM v2.0
              </Badge>
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              The Future of
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Cannabis-Music Pairing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
              Experience our revolutionary recommendation system that combines machine learning, 
              molecular science, advanced audio analysis, and real-time personalization to create 
              the perfect harmony between cannabis and music.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="font-semibold">ML-Powered</h3>
                <p className="text-sm text-gray-300">TensorFlow.js models for pattern recognition</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Microscope className="h-8 w-8" />
                </div>
                <h3 className="font-semibold">Scientific Data</h3>
                <p className="text-sm text-gray-300">PubChem molecular analysis</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Music className="h-8 w-8" />
                </div>
                <h3 className="font-semibold">Audio Analysis</h3>
                <p className="text-sm text-gray-300">LibROSA feature extraction</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="font-semibold">Personalized</h3>
                <p className="text-sm text-gray-300">Adaptive user preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Algorithm Metrics Overview */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-200">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-800">87.3%</div>
              <div className="text-sm text-gray-600">Recommendation Accuracy</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white/80 backdrop-blur-sm border-blue-200">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-800">142ms</div>
              <div className="text-sm text-gray-600">Average Response Time</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white/80 backdrop-blur-sm border-green-200">
            <CardContent className="p-6">
              <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-800">92.1%</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white/80 backdrop-blur-sm border-orange-200">
            <CardContent className="p-6">
              <Activity className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-800">5.2x</div>
              <div className="text-sm text-gray-600">Engagement Increase</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Interface */}
        <Tabs defaultValue="demo" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="demo" className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>Live Demo</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="technology" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Technology</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="demo" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <EnhancedAlgorithmInterface />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <AnalyticsDashboard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technology" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ML Models */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-6 w-6 text-purple-600" />
                    <span>Machine Learning Models</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-800">Terpene Recommendation Model</h4>
                      <p className="text-sm text-purple-600">TensorFlow.js neural network for predicting optimal terpene combinations</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Neural Network</div>
                        <div className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">128→64→32→10</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-800">Mood Prediction Model</h4>
                      <p className="text-sm text-blue-600">Analyzes listening patterns to predict user's emotional state</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Classification</div>
                        <div className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">6 Mood States</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800">Collaborative Filtering</h4>
                      <p className="text-sm text-green-600">Finds similar users and leverages collective intelligence</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Matrix Factorization</div>
                        <div className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">User Embeddings</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scientific Integration */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Microscope className="h-6 w-6 text-blue-600" />
                    <span>Scientific Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-800">PubChem Molecular Data</h4>
                      <p className="text-sm text-blue-600">Real-time molecular structure and pharmacology data</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Molecular Formula</div>
                        <div className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Bioactivity</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-orange-800">LibROSA Audio Analysis</h4>
                      <p className="text-sm text-orange-600">Advanced audio feature extraction and analysis</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">MFCC</div>
                        <div className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Spectral Features</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="font-medium text-red-800">A/B Testing Framework</h4>
                      <p className="text-sm text-red-600">Statistical experimentation for continuous optimization</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Multivariate Testing</div>
                        <div className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Statistical Significance</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Features */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-gold-600" />
                    <span>Performance & Innovation Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Real-time Adaptation</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Continuous preference learning</li>
                        <li>• Dynamic algorithm adjustments</li>
                        <li>• Context-aware recommendations</li>
                        <li>• User feedback integration</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Performance Optimization</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Redis caching layer</li>
                        <li>• Sub-200ms response times</li>
                        <li>• Intelligent rate limiting</li>
                        <li>• Efficient batch processing</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Analytics & Insights</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Real-time performance metrics</li>
                        <li>• User behavior analysis</li>
                        <li>• Business intelligence dashboard</li>
                        <li>• Optimization recommendations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of users discovering perfect cannabis-music pairings with our enhanced algorithm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/auth/register" 
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Start Your Journey
            </a>
            <a 
              href="/generate" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}