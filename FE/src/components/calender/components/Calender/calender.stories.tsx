import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Calender from 'components/calender/components/Calender';
import { getTodayDateInfo } from 'components/calender/utils/dataUtils';

export default {
  title: 'Calender/Calender',
  component: Calender,
} as ComponentMeta<typeof Calender>;

const Template: ComponentStory<typeof Calender> = (args) => <Calender {...args} />;

const today = getTodayDateInfo();

export const Current = Template.bind({});
Current.args = {
  year: today.year,
  month: today.month,
  week: today.week,
  day: today.day,
};
Current.storyName = 'Current Calender';

export const Next = Template.bind({});
Next.args = {
  year: today.year,
  month: today.month + 1,
  week: today.week,
  day: today.day,
};
Next.storyName = 'Next Calender';

export const Prev = Template.bind({});
Prev.args = {
  year: today.year,
  month: today.month - 1,
  week: today.week,
  day: today.day,
};
Prev.storyName = 'Prev Calender';
