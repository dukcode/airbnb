import * as React from 'react';
import * as Styled from 'components/calender/components/Calender/calender.style';
import WeekList from 'components/calender/components/WeekList';
import Title from 'components/calender/components/Title';
import Month from 'components/calender/components/Month';
import { getDateInfo, getCurrentMonthInfo, getMovedMonthInfo } from 'components/calender/utils/dataUtils';
import { dateUnit, Language } from 'components/calender/constants/dateData';
import Icon, { IconType } from 'components/calender/components/Icons';

interface CalenderProps {
  count?: number;
  year?: number;
  month?: number;
}

const { year: yearUnit, month: monthUnit } = dateUnit[Language.KOR];

const Calender = ({ count, year, month }: CalenderProps) => {
  const startDateInfo = getDateInfo(year as number, month as number);
  const { lastDay, startDayOfWeek } = getCurrentMonthInfo(year as number, month as number);
  const CalenderTitle = `${year}${yearUnit} ${month}${monthUnit}`;
  const getPrevMonthInfo = getMovedMonthInfo(year as number, month as number, 1);
  const getNextMonthInfo = getMovedMonthInfo(year as number, month as number, -1);

  return (
    <Styled.CalenderWrapper>
      <Styled.IconWrapper>
        <Icon type={IconType.ARROW_LEFT} />
        <Icon type={IconType.ARROW_RIGHT} />
      </Styled.IconWrapper>
      {/* <Styled.Calender> */}
      <Title>{CalenderTitle}</Title>
      <Styled.ContentsWrapper>
        <WeekList />
        <Month year={year as number} month={month as number} lastDay={lastDay} startDayOfWeek={startDayOfWeek} />
      </Styled.ContentsWrapper>
      {/* </Styled.Calender> */}
    </Styled.CalenderWrapper>
  );
};

Calender.defaultProps = {
  count: 1,
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

export default Calender;
