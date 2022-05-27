import React from 'react';
import GNB from 'components/header/gnb';
import * as Styled from 'components/header/header.style';
import SearchBar from './searchBar';

function Header() {
  return (
    <Styled.HeaderWrapper>
      <GNB />
      <SearchBar />
    </Styled.HeaderWrapper>
  );
}

export default Header;
