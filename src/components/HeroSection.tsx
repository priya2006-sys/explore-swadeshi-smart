import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Home } from "lucide-react";
import heroImage from "@/assets/hero-india.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Indian landscape with traditional architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth/60 via-earth/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-saffron" />
            <span className="text-sm text-white font-medium">Discover Authentic India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Uncover India's
            <span className="bg-gradient-to-r from-saffron to-teal bg-clip-text text-transparent block">
              Hidden Gems
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Experience authentic India through AI-powered recommendations, verified homestays, 
            and cultural experiences beyond tourist trails.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="accent" size="lg" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/20">
              Watch Demo
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-saffron rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">500+ Hidden Gems</div>
                <div className="text-white/70 text-sm">Undiscovered destinations</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">200+ Homestays</div>
                <div className="text-white/70 text-sm">Verified local hosts</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-saffron rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">50+ Festivals</div>
                <div className="text-white/70 text-sm">Cultural celebrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;