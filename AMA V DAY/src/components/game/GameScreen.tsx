import { useState, useCallback, useEffect } from "react";
import HeartBalloon from "./HeartBalloon";
import Pump from "./Pump";
import MessageCard from "./MessageCard";
import confetti from "canvas-confetti";

interface GameScreenProps {
  messages: string[];
  currentBalloon: number;
  onBalloonComplete: () => void;
  onGameComplete: () => void;
}

const PUMPS_TO_POP = 10; // Number of pumps needed to pop a balloon

const GameScreen = ({
  messages,
  currentBalloon,
  onBalloonComplete,
  onGameComplete,
}: GameScreenProps) => {
  const [pumpCount, setPumpCount] = useState(0);
  const [isPopping, setIsPopping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Calculate progress percentage
  const progress = (pumpCount / PUMPS_TO_POP) * 100;

  // Reset pump count when balloon changes
  useEffect(() => {
    setPumpCount(0);
    setIsPopping(false);
    setShowMessage(false);
  }, [currentBalloon]);

  const handlePump = useCallback(() => {
    if (isPopping || showMessage) return;

    const newCount = pumpCount + 1;
    setPumpCount(newCount);

    // Play pump sound (optional browser audio)
    try {
      const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdW2FjImMfnNrdoOKkY2Fd2tqd4aUmZOJd2dlaHyKl5mTinlrZ2p8jJiZlIt6bGhsfY6ZmpWMfW5qbn6QmpmVjH5wbHCAkZqalY1+cm1xgpKam5aNf3NucYOTmpuWjoBzcnKElJqblpCCdXN0hZWam5aQg3Z0dYaWmpuXkYR3dXaHl5qbl5GFeHZ2iJiampiShnh3d4mYmpqYkoZ5eHiKmJqamZOHeXl5i5mampmTiHp5eoyampmZlIl7enqNmpqZmZWKfHt7jpqamZmWi317e4+ampmal4x8fHyQmpqampiNfXx9kZqamZqYjn59fZKampmamY+AfX6Tmpqampog");
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch {}

    // Check if balloon should pop
    if (newCount >= PUMPS_TO_POP) {
      setIsPopping(true);

      // Pop sound
      try {
        const popAudio = new Audio("data:audio/wav;base64,UklGRl9vAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTtvAACAgICAgICAgICAgICAf");
        popAudio.volume = 0.5;
        popAudio.play().catch(() => {});
      } catch {}

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { x: 0.5, y: 0.35 },
        colors: ["#e11d48", "#f472b6", "#fda4af", "#ffd700"],
        shapes: ["circle"],
        scalar: 1.1,
      });

      // Show message after pop animation
      setTimeout(() => {
        setShowMessage(true);
      }, 400);
    }
  }, [pumpCount, isPopping, showMessage]);

  const handleNext = () => {
    if (currentBalloon >= messages.length) {
      onGameComplete();
    } else {
      onBalloonComplete();
    }
  };

  if (showMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <MessageCard
          message={messages[currentBalloon - 1]}
          balloonNumber={currentBalloon}
          totalBalloons={messages.length}
          onNext={handleNext}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      {/* Balloon counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-valentine-pink">
        <span className="text-lg font-medium text-valentine-deep">
          Balon {currentBalloon} din {messages.length} 🎈
        </span>
      </div>

      {/* Main game area */}
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Heart balloon */}
        <div className="relative">
          <HeartBalloon progress={progress} isPopping={isPopping} />
        </div>

        {/* Pump */}
        <div className="mt-4">
          <Pump onPump={handlePump} disabled={isPopping || showMessage} />
        </div>

        {/* Instructions */}
        <p className="text-center text-muted-foreground max-w-xs">
          Apasă pe pompă pentru a umfla balonul până se sparge! 💕
        </p>
      </div>
    </div>
  );
};

export default GameScreen;
