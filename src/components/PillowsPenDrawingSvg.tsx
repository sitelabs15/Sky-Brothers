import React from "react";

export function PillowsPenDrawingSvg() {
  return (
    <div className="group/pen relative flex h-full w-full items-center justify-center p-2 select-none">
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full max-h-[175px] object-contain overflow-visible"
      >
        <g
          fill="none"
          stroke="#084b70"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover/pen:stroke-sky-primary"
        >
          {/* 1. Main Pillow Contour with Pinched Corner Ears */}
          <path
            d="M 92 72 Q 78 60 74 78 Q 80 92 84 96 C 76 120 76 150 84 174 Q 80 178 74 192 Q 78 210 92 198 Q 98 192 102 188 C 145 195 255 195 298 188 Q 302 192 308 198 Q 322 210 326 192 Q 320 178 316 174 C 324 150 324 120 316 96 Q 320 92 326 78 Q 322 60 308 72 Q 302 78 298 82 C 255 75 145 75 102 82 Q 98 78 92 72 Z"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 2. Inner Pillow Left Seam Fold Accent */}
          <path
            d="M 98 94 C 112 118 112 152 98 176"
            strokeWidth="2.8"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 3. Resplendence Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 200 45 L 200 28" className="shine-line shine-delay-1" />
            <path d="M 115 50 L 102 36" className="shine-line shine-delay-2" />
            <path d="M 285 50 L 298 36" className="shine-line shine-delay-1" />
            <path d="M 50 135 L 35 130" className="shine-line shine-delay-3" />
            <path d="M 350 135 L 365 130" className="shine-line shine-delay-2" />
          </g>

          {/* 4. Sparkle Cleaning Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 200 18 L 204 28 L 214 32 L 204 36 L 200 46 L 196 36 L 186 32 L 196 28 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 75 52 L 78 60 L 86 62 L 78 64 L 75 72 L 72 64 L 64 62 L 72 60 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 325 52 L 328 60 L 336 62 L 328 64 L 325 72 L 322 64 L 314 62 L 322 60 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 200 128 L 202 134 L 208 136 L 202 138 L 200 144 L 198 138 L 192 136 L 198 134 Z"
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
