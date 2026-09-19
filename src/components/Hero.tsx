import { useTypewriter } from '../hooks/useTypewriter';
import { Avatar } from './Avatar';

export function Hero() {
  const { displayed, done } = useTypewriter({ 
    text: "Hey, I'm Sohaib. I build digital products that actually work.", 
    speed: 40, 
    startDelay: 300 
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sohaibazhar04@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background with noise/gradient */}
      <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.05),rgba(255,255,255,0))] -z-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8 z-10 text-center lg:text-left mt-8 lg:mt-0 order-2 lg:order-1">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-white min-h-[160px] md:min-h-[120px] lg:min-h-[200px]">
            {displayed}
            {!done && <span className="inline-block w-[0.5ch] h-[1em] bg-white ml-1 animate-blink translate-y-2"></span>}
          </h1>
          
          <p className="font-body text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
            Full Stack Web Developer working across Laravel, React, Next.js and NestJS.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#work" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">
              View my work
            </a>
            <a href="#about" className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              About me
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              Let's collaborate
            </a>
            <a href="/assets/Sohaib_Azhar_CV.pdf" download className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              Download CV
            </a>
          </div>

          <div className="pt-8">
            <button 
              onClick={handleCopyEmail}
              className="text-sm font-medium text-foreground/50 hover:text-white transition-colors flex items-center gap-2 mx-auto lg:mx-0 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              sohaibazhar04@gmail.com
            </button>
          </div>
        </div>
        
        <div className="z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
