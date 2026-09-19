import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { Avatar } from './Avatar';

export function Hero() {
  const { displayed, done } = useTypewriter({
    text: "Glad you stopped in. I build digital products that actually work — clean code, smooth interfaces, scalable systems.",
    speed: 34,
    startDelay: 800,
  });

  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Show pills after 400ms, independent of typewriter
  useEffect(() => {
    const timer = setTimeout(() => setPillsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sohaibazhar04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.03),transparent)] z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-[2] flex-1 flex flex-col md:flex-row items-center justify-end md:justify-center pb-12 md:pb-0 px-5 sm:px-8 md:px-10">
        
        {/* Left — Text content */}
        <div className="max-w-xl relative z-10 order-2 md:order-1 md:mr-auto">
          {/* Blurred intro label */}
          <div className="pointer-events-none select-none mb-5 sm:mb-6" style={{ filter: 'blur(4px)' }}>
            <p 
              className="text-white font-normal leading-[1.3]"
              style={{ fontSize: 'clamp(18px, 4vw, 26px)' }}
            >
              Hey there, meet Sohaib,<br />
              Full Stack Web Developer from Lahore.
            </p>
          </div>

          {/* Typewriter text */}
          <p
            className="text-white mb-5 sm:mb-6 font-normal leading-[1.35]"
            style={{ fontSize: 'clamp(18px, 4vw, 26px)', minHeight: '54px' }}
          >
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink" />
            )}
          </p>

          {/* Action pills */}
          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {/* White pills */}
            {[
              { label: 'View my work', href: '#work' },
              { label: 'About me', href: '#about' },
              { label: "Let's collaborate", href: '#contact' },
            ].map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
              >
                {pill.label}
              </a>
            ))}
            {/* Download CV pill */}
            <a
              href="/assets/Sohaib_Azhar_CV.pdf"
              download
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
            >
              Download CV
            </a>
            {/* Email outline pill */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center bg-transparent text-white border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 gap-2 sm:gap-3"
            >
              <span>
                {copied ? 'Copied!' : <><span className="underline underline-offset-1">sohaibazhar04@gmail.com</span></>}
              </span>
              {!copied && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="order-1 md:order-2 mb-8 md:mb-0 md:ml-12 lg:ml-20 flex-shrink-0">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
