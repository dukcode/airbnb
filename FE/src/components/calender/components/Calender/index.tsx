import * as React from 'react';
import * as Styled from 'components/calender/components/Calender/calender.style';
import WeekList from 'components/calender/components/WeekList';
import Title from 'components/calender/components/Title';
import Month from 'components/calender/components/Month';
import { getCurrentMonthInfo } from 'components/calender/utils/dataUtils';
import { dateUnit, Language } from 'components/calender/constants/dateData';

interface CalenderProps {
  count: number;
  year: number;
  month: number;
}

const { year: yearUnit, month: monthUnit } = dateUnit[Language.KOR];
const CalenderTitle = (year: number, month: number) => `${year}${yearUnit} ${month}${monthUnit}`;
const getCurrentDate = (month: number, year: number, index: number) => {
  const currentMonth = (month + index) % 12;
  const currentYear = year + Math.floor((month + index) / 12);
  return {
    month: currentMonth > 0 ? currentMonth : currentMonth + 1,
    year: currentMonth > 0 ? currentYear : currentYear - 1,
  };
};

const CalenderList = ({
  count = 1,
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
}: CalenderProps) => {
  const monthList = Array(count)
    .fill(0)
    .map((_, index) => getCurrentDate(month, year, index));

  return (
    <>
      {monthList.map(({ month, year }) => (
        <Styled.Calender key={`${year}${month}`}>
          <Title>{CalenderTitle(year, month)}</Title>
          <Styled.ContentsWrapper>
            <WeekList />
            <Month year={year} month={month} {...getCurrentMonthInfo(year, month)} />
          </Styled.ContentsWrapper>
        </Styled.Calender>
      ))}
    </>
  );
};

export default CalenderList;
