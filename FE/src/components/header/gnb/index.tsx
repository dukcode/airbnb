import React from 'react';

import MenuBar from 'components/header/gnb/menuBar';
import * as Styled from 'components/header/gnb/gnb.style';

import Logo from 'components/Icons/Logo';
import LoginMenu from 'components/header/gnb/loginMenu';

function GNB() {
  return (
    <Styled.GNBWrapper>
      <Logo />
      <MenuBar />
      <LoginMenu />
    </Styled.GNBWrapper>
  );
}

export default GNB;