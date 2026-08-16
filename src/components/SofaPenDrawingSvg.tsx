import React from "react";

export function SofaPenDrawingSvg() {
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
          {/* 1. Backrest Top & Outer Curve */}
          <path d="M 75 90 C 80 58 320 58 325 90" className="pen-stroke pen-stroke-delay-1" />

          {/* 2. Backrest Vertical Separation Line */}
          <path d="M 200 64 L 200 130" className="pen-stroke pen-stroke-delay-2" />

          {/* 3. Left Armrest Roll */}
          <path
            d="M 75 90 C 45 92 40 120 48 145 C 55 162 78 165 92 155 C 98 148 95 125 88 118"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 4. Right Armrest Roll */}
          <path
            d="M 325 90 C 355 92 360 120 352 145 C 345 162 322 165 308 155 C 302 148 305 125 312 118"
            className="pen-stroke pen-stroke-delay-2"
          />

          {/* 5. Left Seat Cushion */}
          <path
            d="M 88 118 C 120 114 192 114 198 122 C 198 145 196 160 196 168 C 130 172 65 168 54 152 C 55 145 75 142 88 118 Z"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 6. Right Seat Cushion */}
          <path
            d="M 312 118 C 280 114 208 114 202 122 C 202 145 204 160 204 168 C 270 172 335 168 346 152 C 345 145 325 142 312 118 Z"
            className="pen-stroke pen-stroke-delay-3"
          />

          {/* 7. Lower Front Base Apron */}
          <path
            d="M 58 168 C 130 175 270 175 342 168 L 338 184 C 270 190 130 190 62 184 Z"
            className="pen-stroke pen-stroke-delay-4"
          />

          {/* 8. Sofa Wooden Legs */}
          <path
            d="M 72 184 L 66 206 L 80 206 L 88 184 M 184 186 L 180 206 L 192 206 L 194 186 M 206 186 L 208 206 L 220 206 L 216 186 M 328 184 L 312 184 L 320 206 L 334 206 Z"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 9. Pen Shade Creases & Fabric Texture Details */}
          <path
            d="M 105 132 C 125 140 145 138 165 132 M 235 132 C 255 140 275 138 295 132"
            strokeWidth="2.2"
            className="pen-stroke pen-stroke-delay-5"
          />

          {/* 10. Resplendence Radiance Rays / Lines around sofa */}
          <g stroke="#30a8d8" strokeWidth="2.4" strokeLinecap="round">
            {/* Top Center Ray */}
            <path d="M 200 48 L 200 32" className="shine-line shine-delay-1" />
            {/* Top Left Diagonal Ray */}
            <path d="M 125 45 L 115 32" className="shine-line shine-delay-2" />
            {/* Top Right Diagonal Ray */}
            <path d="M 275 45 L 285 32" className="shine-line shine-delay-1" />
            {/* Left Armrest Ray */}
            <path d="M 35 105 L 20 100" className="shine-line shine-delay-3" />
            {/* Right Armrest Ray */}
            <path d="M 365 105 L 380 100" className="shine-line shine-delay-2" />
            {/* Bottom Accent Ray */}
            <path d="M 140 196 Q 150 206 160 200" className="shine-line shine-delay-3" />
          </g>

          {/* 11. Multiple Sparkle Cleaning Stars with Twinkle Animation */}
          <g fill="#0879ba" stroke="#0879ba" strokeWidth="1.2">
            {/* Big Top Center Star */}
            <path
              d="M 200 24 L 204 36 L 216 40 L 204 44 L 200 56 L 196 44 L 184 40 L 196 36 Z"
              className="sparkle-star sparkle-delay-1"
            />
            {/* Top Left Star */}
            <path
              d="M 52 50 L 55 58 L 63 60 L 55 62 L 52 70 L 49 62 L 41 60 L 49 58 Z"
              className="sparkle-star sparkle-delay-2"
            />
            {/* Top Right Star */}
            <path
              d="M 348 50 L 351 58 L 359 60 L 351 62 L 348 70 L 345 62 L 337 60 L 345 58 Z"
              className="sparkle-star sparkle-delay-3"
            />
            {/* Left Cushion Star */}
            <path
              d="M 120 128 L 122 134 L 128 136 L 122 138 L 120 144 L 118 138 L 112 136 L 118 134 Z"
              fill="#30a8d8"
              stroke="#30a8d8"
              className="sparkle-star sparkle-delay-4"
            />
            {/* Right Cushion Star */}
            <path
              d="M 280 128 L 282 134 L 288 136 L 282 138 L 280 144 L 278 138 L 272 136 L 278 134 Z"
              fill="#30a8d8"
              stroke="#30a8d8"
              className="sparkle-star sparkle-delay-5"
            />
            {/* Bottom Right Star */}
            <path
              d="M 370 150 L 372 155 L 377 157 L 372 159 L 370 164 L 368 159 L 363 157 L 368 155 Z"
              className="sparkle-star sparkle-delay-2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
