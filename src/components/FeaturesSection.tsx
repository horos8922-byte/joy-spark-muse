import { FeatureCard } from "./FeatureCard";
import { Telescope, Globe2, Orbit, Stars, Rocket, Satellite } from "lucide-react";

const features = [
  {
    icon: Telescope,
    title: "Deep Space",
    description: "Explore distant galaxies and nebulae located billions of light-years away.",
    color: "purple" as const,
  },
  {
    icon: Globe2,
    title: "Exoplanets",
    description: "Discover worlds beyond our Solar System — potential homes for extraterrestrial life.",
    color: "cyan" as const,
  },
  {
    icon: Orbit,
    title: "Orbital Data",
    description: "Track the movement of planets, asteroids, and comets in real-time.",
    color: "pink" as const,
  },
  {
    icon: Stars,
    title: "Star Maps",
    description: "Interactive 3D maps of the night sky with detailed information about each object.",
    color: "purple" as const,
  },
  {
    icon: Rocket,
    title: "Space Missions",
    description: "Follow active missions from NASA, ESA, and private space companies.",
    color: "cyan" as const,
  },
  {
    icon: Satellite,
    title: "Earth Satellites",
    description: "Visualization of all artificial satellites in orbit around our planet.",
    color: "pink" as const,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Platform <span className="cosmic-gradient-text">Features</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Everything you need to explore space — in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
