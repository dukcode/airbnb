import React from 'react';

interface IconProps {
  size: { width: string; height: string };
}
function SearchIcon({ size }: IconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#E84C60" />
      <path
        d="M19 27C23.4183 27 27 23.4183 27 19C27 14.5817 23.4183 11 19 11C14.5817 11 11 14.5817 11 19C11 23.4183 14.5817 27 19 27Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29 29L24.65 24.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default SearchIcon;
