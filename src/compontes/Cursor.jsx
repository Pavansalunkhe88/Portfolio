import React, { useEffect, useRef } from 'react';
import './cursor.scss';

const TRAIL_COUNT = 5;

const Cursor = () => {
  const containerRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  );
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    const dots = containerRef.current?.children;

    const animate = () => {
      const positions = trailPositions.current;

      // Lead dot follows mouse directly
      positions[0].x += (mouse.current.x - positions[0].x) * 0.35;
      positions[0].y += (mouse.current.y - positions[0].y) * 0.35;

      // Each trailing dot eases toward the one ahead of it
      for (let i = 1; i < TRAIL_COUNT; i++) {
        const ease = 0.25 - i * 0.03;
        positions[i].x += (positions[i - 1].x - positions[i].x) * ease;
        positions[i].y += (positions[i - 1].y - positions[i].y) * ease;
      }

      // Apply positions directly to DOM — no React re-renders
      if (dots) {
        for (let i = 0; i < TRAIL_COUNT; i++) {
          if (dots[i]) {
            dots[i].style.transform = `translate(${positions[i].x - 10}px, ${positions[i].y - 10}px) scale(${1 - i * 0.1})`;
          }
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="cursor-container" ref={containerRef}>
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          className={`custom-cursor trail-${i}`}
        />
      ))}
    </div>
  );
};

export default Cursor;