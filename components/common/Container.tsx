import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const Container = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('container mx-auto', className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
