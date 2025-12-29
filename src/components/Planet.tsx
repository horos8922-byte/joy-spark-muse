import { cn } from "@/lib/utils";

interface PlanetProps {
  size: number;
  color: string;
  glowColor: string;
  className?: string;
  hasRing?: boolean;
  delay?: number;
}

export const Planet = ({ 
  size, 
  color, 
  glowColor, 
  className, 
  hasRing = false,
  delay = 0 
}: PlanetProps) => {
  return (
    <div 
      className={cn(
        "absolute animate-gentle-drift transition-cosmic hover:scale-105",
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${18 + delay * 2}s`,
        width: size,
        height: size,
      }}
    >
      {/* Planet body */}
      <div 
        className="w-full h-full rounded-full relative animate-glow-pulse"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}, ${glowColor})`,
          boxShadow: `
            0 0 ${size / 4}px ${glowColor},
            0 0 ${size / 2}px ${glowColor}40,
            inset -${size / 6}px -${size / 6}px ${size / 3}px rgba(0,0,0,0.5)
          `,
        }}
      >
        {/* Surface details */}
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 20% 30% at 40% 40%, rgba(255,255,255,0.4), transparent),
              radial-gradient(ellipse 30% 20% at 70% 60%, rgba(0,0,0,0.3), transparent)
            `,
          }}
        />
      </div>
      
      {/* Ring */}
      {hasRing && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate-slow"
          style={{
            width: size * 1.8,
            height: size * 0.4,
            border: `2px solid ${glowColor}60`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%) rotateX(70deg)',
            boxShadow: `0 0 10px ${glowColor}40`,
          }}
        />
      )}
    </div>
  );
};
