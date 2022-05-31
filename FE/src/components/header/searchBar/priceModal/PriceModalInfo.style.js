import React from 'react';

import styled from 'styled-components';

const ModalInfo = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  padding: 52px 64px 64px 64px;
  line-height: 34px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 40px;
`;

const Title = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  font-style: normal;
  line-height: 23px;
  margin-bottom: 10px;
`;
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const Price = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xMedium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-style: normal;
  line-height: 26px;
`;

const RowLine = styled.div`
  width: 7px;
  height: 26px;
  font-size: ${({ theme: { fontSize } }) => fontSize.xMedium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-style: normal;
  line-height: 26px;
`;

const Average = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
  font-style: normal;
  line-height: 26px;
  margin-bottom: 10px;
`;

const Graph = styled.div`
  width: 365px;
  height: 100px;
`;

const customStyles = {
  overlay: {
    margin: '0px auto',
    width: '1440px',
    height: '640px',
    backgroundColor: 'transparent',
    boxSizing: 'content-box',
    position: 'absolute',
  },
  content: {
    position: 'absolute',
    top: '166px',
    left: '704px',
    width: '493px',
    height: '364px',
    backgroundColor: 'transparent',
    border: '0px',
  },
};

function Graphs() {
  return (
    <svg width="366" height="114" viewBox="0 0 366 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M133.453 45.9971C128.359 31.3486 122.617 92.9261 75.8516 94.9445C29.0859 96.963 35.6742 101 0 101H182.5H365C234.398 97.9722 246.375 86.3661 242.383 89.3938C238.391 92.4214 238.391 95.9538 222.992 95.9538C211.925 95.9538 209.521 76.9482 205.312 69.2092C203.666 66.1807 203.138 72.1423 199.609 70.7231C187.062 65.6769 188.237 43.937 183.07 41.4554C163.109 31.8678 167.672 -28.6859 160.258 19.2525C156.325 44.6827 138.016 59.1169 133.453 45.9971Z"
        fill="url(#paint0_linear_78_597)"
      />
      <path
        d="M0 101H182.5H365M0 101H365M0 101C35.6742 101 29.0859 96.963 75.8516 94.9445C122.617 92.9261 128.359 31.3486 133.453 45.9971C138.016 59.1169 156.325 44.6827 160.258 19.2525C167.672 -28.6859 163.109 31.8678 183.07 41.4554C188.237 43.937 187.062 65.6769 199.609 70.7231C203.138 72.1423 203.666 66.1807 205.312 69.2092C209.521 76.9483 211.925 95.9538 222.992 95.9538C238.391 95.9538 238.391 92.4215 242.383 89.3938C246.375 86.3661 234.398 97.9722 365 101"
        stroke="url(#paint1_linear_78_597)"
      />
      <path
        d="M106 112C111.523 112 116 107.523 116 102C116 96.4772 111.523 92 106 92C100.477 92 96 96.4772 96 102C96 107.523 100.477 112 106 112Z"
        fill="white"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M104 105V99" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M108 105V99" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M353 112C358.523 112 363 107.523 363 102C363 96.4772 358.523 92 353 92C347.477 92 343 96.4772 343 102C343 107.523 347.477 112 353 112Z"
        fill="white"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M351 105V99" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M355 105V99" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient
          id="paint0_linear_78_597"
          x1="3.42188"
          y1="101"
          x2="376.406"
          y2="101"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E5E5" />
          <stop offset="0.275229" stopColor="#E5E5E5" />
          <stop offset="0.275329" stopColor="#333333" />
          <stop offset="1" stopColor="#333333" />
        </linearGradient>
        <linearGradient id="paint1_linear_78_597" x1="0" y1="101" x2="375.836" y2="101" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E5E5E5" />
          <stop offset="0.282246" stopColor="#E5E5E5" />
          <stop offset="0.282346" stopColor="#333333" />
          <stop offset="1" stopColor="#333333" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export { Graphs, customStyles, ModalInfo, Title, PriceWrapper, Price, RowLine, Average, Graph };
