import { useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const facts = [
  "A day on Venus lasts longer than a year — 243 Earth days vs 225.",
  "A neutron star the size of a city weighs more than the Sun.",
  "Space is completely silent — sound waves cannot travel through a vacuum.",
  "It rains diamonds on Saturn and Jupiter.",
  "Light from the Sun reaches Earth in 8 minutes and 20 seconds.",
  "There are more stars in our galaxy than grains of sand on all Earth's beaches.",
  "The largest known star — UY Scuti — is 1,700 times larger than the Sun.",
  "The ISS travels at 27,600 km/h — that's 7.7 km per second.",
];

export const SpaceFactCard = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextFact = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="facts" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/10 via-transparent to-cosmic-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Floating particles */}
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 text-cosmic-purple animate-pulse" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-cosmic-purple/20 text-cosmic-purple text-sm mb-6">
              Fact #{currentFact + 1}
            </span>

            <p
              className={`text-xl md:text-2xl font-medium leading-relaxed mb-8 transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {facts[currentFact]}
            </p>

            <Button
              onClick={nextFact}
              variant="glow"
              className="group/btn"
            >
              Next Fact
              <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            {facts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFact(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentFact
                    ? "bg-cosmic-purple w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
