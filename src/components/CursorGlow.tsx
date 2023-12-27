// CursorGlow.js
import React, { useState, useEffect } from "react";

interface CursorGlowProps {
  // Add any additional props here if needed
}

const CursorGlow: React.FC<CursorGlowProps> = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const circleSize = 800;

  const cursorGlowStyle: React.CSSProperties = {
    position: "fixed",
    top: `${cursorPosition.y - circleSize / 2}px`,
    left: `${cursorPosition.x - circleSize / 2}px`,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`,
    pointerEvents: "none",
    zIndex: 9999,
  };

  return <div style={cursorGlowStyle}></div>;
};

export default CursorGlow;
