import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";
import festivalImage from "@/assets/festival.jpg";

const CulturalCalendarSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("october");

  const festivals = [
    {
      name: "Diwali - Festival of Lights",
      date: "October 24, 2024",
      location: "All across India",
      duration: "5 days",
      description: "The grandest Hindu festival celebrating the victory of light over darkness",
      image: festivalImage,
      type: "Religious",
      crowd: "High",
      bestPlaces: ["Varanasi", "Jaipur", "Mumbai"]
    },
    {
      name: "Pushkar Camel Fair",
      date: "November 15-23, 2024", 
      location: "Pushkar, Rajasthan",
      duration: "8 days",
      description: "World's largest camel trading fair with cultural performances",
      image: festivalImage,
      type: "Cultural",
      crowd: "Medium",
      bestPlaces: ["Pushkar"]
    },
    {
      name: "Goa Carnival",
      date: "February 10-13, 2025",
      location: "Goa",
      duration: "4 days", 
      description: "Vibrant carnival with parades, music, and Portuguese-influenced celebrations",
      image: festivalImage,
      type: "Cultural",
      crowd: "High",
      bestPlaces: ["Panaji", "Margao", "Vasco"]
    }
  ];

  const months = [
    { value: "october", label: "October", count: 8 },
    { value: "november", label: "November", count: 6 },
    { value: "december", label: "December", count: 4 },
    { value: "january", label: "January", count: 7 },
    { value: "february", label: "February", count: 5 },
    { value: "march", label: "March", count: 9 }
  ];

  return (
    <section id="culture" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cultural <span className="text-teal">Calendar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Never miss India's vibrant festivals and cultural celebrations with our comprehensive event calendar
          </p>
        </div>

        {/* Month Selection */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {months.map((month) => (
            <Button 
              key={month.value}
              variant={selectedMonth === month.value ? "hero" : "outline"}
              onClick={() => setSelectedMonth(month.value)}
              className="relative"
            >
              {month.label}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-current border-0">
                {month.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Festivals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {festivals.map((festival, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-saffron border-0">
                    {festival.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`bg-white/90 border-0 ${
                      festival.crowd === 'High' ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {festival.crowd} Crowd
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-saffron transition-colors">
                  {festival.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {festival.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {festival.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {festival.duration}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {festival.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Best Places to Experience:</p>
                  <div className="flex flex-wrap gap-1">
                    {festival.bestPlaces.map((place, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {place}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="accent" className="w-full">
                  Add to Trip
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar Widget */}
        <Card className="max-w-4xl mx-auto shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-saffron" />
              Upcoming Cultural Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Karva Chauth</h4>
                  <span className="text-sm text-muted-foreground">Oct 20</span>
                </div>
                <p className="text-sm text-muted-foreground">Traditional Hindu festival for married women</p>
              </div>
              
              <div className="p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Bhai Dooj</h4>
                  <span className="text-sm text-muted-foreground">Oct 26</span>
                </div>
                <p className="text-sm text-muted-foreground">Celebrating brother-sister bond</p>
              </div>
              
              <div className="p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Chhath Puja</h4>
                  <span className="text-sm text-muted-foreground">Nov 7-10</span>
                </div>
                <p className="text-sm text-muted-foreground">Sun worship festival in Bihar & UP</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="warm">
                <Calendar className="w-4 h-4" />
                View Full Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CulturalCalendarSection;