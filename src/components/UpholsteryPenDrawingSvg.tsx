import React from "react";

export function UpholsteryPenDrawingSvg() {
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
          {/* 1. Center Tall Fabric Roll Top Spiral & Cylinder */}
          <path
            d="M 195 42 C 165 42 165 62 195 62 C 225 62 225 42 195 42 Z M 195 48 C 180 48 180 56 195 56 C 210 56 210 48 195 48"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 2. Center Fabric Roll Body & Base */}
          <path
            d="M 165 52 L 165 185 C 165 195 225 195 225 185 L 225 52"
            className="pen-stroke pen-stroke-delay-1"
          />

          {/* 3. Left Standing Fabric Roll & Draped Cloth */}
          <path
            d="M 115 65 C 95 65 95 80 115 80 C 135 80 135 65 115 65 Z M 95 72 L 95 180 C 95 188 135 188 135 180 L 135 72 M 115 80 Q 140 120 125 175"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 4. Right Standing Fabric Roll & Swatch Wave */}
          <path
            d="M 275 65 C 255 65 255 80 275 80 C 295 80 295 65 275 65 Z M 255 72 L 255 180 C 255 188 295 188 295 180 L 295 72 M 275 80 Q 300 120 285 175"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 5. Draped Textile Wave Across Bottom Base */}
          <path
            d="M 80 182 Q 135 168 195 188 Q 255 168 310 182 Q 330 188 340 182"
            strokeWidth="2.6"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 6. Fabric Texture Ribs & Seam Lines */}
          <path
            d="M 180 80 L 180 170 M 210 80 L 210 170 M 108 95 L 108 165 M 268 95 L 268 165"
            strokeWidth="1.8"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 7. Resplendence Radiance Rays */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            <path d="M 195 28 L 195 12" className="shine-line shine-delay-1" />
            <path d="M 115 48 L 102 36" className="shine-line shine-delay-2" />
            <path d="M 275 48 L 288 36" className="shine-line shine-delay-1" />
            <path d="M 60 120 L 45 115" className="shine-line shine-delay-3" />
            <path d="M 330 120 L 345 115" className="shine-line shine-delay-2" />
          </g>

          {/* 8. Sparkle Cleaning Stars */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            <path
              d="M 195 8 L 199 18 L 209 22 L 199 26 L 195 36 L 191 26 L 181 22 L 191 18 Z"
              className="sparkle-star sparkle-delay-1"
            />
            <path
              d="M 80 42 L 83 50 L 91 52 L 83 54 L 80 62 L 77 54 L 69 52 L 77 50 Z"
              className="sparkle-star sparkle-delay-2"
            />
            <path
              d="M 310 42 L 313 50 L 321 52 L 313 54 L 310 62 L 307 54 L 299 52 L 307 50 Z"
              className="sparkle-star sparkle-delay-3"
            />
            <path
              d="M 195 108 L 197 114 L 203 116 L 197 118 L 195 124 L 193 118 L 187 116 L 193 114 Z"
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
