import { GalaxyCard } from "./GalaxyCard";

const galaxies = [
  {
    name: "Andromeda",
    type: "Spiral Galaxy",
    distance: "2.5 million light-years",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
  },
  {
    name: "Orion Nebula",
    type: "Emission Nebula",
    distance: "1,344 light-years",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
  },
  {
    name: "Milky Way",
    type: "Spiral Galaxy",
    distance: "Our Home",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80",
  },
  {
    name: "Ring Nebula",
    type: "Planetary Nebula",
    distance: "2,000 light-years",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
  },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Cosmic <span className="cosmic-gradient-text">Gallery</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            The most impressive objects in our Universe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galaxies.map((galaxy, index) => (
            <GalaxyCard
              key={galaxy.name}
              {...galaxy}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
