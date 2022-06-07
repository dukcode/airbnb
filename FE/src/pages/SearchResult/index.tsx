import React from 'react';

import * as Styled from 'pages/SearchResult/searchResult.style';
import SearchResultHeader from 'components/searchResult/header';

function SearchResult() {
  return (
    <Styled.SearchResultWrapper>
      <SearchResultHeader />
      <Styled.Body>
        <Styled.RoomList />
        <Styled.Map />
      </Styled.Body>
    </Styled.SearchResultWrapper>
  );
}

export default SearchResult;
