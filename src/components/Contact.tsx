import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sohaibazhar04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-14">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', fontFamily: 'var(--font-heading)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      {/* Animated subtitle */}
      <div className="mb-12 sm:mb-16">
        <AnimatedText
          text="Have something worth building? I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[500px]"
        />
      </div>

      {/* Email CTA */}
      <FadeIn delay={0.2} y={20} className="mb-12 sm:mb-16">
        <button
          onClick={handleCopy}
          className="group inline-flex items-center gap-3 rounded-full text-white font-medium
            px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg md:text-xl
            hover:scale-105 active:scale-95 transition-transform duration-200"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid white',
            outlineOffset: '-3px',
          }}
        >
          <span>{copied ? 'Copied!' : 'sohaibazhar04@gmail.com'}</span>
          {copied ? <Check size={18} /> : <Copy size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
        </button>
      </FadeIn>

      {/* Social links */}
      <FadeIn delay={0.3} y={20}>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sohaib-azhar-37018924b/' },
            { name: 'GitHub', href: 'https://github.com/Sohaib-Azhar010' },
            { name: 'Resume', href: '/assets/Sohaib_Azhar_CV.pdf' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== 'Resume' ? '_blank' : undefined}
              rel={link.name !== 'Resume' ? 'noopener noreferrer' : undefined}
              download={link.name === 'Resume' ? true : undefined}
              className="group inline-flex items-center gap-1.5 text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-lg sm:text-xl font-medium tracking-wide transition-colors duration-200"
            >
              {link.name}
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-y-0.5 transition-all duration-200" />
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
