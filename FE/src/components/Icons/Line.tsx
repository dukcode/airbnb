import React from 'react';
import DefaultIconProps from 'components/Icons/DefaultIconProps';

function Line({ size = { width: '1', height: '44' } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 1 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1V44H0V0Z" fill="#E0E0E0" />
    </svg>
  );
}

export default Line;
