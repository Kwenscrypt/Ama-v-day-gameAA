import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface FinalScreenProps {
  onReplay: () => void;
}

const FinalScreen = ({ onReplay }: FinalScreenProps) => {
  useEffect(() => {
    // Big confetti celebration
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#e11d48", "#f472b6", "#fda4af", "#fecdd3", "#ffd700"];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors,
        shapes: ["circle", "square"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors,
        shapes: ["circle", "square"],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    // Heart confetti burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: colors,
      shapes: ["circle"],
      scalar: 1.2,
    });

    frame();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center relative z-10 animate-message-appear">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            {["💕", "💗", "💖", "💝", "❤️"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Love letter */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-valentine-pink max-w-lg">
        {/* Wax seal */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-valentine-deep flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        {/* Letter header */}
        <div className="mt-6 mb-6">
          <p className="text-lg text-valentine-deep italic">Pentru cea mai specială...</p>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-valentine-pink bg-clip-text text-transparent mb-6">
          Ama 💝
        </h1>

        {/* Love letter content */}
        <div className="space-y-4 text-lg md:text-xl text-valentine-deep leading-relaxed">
          <p>
            Dragostea mea,
          </p>
          <p>
            Fiecare zi petrecută alături de tine este un dar. Ești lumina care îmi ghidează pașii și căldura care îmi încălzește sufletul.
          </p>
          <p>
            Tu faci lumea mea mai frumoasă cu fiecare zâmbet, cu fiecare privire, cu fiecare moment împreună.
          </p>
          <p className="font-medium text-primary">
            Te iubesc infinit și mereu! 💕
          </p>
        </div>

        {/* Signature */}
        <div className="mt-8 text-right">
          <p className="text-xl italic text-valentine-deep">Cu toată dragostea,</p>
          <p className="text-3xl font-bold text-primary mt-2">Theo ❤️</p>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-4 left-4 text-2xl">🌹</div>
        <div className="absolute top-4 right-4 text-2xl">🌹</div>
        <div className="absolute bottom-4 left-4 text-2xl">💐</div>
        <div className="absolute bottom-4 right-4 text-2xl">💐</div>
      </div>

      {/* Replay button */}
      <Button
        onClick={onReplay}
        variant="outline"
        size="lg"
        className="mt-8 text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
      >
        <RotateCcw className="w-5 h-5 mr-2" />
        Joacă din Nou
      </Button>

      {/* Happy Valentine's Day */}
      <p className="mt-6 text-2xl font-bold text-primary animate-pulse-heart">
        Happy Valentine's Day! 💕
      </p>
    </div>
  );
};

export default FinalScreen;
