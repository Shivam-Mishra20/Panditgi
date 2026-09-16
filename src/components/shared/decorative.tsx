export function MandalaMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="30"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <circle
              key={i}
              cx="100"
              cy="30"
              r="4"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function LotusDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M60 34 C 45 30, 40 18, 60 8 C 80 18, 75 30, 60 34 Z" />
        <path d="M60 34 C 50 28, 48 20, 60 14 C 72 20, 70 28, 60 34 Z" />
        <line x1="4" y1="30" x2="46" y2="30" />
        <line x1="74" y1="30" x2="116" y2="30" />
        <circle cx="60" cy="30" r="2.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/**
 * Stylised, illustrative hero graphic representing a pandit performing puja
 * with a diya and temple arch. This is a placeholder illustration — replace
 * with a real, licensed photograph of Pandit Ramnarayan Mishra by dropping an
 * image into /public/images/hero-pandit.jpg and swapping this component for
 * a next/image element (see README for instructions).
 */
export function PujaHeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 560"
      className={className}
      role="img"
      aria-label="पंडित जी पूजा करते हुए — शैलीबद्ध चित्रण"
    >
      <defs>
        <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a2530" />
          <stop offset="100%" stopColor="#5e1a1f" />
        </linearGradient>
        <linearGradient id="diyaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd580" />
          <stop offset="100%" stopColor="#d97b1f" />
        </linearGradient>
      </defs>

      {/* Temple arch backdrop */}
      <path
        d="M40 540 V 280 C 40 140 130 40 240 40 C 350 40 440 140 440 280 V 540 Z"
        fill="url(#archGrad)"
        opacity="0.08"
      />
      <path
        d="M70 540 V 290 C 70 165 145 75 240 75 C 335 75 410 165 410 290 V 540"
        fill="none"
        stroke="#ab8752"
        strokeWidth="3"
        opacity="0.5"
      />

      {/* Mandala backdrop behind figure */}
      <circle cx="240" cy="230" r="140" fill="none" stroke="#ab8752" strokeWidth="1" opacity="0.35" />
      <circle cx="240" cy="230" r="110" fill="none" stroke="#ab8752" strokeWidth="1" opacity="0.35" />

      {/* Seated priest silhouette */}
      <g>
        {/* body / shawl */}
        <path
          d="M150 470 C 150 380 175 330 240 330 C 305 330 330 380 330 470 C 330 495 305 500 240 500 C 175 500 150 495 150 470 Z"
          fill="#d97b1f"
        />
        <path
          d="M150 470 C 150 380 175 330 240 330 C 305 330 330 380 330 470"
          fill="none"
          stroke="#b8630f"
          strokeWidth="2"
        />
        {/* inner kurta */}
        <path
          d="M195 470 C 195 400 210 360 240 360 C 270 360 285 400 285 470 Z"
          fill="#fbf6ec"
          opacity="0.85"
        />
        {/* head */}
        <circle cx="240" cy="300" r="42" fill="#c98454" />
        {/* tilak */}
        <line x1="240" y1="270" x2="240" y2="288" stroke="#5e1a1f" strokeWidth="3" strokeLinecap="round" />
        {/* arms toward diya */}
        <path d="M198 400 C 175 400 160 420 165 445" fill="none" stroke="#c98454" strokeWidth="14" strokeLinecap="round" />
        <path d="M282 400 C 305 400 320 420 315 445" fill="none" stroke="#c98454" strokeWidth="14" strokeLinecap="round" />
      </g>

      {/* Diya / lamp in front */}
      <g transform="translate(240 452)">
        <ellipse cx="0" cy="18" rx="34" ry="10" fill="#7a2530" opacity="0.9" />
        <path d="M-30 18 C -30 2 -10 -6 0 -6 C 10 -6 30 2 30 18 Z" fill="url(#diyaGrad)" />
        <path
          d="M0 -10 C -6 -22 4 -28 0 -42 C 10 -30 8 -18 4 -12 C 8 -14 12 -10 8 -4 C 5 -8 2 -8 0 -10 Z"
          fill="#e8971f"
        />
      </g>

      {/* floating petals */}
      <g fill="#ab8752" opacity="0.6">
        <ellipse cx="110" cy="150" rx="6" ry="3" transform="rotate(30 110 150)" />
        <ellipse cx="380" cy="180" rx="6" ry="3" transform="rotate(-20 380 180)" />
        <ellipse cx="130" cy="240" rx="5" ry="2.5" transform="rotate(60 130 240)" />
        <ellipse cx="360" cy="260" rx="5" ry="2.5" transform="rotate(-45 360 260)" />
      </g>
    </svg>
  );
}
