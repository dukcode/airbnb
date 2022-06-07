import React from 'react';

import styled from 'styled-components';
import Header from 'components/header';
import SearchBar from 'components/header/searchBar';

function SearchResult() {
  return (
    <div>
      <SearchBar />
      <ContentWrapper>
        <RoomList />
        <Map />
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
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

export default SearchResult;
