import React from "react";

export function CribPenDrawingSvg() {
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
          {/* 1. Crib Main Frame Rails Top */}
          <path
            d="M 95 65 C 100 50 300 50 305 65 L 305 160 C 300 170 100 170 95 160 Z"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 2. Vertical Wooden Rails / Slats */}
          <path
            d="M 125 65 L 125 145 M 155 62 L 155 145 M 185 60 L 185 145 M 215 60 L 215 145 M 245 62 L 245 145 M 275 65 L 275 145"
            strokeWidth="2.4"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 3. Soft Crib Mattress & Bedding Line */}
          <path
            d="M 95 142 Q 200 135 305 142 L 300 162 Q 200 168 100 162 Z"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 4. Four Wooden Corner Posts & Legs */}
          <path
            d="M 95 52 L 95 200 M 305 52 L 305 200"
            strokeWidth="4.2"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 5. Hanging Mobile / Toy Arch Accent */}
          <path
            d="M 140 52 C 140 25 260 25 260 52 M 200 25 L 200 38"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 6. Resplendence Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 200 18 L 200 6" className="shine-line shine-delay-1" />
            <path d="M 120 30 L 108 18" className="shine-line shine-delay-2" />
            <path d="M 280 30 L 292 18" className="shine-line shine-delay-1" />
            <path d="M 65 110 L 50 105" className="shine-line shine-delay-3" />
            <path d="M 335 110 L 350 105" className="shine-line shine-delay-2" />
          </g>

          {/* 7. Sparkle Cleaning Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 200 4 L 204 14 L 214 18 L 204 22 L 200 32 L 196 22 L 186 18 L 196 14 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 90 35 L 93 43 L 101 45 L 93 47 L 90 55 L 87 47 L 79 45 L 87 43 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 310 35 L 313 43 L 321 45 L 313 47 L 310 55 L 307 47 L 299 45 L 307 43 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 200 148 L 202 154 L 208 156 L 202 158 L 200 164 L 198 158 L 192 156 L 198 154 Z"
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
