import React from 'react';

import GNB from 'components/header/gnb';
import * as Styled from 'components/header/header.style';
import { ModalContext } from 'components/context/ModalContext';
import SearchBar from './searchBar';

function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderWrapper>
        <GNB />
        <ModalContext>
          <SearchBar />
        </ModalContext>
      </Styled.HeaderWrapper>
    </Styled.Header>
  );
}

export default Header;
