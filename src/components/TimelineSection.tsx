import { Rocket, Satellite, Globe, Star, Telescope, Atom } from "lucide-react";

const events = [
  {
    year: "1957",
    title: "Sputnik 1",
    description: "First artificial Earth satellite",
    Icon: Satellite,
    color: "cosmic-cyan",
  },
  {
    year: "1961",
    title: "Yuri Gagarin",
    description: "First human in space",
    Icon: Rocket,
    color: "cosmic-purple",
  },
  {
    year: "1969",
    title: "Apollo 11",
    description: "First Moon landing",
    Icon: Globe,
    color: "cosmic-pink",
  },
  {
    year: "1990",
    title: "Hubble",
    description: "Space telescope launch",
    Icon: Telescope,
    color: "cosmic-cyan",
  },
  {
    year: "2012",
    title: "Higgs Boson",
    description: "Discovery of the God particle",
    Icon: Atom,
    color: "cosmic-purple",
  },
  {
    year: "2024",
    title: "Artemis",
    description: "Return to the Moon",
    Icon: Star,
    color: "cosmic-pink",
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-gradient-text">History</span> of Space Exploration
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Key moments that changed our understanding of the Universe
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cosmic-purple/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {events.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Content */}
                <div
                  className={`flex-1 glass-card p-6 rounded-2xl hover-glow transition-cosmic group ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className={`text-${event.color} text-sm font-medium`}>
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-cosmic-purple transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-full glass-card flex items-center justify-center shrink-0 group hover:scale-110 transition-transform`}
                  style={{
                    boxShadow: `0 0 30px hsl(var(--${event.color}) / 0.4)`,
                  }}
                >
                  <event.Icon
                    className={`w-6 h-6 text-${event.color} group-hover:animate-pulse`}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
