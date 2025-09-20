import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Camera, ArrowRight } from "lucide-react";
import { useState } from "react";
import hiddenGemImage from "@/assets/hidden-gem.jpg";

const HiddenGemsSection = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");

  const hiddenGems = [
    {
      name: "Mawlynnong Village",
      location: "Meghalaya",
      description: "Asia's cleanest village with living root bridges",
      rating: 4.8,
      image: hiddenGemImage,
      type: "Nature & Culture"
    },
    {
      name: "Hampi Ruins",
      location: "Karnataka", 
      description: "Ancient Vijayanagara Empire's magnificent ruins",
      rating: 4.9,
      image: hiddenGemImage,
      type: "Heritage"
    },
    {
      name: "Spiti Valley",
      location: "Himachal Pradesh",
      description: "High-altitude desert with ancient monasteries",
      rating: 4.7,
      image: hiddenGemImage,
      type: "Adventure"
    }
  ];

  return (
    <section id="hidden-gems" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover Hidden <span className="text-saffron">Gems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered recommendations for authentic destinations beyond the tourist trails
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input 
              placeholder="Search destinations..." 
              className="border-border focus:ring-saffron"
            />
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North India</SelectItem>
                <SelectItem value="south">South India</SelectItem>
                <SelectItem value="east">East India</SelectItem>
                <SelectItem value="west">West India</SelectItem>
                <SelectItem value="northeast">Northeast India</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedInterest} onValueChange={setSelectedInterest}>
              <SelectTrigger>
                <SelectValue placeholder="Interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nature">Nature & Wildlife</SelectItem>
                <SelectItem value="heritage">Heritage & Culture</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="spiritual">Spiritual</SelectItem>
                <SelectItem value="food">Food & Cuisine</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="hero" className="w-full">
              Find Gems
            </Button>
          </div>
        </div>

        {/* Hidden Gems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hiddenGems.map((gem, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={gem.image} 
                  alt={gem.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-saffron">{gem.type}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Camera className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-saffron transition-colors">
                    {gem.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-saffron text-saffron" />
                    <span className="text-sm font-medium">{gem.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{gem.location}</span>
                </div>
                <p className="text-muted-foreground mb-4">{gem.description}</p>
                <Button variant="accent" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="warm" size="lg">
            Explore All Hidden Gems
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiddenGemsSection;