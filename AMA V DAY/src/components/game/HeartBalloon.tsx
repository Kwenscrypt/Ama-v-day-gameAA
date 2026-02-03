import { cn } from "@/lib/utils";

interface HeartBalloonProps {
  progress: number; // 0 to 100
  isPopping: boolean;
}

const HeartBalloon = ({ progress, isPopping }: HeartBalloonProps) => {
  // Calculate size based on progress (starts small, grows big)
  const minScale = 0.3;
  const maxScale = 1;
  const scale = minScale + (progress / 100) * (maxScale - minScale);

  // Calculate color intensity based on progress
  const colorIntensity = 50 + (progress / 100) * 30;

  return (
    <div
      className={cn(
        "relative transition-transform duration-150",
        isPopping && "animate-pop"
      )}
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {/* Heart balloon SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-48 h-48 md:w-64 md:h-64 drop-shadow-lg"
        style={{
          filter: `drop-shadow(0 10px 20px hsla(350, 80%, ${colorIntensity}%, 0.4))`,
        }}
      >
        {/* Heart shape */}
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 80%, 55%)" />
            <stop offset="50%" stopColor="hsl(340, 85%, 60%)" />
            <stop offset="100%" stopColor="hsl(330, 70%, 65%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main heart */}
        <path
          d="M50 88 C20 60 5 40 5 25 C5 10 20 5 35 15 C45 22 50 30 50 30 C50 30 55 22 65 15 C80 5 95 10 95 25 C95 40 80 60 50 88Z"
          fill="url(#heartGradient)"
          filter="url(#glow)"
          className={cn(
            "transition-all duration-150",
            progress > 80 && "animate-pulse-heart"
          )}
        />

        {/* Shine effect */}
        <ellipse
          cx="30"
          cy="25"
          rx="10"
          ry="8"
          fill="white"
          opacity="0.4"
        />
        <ellipse
          cx="70"
          cy="25"
          rx="8"
          ry="6"
          fill="white"
          opacity="0.3"
        />
      </svg>

      {/* Balloon string */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full">
        <svg width="20" height="60" viewBox="0 0 20 60">
          <path
            d="M10 0 Q15 20 5 40 Q0 50 10 60"
            stroke="hsl(350, 60%, 50%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Progress indicator */}
      {progress > 0 && progress < 100 && !isPopping && (
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-lg font-bold text-primary">
          {Math.round(progress)}%
        </div>
      )}

      {/* Warning shake when almost full */}
      {progress >= 90 && !isPopping && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl animate-pulse">💥</span>
        </div>
      )}
    </div>
  );
};

export default HeartBalloon;
