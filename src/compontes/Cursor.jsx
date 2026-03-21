import React, { useEffect, useState } from 'react';
import './cursor.scss';

const Cursor = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPositions((prev) => [newPosition, ...prev.slice(0, 4)]); // Keep last 5 positions
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="cursor-container">
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`custom-cursor trail-${index}`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Cursor;