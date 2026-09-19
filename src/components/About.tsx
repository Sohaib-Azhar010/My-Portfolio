import { useEffect, useRef } from 'react';

export function About() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 sm:py-36">
      <div className="px-5 sm:px-8 md:px-10 max-w-3xl">
        <h2 
          className="reveal-up text-[13px] sm:text-[15px] uppercase tracking-[0.2em] text-white/40 mb-10"
        >
          About
        </h2>
        <p 
          className="reveal-up text-white/90 font-normal leading-[1.5]"
          style={{ fontSize: 'clamp(22px, 4vw, 36px)' }}
        >
          I am a Full Stack Web Developer with hands-on experience building scalable web applications using Laravel, NestJS, and Next.js.
        </p>
        <p 
          className="reveal-up text-white/50 font-normal leading-[1.5] mt-6"
          style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
        >
          I specialize in REST APIs, responsive interfaces, database optimization, and shipping user-focused digital products that solve real problems.
        </p>
      </div>
    </section>
  );
}
