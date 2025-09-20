import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-saffron to-teal rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SmartStay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hidden-gems" className="text-foreground hover:text-primary transition-colors">
              Hidden Gems
            </a>
            <a href="#itinerary" className="text-foreground hover:text-primary transition-colors">
              Smart Itinerary
            </a>
            <a href="#homestays" className="text-foreground hover:text-primary transition-colors">
              Homestays
            </a>
            <a href="#culture" className="text-foreground hover:text-primary transition-colors">
              Cultural Calendar
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#hidden-gems" className="text-foreground hover:text-primary transition-colors">
                Hidden Gems
              </a>
              <a href="#itinerary" className="text-foreground hover:text-primary transition-colors">
                Smart Itinerary
              </a>
              <a href="#homestays" className="text-foreground hover:text-primary transition-colors">
                Homestays
              </a>
              <a href="#culture" className="text-foreground hover:text-primary transition-colors">
                Cultural Calendar
              </a>
              <div className="flex gap-3 mt-4">
                <Button variant="ghost" className="flex-1">Sign In</Button>
                <Button variant="hero" className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;