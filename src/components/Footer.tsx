export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          &copy; {currentYear} Sohaib Azhar. All rights reserved.
        </p>
        <p className="text-white/40 text-sm flex items-center gap-1">
          Designed and built with <span className="text-white">Next.js & React</span>
        </p>
      </div>
    </footer>
  );
}
