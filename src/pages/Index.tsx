import { Stars } from "@/components/Stars";
import { Nebula } from "@/components/Nebula";
import { Meteors } from "@/components/Meteor";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { OrbitingElements } from "@/components/OrbitingElements";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />
      
      {/* Background effects */}
      <Stars />
      <Nebula />
      <Meteors />
      <OrbitingElements />
      
      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <GallerySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
