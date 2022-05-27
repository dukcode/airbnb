import React from 'react';
import * as Styled from 'components/header/gnb/menuBar/menubar.style';

function MenuBar() {
  type MenuType = {
    id: number;
    title: string;
  };

  const menuData: MenuType[] = [
    { id: 1, title: '숙소' },
    { id: 2, title: '체험' },
    { id: 3, title: '온라인 체험' },
  ];

  return (
    <Styled.MenuList>
      {menuData.map(({ id, title }) => (
        <Styled.MenuItem key={id}>{title}</Styled.MenuItem>
      ))}
    </Styled.MenuList>
  );
}

export default MenuBar;
