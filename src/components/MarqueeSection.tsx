import { useEffect, useRef, useState } from 'react';

const techStack = [
  'React.js', 'Next.js', 'Laravel', 'NestJS', 'TypeScript', 
  'PostgreSQL', 'MySQL', 'Prisma', 'Docker', 'Jest',
  'Git', 'Supabase', 'REST APIs', 'Tailwind CSS', 'Node.js',
  'Redis', 'GraphQL', 'Postman', 'PgAdmin', 'Vite',
  'Bootstrap',
];

const row1 = techStack.slice(0, 11);
const row2 = techStack.slice(11);

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple arrays for seamless loop
  const tripled1 = [...row1, ...row1, ...row1];
  const tripled2 = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 — moves right */}
      <div className="flex gap-3 mb-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}>
        {tripled1.map((tech, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] px-8 py-5 min-w-[200px]"
          >
            <span className="text-[#D7E2EA] font-medium text-lg whitespace-nowrap tracking-wide">
              {tech}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div className="flex gap-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}>
        {tripled2.map((tech, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] px-8 py-5 min-w-[200px]"
          >
            <span className="text-[#D7E2EA] font-medium text-lg whitespace-nowrap tracking-wide">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
