import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from 'components/calender/components/Text';

export default {
  title: 'Calender/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const DayText = Template.bind({});
DayText.args = {
  fontColor: '#333',
  fontWeight: 'bold',
  children: '29',
};
DayText.storyName = 'DayText';

export const DayTextDisabled = Template.bind({});
DayTextDisabled.args = {
  fontColor: '#BDBDBD',
  fontWeight: 'bold',
  children: '29',
};
DayTextDisabled.storyName = 'DayText(disabled)';

export const WeekText = Template.bind({});
WeekText.args = {
  fontColor: '#828282',
  fontWeight: 'bold',
  children: '월',
};
WeekText.storyName = 'WeekText';

export const Default: ComponentStory<typeof Text> = (args) => <Text {...args} />;
