import { FeatureCard } from "./FeatureCard";
import { Telescope, Globe2, Orbit, Stars, Rocket, Satellite } from "lucide-react";

const features = [
  {
    icon: Telescope,
    title: "Глубокий космос",
    description: "Исследуй далёкие галактики и туманности, расположенные на расстоянии миллиардов световых лет.",
    color: "purple" as const,
  },
  {
    icon: Globe2,
    title: "Экзопланеты",
    description: "Открой миры за пределами нашей Солнечной системы — потенциальные дома для внеземной жизни.",
    color: "cyan" as const,
  },
  {
    icon: Orbit,
    title: "Орбитальные данные",
    description: "Отслеживай движение планет, астероидов и комет в реальном времени.",
    color: "pink" as const,
  },
  {
    icon: Stars,
    title: "Звёздные карты",
    description: "Интерактивные 3D-карты звёздного неба с детальной информацией о каждом объекте.",
    color: "purple" as const,
  },
  {
    icon: Rocket,
    title: "Космические миссии",
    description: "Следи за активными миссиями NASA, ESA и частных космических компаний.",
    color: "cyan" as const,
  },
  {
    icon: Satellite,
    title: "Спутники Земли",
    description: "Визуализация всех искусственных спутников на орбите нашей планеты.",
    color: "pink" as const,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="cosmic-gradient-text">Возможности</span> платформы
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Всё, что нужно для изучения космоса — в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
