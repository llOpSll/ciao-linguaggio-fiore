import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Dictionary from "./pages/Dictionary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <GameProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-br from-italian-white via-white to-italian-green-light bg-opacity-20">
              <Header />
              <div className="pb-20 md:pb-0">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/lesson/:lessonId" element={<Lesson />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/dictionary" element={<Dictionary />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Navigation />
            </div>
          </BrowserRouter>
        </GameProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
