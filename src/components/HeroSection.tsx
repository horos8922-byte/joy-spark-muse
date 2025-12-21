import { Button } from "@/components/ui/button";
import { Planet } from "./Planet";
import { Rocket, Sparkles, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Floating planets */}
      <Planet 
        size={120} 
        color="hsl(280 100% 60%)" 
        glowColor="hsl(280 100% 70%)"
        className="top-20 right-[15%] opacity-80"
        hasRing
        delay={0}
      />
      <Planet 
        size={80} 
        color="hsl(190 100% 50%)" 
        glowColor="hsl(190 100% 60%)"
        className="bottom-32 left-[10%] opacity-70"
        delay={1.5}
      />
      <Planet 
        size={50} 
        color="hsl(320 100% 60%)" 
        glowColor="hsl(320 100% 70%)"
        className="top-40 left-[20%] opacity-60"
        delay={3}
      />
      <Planet 
        size={40} 
        color="hsl(60 100% 70%)" 
        glowColor="hsl(60 100% 80%)"
        className="bottom-48 right-[25%] opacity-50"
        delay={2}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-cosmic-purple/30 text-cosmic-purple text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Исследуй бесконечность
          </span>
        </div>

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <span className="block text-foreground">Путешествие</span>
          <span className="cosmic-gradient-text glow-text">сквозь Космос</span>
        </h1>

        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Открой для себя тайны Вселенной. Миллиарды галактик, 
          триллионы звёзд — и всё это ждёт твоего открытия.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-scale-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <Button variant="cosmic" size="xl" className="group">
            <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            Начать путешествие
          </Button>
          <Button variant="glow" size="xl">
            Узнать больше
          </Button>
        </div>
      </div>

      {/* Scroll indicator - animated arrow */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-cosmic-purple transition-colors cursor-pointer group">
          <span className="text-xs uppercase tracking-widest">Скролль</span>
          <ChevronDown className="w-6 h-6 animate-float-arrow group-hover:text-cosmic-cyan transition-colors" />
        </div>
      </div>
    </section>
  );
};
