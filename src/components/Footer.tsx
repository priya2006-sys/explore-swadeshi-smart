import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-saffron to-teal rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SmartStay</span>
            </div>
            <p className="text-white/80 text-sm">
              Discover authentic India through AI-powered recommendations, verified homestays, 
              and cultural experiences beyond tourist trails.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:text-saffron">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:text-saffron">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:text-saffron">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:text-saffron">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Hidden Gems</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Homestays</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Cultural Calendar</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Smart Itinerary</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Travel Guides</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-white/80 hover:text-saffron transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 text-sm mb-4">
              Get travel tips, hidden gems, and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-saffron" />
              <span className="text-white/80">hello@smartstay.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-saffron" />
              <span className="text-white/80">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-saffron" />
              <span className="text-white/80">Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2024 SmartStay. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-saffron transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;