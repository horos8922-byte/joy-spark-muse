import { useMemo } from "react";

export const Meteors = () => {
  const meteors = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 3,
      duration: 2 + Math.random(),
      top: Math.random() * 50,
      left: Math.random() * 50,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute w-1 h-1 bg-foreground rounded-full"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animation: `meteor ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
            boxShadow: `
              0 0 10px 2px hsl(var(--foreground)),
              -100px -100px 0 hsl(var(--foreground) / 0.1),
              -150px -150px 0 hsl(var(--foreground) / 0.05)
            `,
          }}
        >
          {/* Meteor trail */}
          <div 
            className="absolute h-px w-32 -left-32 top-0 bg-gradient-to-l from-foreground to-transparent"
            style={{ transform: 'rotate(-45deg)', transformOrigin: 'right center' }}
          />
        </div>
      ))}
    </div>
  );
};
