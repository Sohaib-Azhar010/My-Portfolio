import { useEffect, useRef } from 'react';
import { experiences } from '../data/experience';

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
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
    <section id="work" ref={sectionRef} className="relative py-28 sm:py-36 border-t border-white/[0.04]">
      <div className="px-5 sm:px-8 md:px-10 max-w-4xl">
        <h2 
          className="reveal-up text-[13px] sm:text-[15px] uppercase tracking-[0.2em] text-white/40 mb-16"
        >
          Experience
        </h2>

        <div className="space-y-0">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="reveal-up group relative border-t border-white/[0.06] py-10 first:border-t-0 first:pt-0 hover:bg-white/[0.01] transition-colors duration-500 -mx-5 sm:-mx-8 px-5 sm:px-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                <div>
                  <h3 
                    className="text-white font-normal"
                    style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontFamily: 'var(--font-heading)' }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-white/50 text-[15px] sm:text-[17px] mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-white/30 text-[13px] sm:text-[15px] uppercase tracking-wider mt-2 sm:mt-0 flex-shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-2 mb-5">
                {exp.description.map((desc, i) => (
                  <p key={i} className="text-white/60 text-[15px] sm:text-[17px] leading-[1.6] font-light">
                    {desc}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[12px] sm:text-[13px] text-white/50 border border-white/[0.08] rounded-full px-3 py-1 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
