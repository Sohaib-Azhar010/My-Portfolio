import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const updateMousePosition = (ev: MouseEvent) => {
      targetX = ev.clientX;
      targetY = ev.clientY;
    };

    const animate = () => {
      setMousePosition({ x: targetX, y: targetY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePosition;
}
