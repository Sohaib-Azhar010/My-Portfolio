import { useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import avatarImg from '../assets/avatar.jpg';

export function Avatar() {
  const mousePosition = useMousePosition();
  const avatarRef = useRef<HTMLDivElement>(null);

  // Calculate rotation based on mouse position relative to window center
  const rotateY = typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth - 0.5) * 12 : 0;
  const rotateX = typeof window !== 'undefined' ? (mousePosition.y / window.innerHeight - 0.5) * -8 : 0;
  const translateX = typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth - 0.5) * 10 : 0;
  const translateY = typeof window !== 'undefined' ? (mousePosition.y / window.innerHeight - 0.5) * 6 : 0;

  return (
    <div 
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div 
        ref={avatarRef}
        className="w-full h-full rounded-full transition-transform duration-200 ease-out preserve-3d"
        style={{ 
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateX(${translateX}px) translateY(${translateY}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10" style={{ transform: 'translateZ(20px)' }}>
          <img 
            src={avatarImg} 
            alt="Sohaib Azhar Avatar" 
            className="w-full h-full object-cover object-center filter contrast-110 saturate-110"
          />
        </div>
        {/* Subtle glow/shadow behind */}
        <div 
          className="absolute inset-0 rounded-full bg-white/5 blur-2xl -z-10" 
          style={{ transform: 'translateZ(-10px)' }}
        />
      </div>
    </div>
  );
}
