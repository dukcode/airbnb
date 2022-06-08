import * as React from 'react';
import CalenderPicker from 'components/calender/components/CalenderPicker';
import { DateProvider, FilterType } from 'components/calender/context';

export interface ICalenderProps {
  count: number;
  year: number;
  month: number;
  isSlider: boolean;
  filter: FilterType;
}

const CalenderApp = (props: ICalenderProps) => {
  return (
    <DateProvider>
      <CalenderPicker {...props} />
    </DateProvider>
  );
};

export default CalenderApp;
