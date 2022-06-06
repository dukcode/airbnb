import styled from 'styled-components';
import { TextProps } from 'components/calender/components/Text';

const Text = styled.p<TextProps>`
  color: ${({ fontColor }) => fontColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize, fontUnit }) => `${fontSize}${fontUnit}`};
`;

export { Text };
