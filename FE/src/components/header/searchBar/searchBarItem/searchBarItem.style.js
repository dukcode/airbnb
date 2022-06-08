import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
`;

const ItemTitle = styled.h4`
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  display: ${(props) => (props.isSmallSize ? 'none' : 'block')};
`;

const ItemContents = styled.p`
  font-size: ${(props) => (props.isSmallSize ? '12px' : '16px')};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Item, ItemTitle, ItemContents };
