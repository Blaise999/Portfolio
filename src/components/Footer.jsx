import { LogoMark } from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-10 border-t border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="flex items-center gap-3">
            <LogoMark size={28} />
            <div>
              <span className="block font-display font-bold text-[15px]">Blaise-Tech</span>
              <span className="text-[11px] text-white/25 italic">If you can imagine it, we can build it.</span>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-6 flex-wrap">
            {["Work", "Services", "About", "FAQ", "Quote", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[12px] text-white/25 hover:text-white/50 transition-colors font-mono tracking-wide">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/[0.03]">
          <span className="text-[11px] text-white/15 font-mono text-center sm:text-left">
            © 2026 Blaise-Tech. All rights reserved.
          </span>
          <span className="text-[11px] text-white/15 font-mono text-center sm:text-right">
            Designed &amp; engineered in Nigeria
          </span>
        </div>
        <p className="text-[10px] text-white/15 font-mono mt-4 text-center sm:text-left max-w-[680px] leading-relaxed">
          Privacy: this site logs visit metadata (IP, approximate city, referrer, page) once per session for operations and security. No cookies, no third-party trackers, no advertising pixels.
        </p>
      </div>
    </footer>
  );
}
