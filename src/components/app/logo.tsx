import { useState, useEffect } from "react";

export default function KnowNepalLogo() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setTimeout(() => setOn(true), 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
          opacity: on ? 1 : 0,
          transform: on ? "translateY(0)" : "translateY(16px)",
          transition: "all 1s ease",
        }}
      >
        {/* Mountain SVG */}
        <svg width="320" height="140" viewBox="0 0 320 140" fill="none">
          <defs>
            <linearGradient id="mtn" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC143C" />
              <stop offset="100%" stopColor="#FF5566" />
            </linearGradient>
            <linearGradient id="snow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f0d8d8" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC143C" />
              <stop offset="50%" stopColor="#FF8C42" />
              <stop offset="100%" stopColor="#003893" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="snowCap">
              <rect x="0" y="0" width="320" height="45" />
            </clipPath>
          </defs>

          {/* Mountains */}
          <polygon
            points="20,110 60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38 280,78 300,110"
            fill="url(#mtn)"
          />
          {/* Snow caps */}
          <polygon
            points="20,110 60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38 280,78 300,110"
            fill="url(#snow)"
            clipPath="url(#snowCap)"
          />
          {/* Ridge line */}
          <polyline
            points="60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Peak dots */}
          {[
            { x: 160, y: 8 },
            { x: 118, y: 18 },
            { x: 200, y: 28 },
            { x: 252, y: 38 },
          ].map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="2.5"
              fill="white"
              filter="url(#glow)"
            />
          ))}
          {/* Base line */}
          <line
            x1="20"
            y1="110"
            x2="300"
            y2="110"
            stroke="url(#line)"
            strokeWidth="2"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "10px",
            marginTop: "-6px",
            fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
          }}
        >
          <span
            style={{
              fontSize: "44px",
              fontWeight: 300,
              letterSpacing: "0.2em",
              color: "#F0ECE8",
              textTransform: "uppercase",
            }}
          >
            Know
          </span>
          <span
            style={{
              fontSize: "44px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#DC143C",
              textTransform: "uppercase",
              filter: "drop-shadow(0 0 16px rgba(220,20,60,0.45))",
            }}
          >
            Nepal
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "10px",
            fontFamily: "'Courier New', monospace",
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#444",
          }}
        >
          Open Data · Community · Knowledge
        </div>
      </div>
    </div>
  );
}
