import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  color: "purple" | "cyan" | "pink";
}

const colorClasses = {
  purple: {
    icon: "text-cosmic-purple",
    glow: "group-hover:shadow-cosmic-purple/30",
    border: "group-hover:border-cosmic-purple/50",
  },
  cyan: {
    icon: "text-cosmic-cyan",
    glow: "group-hover:shadow-cosmic-cyan/30",
    border: "group-hover:border-cosmic-cyan/50",
  },
  pink: {
    icon: "text-cosmic-pink",
    glow: "group-hover:shadow-cosmic-pink/30",
    border: "group-hover:border-cosmic-pink/50",
  },
};

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  color 
}: FeatureCardProps) => {
  const colors = colorClasses[color];

  return (
    <div 
      className={cn(
        "group glass-card rounded-2xl p-8 transition-all duration-500",
        "hover:scale-105 hover:shadow-2xl cursor-pointer",
        "opacity-0 animate-scale-in",
        colors.glow,
        colors.border
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
        "bg-muted/50 transition-all duration-300",
        "group-hover:scale-110 group-hover:rotate-3"
      )}>
        <Icon className={cn("w-7 h-7 transition-colors", colors.icon)} />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:cosmic-gradient-text transition-all">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
