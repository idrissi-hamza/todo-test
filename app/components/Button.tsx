'use client';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  rounded?: boolean;
  Icon?: IconType;
  small?: boolean;
  ghost?: boolean;
}
const Button = ({
  label,
  onClick,
  disabled,
  rounded,
  Icon,
  small,
  ghost,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed 
                 flex items-center justify-center  transition
                 ${small ?
          'py-1 px-3 gap-2 text-sm' :
          'py-2 px-4 font-semibold  border-2 w-full gap-4'}
                 ${ghost ?
          ' text-slate-900 hover:opacity-90 hover:bg-gray-200/60' :
          'bg-slate-900 border-slate-900 text-white hover:opacity-90'}
                  
                 ${rounded ?
          'rounded-full aspect-square' :
          'rounded-lg  '}

  `}
    >
      {label}
      {Icon && (
        <Icon
          className={` ${small ?
            'text-xl ' :
            'text-4xl'}`}
        />
      )}
    </button>
  );
};

export default Button;
