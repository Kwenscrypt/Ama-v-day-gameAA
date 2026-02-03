import { useState } from "react";
import FloatingPetals from "./FloatingPetals";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import FinalScreen from "./FinalScreen";

type GameState = "start" | "playing" | "finished";

const MESSAGES = [
  "Ești cea mai frumoasă întâmplare a mea 💕",
  "În fiecare zi te aleg pe tine 💘",
  "Tu ești acasă pentru inima mea 🏡💗",
  "Zâmbetul tău e locul meu preferat 😊",
  "Cu tine, totul are sens ✨",
  "Tu ești Valentine-ul meu în fiecare zi 💞",
  "Ești tot ce mi-am dorit vreodată 💝",
  "Lângă tine sunt cea mai bună versiune a mea 🌹",
  "Inima mea bate pentru tine 💓",
  "Tu faci viața mea extraordinară 🦋💕",
];

const ValentineGame = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [currentBalloon, setCurrentBalloon] = useState(1);

  const handleStart = () => {
    setGameState("playing");
    setCurrentBalloon(1);
  };

  const handleBalloonComplete = () => {
    setCurrentBalloon((prev) => prev + 1);
  };

  const handleGameComplete = () => {
    setGameState("finished");
  };

  const handleReplay = () => {
    setGameState("start");
    setCurrentBalloon(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-valentine-blush via-secondary to-valentine-pink overflow-hidden relative">
      {/* Background petals */}
      <FloatingPetals />

      {/* Game states */}
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      
      {gameState === "playing" && (
        <GameScreen
          messages={MESSAGES}
          currentBalloon={currentBalloon}
          onBalloonComplete={handleBalloonComplete}
          onGameComplete={handleGameComplete}
        />
      )}
      
      {gameState === "finished" && <FinalScreen onReplay={handleReplay} />}
    </div>
  );
};

export default ValentineGame;
