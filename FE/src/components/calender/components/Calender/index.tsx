import * as React from 'react';
import * as Styled from 'components/calender/components/Calender/calender.style';
import WeekList from 'components/calender/components/WeekList';
import Title from 'components/calender/components/Title';
import Month from 'components/calender/components/Month';
import { getCurrentMonthInfo, getTodayDateInfo, getMovedMonthInfo } from 'components/calender/utils/dataUtils';
import { dateUnit, Language } from 'components/calender/constants/dateData';

interface CalenderProps {
  year: number;
  month: number;
  week: number;
  day: number;
}

const Calender = ({ year, month, week, day }: CalenderProps) => {
  const { year: yearUnit, month: monthUnit } = dateUnit[Language.KOR];
  const CalenderTitle = `${year}${yearUnit} ${month}${monthUnit}`;
  const { lastDay, startDayOfWeek } = getCurrentMonthInfo(year, month);

  const getPrevMonthInfo = getMovedMonthInfo(year, month, 1);
  const getNextMonthInfo = getMovedMonthInfo(year, month, -1);

  return (
    <Styled.CalenderWrapper>
      <Title>{CalenderTitle}</Title>
      <Styled.ContentsWrapper>
        <WeekList />
        <Month year={year} month={month} lastDay={lastDay} startDayOfWeek={startDayOfWeek} />
      </Styled.ContentsWrapper>
    </Styled.CalenderWrapper>
  );
};

export default Calender;
