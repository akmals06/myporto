import type { ReactNode } from 'react';

interface DoodleProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const CrownDoodle = ({ className = '', color = 'currentColor', width = 38, height = 30 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 50 40" fill="none">
    <path
      d="M5 32 L2 12 L16 22 L25 5 L34 22 L48 12 L45 32 Z"
      stroke={color}
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <circle cx="2" cy="10" r="1.8" fill={color} />
    <circle cx="25" cy="4" r="1.8" fill={color} />
    <circle cx="48" cy="10" r="1.8" fill={color} />
  </svg>
);

export const CurvedArrow = ({ className = '', color = 'currentColor', width = 48, height = 26 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 60 30" fill="none">
    <path
      d="M5 22 Q 30 8, 52 14"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M44 8 L54 14 L46 22"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarDoodle = ({ className = '', color = 'currentColor', fill = 'none', filled = false, width = 28, height = 28 }: DoodleProps & { fill?: string; filled?: boolean }) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 50 50" fill={filled ? color : fill}>
    <path
      d="M25 4 L31 18 L46 20 L35 30 L38 45 L25 37 L12 45 L15 30 L4 20 L19 18 Z"
      stroke={color}
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
  </svg>
);

export const FlowerDoodle = ({ className = '', color = 'currentColor', centerColor = 'currentColor', width = 38, height = 38 }: DoodleProps & { centerColor?: string }) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 60 60" fill="none">
    <path
      d="M30 20 C24 6, 36 6, 30 20 C42 10, 50 18, 37 26 C50 26, 50 38, 37 34 C46 45, 36 52, 30 39 C24 52, 14 45, 23 34 C10 38, 10 26, 23 26 C10 18, 18 10, 30 20 Z"
      stroke={color}
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="30" r="3.5" fill={centerColor} />
  </svg>
);

export const SmileyDoodle = ({ className = '', color = 'currentColor', bg = 'transparent', width = 36, height = 36 }: DoodleProps & { bg?: string }) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 50 50" fill="none">
    {bg !== 'transparent' && <circle cx="25" cy="25" r="21" fill={bg} />}
    <circle cx="25" cy="25" r="20" stroke={color} strokeWidth="2.6" />
    <path d="M18 18 L18 22 M32 18 L32 22" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    <path d="M15 29 Q 25 39, 35 28" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

export const GlobeDoodle = ({ className = '', color = 'currentColor', width = 32, height = 32 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 50 50" fill="none">
    <circle cx="25" cy="25" r="21" stroke={color} strokeWidth="2.6" />
    <line x1="4" y1="25" x2="46" y2="25" stroke={color} strokeWidth="2.2" />
    <ellipse cx="25" cy="25" rx="12" ry="21" stroke={color} strokeWidth="2.2" />
    <path d="M7 14 Q 25 21, 43 14" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M7 36 Q 25 29, 43 36" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const PaperClip = ({ className = '', color = '#141414', width = 22, height = 44 }: DoodleProps) => (
  <svg width={width} height={height} className={className} viewBox="0 0 30 60" fill="none">
    <path
      d="M10 18 L10 46 C10 52 14 55 19 55 C24 55 28 52 28 46 L28 12 C28 5 21 2 15 2 C9 2 2 5 2 12 L2 48"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

export const ScribbleLine = ({ className = '', color = 'currentColor', width = 110, height = 16 }: DoodleProps) => (
  <svg width={width} height={height} className={className} viewBox="0 0 140 16" fill="none">
    <path
      d="M4 8 Q 20 2, 38 10 T 72 7 T 108 9 T 136 7"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </svg>
);

export const CoffeeRingStain = ({ className = '', width = 100, height = 100 }: { className?: string; width?: number | string; height?: number | string }) => (
  <svg width={width} height={height} className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="42" stroke="rgba(120, 53, 15, 0.22)" strokeWidth="4.5" strokeDasharray="10 4 14 5" strokeLinecap="round" />
    <circle cx="50" cy="50" r="45" stroke="rgba(120, 53, 15, 0.12)" strokeWidth="1.8" strokeDasharray="24 12" />
    <circle cx="28" cy="80" r="2" fill="rgba(120, 53, 15, 0.2)" />
    <circle cx="78" cy="25" r="1.5" fill="rgba(120, 53, 15, 0.2)" />
    <circle cx="82" cy="74" r="1" fill="rgba(120, 53, 15, 0.2)" />
  </svg>
);

export const HandDrawnOval = ({ children, color = '#6EC4E8', className = '' }: { children: ReactNode; color?: string; className?: string }) => (
  <div
    className={`hand-drawn-oval ${className}`}
    style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 18px',
      lineHeight: 1,
    }}
  >
    <span
      className="hand-drawn-oval-text"
      style={{
        position: 'relative',
        zIndex: 2,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
    <svg
      className="hand-drawn-oval-svg"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-1deg)',
        width: 'calc(100% + 24px)',
        height: 'calc(100% + 16px)',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'visible',
      }}
      viewBox="0 0 160 48"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <ellipse
        cx="80"
        cy="24"
        rx="74"
        ry="18"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 14,29 C 26,38 92,40 146,31"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const ActiveNavIndicatorSvg = ({ color = '#58BCEB' }: { color?: string }) => (
  <svg width="100%" height="100%" className="w-full h-full drop-shadow-[0_1px_2px_rgba(88,188,235,0.4)]" viewBox="0 0 120 44" fill="none" preserveAspectRatio="none">
    <path
      d="M 16,22 C 14,10 38,5 64,5 C 94,5 114,11 112,23 C 110,33 86,39 56,39 C 24,39 6,33 8,21 C 10,13 32,8 64,7"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 12,26 C 26,35 84,36 106,27"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const LightbulbDoodle = ({ className = '', color = 'currentColor', width = 34, height = 44 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 40 50" fill="none">
    <path
      d="M20 5 C12 5, 8 12, 8 20 C8 26, 13 29, 14 34 L26 34 C27 29, 32 26, 32 20 C32 12, 28 5, 20 5 Z"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15 38 L25 38 M17 42 L23 42" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M7 10 L3 6 M33 10 L37 6 M5 22 L1 22 M35 22 L39 22" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RibbonMedalDoodle = ({ className = '', color = 'currentColor', width = 36, height = 48 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 50 60" fill="none">
    <circle cx="25" cy="22" r="16" stroke={color} strokeWidth="2.8" />
    <circle cx="25" cy="22" r="11" stroke={color} strokeWidth="1.8" strokeDasharray="3 3" />
    <path d="M17 35 L12 55 L22 49 L25 55" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 35 L38 55 L28 49 L25 55" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PaperAirplaneDoodle = ({ className = '', color = 'currentColor', width = 36, height = 28 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 50 40" fill="none">
    <path
      d="M5 20 L45 5 L28 35 L22 23 L5 20 Z"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M45 5 L22 23" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const SparkleDoodle = ({ className = '', color = 'currentColor', width = 24, height = 24 }: DoodleProps) => (
  <svg width={width} height={height} className={`hover-doodle ${className}`} viewBox="0 0 30 30" fill="none">
    <path d="M15 2 L15 28 M2 15 L28 15" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    <path d="M6 6 L24 24 M6 24 L24 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
