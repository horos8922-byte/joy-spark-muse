import { useEffect, useState, useRef } from "react";

export const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
        rafRef.current = undefined;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 - Far background elements */}
      <div 
        className="absolute inset-0 transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={`far-${i}`}
            className="absolute w-1 h-1 rounded-full bg-cosmic-cyan/40"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 4) * 25}%`,
              boxShadow: '0 0 20px hsl(190 100% 50% / 0.4)',
            }}
          />
        ))}
      </div>

      {/* Layer 2 - Mid elements with aurora effect */}
      <div 
        className="absolute inset-0 transition-transform duration-[1500ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      >
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-gentle-drift"
          style={{
            background: 'radial-gradient(circle, hsl(280 100% 60% / 0.3) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-gentle-drift"
          style={{
            background: 'radial-gradient(circle, hsl(190 100% 50% / 0.3) 0%, transparent 70%)',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Layer 3 - Closer floating particles */}
      <div 
        className="absolute inset-0 transition-transform duration-[1000ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px)`,
        }}
      >
        {[...Array(12)].map((_, i) => {
          const colors = [
            'hsl(280 100% 70%)',
            'hsl(190 100% 50%)',
            'hsl(320 100% 60%)',
          ];
          return (
            <div
              key={`near-${i}`}
              className="absolute rounded-full animate-gentle-drift"
              style={{
                width: 3 + (i % 3) * 2,
                height: 3 + (i % 3) * 2,
                left: `${8 + i * 8}%`,
                top: `${15 + (i % 5) * 18}%`,
                backgroundColor: colors[i % 3],
                boxShadow: `0 0 15px ${colors[i % 3]}`,
                animationDelay: `${i * 0.8}s`,
                opacity: 0.6,
              }}
            />
          );
        })}
      </div>

      {/* Interactive glow rings */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
        }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cosmic-purple/10 animate-rotate-slow"
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cosmic-cyan/5"
          style={{ animationDuration: '40s' }}
        />
      </div>
    </div>
  );
};
