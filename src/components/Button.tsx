import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'small';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children = 'RESERVE NOW',
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = `
    relative overflow-hidden
    bg-primary text-white text-center font-bold uppercase tracking-wide cursor-pointer
    transition-all duration-300 ease-out
    hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5
    active:scale-[0.98] active:translate-y-0
    touch-manipulation shadow-lg
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
  `;

  const variantStyles = {
    primary: 'rounded-3xl py-3 md:py-3.5 px-8 md:px-16 text-fluid-sm min-h-touch',
    small: 'rounded-3xl py-2 px-4 text-fluid-xs min-h-touch min-w-[100px] md:min-w-[120px]'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
