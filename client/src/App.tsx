import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import Discover from "@/pages/discover";
import Dashboard from "@/pages/dashboard";
import SpotifyDemo from "@/pages/spotify-demo";
import PlaylistLibrary from "@/pages/playlist-library";
import AddStrain from "@/pages/add-strain";
import Profile from "@/pages/profile";
import PartnerPortal from "@/pages/partner-portal";
import AnalyticsDashboard from "@/pages/analytics-dashboard";
import Achievements from "@/pages/achievements";
import BrandAmbassador from "@/pages/brand-ambassador";
import DispensaryAmbassador from "@/pages/dispensary-ambassador";
import Podcast from "@/pages/podcast";
import SuperAdmin from "@/pages/super-admin";
import Admin from "@/pages/admin";
import MelloMaestro from "@/pages/mello-maestro";
import GrowerPortal from "@/pages/grower-portal";
import DispensaryPortal from "@/pages/dispensary-portal";
import UserProfile from "@/pages/user-profile";
import WatchDemo from "@/pages/watch-demo";
import MaestroDemo from "@/pages/maestro-demo";
import OnboardingPage from "@/pages/onboarding";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/discover" component={Discover} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/spotify-demo" component={SpotifyDemo} />
      <Route path="/playlists" component={PlaylistLibrary} />
      <Route path="/playlist-library" component={PlaylistLibrary} />
      <Route path="/add-strain" component={AddStrain} />
      <Route path="/profile" component={Profile} />
      <Route path="/partner-portal" component={PartnerPortal} />
      <Route path="/analytics" component={AnalyticsDashboard} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/brand-ambassador" component={BrandAmbassador} />
      <Route path="/dispensary-ambassador" component={DispensaryAmbassador} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/mello-maestro" component={MelloMaestro} />
      <Route path="/grower-portal" component={GrowerPortal} />
      <Route path="/dispensary-portal" component={DispensaryPortal} />
      <Route path="/user-profile" component={UserProfile} />
      <Route path="/admin" component={Admin} />
      <Route path="/super-admin" component={SuperAdmin} />
      <Route path="/watch-demo" component={WatchDemo} />
      <Route path="/maestro-demo" component={MaestroDemo} />
      <Route path="/onboarding" component={OnboardingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;