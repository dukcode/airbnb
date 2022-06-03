import * as React from 'react';
import * as Styled from 'components/calender/components/Day/day.style';
import { Week } from 'components/calender/constants/dateData';
import Text from 'components/calender/components/Text';

interface DayProps {
  isChecked?: boolean;
  isIncluded?: boolean;
  isDisabled?: boolean;
  isStart?: boolean;
  info: DayInfo;
}

type DayInfo = {
  year: number;
  month: number;
  week: Week;
  day: number;
};

const getTextStyle = (isChecked = false, isDisabled = false) => {
  return {
    fontColor: (() => {
      if (isDisabled) return '#BDBDBD';
      if (isChecked) return '#fff';
      return '#333';
    })(),
    fontWeight: 'bold',
  };
};

const hoverStyles = {
  background: '#333',
  color: '#fff',
};

const Day = ({
  isChecked = false,
  isIncluded = false,
  isDisabled = false,
  isStart = false,
  info: { year, month, week, day },
}: DayProps) => {
  return (
    <Styled.TempWrapper>
      <Styled.Background isChecked={isChecked} isIncluded={isIncluded} isStart={isStart} week={week}>
        <Styled.SelectArea isChecked={isChecked} hoverStyles={hoverStyles}>
          <Text {...getTextStyle(isChecked, isDisabled)}>{day}</Text>
        </Styled.SelectArea>
      </Styled.Background>
    </Styled.TempWrapper>
  );
};

Day.defaultProps = {
  isChecked: false,
  isIncluded: false,
  isDisabled: false,
  isStart: false,
  //   info: {
  //     month: 5,
  //     week: Week.Saturday,
  //     day: 31,
  //   },
};

export default Day;
