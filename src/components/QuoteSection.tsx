import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Земля — колыбель человечества, но нельзя вечно жить в колыбели.",
    author: "Константин Циолковский",
  },
  {
    text: "Это один маленький шаг для человека, но гигантский скачок для человечества.",
    author: "Нил Армстронг",
  },
  {
    text: "Где-то там что-то невероятное ждёт, чтобы его узнали.",
    author: "Карл Саган",
  },
];

export const QuoteSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cosmic-purple animate-gentle-drift" />
        <div
          className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-cosmic-cyan animate-gentle-drift"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-cosmic-pink animate-gentle-drift"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl relative group hover-glow transition-cosmic"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote
                className="absolute -top-3 -left-3 w-8 h-8 text-cosmic-purple/50 group-hover:text-cosmic-purple transition-colors"
                style={{
                  filter: "drop-shadow(0 0 10px hsl(var(--cosmic-purple) / 0.5))",
                }}
              />
              <blockquote className="text-foreground/90 italic mb-6 leading-relaxed">
                "{quote.text}"
              </blockquote>
              <cite className="text-cosmic-cyan text-sm not-italic font-medium">
                — {quote.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
