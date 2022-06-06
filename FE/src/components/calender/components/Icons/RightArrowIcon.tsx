import React from 'react';
import { DefaultIconProps } from 'components/calender/components/Icons';

function RightArrowIcon({ width = '24', height = '24', color = '#111' }: DefaultIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default RightArrowIcon;
