import React, { useReducer } from 'react';

import * as Styled from 'components/header/searchBar/searchBar.style';
import Line from 'components/Icons/Line';
import SearchBarItem from 'components/header/searchBar/searchBarItem';
import SearchIcon from 'components/Icons/SearchIcon';
import { ActionType, reducer } from 'components/header/searchBar/contentReducer';

const initState = { checkIn: '날짜 입력', checkOut: '날짜 입력', price: '금액대 설정', guest: '게스트 추가' };

function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initState);

  const clickItem = (keyData, valueData) => () => {
    dispatch({
      type: ActionType.SET_CONTENTS,
      // key -> initState key
      // value -> '6월 5일'
      payload: { key: keyData, value: valueData },
    });
  };

  return (
    <Styled.SearchBarWrapper>
      <Styled.ItemWrapper>
        <SearchBarItem title="체크인" contents={state.checkIn} onClick={clickItem('checkIn', '6월 5일')} />
        <SearchBarItem title="체크아웃" contents={state.checkOut} onClick={clickItem('checkOut', '6월 5일')} />
      </Styled.ItemWrapper>
      <Line />
      <Styled.ItemWrapper>
        <SearchBarItem title="요금" contents={state.price} onClick={clickItem('price', '100,000 ~ 1,000,000')} />
      </Styled.ItemWrapper>
      <Line />
      <Styled.ItemWrapper>
        <SearchBarItem title="인원" contents={state.guest} onClick={clickItem('guest', '게스트 3명, 유아 2명')} />
      </Styled.ItemWrapper>
      <SearchIcon size={{ width: '40', height: '40' }} />
    </Styled.SearchBarWrapper>
  );
}

export default SearchBar;
