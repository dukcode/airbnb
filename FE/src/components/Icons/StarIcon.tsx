import React from 'react';

import DefaultIconProps from 'components/Icons/DefaultIconProps';

function StarIcon({ size = { width: '16', height: '16' }, color = 'none' }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.00016 1.33334L10.0602 5.50668L14.6668 6.18001L11.3335 9.42668L12.1202 14.0133L8.00016 11.8467L3.88016 14.0133L4.66683 9.42668L1.3335 6.18001L5.94016 5.50668L8.00016 1.33334Z"
        fill="#E84C60"
      />
    </svg>
  );
}

export default StarIcon;