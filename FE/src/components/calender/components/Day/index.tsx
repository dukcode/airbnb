import React, { useContext } from 'react';
import * as Styled from 'components/calender/components/Day/day.style';
import { Week } from 'components/calender/constants/dateData';
import Text from 'components/calender/components/Text';
import { DateContext } from 'components/calender/context';
import { setCheckIn, setCheckOut } from 'components/calender/context/action';

interface DayProps {
  isChecked: boolean;
  isIncluded: boolean;
  isDisabled: boolean;
  isStart: boolean;
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
  const { state, dispatch, setCheckedDate } = useContext(DateContext);
  const today = new Date(year, month - 1, day);
  const handleClickEvent = () => {
    if (isDisabled) return;

    if (!state.period?.checkIn || state?.period?.checkIn > today) {
      setCheckIn(dispatch, today);
      if (setCheckedDate) setCheckedDate(today);
      return;
    }

    setCheckOut(dispatch, today);
    if (setCheckedDate) setCheckedDate(undefined, today);
  };

  return (
    <Styled.TempWrapper onClick={handleClickEvent}>
      <Styled.Background isChecked={isChecked} isIncluded={isIncluded} isStart={isStart} week={week}>
        <Styled.SelectArea isChecked={isChecked} isDisabled={isDisabled} hoverStyles={hoverStyles}>
          <Text {...getTextStyle(isChecked, isDisabled)}>{day}</Text>
        </Styled.SelectArea>
      </Styled.Background>
    </Styled.TempWrapper>
  );
};

export default Day;
