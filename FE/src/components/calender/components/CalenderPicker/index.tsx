import React, { useContext, useState, useEffect } from 'react';

import { getMovedMonthInfo } from 'components/calender/utils/dataUtils';
import Icon, { IconType } from 'components/calender/components/Icons';
import * as Styled from 'components/calender/components/CalenderPicker/picker.style';
import CalenderList from 'components/calender/components/Calender';
import { ICalenderProps } from 'components/calender';
import { DateContext } from 'components/calender/context';
import { initFilter } from 'components/calender/context/action';

const CalenderPicker = ({
  count = 1,
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  isSlider = true,
  filter,
}: ICalenderProps) => {
  const { dispatch } = useContext(DateContext);
  const [currentDate, setCurrentDate] = useState({ year, month });
  const getPrevMonthInfo = getMovedMonthInfo(year, month, 1);
  const getNextMonthInfo = getMovedMonthInfo(year, month, -1);

  useEffect(() => {
    initFilter(dispatch, filter);
  }, []);

  return (
    <Styled.CalenderWrapper count={count}>
      {isSlider && (
        <Styled.IconWrapper count={count}>
          <Icon type={IconType.ARROW_LEFT} />
          <Icon type={IconType.ARROW_RIGHT} />
        </Styled.IconWrapper>
      )}
      <CalenderList count={count} year={currentDate.year} month={currentDate.month} />
    </Styled.CalenderWrapper>
  );
};

export default CalenderPicker;
