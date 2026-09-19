export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-6 sm:py-8">
      <div className="px-5 sm:px-8 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-white/25 text-[13px] sm:text-[14px]">
          &copy; {new Date().getFullYear()} Sohaib Azhar
        </p>
        <p className="text-white/25 text-[13px] sm:text-[14px]">
          Lahore, Pakistan
        </p>
      </div>
    </footer>
  );
}
