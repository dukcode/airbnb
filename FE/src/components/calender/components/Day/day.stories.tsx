import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Week } from 'components/calender/constants/weekData';
import Day from 'components/calender/components/Day';

export default {
  title: 'Calender/Day',
  component: Day,
} as ComponentMeta<typeof Day>;

const Template: ComponentStory<typeof Day> = (args) => <Day {...args} />;
const testInfoData = {
  year: 2022,
  month: 5,
  week: Week.Sunday,
  day: 31,
};

export const DefaultDay = Template.bind({});
DefaultDay.args = {
  isChecked: false,
  isIncluded: false,
  isDisabled: false,
  isStart: false,
  info: testInfoData,
};
DefaultDay.storyName = 'Day(Default)';

export const Disabled = Template.bind({});
Disabled.args = {
  isChecked: false,
  isIncluded: false,
  isDisabled: true,
  isStart: false,
  info: testInfoData,
};
Disabled.storyName = 'Day(Disabled)';

export const CheckedStart = Template.bind({});
CheckedStart.args = {
  isChecked: true,
  isIncluded: true,
  isDisabled: false,
  isStart: true,
  info: testInfoData,
};
CheckedStart.storyName = 'Day(CheckIn)';

export const CheckedEnd = Template.bind({});
CheckedEnd.args = {
  isChecked: true,
  isIncluded: true,
  isDisabled: false,
  isStart: false,
  info: testInfoData,
};
CheckedEnd.storyName = 'Day(CheckOut)';

export const Included = Template.bind({});
Included.args = {
  isChecked: false,
  isIncluded: true,
  isDisabled: false,
  isStart: false,
  info: testInfoData,
};
Included.storyName = 'Included(Default)';

export const IncludedSun = Template.bind({});
IncludedSun.args = {
  isChecked: false,
  isIncluded: true,
  isDisabled: false,
  isStart: false,
  info: {
    ...testInfoData,
    week: Week.Sunday,
  },
};
IncludedSun.storyName = 'Included(Sunday)';

export const IncludedSat = Template.bind({});
IncludedSat.args = {
  isChecked: false,
  isIncluded: true,
  isDisabled: false,
  isStart: false,
  info: {
    ...testInfoData,
    week: Week.Saturday,
  },
};
IncludedSat.storyName = 'Included(Saturday)';

export const Default: ComponentStory<typeof Day> = (args) => <Day {...args} info={testInfoData} />;
