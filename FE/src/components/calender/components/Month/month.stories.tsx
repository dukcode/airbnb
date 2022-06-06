import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Month from 'components/calender/components/Month';
import { getCurrentMonthInfo, getTodayDateInfo, getMovedMonthInfo } from 'components/calender/utils/dataUtils';

export default {
  title: 'Calender/Month',
  component: Month,
} as ComponentMeta<typeof Month>;

const Template: ComponentStory<typeof Month> = (args) => <Month {...args} />;

const today = getTodayDateInfo();
const currentMonthInfo = getCurrentMonthInfo(today.year, today.month);
const getPrevMonthInfo = getMovedMonthInfo(today.year, today.month, -1);
const getNextMonthInfo = getMovedMonthInfo(today.year, today.month, 1);

export const Current = Template.bind({});
Current.args = {
  year: today.year,
  month: today.month,
  ...currentMonthInfo,
};
Current.storyName = 'Current Month';

export const Prev = Template.bind({});
Prev.args = {
  year: today.year,
  month: today.month - 1,
  ...getPrevMonthInfo(),
};
Prev.storyName = 'Prev Month';

export const Next = Template.bind({});
Next.args = {
  year: today.year,
  month: today.month + 1,
  ...getNextMonthInfo(),
};
Next.storyName = 'Next Month';
