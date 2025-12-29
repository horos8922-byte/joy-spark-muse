import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-4xl md:text-6xl font-bold cosmic-gradient-text">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const counters = [
  { end: 200, suffix: "B+", label: "Galaxies in the Universe" },
  { end: 100, suffix: "B", label: "Stars in the Milky Way" },
  { end: 5500, suffix: "+", label: "Discovered Exoplanets" },
  { end: 13, suffix: ".8B years", label: "Age of the Universe" },
];

export const CosmicCounter = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Universe in <span className="cosmic-gradient-text">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 rounded-2xl hover-glow transition-cosmic group"
            >
              <AnimatedCounter
                end={counter.end}
                suffix={counter.suffix}
                duration={2500 + index * 200}
              />
              <p className="text-muted-foreground mt-4 text-sm group-hover:text-cosmic-cyan transition-colors">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
