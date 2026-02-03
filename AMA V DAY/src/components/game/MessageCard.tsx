import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

interface MessageCardProps {
  message: string;
  balloonNumber: number;
  totalBalloons: number;
  onNext: () => void;
}

const MessageCard = ({ message, balloonNumber, totalBalloons, onNext }: MessageCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 animate-message-appear">
      {/* Decorative hearts */}
      <div className="flex gap-2 mb-4">
        {[...Array(3)].map((_, i) => (
          <Heart
            key={i}
            className="w-6 h-6 text-primary fill-primary animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Message card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-valentine-pink max-w-md">
        {/* Corner decorations */}
        <div className="absolute -top-3 -left-3 text-2xl">💕</div>
        <div className="absolute -top-3 -right-3 text-2xl">💕</div>
        <div className="absolute -bottom-3 -left-3 text-2xl">🌹</div>
        <div className="absolute -bottom-3 -right-3 text-2xl">🌹</div>

        {/* Progress indicator */}
        <div className="text-sm text-muted-foreground mb-4 text-center">
          Mesajul {balloonNumber} din {totalBalloons}
        </div>

        {/* Main message */}
        <p className="text-2xl md:text-3xl font-medium text-center text-valentine-deep leading-relaxed">
          {message}
        </p>

        {/* Hearts decoration */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-4 h-4 text-valentine-pink fill-valentine-pink animate-pulse-heart"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Next button */}
      <Button
        onClick={onNext}
        size="lg"
        className="mt-8 text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
      >
        {balloonNumber < totalBalloons ? (
          <>
            Următorul Balon
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        ) : (
          <>
            Surpriza Finală
            <Heart className="w-5 h-5 ml-2 fill-current" />
          </>
        )}
      </Button>
    </div>
  );
};

export default MessageCard;
