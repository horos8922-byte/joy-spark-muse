import { cn } from "@/lib/utils";

const stats = [
  { value: "200B+", label: "Galaxies in the Universe", color: "cosmic-purple" },
  { value: "100B", label: "Stars in the Milky Way", color: "cosmic-cyan" },
  { value: "5000+", label: "Confirmed Exoplanets", color: "cosmic-pink" },
  { value: "∞", label: "Possibilities for Discovery", color: "cosmic-purple" },
];

export const StatsSection = () => {
  return (
    <section id="stats" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 glow-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={cn(
                  "text-center opacity-0 animate-scale-in",
                  "group cursor-default"
                )}
                style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <div 
                  className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-300",
                    "group-hover:scale-110",
                    stat.color === "cosmic-purple" && "text-cosmic-purple",
                    stat.color === "cosmic-cyan" && "text-cosmic-cyan",
                    stat.color === "cosmic-pink" && "text-cosmic-pink",
                  )}
                >
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
