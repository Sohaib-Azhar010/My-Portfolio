import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36 border-t border-white/[0.04]">
      <div className="px-5 sm:px-8 md:px-10 max-w-5xl">
        <h2 className="reveal-up text-[13px] sm:text-[15px] uppercase tracking-[0.2em] text-white/40 mb-6">
          Selected Work
        </h2>
        <p 
          className="reveal-up text-white/50 font-light leading-[1.5] mb-16 max-w-2xl"
          style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}
        >
          Digital products and platforms I've designed and engineered.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="reveal-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
