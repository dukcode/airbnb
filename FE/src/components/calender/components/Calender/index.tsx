import React, { useContext } from 'react';
import * as Styled from 'components/calender/components/Calender/calender.style';
import WeekList from 'components/calender/components/WeekList';
import Title from 'components/calender/components/Title';
import Month from 'components/calender/components/Month';
import { DateContext, FilterType } from 'components/calender/context';
import { getCurrentMonthInfo } from 'components/calender/utils/dataUtils';
import { DATE_UNIT, Language } from 'components/calender/constants/dateData';

interface CalenderProps {
  count: number;
  year: number;
  month: number;
}

const { year: yearUnit, month: monthUnit } = DATE_UNIT[Language.KOR];
const CalenderTitle = (year: number, month: number) => `${year}${yearUnit} ${month}${monthUnit}`;
const getCurrentDate = (filter: FilterType, month: number, year: number, index: number) => {
  const date = new Date(year, month + index - 1);
  const [currentYear, currentMonth] = [date.getFullYear(), date.getMonth() + 1];

  return {
    year: currentYear,
    month: currentMonth,
    filter: new Set<number>(filter?.[currentYear]?.[currentMonth]),
  };
};

const CalenderList = ({
  count = 1,
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
}: CalenderProps) => {
  const { state } = useContext(DateContext);
  const { filtered } = state?.filter || {};
  const monthList = Array(count)
    .fill(0)
    .map((_, index) => getCurrentDate(filtered as FilterType, month, year, index));

  return (
    <>
      {monthList.map(({ year, month, filter }) => (
        <Styled.Calender key={`${year}${month}`}>
          <Title>{CalenderTitle(year, month)}</Title>
          <Styled.ContentsWrapper>
            <WeekList />
            <Month year={year} month={month} filter={filter} {...getCurrentMonthInfo(year, month)} />
          </Styled.ContentsWrapper>
        </Styled.Calender>
      ))}
    </>
  );
};

export default CalenderList;
