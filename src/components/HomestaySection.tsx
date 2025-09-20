import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Coffee, Car, Users, Heart } from "lucide-react";
import homestayImage from "@/assets/homestay.jpg";

const HomestaySection = () => {
  const homestays = [
    {
      name: "Himalayan Heritage Home",
      location: "Manali, Himachal Pradesh",
      host: "Raj & Priya Sharma",
      rating: 4.9,
      reviews: 127,
      price: "₹2,500",
      image: homestayImage,
      amenities: ["Wifi", "Meals", "Parking", "Guide"],
      verified: true,
      type: "Mountain View"
    },
    {
      name: "Rajasthani Haveli Experience", 
      location: "Jodhpur, Rajasthan",
      host: "Maharaj Singh",
      rating: 4.8,
      reviews: 89,
      price: "₹3,200",
      image: homestayImage,
      amenities: ["Wifi", "Cultural Show", "Camel Ride", "Traditional Food"],
      verified: true,
      type: "Heritage"
    },
    {
      name: "Backwater Bliss Homestay",
      location: "Alleppey, Kerala", 
      host: "Maria & Joseph",
      rating: 4.7,
      reviews: 156,
      price: "₹2,800",
      image: homestayImage,
      amenities: ["Wifi", "Boat Ride", "Fishing", "Ayurveda"],
      verified: true,
      type: "Backwaters"
    }
  ];

  return (
    <section id="homestays" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Verified <span className="text-saffron">Homestays</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience authentic hospitality with verified local hosts offering genuine cultural immersion
          </p>
        </div>

        {/* Featured Homestays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {homestays.map((homestay, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={homestay.image} 
                  alt={homestay.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-saffron border-0">
                    {homestay.type}
                  </Badge>
                </div>
                {homestay.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-lg font-bold text-foreground">{homestay.price}</span>
                  <span className="text-sm text-muted-foreground">/night</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-saffron transition-colors">
                    {homestay.name}
                  </h3>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{homestay.location}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-saffron text-saffron" />
                    <span className="font-medium">{homestay.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({homestay.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Host: <span className="font-medium">{homestay.host}</span>
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {homestay.amenities.slice(0, 3).map((amenity, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {homestay.amenities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{homestay.amenities.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <Button variant="hero" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-soft p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose SmartStay Homestays?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Verified Hosts</h4>
              <p className="text-sm text-muted-foreground">Background checked and identity verified</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Local Experience</h4>
              <p className="text-sm text-muted-foreground">Authentic cultural immersion with locals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Home Cooked Meals</h4>
              <p className="text-sm text-muted-foreground">Traditional regional cuisine included</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Car className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">Travel Support</h4>
              <p className="text-sm text-muted-foreground">Local transportation and guides arranged</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="warm" size="lg">
            Explore All Homestays
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomestaySection;