import styled from 'styled-components';

interface countType {
  count: number;
}

const CALENDER_WIDTH = 360;
const CALENDER_HEIGHT = 390;

const CalenderWrapper = styled.div<countType>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: ${({ count }) => `${count > 1 ? CALENDER_HEIGHT * 2 : CALENDER_WIDTH}px`};
  height: ${({ count }) => `${count > 2 ? CALENDER_HEIGHT * 2 : CALENDER_HEIGHT}px`};
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div<countType>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ count }) => `${count > 1 ? CALENDER_WIDTH * 2 : CALENDER_WIDTH}px`};
  height: ${({ count }) => `${((count > 2 ? CALENDER_HEIGHT * 2 : CALENDER_HEIGHT) * 90) / 100}px`};
  z-index: -1;
`;

const Calender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 390px;
`;

export { CalenderWrapper, ContentsWrapper, IconWrapper, Calender };
