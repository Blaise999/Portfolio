"use client";

export function LogoMark({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="12" fill="url(#logo-gradient)" />
      {/* B letterform - geometric, modern */}
      <path
        d="M15 12H26C29.3137 12 32 14.6863 32 18C32 20.2 30.9 22.1 29.2 23.2C31.3 24.2 32.8 26.3 32.8 28.8C32.8 32.4 29.9 35.3 26.3 35.3H15V12Z"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 12V35.3"
        stroke="white"
        strokeWidth="2.5"
      />
      <path
        d="M20 23.5H26C28 23.5 29.5 22 29.5 20C29.5 18 28 16.5 26 16.5H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 23.5H26.3C28.5 23.5 30.3 25.3 30.3 27.4C30.3 29.5 28.5 31.3 26.3 31.3H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Tech accent - small circuit line */}
      <circle cx="36" cy="14" r="2" fill="#2dd4bf" />
      <line x1="36" y1="16" x2="36" y2="22" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} />
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold text-[18px] tracking-tight text-white">
          Blaise-Tech
        </span>
      </div>
    </div>
  );
}
