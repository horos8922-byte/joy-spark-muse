import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Main glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 400,
          height: 400,
          left: position.x - 200,
          top: position.y - 200,
          background: `radial-gradient(circle, hsl(280 100% 70% / 0.15), hsl(190 100% 50% / 0.1), transparent 70%)`,
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
      {/* Inner bright spot */}
      <div
        className="absolute rounded-full blur-xl"
        style={{
          width: 100,
          height: 100,
          left: position.x - 50,
          top: position.y - 50,
          background: `radial-gradient(circle, hsl(280 100% 80% / 0.3), transparent 70%)`,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />
    </div>
  );
};
