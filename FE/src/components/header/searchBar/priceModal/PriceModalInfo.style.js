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
    left: '49%',
    width: '493px',
    height: '364px',
    backgroundColor: 'transparent',
    border: '0px',
  },
};

function Graphs({ coordinate }) {
  return (
    <svg width="366" height="114" viewBox="0 0 366 114" xmlns="http://www.w3.org/2000/svg">
      {coordinate.yCoordinate.map((yCoor, idx) => (
        <path
          d={`M ${idx * coordinate.xRange} 114 H${idx * coordinate.xRange + 6} V${114 - yCoor} H${
            idx * coordinate.xRange
          } Z`}
          fill="black"
        />
      ))}
    </svg>
  );
}
export { Graphs, customStyles, ModalInfo, Title, PriceWrapper, Price, RowLine, Average, Graph };
