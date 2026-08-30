"use client";

export function CanalDiagram() {
  return (
    <div className="relative w-full max-w-2xl mx-auto select-none" aria-hidden="true">
      <svg
        viewBox="0 0 560 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* ── Grid background ── */}
        <defs>
          <pattern id="bp-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(95,216,232,0.08)" strokeWidth="0.5" />
          </pattern>
          {/* Flow gradient */}
          <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5FD8E8" stopOpacity="0" />
            <stop offset="50%" stopColor="#5FD8E8" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A3A5C" />
            <stop offset="100%" stopColor="#0F2A4A" />
          </linearGradient>
        </defs>

        <rect width="560" height="320" fill="url(#bp-grid)" />

        {/* ── Scale bar (bottom left) ── */}
        <text x="16" y="306" fontSize="8" fill="rgba(95,216,232,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          M 1:500
        </text>
        <line x1="16" y1="310" x2="80" y2="310" stroke="rgba(95,216,232,0.4)" strokeWidth="1" />
        <line x1="16" y1="307" x2="16" y2="313" stroke="rgba(95,216,232,0.4)" strokeWidth="1" />
        <line x1="80" y1="307" x2="80" y2="313" stroke="rgba(95,216,232,0.4)" strokeWidth="1" />

        {/* ── Compass (top right) ── */}
        <g transform="translate(518, 30)">
          <circle cx="0" cy="0" r="16" stroke="rgba(95,216,232,0.3)" strokeWidth="1" fill="none" />
          <polygon points="0,-12 4,0 0,3 -4,0" fill="#5FD8E8" fillOpacity="0.9" />
          <polygon points="0,12 4,0 0,-3 -4,0" fill="rgba(95,216,232,0.3)" />
          <text x="0" y="-18" textAnchor="middle" fontSize="7" fill="#5FD8E8" fontFamily="JetBrains Mono, monospace">N</text>
        </g>

        {/* ── Source node (center) ── */}
        <g transform="translate(200, 155)">
          {/* Outer ring */}
          <circle cx="0" cy="0" r="38" stroke="rgba(95,216,232,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          {/* Main circle */}
          <circle cx="0" cy="0" r="28" fill="url(#node-grad)" stroke="#5FD8E8" strokeWidth="1.5" />
          {/* Inner label */}
          <text x="0" y="-5" textAnchor="middle" fontSize="9" fill="#5FD8E8" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            RAQAMLY
          </text>
          <text x="0" y="8" textAnchor="middle" fontSize="7" fill="rgba(95,216,232,0.6)" fontFamily="JetBrains Mono, monospace">
            SRC·001
          </text>
        </g>

        {/* ── Canal line 1 → SAYT (top right) ── */}
        {/* Elbow path */}
        <path
          d="M 228 145 L 280 100 L 360 100"
          stroke="rgba(95,216,232,0.3)"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          fill="none"
        />
        {/* Animated flow */}
        <path
          d="M 228 145 L 280 100 L 360 100"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          strokeDasharray="30 80"
          strokeDashoffset="0"
          fill="none"
          className="animate-flow"
        />
        {/* Arrow head */}
        <polygon points="360,96 372,100 360,104" fill="#5FD8E8" />
        {/* Node SAYT */}
        <rect x="372" y="82" width="80" height="36" rx="6" fill="url(#node-grad)" stroke="rgba(95,216,232,0.5)" strokeWidth="1.2" />
        <text x="412" y="97" textAnchor="middle" fontSize="9" fill="#5FD8E8" fontFamily="JetBrains Mono, monospace" fontWeight="700">SAYT</text>
        <text x="412" y="110" textAnchor="middle" fontSize="7" fill="rgba(95,216,232,0.5)" fontFamily="JetBrains Mono, monospace">SHEET 01</text>
        {/* Burchak marker */}
        <polygon points="452,82 452,87 447,82" fill="rgba(95,216,232,0.4)" />

        {/* ── Canal line 2 → BOT (center right) ── */}
        <path
          d="M 228 155 L 360 155"
          stroke="rgba(255,107,53,0.3)"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          fill="none"
        />
        <path
          d="M 228 155 L 360 155"
          stroke="#FF6B35"
          strokeWidth="2"
          strokeDasharray="30 80"
          strokeDashoffset="40"
          fill="none"
          className="animate-flow"
          style={{ animationDelay: '0.8s' }}
        />
        <polygon points="360,151 372,155 360,159" fill="#FF6B35" />
        {/* Node BOT */}
        <rect x="372" y="137" width="80" height="36" rx="6" fill="url(#node-grad)" stroke="rgba(255,107,53,0.5)" strokeWidth="1.2" />
        <text x="412" y="152" textAnchor="middle" fontSize="9" fill="#FF6B35" fontFamily="JetBrains Mono, monospace" fontWeight="700">BOT</text>
        <text x="412" y="165" textAnchor="middle" fontSize="7" fill="rgba(255,107,53,0.5)" fontFamily="JetBrains Mono, monospace">SHEET 02</text>
        <polygon points="452,137 452,142 447,137" fill="rgba(255,107,53,0.4)" />

        {/* ── Canal line 3 → CRM (bottom right) ── */}
        <path
          d="M 228 165 L 280 210 L 360 210"
          stroke="rgba(95,216,232,0.2)"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          fill="none"
        />
        <path
          d="M 228 165 L 280 210 L 360 210"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          strokeDasharray="30 80"
          strokeDashoffset="80"
          fill="none"
          className="animate-flow"
          style={{ animationDelay: '1.6s' }}
        />
        <polygon points="360,206 372,210 360,214" fill="#5FD8E8" />
        {/* Node CRM */}
        <rect x="372" y="192" width="80" height="36" rx="6" fill="url(#node-grad)" stroke="rgba(95,216,232,0.4)" strokeWidth="1.2" />
        <text x="412" y="207" textAnchor="middle" fontSize="9" fill="#5FD8E8" fontFamily="JetBrains Mono, monospace" fontWeight="700">CRM</text>
        <text x="412" y="220" textAnchor="middle" fontSize="7" fill="rgba(95,216,232,0.5)" fontFamily="JetBrains Mono, monospace">SHEET 03</text>
        <polygon points="452,192 452,197 447,192" fill="rgba(95,216,232,0.4)" />

        {/* ── Dimension callout (left side) ── */}
        <line x1="120" y1="120" x2="120" y2="190" stroke="rgba(95,216,232,0.3)" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="116" y1="120" x2="124" y2="120" stroke="rgba(95,216,232,0.4)" strokeWidth="0.8" />
        <line x1="116" y1="190" x2="124" y2="190" stroke="rgba(95,216,232,0.4)" strokeWidth="0.8" />
        <text x="108" y="158" textAnchor="middle" fontSize="7" fill="rgba(95,216,232,0.45)" fontFamily="JetBrains Mono, monospace" transform="rotate(-90, 108, 158)">70px</text>

        {/* ── Coordinate label ── */}
        <text x="16" y="24" fontSize="7.5" fill="rgba(95,216,232,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          N40°29′ E68°47′
        </text>
        <text x="16" y="36" fontSize="7" fill="rgba(95,216,232,0.35)" fontFamily="JetBrains Mono, monospace">
          SIRDARYO VILOYATI
        </text>
      </svg>
    </div>
  );
}
