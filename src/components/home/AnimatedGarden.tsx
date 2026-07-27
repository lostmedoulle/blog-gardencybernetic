import React, { useEffect, useState } from 'react';

export const AnimatedGarden: React.FC = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  // Robot random blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cyber-garden-container">
      {/* Background Night Window */}
      <div className="window-frame">
        <div className="night-sky">
          {/* Star particles */}
          <div className="star star-1" />
          <div className="star star-2" />
          <div className="star star-3" />
          <div className="star star-4" />
          <div className="star star-5" />
          <div className="moon" />

          {/* City Skyline SVG */}
          <svg className="city-skyline" viewBox="0 0 400 180" fill="none" preserveAspectRatio="none">
            {/* Distant Buildings */}
            <rect x="20" y="80" width="35" height="100" fill="#0d1322" />
            <rect x="25" y="90" width="6" height="8" fill="#fbbf24" fillOpacity="0.4" />
            <rect x="38" y="110" width="6" height="8" fill="#38bdf8" fillOpacity="0.4" />

            <rect x="70" y="60" width="45" height="120" fill="#090d16" />
            <rect x="78" y="75" width="8" height="12" fill="#38bdf8" fillOpacity="0.5" />
            <rect x="95" y="100" width="8" height="12" fill="#a78bfa" fillOpacity="0.5" />

            <rect x="130" y="90" width="30" height="90" fill="#0f172a" />
            <rect x="180" y="45" width="50" height="135" fill="#090d16" />
            <polygon points="205,20 180,45 230,45" fill="#090d16" />
            {/* Spire tip glow */}
            <circle cx="205" cy="20" r="2" fill="#f43f5e" />

            <rect x="245" y="70" width="40" height="110" fill="#0d1322" />
            <rect x="255" y="85" width="8" height="10" fill="#fbbf24" fillOpacity="0.6" />
            <rect x="270" y="120" width="8" height="10" fill="#38bdf8" fillOpacity="0.4" />

            <rect x="300" y="95" width="50" height="85" fill="#0f172a" />
          </svg>
        </div>
        {/* Window Grill Bars */}
        <div className="window-grill-v" />
        <div className="window-grill-h" />
      </div>

      {/* Warm Lamp Light Beam */}
      <div className="lamp-glow-cone" />

      {/* Desk Surface Layer */}
      <div className="desk-surface">
        {/* Hanging Ivy Plants */}
        <div className="hanging-ivy">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" style={{ shapeRendering: 'crispEdges' }}>
            <path d="M10 0 C 15 20, 10 40, 20 60" stroke="#10b981" strokeWidth="2" fill="none" />
            <rect x="15" y="18" width="6" height="6" rx="2" fill="#34d399" />
            <rect x="8" y="32" width="7" height="7" rx="2" fill="#10b981" />
            <rect x="18" y="45" width="8" height="8" rx="2" fill="#059669" />
            
            <path d="M70 0 C 65 25, 75 45, 70 70" stroke="#10b981" strokeWidth="2" fill="none" />
            <rect x="62" y="15" width="7" height="7" rx="2" fill="#34d399" />
            <rect x="72" y="35" width="8" height="8" rx="2" fill="#10b981" />
            <rect x="65" y="52" width="6" height="6" rx="2" fill="#059669" />
          </svg>
        </div>

        {/* Overhead Desk Lamp */}
        <div className="desk-lamp">
          <div className="lamp-head" />
          <div className="lamp-arm" />
        </div>

        {/* Laptop with Animated Code */}
        <div className="laptop-wrapper">
          <div className="laptop-screen">
            <div className="screen-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="file-name">garden.ts</span>
            </div>
            <div className="screen-content">
              <span className="code-keyword">function</span> <span className="code-fn">improve</span>(system) {'{'}
              <br />
              &nbsp;&nbsp;<span className="code-keyword">while</span> (true) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-call">observe</span>();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-call">reflect</span>();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-call">iterate</span>();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-call">share</span>();
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'}
              <br />
              <span className="code-comment">// garden grows ∞</span>
              <span className="cursor-blink">|</span>
            </div>
          </div>
          <div className="laptop-base">
            <div className="trackpad" />
          </div>
        </div>

        {/* Small Pixel Robot */}
        <div className="robot-wrapper">
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none" style={{ shapeRendering: 'crispEdges' }}>
            {/* Antenna */}
            <rect x="15" y="1" width="2" height="4" fill="#64748b" />
            <rect x="14" y="0" width="4" height="2" fill="#34d399" />

            {/* Head Body */}
            <rect x="5" y="5" width="22" height="18" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            
            {/* Glowing Screen */}
            <rect x="8" y="8" width="16" height="12" rx="2" fill="#090d16" />

            {/* Eyes */}
            {isBlinking ? (
              <>
                <rect x="10" y="14" width="4" height="1" fill="#34d399" />
                <rect x="18" y="14" width="4" height="1" fill="#34d399" />
              </>
            ) : (
              <>
                <rect x="10" y="11" width="4" height="5" rx="1" fill="#34d399" />
                <rect x="18" y="11" width="4" height="5" rx="1" fill="#34d399" />
                {/* Pupil shine */}
                <rect x="11" y="12" width="1" height="2" fill="#ffffff" />
                <rect x="19" y="12" width="1" height="2" fill="#ffffff" />
              </>
            )}

            {/* Cheeks */}
            <rect x="9" y="16" width="2" height="1" fill="#a78bfa" />
            <rect x="21" y="16" width="2" height="1" fill="#a78bfa" />

            {/* Body */}
            <rect x="8" y="23" width="16" height="8" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <rect x="13" y="25" width="6" height="4" fill="#6366f1" />
          </svg>
        </div>

        {/* Desk Potted Plants */}
        <div className="desk-plant plant-left">
          <div className="pot" />
          <div className="stem stem-1" />
          <div className="stem stem-2" />
          <div className="flower-dot" />
        </div>

        <div className="desk-plant plant-right">
          <div className="pot" />
          <div className="stem stem-3" />
        </div>

        {/* Books Stack */}
        <div className="books-stack">
          <div className="book book-4">Cybernetics</div>
          <div className="book book-3">Knowledge</div>
          <div className="book book-2">Automation</div>
          <div className="book book-1">Systems Thinking</div>
        </div>
      </div>

      <style>{`
        .cyber-garden-container {
          position: relative;
          width: 100%;
          height: 380px;
          background: #090d16;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
        }

        /* Window & Night City */
        .window-frame {
          position: absolute;
          top: 20px;
          right: 40px;
          width: 220px;
          height: 220px;
          border: 4px solid #1e293b;
          border-radius: 110px 110px 0 0;
          overflow: hidden;
          background: #050811;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
        }

        .night-sky {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .city-skyline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 130px;
        }

        .moon {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fef08a;
          box-shadow: 0 0 12px rgba(254, 240, 138, 0.6);
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #ffffff;
          border-radius: 50%;
          animation: starDrift 6s infinite ease-in-out alternate;
        }
        .star-1 { top: 25px; left: 30px; animation-delay: 0s; }
        .star-2 { top: 50px; left: 80px; animation-delay: 1.5s; }
        .star-3 { top: 35px; left: 140px; animation-delay: 3s; }
        .star-4 { top: 70px; left: 40px; animation-delay: 2s; }
        .star-5 { top: 80px; left: 170px; animation-delay: 4s; }

        @keyframes starDrift {
          0% { opacity: 0.3; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(-3px); }
        }

        .window-grill-v {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: #1e293b;
        }

        .window-grill-h {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background: #1e293b;
        }

        /* Warm Desk Lamp Beam */
        .lamp-glow-cone {
          position: absolute;
          top: 0;
          right: 120px;
          width: 260px;
          height: 380px;
          background: radial-gradient(ellipse at top, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.03) 50%, transparent 80%);
          pointer-events: none;
          z-index: 10;
        }

        .desk-lamp {
          position: absolute;
          top: 15px;
          right: 220px;
          z-index: 12;
        }

        .lamp-head {
          width: 40px;
          height: 22px;
          background: #1e293b;
          border-radius: 20px 20px 4px 4px;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.4);
          transform: rotate(-15deg);
        }

        /* Desk & Surface */
        .desk-surface {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 140px;
          background: #0f1524;
          border-top: 2px solid #1e293b;
        }

        .hanging-ivy {
          position: absolute;
          top: 0;
          left: 140px;
          z-index: 15;
          animation: plantSway 8s ease-in-out infinite alternate;
        }

        @keyframes plantSway {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(2deg); }
        }

        /* Laptop */
        .laptop-wrapper {
          position: absolute;
          bottom: 35px;
          left: 40px;
          width: 220px;
          z-index: 20;
        }

        .laptop-screen {
          width: 200px;
          height: 125px;
          background: #090d16;
          border: 2px solid #334155;
          border-radius: 8px 8px 0 0;
          padding: 8px;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
          overflow: hidden;
        }

        .screen-header {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
          padding-bottom: 4px;
          border-bottom: 1px solid #1e293b;
        }

        .dot { width: 6px; height: 6px; border-radius: 50%; }
        .dot-red { background: #f87171; }
        .dot-yellow { background: #fbbf24; }
        .dot-green { background: #34d399; }
        .file-name { font-size: 9px; color: #64748b; margin-left: 6px; font-family: monospace; }

        .screen-content {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          line-height: 1.35;
          color: #e2e8f0;
        }

        .code-keyword { color: #c084fc; }
        .code-fn { color: #38bdf8; }
        .code-call { color: #34d399; }
        .code-comment { color: #64748b; font-style: italic; }

        .cursor-blink {
          color: #a78bfa;
          animation: cursorBlink 1s step-start infinite;
        }

        @keyframes cursorBlink {
          50% { opacity: 0; }
        }

        .laptop-base {
          width: 230px;
          height: 10px;
          background: #1e293b;
          border-radius: 0 0 6px 6px;
          margin-left: -15px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .trackpad {
          width: 36px;
          height: 4px;
          background: #334155;
          border-radius: 2px;
        }

        /* Small Robot */
        .robot-wrapper {
          position: absolute;
          bottom: 30px;
          right: 140px;
          z-index: 22;
          transition: transform 0.3s ease;
        }

        .robot-wrapper:hover {
          transform: translateY(-2px);
        }

        /* Plants on Desk */
        .desk-plant {
          position: absolute;
          bottom: 30px;
          z-index: 18;
        }

        .plant-left { left: 10px; }
        .plant-right { right: 230px; }

        .pot {
          width: 22px;
          height: 20px;
          background: #78350f;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        }

        .stem {
          background: #10b981;
          border-radius: 4px;
          animation: plantSway 6s ease-in-out infinite alternate;
        }

        .stem-1 { width: 3px; height: 25px; margin-left: 9px; margin-top: -24px; transform-origin: bottom center; }
        .stem-2 { width: 3px; height: 18px; margin-left: 14px; margin-top: -18px; transform-origin: bottom center; }
        .stem-3 { width: 4px; height: 28px; margin-left: 8px; margin-top: -27px; transform-origin: bottom center; }

        .flower-dot {
          width: 6px;
          height: 6px;
          background: #f472b6;
          border-radius: 50%;
          position: absolute;
          top: -28px;
          left: 8px;
        }

        /* Books Stack */
        .books-stack {
          position: absolute;
          bottom: 30px;
          right: 20px;
          display: flex;
          flex-direction: column-reverse;
          gap: 2px;
          z-index: 20;
        }

        .book {
          height: 16px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          font-weight: 600;
          color: #ffffff;
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .book-1 { width: 105px; background: #6d28d9; }
        .book-2 { width: 95px; background: #0369a1; }
        .book-3 { width: 88px; background: #047857; }
        .book-4 { width: 80px; background: #b45309; }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .star, .hanging-ivy, .stem, .cursor-blink {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};
