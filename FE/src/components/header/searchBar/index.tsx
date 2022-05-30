import React, { useReducer } from 'react';

import styled from 'styled-components';
import * as Styled from 'components/header/searchBar/searchBar.style';
import Line from 'components/Icons/Line';
import SearchBarItem from 'components/header/searchBar/searchBarItem';
import SearchIcon from 'components/Icons/SearchIcon';
import { ActionType, reducer } from 'components/header/searchBar/contentReducer';

const initState = { checkIn: '날짜 입력', checkOut: '날짜 입력', price: '금액대 설정', guest: '게스트 추가' };

function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initState);

  const testOnClick = () => {
    dispatch(state, { type: ActionType.SET_CONTENTS });
  };

  return (
    <Styled.SearchBarWrapper>
      <SearchBarItem title="체크인" contents="날짜 입력" onClick={testOnClick} />
      <SearchBarItem title="체크아웃" contents="날짜 입력" onClick={testOnClick} />
      <ItemWrapper>
        <Line />
        <SearchBarItem title="요금" contents="금액대 설정" onClick={testOnClick} />
      </ItemWrapper>
      <ItemWrapper>
        <Line />
        <SearchBarItem title="인원" contents="게스트 추가" onClick={testOnClick} />
      </ItemWrapper>
      <SearchIcon size={{ width: '40', height: '40' }} />
    </Styled.SearchBarWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default SearchBar;
