import React from "react";

export function ChairPenDrawingSvg() {
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
          {/* 1. Upholstered Curved Backrest */}
          <path
            d="M 155 52 C 160 36 240 36 245 52 L 240 128 C 220 132 180 132 160 128 Z"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 2. Backrest Tufting Details / Buttons */}
          <path
            d="M 180 65 L 180 115 M 220 65 L 220 115 M 170 85 Q 200 88 230 85"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 3. Padded Seat Cushion */}
          <path
            d="M 148 128 C 132 136 132 152 148 160 C 175 165 225 165 252 160 C 268 152 268 136 252 128 Z"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 4. Cushion Piping Edge */}
          <path
            d="M 142 144 C 170 150 230 150 258 144"
            strokeWidth="2.4"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 5. Four Wooden Legs */}
          <path
            d="M 156 160 L 146 208 M 244 160 L 254 208 M 172 158 L 168 198 M 228 158 L 232 198"
            strokeWidth="3.6"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 6. Resplendence Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 200 24 L 200 10" className="shine-line shine-delay-1" />
            <path d="M 135 32 L 122 20" className="shine-line shine-delay-2" />
            <path d="M 265 32 L 278 20" className="shine-line shine-delay-1" />
            <path d="M 105 135 L 90 130" className="shine-line shine-delay-3" />
            <path d="M 295 135 L 310 130" className="shine-line shine-delay-2" />
          </g>

          {/* 7. Sparkle Cleaning Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 200 12 L 204 22 L 214 26 L 204 30 L 200 40 L 196 30 L 186 26 L 196 22 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 110 38 L 113 46 L 121 48 L 113 50 L 110 58 L 107 50 L 99 48 L 107 46 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 290 38 L 293 46 L 301 48 L 293 50 L 290 58 L 287 50 L 279 48 L 287 46 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 200 142 L 202 148 L 208 150 L 202 152 L 200 158 L 198 152 L 192 150 L 198 148 Z"
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
