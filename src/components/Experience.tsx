import { FadeIn } from './FadeIn';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', fontFamily: 'var(--font-heading)' }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* Items */}
      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.id} delay={i * 0.1} y={30}>
            <div
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span
                  className="text-[#0C0C0C] font-black leading-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {exp.role}
                </h3>
                <p className="text-[#0C0C0C]/60 font-medium text-sm uppercase tracking-wider mt-1">
                  {exp.company} &middot; {exp.period}
                </p>
                
                <div className="mt-4 space-y-2">
                  {exp.description.map((desc, j) => (
                    <p
                      key={j}
                      className="text-[#0C0C0C] font-light leading-relaxed opacity-60"
                      style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#0C0C0C]/50 border border-[#0C0C0C]/15 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
