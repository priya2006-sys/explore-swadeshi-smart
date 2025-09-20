import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HiddenGemsSection from "@/components/HiddenGemsSection";
import ItinerarySection from "@/components/ItinerarySection";
import HomestaySection from "@/components/HomestaySection";
import CulturalCalendarSection from "@/components/CulturalCalendarSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HiddenGemsSection />
      <ItinerarySection />
      <HomestaySection />
      <CulturalCalendarSection />
      <Footer />
    </div>
  );
};

export default Index;
