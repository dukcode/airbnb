import styled from 'styled-components';
import { WeekListProps } from 'components/calender/components/WeekList';

const WeekList = styled.ul<WeekListProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ background }) => background};
`;

const WeekListItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { WeekList, WeekListItem };
