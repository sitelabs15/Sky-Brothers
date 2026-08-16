import React from "react";

export function MattressPenDrawingSvg() {
  return (
    <div className="group/pen relative flex h-full w-full items-center justify-center p-2 select-none">
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full max-h-[175px] object-contain overflow-visible"
      >
        <g
          fill="none"
          stroke="#084b70"
          strokeWidth="3.0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover/pen:stroke-sky-primary"
        >
          {/* Top Surface Outer Frame */}
          <path
            d="M 78 100 C 80 82 110 68 140 62 L 310 42 C 332 38 358 50 360 68 C 362 82 342 94 322 98 L 152 120 C 124 126 78 118 78 100 Z"
            className="pen-stroke pen-stroke-delay-1"
          />
          {/* Front & Side Thickness */}
          <path
            d="M 78 100 C 76 118 76 142 80 154 C 82 162 108 172 140 176 L 152 178 L 156 122 M 360 68 C 362 84 362 108 360 122 L 322 130 L 322 98 M 80 154 Q 230 138 360 122"
            className="pen-stroke pen-stroke-delay-2"
          />
          {/* Inner Seam Piping */}
          <path
            d="M 88 100 C 90 86 116 74 144 68 L 308 50 C 328 46 350 56 350 70 C 350 82 334 90 314 94 L 150 114 C 126 120 88 114 88 100 Z"
            strokeWidth="2.0"
            className="pen-stroke pen-stroke-delay-2"
          />
          {/* Tufted Grid Arcs Row 1 */}
          <path
            d="M 148 65 Q 172 58 196 62 M 196 62 Q 222 55 248 58 M 248 58 Q 274 51 298 54"
            strokeWidth="2.0"
            className="pen-stroke pen-stroke-delay-3"
          />
          {/* Tufted Grid Arcs Row 2 */}
          <path
            d="M 128 80 Q 152 73 176 77 M 176 77 Q 202 70 228 73 M 228 73 Q 254 66 280 70 M 280 70 Q 305 63 328 66"
            strokeWidth="2.0"
            className="pen-stroke pen-stroke-delay-3"
          />
          {/* Tufted Grid Arcs Row 3 */}
          <path
            d="M 112 95 Q 136 88 162 92 M 162 92 Q 188 85 214 88 M 214 88 Q 240 81 266 84 M 266 84 Q 292 77 316 80"
            strokeWidth="2.0"
            className="pen-stroke pen-stroke-delay-4"
          />
          {/* Vertical col arcs */}
          <path
            d="M 148 65 Q 140 72 128 80 M 196 62 Q 190 70 176 77 M 248 58 Q 240 66 228 73 M 298 54 Q 292 62 280 70 M 176 77 Q 168 84 162 92 M 228 73 Q 220 82 214 88 M 280 70 Q 274 78 266 84 M 328 66 Q 322 74 316 80"
            strokeWidth="2.0"
            className="pen-stroke pen-stroke-delay-4"
          />
          {/* Tuft Buttons */}
          <g fill="#084b70" stroke="none" className="pen-stroke pen-stroke-delay-5">
            <circle cx="148" cy="65" r="3.5" />
            <circle cx="196" cy="62" r="3.5" />
            <circle cx="248" cy="58" r="3.5" />
            <circle cx="298" cy="54" r="3.5" />
            <circle cx="128" cy="80" r="3.5" />
            <circle cx="176" cy="77" r="3.5" />
            <circle cx="228" cy="73" r="3.5" />
            <circle cx="280" cy="70" r="3.5" />
            <circle cx="328" cy="66" r="3.5" />
            <circle cx="112" cy="95" r="3.5" />
            <circle cx="162" cy="92" r="3.5" />
            <circle cx="214" cy="88" r="3.5" />
            <circle cx="266" cy="84" r="3.5" />
            <circle cx="316" cy="80" r="3.5" />
          </g>
          {/* Side Vent Stitches */}
          <path
            d="M 68 128 L 68 148 M 74 130 L 74 150 M 80 132 L 80 152 M 354 110 L 354 128 M 360 108 L 360 126"
            strokeWidth="1.8"
            className="pen-stroke pen-stroke-delay-5"
          />
          {/* Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 220 32 L 220 16" className="shine-line shine-delay-1" />
            <path d="M 140 38 L 128 24" className="shine-line shine-delay-2" />
            <path d="M 300 30 L 312 16" className="shine-line shine-delay-1" />
            <path d="M 52 110 L 36 105" className="shine-line shine-delay-3" />
            <path d="M 368 88 L 384 82" className="shine-line shine-delay-2" />
          </g>
          {/* Sparkle Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 220 10 L 224 20 L 234 24 L 224 28 L 220 38 L 216 28 L 206 24 L 216 20 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 65 32 L 68 40 L 76 42 L 68 44 L 65 52 L 62 44 L 54 42 L 62 40 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 340 25 L 343 33 L 351 35 L 343 37 L 340 45 L 337 37 L 329 35 L 337 33 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 218 105 L 220 111 L 226 113 L 220 115 L 218 121 L 216 115 L 210 113 L 216 111 Z"
              fill="#30a8d8"
              stroke="#30a8d8"
              className="sparkle-star sparkle-delay-4"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
