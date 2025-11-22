import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-smooth',
        {
          'bg-muted text-muted-foreground': variant === 'default',
          'bg-gradient-primary text-primary-foreground': variant === 'primary',
          'bg-accent text-accent-foreground': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
}