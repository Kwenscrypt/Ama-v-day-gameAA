import { useState } from "react";
import { cn } from "@/lib/utils";

interface PumpProps {
  onPump: () => void;
  disabled?: boolean;
}

const Pump = ({ onPump, disabled }: PumpProps) => {
  const [isPressing, setIsPressing] = useState(false);

  const handlePump = () => {
    if (disabled) return;
    
    setIsPressing(true);
    onPump();
    
    setTimeout(() => setIsPressing(false), 150);
  };

  return (
    <button
      onClick={handlePump}
      disabled={disabled}
      className={cn(
        "relative cursor-pointer transition-all duration-150 select-none",
        "hover:scale-105 active:scale-95",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      aria-label="Pompă pentru a umfla balonul"
    >
      {/* Pump SVG */}
      <svg
        viewBox="0 0 120 200"
        className={cn(
          "w-24 h-40 md:w-32 md:h-52 transition-transform",
          isPressing && "animate-pump-press"
        )}
      >
        {/* Pump base */}
        <rect
          x="30"
          y="160"
          width="60"
          height="35"
          rx="5"
          fill="hsl(350, 50%, 35%)"
          stroke="hsl(350, 60%, 25%)"
          strokeWidth="2"
        />

        {/* Pump cylinder */}
        <rect
          x="40"
          y="80"
          width="40"
          height="80"
          rx="3"
          fill="hsl(350, 40%, 45%)"
          stroke="hsl(350, 50%, 30%)"
          strokeWidth="2"
        />

        {/* Pump piston (moving part) */}
        <g
          className={cn(
            "transition-transform duration-150 origin-bottom",
            isPressing && "translate-y-3"
          )}
        >
          {/* Handle */}
          <rect
            x="25"
            y="20"
            width="70"
            height="15"
            rx="7"
            fill="hsl(350, 60%, 40%)"
            stroke="hsl(350, 70%, 25%)"
            strokeWidth="2"
          />
          
          {/* Handle grip lines */}
          <line x1="35" y1="25" x2="35" y2="30" stroke="hsl(350, 50%, 30%)" strokeWidth="2" />
          <line x1="45" y1="25" x2="45" y2="30" stroke="hsl(350, 50%, 30%)" strokeWidth="2" />
          <line x1="75" y1="25" x2="75" y2="30" stroke="hsl(350, 50%, 30%)" strokeWidth="2" />
          <line x1="85" y1="25" x2="85" y2="30" stroke="hsl(350, 50%, 30%)" strokeWidth="2" />

          {/* Piston rod */}
          <rect
            x="52"
            y="35"
            width="16"
            height="50"
            fill="hsl(350, 30%, 60%)"
            stroke="hsl(350, 40%, 40%)"
            strokeWidth="2"
          />
        </g>

        {/* Hose */}
        <path
          d="M80 130 Q120 130 120 100 Q120 50 100 20"
          stroke="hsl(350, 30%, 50%)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Hose connector to balloon */}
        <circle cx="100" cy="15" r="8" fill="hsl(350, 50%, 45%)" />

        {/* Highlight */}
        <rect
          x="45"
          y="85"
          width="5"
          height="30"
          rx="2"
          fill="white"
          opacity="0.3"
        />
      </svg>

      {/* Pump instruction */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-valentine-deep">
        Apasă aici! 👆
      </div>
    </button>
  );
};

export default Pump;
