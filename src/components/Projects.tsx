import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { projects } from '../data/projects';

function ProjectCard({ 
  project, 
  index, 
  targetScale 
}: { 
  project: typeof projects[0]; 
  index: number; 
  targetScale: number; 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]" style={{ position: 'relative' }}>
      <motion.div
        className="sticky top-24 md:top-32 origin-top"
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="hero-heading font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest font-medium">
                  Project
                </p>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)', fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
            <a
              href={project.link || '#'}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
                px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base
                hover:bg-[#D7E2EA]/10 transition-colors duration-200 self-start"
            >
              View Details
            </a>
          </div>

          {/* Description */}
          <p className="text-[#D7E2EA]/60 font-light leading-relaxed mb-6" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
            {project.description}
          </p>

          {/* Tech + Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/60 border border-[#D7E2EA]/15 rounded-full px-3 py-1">
                {tech}
              </span>
            ))}
            {project.features.map((f) => (
              <span key={f} className="text-[11px] sm:text-xs font-light tracking-wide text-[#D7E2EA]/40 border border-[#D7E2EA]/10 rounded-full px-3 py-1">
                {f}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', fontFamily: 'var(--font-heading)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            targetScale={1 - (projects.length - 1 - i) * 0.03}
          />
        ))}
      </div>
    </section>
  );
}
