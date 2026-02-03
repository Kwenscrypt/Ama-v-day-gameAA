import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center relative z-10">
      {/* Title with hearts */}
      <div className="flex items-center gap-3 mb-4">
        <Heart className="w-10 h-10 text-primary animate-pulse-heart fill-primary" />
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Valentine's Day
        </h1>
        <Heart className="w-10 h-10 text-primary animate-pulse-heart fill-primary" />
      </div>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-valentine-deep mb-2 font-medium">
        Un joc special pentru
      </p>
      
      {/* Name with special styling */}
      <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-valentine-pink bg-clip-text text-transparent mb-8 animate-float">
        Ama 💝
      </h2>

      {/* Description */}
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Apasă pe pompă pentru a umfla baloanele-inimă și descoperă mesaje speciale de la Theo! 🎈
      </p>

      {/* Start button */}
      <Button
        onClick={onStart}
        size="lg"
        className="text-xl px-12 py-6 rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
      >
        <Heart className="w-6 h-6 mr-2 fill-current" />
        Începe Jocul
        <Heart className="w-6 h-6 ml-2 fill-current" />
      </Button>

      {/* Decorative hearts */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-50">
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            className="w-6 h-6 text-valentine-pink fill-valentine-pink animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default StartScreen;
