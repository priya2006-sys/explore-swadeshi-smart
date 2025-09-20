import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Calendar, DollarSign, Clock, Users, Sparkles } from "lucide-react";
import { useState } from "react";

const ItinerarySection = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    budget: "",
    interests: "",
    travelers: ""
  });

  return (
    <section id="itinerary" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Smart <span className="text-teal">Itinerary</span> Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get AI-powered personalized travel plans tailored to your preferences, budget, and time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-saffron" />
                Plan Your Perfect Trip
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Destination</label>
                <Input 
                  placeholder="Where would you like to go?"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Duration</label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="5">5 Days</SelectItem>
                      <SelectItem value="7">1 Week</SelectItem>
                      <SelectItem value="14">2 Weeks</SelectItem>
                      <SelectItem value="21">3 Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Travelers</label>
                  <Select value={formData.travelers} onValueChange={(value) => setFormData({...formData, travelers: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="People" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Solo</SelectItem>
                      <SelectItem value="2">Couple</SelectItem>
                      <SelectItem value="3-4">Small Group</SelectItem>
                      <SelectItem value="5+">Large Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Budget Range (per person)</label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">₹5,000 - ₹15,000</SelectItem>
                    <SelectItem value="mid">₹15,000 - ₹35,000</SelectItem>
                    <SelectItem value="luxury">₹35,000 - ₹75,000</SelectItem>
                    <SelectItem value="premium">₹75,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Interests & Preferences</label>
                <Textarea 
                  placeholder="Tell us about your interests: adventure, culture, food, nature, relaxation..."
                  value={formData.interests}
                  onChange={(e) => setFormData({...formData, interests: e.target.value})}
                  rows={3}
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Generate My Itinerary
              </Button>
            </CardContent>
          </Card>

          {/* Sample Itinerary Preview */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Sample: 5-Day Rajasthan Heritage</CardTitle>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    5 Days
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    ₹25,000/person
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    2 People
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Jaipur Arrival & City Palace</h4>
                      <p className="text-sm text-muted-foreground">Heritage walk, local cuisine, Hawa Mahal</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Amber Fort & Johari Bazaar</h4>
                      <p className="text-sm text-muted-foreground">Elephant ride, handicraft shopping</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Pushkar Sacred Lake</h4>
                      <p className="text-sm text-muted-foreground">Camel safari, sunset at sand dunes</p>
                    </div>
                  </div>
                </div>
                <Button variant="accent" className="w-full">
                  <Clock className="w-4 h-4" />
                  View Full Itinerary
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <MapPin className="w-8 h-8 text-saffron mx-auto mb-2" />
                <h4 className="font-semibold">Smart Routes</h4>
                <p className="text-sm text-muted-foreground">Optimized travel paths</p>
              </Card>
              <Card className="p-4 text-center">
                <DollarSign className="w-8 h-8 text-teal mx-auto mb-2" />
                <h4 className="font-semibold">Live Pricing</h4>
                <p className="text-sm text-muted-foreground">Real-time cost updates</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;