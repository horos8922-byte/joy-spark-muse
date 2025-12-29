import { Star, Moon, Sun, Orbit, Atom, Compass } from "lucide-react";

const icons = [
  { Icon: Star, color: "cosmic-purple", position: { top: "15%", left: "8%" }, delay: 0 },
  { Icon: Moon, color: "cosmic-cyan", position: { top: "25%", right: "12%" }, delay: 1.5 },
  { Icon: Sun, color: "cosmic-pink", position: { bottom: "35%", left: "5%" }, delay: 3 },
  { Icon: Orbit, color: "cosmic-purple", position: { bottom: "20%", right: "8%" }, delay: 2 },
  { Icon: Atom, color: "cosmic-cyan", position: { top: "60%", left: "15%" }, delay: 4 },
  { Icon: Compass, color: "cosmic-pink", position: { top: "45%", right: "5%" }, delay: 2.5 },
];

export const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {icons.map(({ Icon, color, position, delay }, index) => (
        <div
          key={index}
          className={`absolute animate-gentle-drift opacity-20 hover:opacity-40 transition-opacity`}
          style={{
            ...position,
            animationDelay: `${delay}s`,
          }}
        >
          <div 
            className="p-4 rounded-full backdrop-blur-sm border border-border/20"
            style={{
              background: `radial-gradient(circle, hsl(var(--${color}) / 0.1) 0%, transparent 70%)`,
            }}
          >
            <Icon 
              className={`w-6 h-6 text-${color}`}
              style={{
                filter: `drop-shadow(0 0 10px hsl(var(--${color}) / 0.5))`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
