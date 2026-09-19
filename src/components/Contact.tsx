import { useState, useEffect, useRef } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sohaibazhar04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 sm:py-40 border-t border-white/[0.04]">
      <div className="px-5 sm:px-8 md:px-10 max-w-4xl">
        <h2 className="reveal-up text-[13px] sm:text-[15px] uppercase tracking-[0.2em] text-white/40 mb-10">
          Contact
        </h2>

        <p
          className="reveal-up text-white font-normal leading-[1.2] mb-12"
          style={{ fontSize: 'clamp(28px, 6vw, 64px)', fontFamily: 'var(--font-heading)' }}
        >
          Have something worth building?{' '}
          <span className="text-white/40">Let's talk.</span>
        </p>

        {/* Email CTA */}
        <div className="reveal-up mb-16">
          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-3 bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[16px] sm:text-[20px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {copied ? (
              <span>Copied to clipboard ✓</span>
            ) : (
              <>
                <span>sohaibazhar04@gmail.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-100 transition-opacity">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Links */}
        <div className="reveal-up flex flex-wrap gap-x-8 gap-y-3">
          <a
            href="https://www.linkedin.com/in/sohaib-azhar-37018924b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-[17px] sm:text-[20px] underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sohaib-Azhar010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-[17px] sm:text-[20px] underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="/assets/Sohaib_Azhar_CV.pdf"
            download
            className="text-white/50 hover:text-white text-[17px] sm:text-[20px] underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
