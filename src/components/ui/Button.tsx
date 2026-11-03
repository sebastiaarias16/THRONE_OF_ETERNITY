import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-cinzel font-semibold tracking-wider uppercase transition-all duration-300 select-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-3',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-elyndor-ancientGold via-elyndor-luminousGold to-elyndor-ancientGold text-elyndor-deepBlack border border-elyndor-luminousGold shadow-gold-sm hover:shadow-gold-md hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-elyndor-nightBlue/80 text-elyndor-ivoryWhite border border-elyndor-ancientGold/40 hover:border-elyndor-luminousGold hover:bg-elyndor-nightBlue hover:shadow-gold-sm active:scale-[0.98]',
    outline:
      'bg-transparent text-elyndor-luminousGold border border-elyndor-ancientGold/50 hover:bg-elyndor-ancientGold/10 hover:border-elyndor-luminousGold active:scale-[0.98]',
    ghost:
      'bg-transparent text-elyndor-ivoryWhite hover:text-elyndor-luminousGold hover:bg-white/5',
    danger:
      'bg-red-950/80 text-red-200 border border-red-700/50 hover:bg-red-900/80',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Corner notches for primary and secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <>
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/60 pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/60 pointer-events-none" />
        </>
      )}

      {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
    </button>
  );
};
