import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 916px;
  height: 76px;
  border: 1px solid ${({ theme: { colors } }) => colors.grey4};
  border-radius: 60px;
  background: ${({ theme: { colors } }) => colors.white};
  padding: 18px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-left: 25px;
`;

export { SearchBarWrapper, ItemWrapper };
