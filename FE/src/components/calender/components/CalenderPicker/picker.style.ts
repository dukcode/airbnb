import styled from 'styled-components';
import { CALENDER_HEIGHT, CALENDER_WIDTH } from 'components/calender/constants/size';

interface countType {
  count: number;
}

const CalenderWrapper = styled.div<countType>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: ${({ count }) => `${CALENDER_WIDTH * count}px`};
  height: ${`${CALENDER_HEIGHT}px`};
`;

const IconWrapper = styled.div<countType>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ count }) => `${CALENDER_HEIGHT * count}px`};
  height: ${`${(CALENDER_HEIGHT * 90) / 100}px`};
  z-index: -1;
`;

export { CalenderWrapper, IconWrapper };
