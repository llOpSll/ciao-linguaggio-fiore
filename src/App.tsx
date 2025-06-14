
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GameProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pb-20 md:pb-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lesson/:lessonId" element={<Lesson />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Navigation />
          </div>
        </BrowserRouter>
      </GameProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
