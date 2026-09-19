export function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sohaibazhar04@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <div className="flex flex-col items-center space-y-12">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight max-w-3xl">
            Have something worth building? <br className="hidden md:block" />
            <span className="text-white/50">Let's talk.</span>
          </h2>
          
          <button 
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              sohaibazhar04@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-12">
            <a 
              href="https://www.linkedin.com/in/sohaib-azhar-37018924b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-lg font-medium tracking-wide transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Sohaib-Azhar010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-lg font-medium tracking-wide transition-colors"
            >
              GitHub
            </a>
            <a 
              href="/assets/Sohaib_Azhar_CV.pdf" 
              download
              className="text-white/60 hover:text-white text-lg font-medium tracking-wide transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
