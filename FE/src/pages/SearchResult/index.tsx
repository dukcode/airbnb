import React from 'react';

import * as Styled from 'pages/SearchResult/searchResult.style';
import SearchResultHeader from 'components/searchResult/header';
import Map from 'components/searchResult/map';

function SearchResult() {
  return (
    <Styled.SearchResultWrapper>
      <SearchResultHeader />
      <Styled.Body>
        <Styled.RoomList />
        <Map />
      </Styled.Body>
    </Styled.SearchResultWrapper>
  );
}

export default SearchResult;
