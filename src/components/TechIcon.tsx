import React from 'react';

const deviconMap: Record<string, string> = {
  'react': 'devicon-react-original colored',
  'next.js': 'devicon-nextjs-plain',
  'nextjs': 'devicon-nextjs-plain',
  'tailwind css': 'devicon-tailwindcss-original colored',
  'tailwind': 'devicon-tailwindcss-original colored',
  'html': 'devicon-html5-plain colored',
  'html5': 'devicon-html5-plain colored',
  'css': 'devicon-css3-plain colored',
  'css3': 'devicon-css3-plain colored',
  'javascript': 'devicon-javascript-plain colored',
  'typescript': 'devicon-typescript-plain colored',
  'node.js': 'devicon-nodejs-plain colored',
  'nodejs': 'devicon-nodejs-plain colored',
  'express.js': 'devicon-express-original',
  'express': 'devicon-express-original',
  'prisma': 'devicon-prisma-original colored',
  'prisma orm': 'devicon-prisma-original colored',
  'postgresql': 'devicon-postgresql-plain colored',
  'mysql': 'devicon-mysql-plain colored',
  'php': 'devicon-php-plain colored',
  'c++': 'devicon-cplusplus-plain colored',
  'cplusplus': 'devicon-cplusplus-plain colored',
  'python': 'devicon-python-plain colored',
  'dart': 'devicon-dart-plain colored',
  'flutter': 'devicon-flutter-plain colored',
  'nestjs': 'devicon-nestjs-plain colored',
  'vite': 'devicon-vitejs-plain colored',
  'redis': 'devicon-redis-plain colored',
  'git': 'devicon-git-plain colored',
  'git & github': 'devicon-git-plain colored',
  'docker': 'devicon-docker-plain colored',
  'linux': 'devicon-linux-plain',
  'vercel': 'devicon-vercel-original',
  'supabase': 'devicon-supabase-plain colored',
  'postman': 'devicon-postman-plain colored',
};

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-7 h-7' }) => {
  const key = name.toLowerCase().trim();

  // Custom SVGs for tools and engineering concepts
  if (key === 'virtualbox' || key === 'virtual box') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L6 14.5V33.5L24 44L42 33.5V14.5L24 4Z" fill="#183A60" />
          <path d="M24 4L42 14.5L24 25L6 14.5L24 4Z" fill="#2C73C5" />
          <path d="M24 25V44L6 33.5V14.5L24 25Z" fill="#1B4980" />
          <path d="M24 25L42 14.5V33.5L24 44V25Z" fill="#245F9E" />
          <circle cx="24" cy="25" r="4.5" fill="#E67E22" />
          <circle cx="24" cy="4" r="3" fill="#E67E22" />
          <circle cx="6" cy="14.5" r="3" fill="#E67E22" />
          <circle cx="42" cy="14.5" r="3" fill="#E67E22" />
          <circle cx="6" cy="33.5" r="3" fill="#E67E22" />
          <circle cx="42" cy="33.5" r="3" fill="#E67E22" />
          <circle cx="24" cy="44" r="3" fill="#E67E22" />
        </svg>
      </span>
    );
  }

  if (key === 'kali linux' || key === 'kalilinux') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#0D1929" />
          <path d="M12 28C14 20 22 13 32 15C36 15.8 38 18 36 21C34 24 30 22 28 20C26 18 20 20 18 26C16 32 24 36 30 34C34 32.6 36 30 38 31C37 34 32 37 27 37C19 37 11 33 12 28Z" fill="#2882FF" />
          <path d="M22 17L27 12L25 18L30 15L27 21L33 19L29 25" stroke="#5EA2FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (key === 'wireshark') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#137FC3" />
          <path d="M14 34C14 34 16 26 24 20C30 15.5 35 12 37 10C37 15 35 24 30 28C26 31.2 21 34 14 34Z" fill="#FFFFFF" />
          <path d="M10 35H38" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (key === 'rest apis' || key === 'rest api' || key === 'api') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="10" width="32" height="10" rx="3" fill="#161615" />
          <rect x="8" y="28" width="32" height="10" rx="3" fill="#161615" />
          <circle cx="14" cy="15" r="2" fill="#58bceb" />
          <circle cx="20" cy="15" r="2" fill="#cff24d" />
          <circle cx="14" cy="33" r="2" fill="#58bceb" />
          <circle cx="20" cy="33" r="2" fill="#cff24d" />
          <path d="M24 20V28M24 20L21 23M24 20L27 23M24 28L21 25M24 28L27 25" stroke="#f2a0bd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (key === 'jwt' || key === 'jwt authentication' || key === 'jwt auth') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#000000" />
          <path d="M14 24C14 18.5 18.5 14 24 14C29.5 14 34 18.5 34 24C34 29.5 29.5 34 24 34" stroke="#D63AFF" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="24" cy="24" r="4.5" fill="#00F0FF" />
          <path d="M24 14V19M34 24H29M24 34V29" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (key === 'bcrypt') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#2C3E50" />
          <rect x="15" y="21" width="18" height="15" rx="3" fill="#F1C40F" />
          <path d="M19 21V16C19 13.2 21.2 11 24 11C26.8 11 29 13.2 29 16V21" stroke="#BDC3C7" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="28.5" r="2" fill="#2C3E50" />
        </svg>
      </span>
    );
  }

  if (key === 'railway') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#0B0D0E" />
          <path d="M12 28.5L20 14H28L36 28.5H12Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M15 34H33" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 22H28" stroke="#FF5499" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (key === 'cloudinary') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#3448C5" />
          <path d="M18 32H31C34.3 32 37 29.3 37 26C37 23.1 34.9 20.7 32.1 20.1C31.6 16.1 28.2 13 24 13C20.4 13 17.3 15.3 16.3 18.6C13.8 19.3 12 21.4 12 24C12 26.8 14.2 32 18 32Z" fill="#FFFFFF" />
        </svg>
      </span>
    );
  }

  if (key === 'nmap') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#1C2833" />
          <circle cx="24" cy="24" r="16" stroke="#2ECC71" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="24" cy="24" r="9" stroke="#2ECC71" strokeWidth="1.5" />
          <path d="M24 8V40M8 24H40" stroke="#2ECC71" strokeWidth="1.2" opacity="0.6" />
          <circle cx="29" cy="18" r="3" fill="#E74C3C" />
        </svg>
      </span>
    );
  }

  if (key === 'burp suite' || key === 'burpsuite') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#FF6633" />
          <path d="M16 12H27C31 12 34 15 34 18.5C34 21 32.5 23 30 24C33 25 35 27.5 35 30.5C35 34.5 31.5 37 27 37H16V12ZM22 22H26.5C28 22 29 21 29 19.5C29 18 28 17 26.5 17H22V22ZM22 32H27C28.8 32 30 31 30 29.5C30 28 28.8 27 27 27H22V32Z" fill="#FFFFFF" />
        </svg>
      </span>
    );
  }

  if (key === 'database design') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="12" rx="15" ry="6" fill="#4B6584" />
          <ellipse cx="24" cy="12" rx="13" ry="4.5" fill="#778CA3" />
          <path d="M9 12V24C9 27.3 15.7 30 24 30C32.3 30 39 27.3 39 24V12" stroke="#4B6584" strokeWidth="3" fill="#D1D8E0" />
          <path d="M9 24V36C9 39.3 15.7 42 24 42C32.3 42 39 39.3 39 36V24" stroke="#4B6584" strokeWidth="3" fill="#A5B1C2" />
        </svg>
      </span>
    );
  }

  if (key === 'system analysis') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="18" r="6" stroke="#2C3E50" strokeWidth="2.5" fill="#E8F4F8" />
          <circle cx="32" cy="18" r="6" stroke="#2C3E50" strokeWidth="2.5" fill="#E8F4F8" />
          <circle cx="24" cy="34" r="6" stroke="#2C3E50" strokeWidth="2.5" fill="#E8F4F8" />
          <path d="M21 21L27 29M27 21L21 29M22 18H26" stroke="#E67E22" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (key === 'software testing') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="28" height="32" rx="3" stroke="#161615" strokeWidth="2.5" fill="#FFFFFF" />
          <path d="M16 16L20 20L30 12" stroke="#27AE60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="26" x2="32" y2="26" stroke="#BDC3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="33" x2="28" y2="33" stroke="#BDC3C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (key === 'black-box testing' || key === 'blackbox testing') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" rx="4" fill="#161615" />
          <path d="M17 24L22 29L31 19" stroke="#2ECC71" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (key === 'uml' || key === 'uml modeling' || key === 'uml & erd') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="10" width="32" height="28" rx="2" stroke="#161615" strokeWidth="2.5" fill="#FAF6ED" />
          <line x1="8" y1="19" x2="40" y2="19" stroke="#161615" strokeWidth="2" />
          <line x1="8" y1="28" x2="40" y2="28" stroke="#161615" strokeWidth="1.5" />
          <text x="24" y="16" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#161615">Class</text>
          <text x="12" y="25" fontSize="5" fontFamily="monospace" fill="#58BCEB">+field</text>
          <text x="12" y="34" fontSize="5" fontFamily="monospace" fill="#EC82B6">+method()</text>
        </svg>
      </span>
    );
  }

  if (key === 'erd' || key === 'erd modeling') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="14" height="12" rx="2" stroke="#2C3E50" strokeWidth="2" fill="#E8F4F8" />
          <rect x="26" y="28" width="14" height="12" rx="2" stroke="#2C3E50" strokeWidth="2" fill="#E8F4F8" />
          <path d="M15 20V26C15 28 17 30 19 30H26" stroke="#E74C3C" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="15" cy="20" r="1.5" fill="#E74C3C" />
          <path d="M26 27L22 30L26 33" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (key === 'web security') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L10 12V22C10 31.5 16 39.5 24 42C32 39.5 38 31.5 38 22V12L24 6Z" fill="#1B4980" stroke="#58BCEB" strokeWidth="2" />
          <path d="M18 23L22 27L30 18" stroke="#CFF24D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (key === 'soc fundamentals') {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="21" fill="#161615" stroke="#CFF24D" strokeWidth="2" />
          <circle cx="24" cy="24" r="13" stroke="#58BCEB" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="24" cy="24" r="5" fill="#E67E22" />
          <line x1="24" y1="5" x2="24" y2="10" stroke="#CFF24D" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="38" x2="24" y2="43" stroke="#CFF24D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  // Fallback to devicon font class if available
  const deviconClass = deviconMap[key];
  if (deviconClass) {
    return (
      <span className={`inline-flex items-center justify-center ${className} select-none`}>
        <i className={`${deviconClass} text-[26px] leading-none`} aria-label={name} />
      </span>
    );
  }

  return (
    <span className="w-7 h-7 rounded bg-neutral-200 border border-neutral-300 flex items-center justify-center font-mono text-xs font-bold text-neutral-800">
      {name.charAt(0)}
    </span>
  );
};

export default TechIcon;
