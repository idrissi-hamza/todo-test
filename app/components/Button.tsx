'use client';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  rounded?: boolean;
  Icon?: IconType;
}
const Button = ({
  label,
  onClick,
  disabled,
  rounded,
  Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed 
                   flex items-center justify-center gap-4 px-4 py-2 text-md font-semibold 
                  border-2 bg-slate-900 border-slate-900 text-white hover:opacity-90 transition
         ${rounded ? 'rounded-full aspect-square' : 'rounded-lg w-full '}

  `}
    >
      {Icon && (
        <Icon
          size={30}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
