import styled from 'styled-components';

const Body = styled.div`
  display: flex;
`;

const RoomList = styled.div`
  width: 720px;
  height: 1000px;
  background-color: black;
`;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export { Body, RoomList, SearchResultWrapper };
