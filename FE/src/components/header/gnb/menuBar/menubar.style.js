import styled from 'styled-components';

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

const MenuItem = styled.li`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  color: ${({ theme: { colors } }) => colors.grey1};
  line-height: 23px;
  cursor: pointer;
  :hover {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export { MenuList, MenuItem };
