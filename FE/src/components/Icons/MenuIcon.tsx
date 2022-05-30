import React from 'react';
import DefaultIconProps from 'components/Icons/DefaultIconProps';

function MenuIcon({ size = { width: '16', height: '16' } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8H14" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 4H14" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12H14" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default MenuIcon;
