export function Footer() {
  return (
    <footer className="border-t border-[#D7E2EA]/[0.06] py-6 sm:py-8">
      <div className="px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[#D7E2EA]/25 text-[13px] sm:text-[14px]">
          &copy; {new Date().getFullYear()} Sohaib Azhar
        </p>
        <p className="text-[#D7E2EA]/25 text-[13px] sm:text-[14px]">
          Lahore, Pakistan
        </p>
      </div>
    </footer>
  );
}
