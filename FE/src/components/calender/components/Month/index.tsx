import * as React from 'react';
import * as Styled from 'components/calender/components/Month/month.style';
import Day from 'components/calender/components/Day';

export interface MonthProps {
  year: number;
  month: number;
  lastDay: number;
  startDayOfWeek: number;
}

const calcGridRowCount = (lastDay: number, startDayOfWeek: number) => {
  const allItemCount = lastDay + startDayOfWeek + 1;
  const rowCount = Math.floor(allItemCount / 7);
  const isOverflow = allItemCount % 7 !== 0;
  return isOverflow ? rowCount : rowCount + 1;
};

const getDayInfo = (index: number, year: number, month: number, startDayOfWeek: number) => {
  return {
    year,
    month,
    day: index + 1,
    week: (startDayOfWeek + index) % 7,
  };
};

function Month({ year, month, lastDay, startDayOfWeek }: MonthProps) {
  return (
    <Styled.MonthContainer rowCount={calcGridRowCount(lastDay, startDayOfWeek)}>
      {startDayOfWeek > 0 && <Styled.MonthItem startDayOfWeek={startDayOfWeek} />}
      {[...new Array(lastDay)].map((_, index) => (
        <Styled.MonthItem>
          <Day info={getDayInfo(index, year, month, startDayOfWeek)} />
        </Styled.MonthItem>
      ))}
    </Styled.MonthContainer>
  );
}

export default Month;
