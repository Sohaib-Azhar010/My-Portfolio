import { useEffect, useRef } from 'react';
import { skillCategories } from '../data/skills';

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 sm:py-36 border-t border-white/[0.04]">
      <div className="px-5 sm:px-8 md:px-10 max-w-5xl">
        <h2 className="reveal-up text-[13px] sm:text-[15px] uppercase tracking-[0.2em] text-white/40 mb-16">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="reveal-up">
              <h3 
                className="text-white/30 text-[13px] uppercase tracking-[0.15em] mb-5"
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill inline-flex items-center bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2 text-[14px] sm:text-[15px] text-white/80 hover:border-white/20 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,255,255,0.04)] transition-all duration-300 cursor-default"
                  >
                    {skill}
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
