import { useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import avatarImg from '../assets/avatar_cartoon.png';

export function Avatar() {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);

  const w = typeof window !== 'undefined' ? window.innerWidth : 1;
  const h = typeof window !== 'undefined' ? window.innerHeight : 1;

  // Subtle 3D rotation following cursor
  const rotateY = (mousePosition.x / w - 0.5) * 14;
  const rotateX = (mousePosition.y / h - 0.5) * -10;
  // Slight parallax drift
  const translateX = (mousePosition.x / w - 0.5) * 12;
  const translateY = (mousePosition.y / h - 0.5) * 8;

  return (
    <div className="relative" ref={containerRef}>
      {/* Ambient glow behind avatar */}
      <div 
        className="absolute inset-0 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          transform: 'scale(1.4)',
          filter: 'blur(30px)',
        }}
      />

      {/* Avatar container */}
      <div
        className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
        style={{ perspective: '1200px' }}
      >
        <div
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateX(${translateX}px) translateY(${translateY}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main image with ring */}
          <div 
            className="w-full h-full rounded-full overflow-hidden ring-1 ring-white/[0.08] shadow-[0_0_80px_rgba(255,255,255,0.05)]"
            style={{ transform: 'translateZ(30px)' }}
          >
            <img
              src={avatarImg}
              alt="Sohaib Azhar — Full Stack Developer"
              className="w-full h-full object-cover object-center scale-[1.15] translate-y-3"
              draggable={false}
            />
          </div>

          {/* Floating reflection */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
              transform: 'translateZ(35px)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
