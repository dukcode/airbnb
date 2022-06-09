import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WeekList from 'components/calender/components/WeekList';
import { weekData } from 'components/calender/constants/dateData';

export default {
  title: 'Calender/WeekList',
  component: WeekList,
} as ComponentMeta<typeof WeekList>;

const Template: ComponentStory<typeof WeekList> = (args) => <WeekList {...args} />;

export const WeekListEng = Template.bind({});
WeekListEng.args = {
  data: weekData.eng,
};
WeekListEng.storyName = 'WeekList(Eng)';

export const WeekListJp = Template.bind({});
WeekListJp.args = {
  data: weekData.jp,
};
WeekListJp.storyName = 'WeekList(Jp)';

export const Default: ComponentStory<typeof WeekList> = (args) => <WeekList {...args} />;