# TerpTunes

## Overview

TerpTunes is a full-stack application that bridges cannabis culture and music by analyzing terpene profiles from cannabis strains to generate personalized Spotify playlists. The application combines sophisticated terpene analysis with music recommendation algorithms to create unique listening experiences based on the predicted effects and moods of different cannabis strains.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with React 18 and TypeScript
- **Styling**: TailwindCSS with custom theme colors for cannabis-focused branding
- **UI Components**: Radix UI for accessible, unstyled primitives
- **Animations**: Framer Motion for smooth user interactions
- **State Management**: 
  - React Query for server state and API caching
  - Zustand for client-side state management
  - React Hook Form with Zod validation for form handling

### Backend Architecture
- **API Layer**: Next.js API Routes providing RESTful endpoints
- **Database**: PostgreSQL with Prisma ORM for type-safe database operations
- **Authentication**: NextAuth.js with OAuth integration (primarily Spotify)
- **Server Framework**: Express.js server for enhanced API capabilities

### Data Visualization
- Chart.js and Plotly.js for rendering terpene profiles and music analytics
- Custom components for cannabis strain data visualization

## Key Components

### Terpene Analysis Engine
- **Composite Terpene Engine**: Advanced analysis system that processes multiple terpene profiles
- **Isomer Normalization**: Handles different forms of the same terpene compounds
- **Effect Prediction**: Maps terpene combinations to mood and physiological effects

### Music Recommendation System
- **Spotify Web API Integration**: Fetches user playlists, track features, and creates new playlists
- **Mood-to-Music Mapping**: AI-powered algorithm that matches terpene effects to musical characteristics
- **Multi-strain Playlist Generation**: Creates cohesive playlists based on multiple cannabis strains

### User Management
- **OAuth Authentication**: Seamless Spotify login integration
- **Cultivator Onboarding**: Specialized interface for cannabis cultivators to manage strain catalogs
- **Session Management**: Secure user sessions with NextAuth.js

### Sharing System
- **Public Playlist Sharing**: Generate unique URLs for sharing playlist sessions
- **Community Features**: Social aspects for sharing discoveries within the cannabis and music communities

## Data Flow

1. **User Authentication**: Users authenticate via Spotify OAuth through NextAuth.js
2. **Strain Selection**: Users browse or search cannabis strains with detailed terpene profiles
3. **Terpene Analysis**: The composite terpene engine analyzes selected strains and predicts effects
4. **Music Matching**: AI algorithm maps predicted effects to musical characteristics
5. **Playlist Generation**: Spotify Web API creates playlists based on matched musical criteria
6. **Playlist Delivery**: Generated playlists are saved to user's Spotify account and displayed in the app
7. **Social Sharing**: Users can generate shareable links for their playlist sessions

## External Dependencies

### Core Services
- **Spotify Web API**: Primary integration for music data and playlist management
- **PostgreSQL**: Production database for storing user data, strain information, and session data

### Development Tools
- **Prisma**: Database ORM providing type safety and migration management
- **TypeScript**: Type safety across the entire application
- **ESLint/Prettier**: Code quality and formatting standards

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for enhanced user experience

## Deployment Strategy

### Development Environment
- Local development with Next.js dev server
- Database seeding via custom scripts in `scripts/` directory
- Hot reloading and TypeScript compilation

### Production Considerations
- Next.js optimized builds with static generation where applicable
- Database migrations managed through Prisma
- Environment variables for API keys and database connections
- Image optimization for Spotify album artwork through Next.js Image component

### Health Monitoring
- Express.js health check endpoints with comprehensive deployment platform detection
- Enhanced logging for troubleshooting proxy and load balancer configurations
- Network diagnostic logging for deployment environments

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 02, 2025. Initial setup