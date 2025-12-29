import { Rocket } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-purple to-cosmic-cyan flex items-center justify-center">
              <Rocket className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xl font-bold cosmic-gradient-text">Cosmic Journey</span>
          </div>
          
          <nav className="flex items-center gap-8">
            {["Explore", "Gallery", "Missions", "About"].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-muted-foreground hover:text-cosmic-cyan transition-colors duration-300 text-sm"
              >
                {link}
              </a>
            ))}
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Cosmic Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
