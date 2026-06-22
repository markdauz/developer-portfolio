import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function BentoCard({ children, className = '' }: Props) {
  return (
    <div
      className={`
        rounded-[28px] sm:rounded-[32px] lg:rounded-[40px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-5 sm:p-6 lg:p-8
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default BentoCard;
