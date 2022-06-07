import styled from 'styled-components';

const Body = styled.div`
  display: flex;
`;

const RoomList = styled.div`
  width: 720px;
  height: 1000px;
  background-color: black;
`;

const Map = styled.div`
  width: 720px;
  height: 1000px;
  background-color: red;
`;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export { Body, RoomList, Map, SearchResultWrapper };
