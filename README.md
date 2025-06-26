# TerpTunes 🎵🌿

Full-stack application that links cannabis strain data (including terpene profiles and user effects) with Spotify playlist generation. Built with Next.js, TypeScript, Prisma, and PostgreSQL.

## 🚀 Features

- **Multi-strain playlist generation**: Create playlists based on multiple cannabis strains
- **Composite terpene engine**: Advanced terpene profile analysis with isomer normalization
- **Spotify OAuth integration**: Seamless login and playlist syncing with Spotify
- **Cultivator onboarding**: Strain catalog management for cannabis cultivators
- **Mobile-optimized**: Fully responsive design for all devices
- **Public sharing**: Share playlist sessions with others via unique URLs

## 🛠️ Tech Stack

### Frontend
- **React 18** with **TypeScript**
- **Next.js 14** for full-stack framework
- **TailwindCSS** for styling
- **Radix UI** components for accessible UI
- **Framer Motion** for animations
- **React Hook Form** with **Zod** validation

### Backend
- **Next.js API Routes**
- **Prisma ORM** for database management
- **NextAuth.js** for authentication
- **PostgreSQL** database

### Key Dependencies
- **Spotify Web API** integration
- **Chart.js** and **Plotly.js** for data visualization
- **React Query** for state management
- **Zustand** for client-side state

## 🏗️ Project Structure

```
terptunes/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and configurations
│   ├── pages/             # Next.js pages
│   ├── scripts/           # Database seeding and utility scripts
│   ├── services/          # API service functions
│   └── styles/            # Global styles and Tailwind config
├── docs/                  # Documentation files
├── results/               # Test results and reports
└── prisma/                # Database schema and migrations
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Spotify Developer Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BigBorn07/terptunes-app.git
   cd terptunes-app
   ```

2. **Install dependencies**
   ```bash
   cd app
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the `app` directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/terptunes"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   SPOTIFY_CLIENT_ID="your-spotify-client-id"
   SPOTIFY_CLIENT_SECRET="your-spotify-client-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Core Features

### Terpene-to-Music Mapping
The application uses a sophisticated terpene mood mapping system that correlates cannabis terpene profiles with musical genres and moods:

- **Myrcene**: Relaxing, ambient music
- **Limonene**: Uplifting, energetic tracks
- **Pinene**: Focus-enhancing, instrumental music
- **Linalool**: Calming, acoustic selections

### Multi-Strain Playlist Generation
Users can select multiple cannabis strains to create composite playlists that blend the musical characteristics of each strain's terpene profile.

### Cultivator Dashboard
Cannabis cultivators can:
- Upload strain data with terpene profiles
- Manage their strain catalog
- View analytics on strain popularity
- Generate marketing playlists for their products

## 🔧 API Endpoints

- `GET /api/strains` - Fetch all available strains
- `POST /api/playlist/generate` - Generate playlist for single strain
- `POST /api/playlist/generate-multi` - Generate playlist for multiple strains
- `GET /api/playlist/[slug]` - Get public playlist by slug
- `POST /api/cultivator/strains` - Add new strain (cultivator only)

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Performance tests and API validation results are stored in the `results/` directory.

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Database (Neon/Supabase)
1. Create a PostgreSQL database on Neon or Supabase
2. Update `DATABASE_URL` in environment variables
3. Run migrations: `npx prisma db push`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- Cannabis terpene research community
- Spotify Web API documentation
- Open source contributors

---

**Note**: This application is for educational and research purposes. Please comply with local cannabis laws and regulations.