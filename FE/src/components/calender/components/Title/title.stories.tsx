import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from 'components/calender/components/Title';

export default {
  title: 'Calender/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

// const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default: ComponentStory<typeof Title> = (args) => <Title {...args} />;
