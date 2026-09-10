import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  iconRight?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  iconRight = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-outfit font-medium transition-all duration-300 rounded-full select-none cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-[0.875rem] py-2 px-4 gap-2',
    md: 'text-[0.95rem] py-3.5 px-6 gap-2.5',
    lg: 'text-[1.05rem] py-4.5 px-8 gap-3',
  };

  const variantStyles = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-[0_2px_12px_rgba(249,69,44,0.25)] hover:shadow-[0_4px_20px_rgba(249,69,44,0.4)]',
    secondary: 'bg-white text-ink-primary hover:bg-surface-subtle border border-borderLine-subtle',
    outline: 'bg-transparent text-ink-primary border border-ink-primary/20 hover:border-ink-primary',
    dark: 'bg-surface-dark text-white hover:bg-surface-dark-elevated border border-borderLine-dark',
  };

  const content = (
    <>
      <span>{children}</span>
      {iconRight && (
        <span className="text-[1.1em] leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↳
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {content}
    </button>
  );
}
