import React from 'react';

function BarChart({ coordinate }) {
  return (
    <svg width="366" height="114" viewBox="0 0 366 114" xmlns="http://www.w3.org/2000/svg">
      {coordinate.yCoordinate.map((yCoor: number, idx: number) => (
        <path
          // eslint-disable-next-line react/no-array-index-key
          key={yCoor + idx} // 데이터에서 id값을 받아서 수정
          d={`M ${idx * coordinate.xRange} 114 H${idx * coordinate.xRange + 6} V${114 - yCoor} H${
            idx * coordinate.xRange
          } Z`}
          fill="black"
        />
      ))}
    </svg>
  );
}

export default BarChart;
