import React from 'react';

import UserIcon from 'components/Icons/UserIcon';
import MenuIcon from 'components/Icons/MenuIcon';
import * as Styled from 'components/header/gnb/loginMenu/logInMenu.style';

function LoginMenu() {
  return (
    <Styled.LoginMenuWrapper>
      <MenuIcon />
      <UserIcon />
    </Styled.LoginMenuWrapper>
  );
}

export default LoginMenu;
