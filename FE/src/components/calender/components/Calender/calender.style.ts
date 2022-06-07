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

export { CalenderWrapper, ContentsWrapper };
