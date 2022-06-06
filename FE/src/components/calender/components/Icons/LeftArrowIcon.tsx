import React from 'react';
import { DefaultIconProps } from 'components/calender/components/Icons';

function LeftArrowIcon({ width = '24', height = '24', color = '#111' }: DefaultIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default LeftArrowIcon;
