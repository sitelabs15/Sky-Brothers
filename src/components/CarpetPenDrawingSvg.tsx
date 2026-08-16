import React from "react";

export function CarpetPenDrawingSvg() {
  return (
    <div className="group/pen relative flex h-full w-full items-center justify-center p-2 select-none">
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full max-h-[175px] object-contain overflow-visible"
      >
        <g
          fill="none"
          stroke="#084b70"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover/pen:stroke-sky-primary"
        >
          {/* 1. Perspective Area Rug Outline */}
          <path
            d="M 85 82 L 275 68 L 345 142 L 155 156 Z"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 2. Inner Decorative Border */}
          <path
            d="M 102 92 L 265 80 L 328 138 L 165 148 Z"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 3. Geometric Diamond Center Pattern */}
          <path
            d="M 215 84 L 270 112 L 215 144 L 160 116 Z M 215 98 L 245 112 L 215 128 L 185 112 Z"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 4. Rug Fringe Tassels (Left Edge) */}
          <path
            d="M 85 82 L 72 80 M 92 90 L 79 88 M 99 98 L 86 96 M 106 106 L 93 104 M 113 114 L 100 112 M 120 122 L 107 120 M 127 130 L 114 128 M 134 138 L 121 136 M 141 146 L 128 144 M 155 156 L 142 154"
            strokeWidth="2.4"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 5. Rug Fringe Tassels (Right Edge) */}
          <path
            d="M 275 68 L 288 66 M 283 76 L 296 74 M 291 84 L 304 82 M 299 92 L 312 90 M 307 100 L 320 98 M 315 110 L 328 108 M 323 120 L 336 118 M 331 130 L 344 128 M 345 142 L 358 140"
            strokeWidth="2.4"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 6. Suction Extraction Wave Lines Accent */}
          <path
            d="M 120 178 C 150 168 200 188 230 178 C 260 168 300 188 330 178"
            strokeWidth="2.6"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 7. Resplendence Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 215 45 L 215 30" className="shine-line shine-delay-1" />
            <path d="M 130 52 L 118 40" className="shine-line shine-delay-2" />
            <path d="M 300 48 L 312 36" className="shine-line shine-delay-1" />
            <path d="M 60 120 L 45 115" className="shine-line shine-delay-3" />
            <path d="M 370 125 L 385 120" className="shine-line shine-delay-2" />
          </g>

          {/* 8. Sparkle Cleaning Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 215 24 L 219 36 L 231 40 L 219 44 L 215 56 L 211 44 L 199 40 L 211 36 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 65 48 L 68 56 L 76 58 L 68 60 L 65 68 L 62 60 L 54 58 L 62 56 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 335 45 L 338 53 L 346 55 L 338 57 L 335 65 L 332 57 L 324 55 L 332 53 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 215 108 L 217 114 L 223 116 L 217 118 L 215 124 L 213 118 L 207 116 L 213 114 Z"
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
