import React from "react";

export function CarSeatPenDrawingSvg() {
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
          {/* 1. Ergonomic Headrest */}
          <path
            d="M 172 42 C 175 26 225 26 228 42 L 224 64 C 210 68 190 68 176 64 Z"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 2. Headrest Chrome Support Rods */}
          <path
            d="M 188 64 L 188 78 M 212 64 L 212 78"
            strokeWidth="3.6"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 3. Sport Seat Backrest & Lateral Bolsters */}
          <path
            d="M 152 78 C 170 74 230 74 248 78 L 265 110 C 272 135 250 148 240 152 L 160 152 C 150 148 128 135 135 110 Z"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 4. Backrest Center Panel Stitching */}
          <path
            d="M 175 78 L 172 148 M 225 78 L 228 148 M 172 102 Q 200 106 228 102 M 172 125 Q 200 129 228 125"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 5. Lower Seat Bottom Cushion */}
          <path
            d="M 135 152 C 120 160 120 180 135 190 C 170 196 230 196 265 190 C 280 180 280 160 265 152 Z"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 6. Seat Cushion Vertical Division & Stitching */}
          <path
            d="M 178 152 Q 175 175 172 192 M 222 152 Q 225 175 228 192"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 7. Resplendence Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 200 18 L 200 6" className="shine-line shine-delay-1" />
            <path d="M 135 28 L 122 16" className="shine-line shine-delay-2" />
            <path d="M 265 28 L 278 16" className="shine-line shine-delay-1" />
            <path d="M 95 115 L 80 110" className="shine-line shine-delay-3" />
            <path d="M 305 115 L 320 110" className="shine-line shine-delay-2" />
          </g>

          {/* 8. Sparkle Cleaning Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 200 4 L 204 14 L 214 18 L 204 22 L 200 32 L 196 22 L 186 18 L 196 14 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 110 35 L 113 43 L 121 45 L 113 47 L 110 55 L 107 47 L 99 45 L 107 43 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 290 35 L 293 43 L 301 45 L 293 47 L 290 55 L 287 47 L 279 45 L 287 43 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 200 110 L 202 116 L 208 118 L 202 120 L 200 126 L 198 120 L 192 118 L 198 116 Z"
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
