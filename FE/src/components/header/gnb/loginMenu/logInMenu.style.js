import styled from 'styled-components';

const LoginMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 4px 4px 16px;
  gap: 8px;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.grey4};
  border-radius: 30px;
`;

export { LoginMenuWrapper };
