import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', fontFamily: 'var(--font-heading)' }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated text */}
      <div className="mb-16 sm:mb-20 md:mb-24">
        <AnimatedText
          text="I am a Full Stack Web Developer with hands-on experience building scalable web applications using Laravel, NestJS, and Next.js. I specialize in REST APIs, responsive interfaces, database optimization, and shipping user-focused digital products. I truly enjoy working with teams that aim to build something remarkable. Let's create something incredible together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
        />
      </div>

      {/* CTA */}
      <FadeIn delay={0.2} y={20}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
