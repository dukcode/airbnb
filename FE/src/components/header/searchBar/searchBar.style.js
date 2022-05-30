import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 916px;
  height: 76px;
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 60px;
  background: ${({ theme: { colors } }) => colors.white};
  padding: 18px;
`;

export { SearchBarWrapper };
