import { cn } from "@/lib/utils";

interface GalaxyCardProps {
  name: string;
  type: string;
  distance: string;
  image: string;
  delay?: number;
}

export const GalaxyCard = ({ name, type, distance, image, delay = 0 }: GalaxyCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        "opacity-0 animate-scale-in transition-all duration-500",
        "hover:scale-105"
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/20 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-xs text-cosmic-cyan font-medium tracking-wider uppercase mb-2 block">
          {type}
        </span>
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:cosmic-gradient-text transition-all">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {distance}
        </p>
      </div>
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl border border-border/50 group-hover:border-cosmic-purple/50 transition-colors duration-500" />
    </div>
  );
};
