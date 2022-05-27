import React, { useState } from 'react';
import * as Styled from 'components/header/searchBar/searchBar.style';
import SearchBarItem from 'components/header/searchBar/searchBarItem';
import SearchIcon from 'components/Icons/SearchIcon';

function SearchBar() {
  return (
    <Styled.SearchBarWrapper>
      <SearchBarItem title="체크인" contents="날짜 입력" />
      <SearchBarItem title="체크아웃" contents="날짜 입력" />
      <SearchBarItem title="요금" contents="금액대 설정" />
      <SearchBarItem title="인원" contents="게스트 추가" />
      <SearchIcon size={{ width: '40', height: '40' }} />
    </Styled.SearchBarWrapper>
  );
}

export default SearchBar;
