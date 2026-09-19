import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import avatarImg from '../assets/avatar_cartoon.png';

export function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <FadeIn delay={0} y={-20} as="nav">
      <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </FadeIn>
  );
}

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <Navbar />

      {/* Giant heading */}
      <div className="overflow-hidden flex-shrink-0">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] mt-6 sm:mt-4 md:-mt-5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hi, i&apos;m sohaib
          </h1>
        </FadeIn>
      </div>

      {/* Spacer to push bottom bar down */}
      <div className="flex-1 relative">
        {/* Portrait - centered absolutely */}
        <FadeIn delay={0.6} y={30} className="absolute inset-0 flex justify-center pointer-events-none">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="absolute left-1/2 -translate-x-1/2 z-10 
              w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
              top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0
              pointer-events-auto"
          >
            <img
              src={avatarImg}
              alt="Sohaib Azhar"
              className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(118,33,176,0.15)]"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full stack developer driven by crafting scalable and remarkable products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
