import React from 'react';

import { ButtonProps } from '@/types/index';

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded text-white';
  const variantStyles = variant === 'primary' ? 'bg-blue-500 mr-2' : 'bg-green-500';

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
