import React from 'react';
import LeftArrowIcon from 'components/calender/components/Icons/LeftArrowIcon';
import RightArrowIcon from 'components/calender/components/Icons/RightArrowIcon';

export interface DefaultIconProps {
  width?: string;
  height?: string;
  color?: string;
}

export interface IconProps extends DefaultIconProps {
  type: IconType;
}

export enum IconType {
  ARROW_LEFT,
  ARROW_RIGHT,
}

const IconComponents = {
  [IconType.ARROW_RIGHT]: RightArrowIcon,
  [IconType.ARROW_LEFT]: LeftArrowIcon,
};

const Icon = ({ type, ...props }: IconProps) => {
  const IconComponent = IconComponents[type];
  return <IconComponent {...props} />;
};

Icon.defaultProps = {
  width: undefined,
  height: undefined,
  color: undefined,
};

export default Icon;
