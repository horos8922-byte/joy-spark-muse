import { useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const facts = [
  "На Венере день длится дольше, чем год — 243 земных дня против 225.",
  "Нейтронная звезда размером с город весит больше, чем Солнце.",
  "В космосе полная тишина — звуковые волны не распространяются в вакууме.",
  "На Сатурне и Юпитере идут алмазные дожди.",
  "Свет от Солнца достигает Земли за 8 минут 20 секунд.",
  "В нашей галактике больше звёзд, чем песчинок на всех пляжах Земли.",
  "Самая большая известная звезда — UY Щита — в 1700 раз больше Солнца.",
  "МКС движется со скоростью 27 600 км/ч — это 7,7 км в секунду.",
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
    <section className="py-24 px-6">
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
              Факт #{currentFact + 1}
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
              Следующий факт
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
