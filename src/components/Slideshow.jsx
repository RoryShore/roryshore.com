import React, { useEffect, useMemo, useState } from "react";

export default function Slideshow({ images = [], intervalMs = 4500 }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (safeImages.length <= 1) return;

    const t = setInterval(() => {
      setIdx((cur) => (cur + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(t);
  }, [paused, safeImages.length, intervalMs]);

  const go = (nextIdx) => {
    const n = safeImages.length;
    if (n === 0) return;
    const wrapped = ((nextIdx % n) + n) % n;
    setIdx(wrapped);
  };

  if (safeImages.length === 0) return null;

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Photo slideshow"
    >
      <div className="slideshowFrame">
        {safeImages.map((src, i) => (
          <img
            key={src}
            className={"slideImg" + (i === idx ? " isActive" : "")}
            src={src}
            alt=""
            loading="lazy"
          />
        ))}
      </div>

      <div className="slideshowControls">
        <button className="slideBtn" type="button" onClick={() => go(idx - 1)} aria-label="Previous">
          ‹
        </button>

        <div className="slideDots" aria-label="Slide selection">
          {safeImages.map((_, i) => (
            <button
              key={i}
              className={"dot" + (i === idx ? " active" : "")}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="slideBtn" type="button" onClick={() => go(idx + 1)} aria-label="Next">
          ›
        </button>
      </div>

      <div className="slideshowHint">
        {paused ? "Paused" : "Hover to pause"} • {idx + 1}/{safeImages.length}
      </div>
    </div>
  );
}
