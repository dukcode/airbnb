import styled, { css } from 'styled-components';
import { Week } from 'components/calender/constants/dateData';

const getBackgroundBorderRadius = ({ isChecked, isStart, week }: BackgroundType) => {
  const WeekTypeKeys = Object.keys(Week);
  const startWeekIndex = 0;
  const endWeekIndex = WeekTypeKeys.length / 2 - 1;

  const borderRadius = {
    [WeekTypeKeys[startWeekIndex]]: '5px 0 0 5px',
    [WeekTypeKeys[endWeekIndex]]: '0 5px 5px 0',
    checked: {
      true: '50% 0 0 50%',
      false: '0 50% 50% 0',
    },
  };

  return isChecked ? borderRadius.checked[isStart.toString()] : borderRadius[week] || 0;
};

const TempWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

interface BackgroundType {
  isChecked: boolean;
  isIncluded: boolean;
  isStart: boolean;
  week: Week;
}

const Background = styled.div<BackgroundType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => getBackgroundBorderRadius(props)};
  background-color: ${({ isIncluded }) => (isIncluded ? '#EBEBEB' : 'transparent')};
`;

interface SelectAreaType {
  isDisabled: boolean;
  isChecked: boolean;
  hoverStyles?: {
    [key: string]: string;
  };
}

const HoverStyles = css<SelectAreaType>`
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverStyles }) => hoverStyles?.background || '#333'};
  }
  &:hover > p {
    color: ${({ hoverStyles }) => hoverStyles?.color || '#fff'};
  }
`;

const SelectArea = styled.div<SelectAreaType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: ${({ isChecked }) => (isChecked ? '#333' : 'transparent')};
  border-radius: 50%;
  cursor: default;
  ${({ isDisabled }) => !isDisabled && HoverStyles}
`;

export { TempWrapper, Background, SelectArea };
