import React from 'react';

import DefaultIconProps from 'components/Icons/DefaultIconProps';

function RightArrowIcon({ size = { width: '24', height: '24' } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default RightArrowIcon;
