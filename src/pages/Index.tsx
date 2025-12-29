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
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { FloatingIcons } from "@/components/FloatingIcons";
import { TimelineSection } from "@/components/TimelineSection";
import { QuoteSection } from "@/components/QuoteSection";
import { CosmicCounter } from "@/components/CosmicCounter";
import { SpaceFactCard } from "@/components/SpaceFactCard";

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
      <ParallaxBackground />
      <FloatingIcons />
      
      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <CosmicCounter />
        <TimelineSection />
        <QuoteSection />
        <SpaceFactCard />
        <StatsSection />
        <GallerySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
