import * as React from 'react';

import { getDateInfo, getCurrentMonthInfo, getMovedMonthInfo } from 'components/calender/utils/dataUtils';
import Icon, { IconType } from 'components/calender/components/Icons';
import * as Styled from 'components/calender/style';
import CalenderList from './components/Calender';

interface CalenderProps {
  count: number;
  year: number;
  month: number;
  isSlider: boolean;
}

const CalenderPicker = ({
  count = 1,
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  isSlider = true,
}: CalenderProps) => {
  const getPrevMonthInfo = getMovedMonthInfo(year, month, 1);
  const getNextMonthInfo = getMovedMonthInfo(year, month, -1);

  return (
    <Styled.CalenderWrapper count={count}>
      {isSlider && (
        <Styled.IconWrapper count={count}>
          <Icon type={IconType.ARROW_LEFT} />
          <Icon type={IconType.ARROW_RIGHT} />
        </Styled.IconWrapper>
      )}
      <CalenderList count={count} year={year} month={month} />
    </Styled.CalenderWrapper>
  );
};

export default CalenderPicker;
