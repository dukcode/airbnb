import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon, { IconType } from 'components/calender/components/Icons';

export default {
  title: 'Calender/Icon',
  component: Icon,
  argsTypes: {
    type: {
      options: [IconType.ARROW_LEFT, IconType.ARROW_RIGHT],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const LeftArrow = Template.bind({});
LeftArrow.args = {
  type: IconType.ARROW_LEFT,
};
LeftArrow.storyName = 'LeftArrow';

export const RightArrow = Template.bind({});
RightArrow.args = {
  type: IconType.ARROW_RIGHT,
};
RightArrow.storyName = 'RightArrow';
