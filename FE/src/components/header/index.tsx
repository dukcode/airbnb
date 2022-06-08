import React from 'react';

import GNB from 'components/header/gnb';
import * as Styled from 'components/header/header.style';

import { ModalContext } from 'components/context/ModalContext';
import { GuestModalContext } from 'components/context/GuestModalContext';
import { composeProvider } from 'utils/utils';
import SearchBar from './searchBar';

function Header() {
  const providers = [ModalContext, GuestModalContext];
  const ContextProvider = composeProvider(providers);

  return (
    <Styled.Header>
      <Styled.HeaderWrapper>
        <GNB />
        <ContextProvider>
          <SearchBar isSmallSize={false} />
        </ContextProvider>
      </Styled.HeaderWrapper>
    </Styled.Header>
  );
}

export default Header;
