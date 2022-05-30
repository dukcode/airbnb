import React from 'react';

import * as Styled from 'components/header/gnb/menuBar/menubar.style';
import menuData from 'constants/menuData';

function MenuBar() {
  return (
    <Styled.MenuList>
      {menuData.map(({ id, title }) => (
        <Styled.MenuItem key={id}>{title}</Styled.MenuItem>
      ))}
    </Styled.MenuList>
  );
}

export default MenuBar;
