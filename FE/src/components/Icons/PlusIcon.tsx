import React from 'react';
import DefaultIconProps from 'components/Icons/DefaultIconProps';

function PlusIcon({ size = { width: '36', height: '36' }, color }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
        stroke="#828282"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 12V24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18H24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default PlusIcon;
