import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-5 sm:px-8 py-4 sm:py-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span 
              className="text-[21px] sm:text-[26px] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Sohaib Azhar
            </span>
            <span className="text-[25px] sm:text-[30px] text-white select-none" style={{ letterSpacing: '-0.02em' }}>
              ✳︎
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center text-[23px] text-white">
            {navLinks.map((link, i) => (
              <span key={link.name}>
                <a href={link.href} className="hover:opacity-60 transition-opacity duration-200">
                  {link.name}
                </a>
                {i < navLinks.length - 1 && <span className="mx-1">,</span>}
              </span>
            ))}
          </div>

          {/* Desktop CTA */}
          <a 
            href="#contact" 
            className="hidden md:inline text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity duration-200"
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden flex flex-col gap-[5px] z-50 relative" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className="block w-6 h-[2px] bg-white hamburger-line"
              style={{ transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
            />
            <span 
              className="block w-6 h-[2px] bg-white hamburger-line"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span 
              className="block w-6 h-[2px] bg-white hamburger-line"
              style={{ transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col justify-center px-8 gap-8 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity duration-200"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="text-[32px] text-white underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
