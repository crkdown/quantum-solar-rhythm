import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Method from "./pages/Method";
import Programs from "./pages/Programs";
import Masterclasses from "./pages/Masterclasses";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import RhythmCalculator from "./pages/RhythmCalculator";
import EarthRhythmRetreat from "./pages/EarthRhythmRetreat";
import FoodRhythmTool from "./pages/FoodRhythmTool";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LandingMasterclass from "./pages/LandingMasterclass";
import LandingProgram from "./pages/LandingProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/method" element={<Method />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/masterclasses" element={<Masterclasses />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/rhythm-calculator" element={<RhythmCalculator />} />
                <Route path="/food-rhythm-tool" element={<FoodRhythmTool />} />
                <Route path="/earth-rhythm-retreat" element={<EarthRhythmRetreat />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/landing/masterclass" element={<LandingMasterclass />} />
                <Route path="/landing/program" element={<LandingProgram />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
