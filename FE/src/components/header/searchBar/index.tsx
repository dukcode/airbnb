import React, { useReducer, useState } from 'react';

import * as Styled from 'components/header/searchBar/searchBar.style';
import Line from 'components/Icons/Line';
import SearchBarItem from 'components/header/searchBar/searchBarItem';
import SearchIcon from 'components/Icons/SearchIcon';
import { ActionType, reducer } from 'components/header/searchBar/contentReducer';
import priceData from 'components/mock/priceData';
import { PriceModalContext } from 'components/context/PriceModalContext';
import PriceModal from './priceModal';
import { customStyles } from './priceModal/PriceModalInfo.style';

const initState = { checkIn: '날짜 입력', checkOut: '날짜 입력', price: '금액대 설정', guest: '게스트 추가' };

function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [clickTitle, setClickTitle] = useState('');

  const clickItem = (keyData, valueData) => () => {
    setClickTitle(keyData);
    dispatch({
      type: ActionType.SET_CONTENTS,
      payload: { key: keyData, value: valueData },
    });
  };

  return (
    <PriceModalContext>
      <Styled.SearchBarWrapper>
        <Styled.ItemWrapper>
          <SearchBarItem title="체크인" contents={state.checkIn} onClick={clickItem('checkIn', '6월 5일')} />
          <SearchBarItem title="체크아웃" contents={state.checkOut} onClick={clickItem('checkOut', '6월 5일')} />
        </Styled.ItemWrapper>
        <Line />
        <Styled.ItemWrapper>
          <SearchBarItem title="요금" contents={state.price} onClick={clickItem('price', '100,000 ~ 1,000,000')} />
        </Styled.ItemWrapper>
        <PriceModal style={customStyles} isClick={clickTitle} priceData={priceData} />
        <Line />
        <Styled.ItemWrapper>
          <SearchBarItem title="인원" contents={state.guest} onClick={clickItem('guest', '게스트 3명, 유아 2명')} />
        </Styled.ItemWrapper>
        <SearchIcon size={{ width: '40', height: '40' }} />
      </Styled.SearchBarWrapper>
    </PriceModalContext>
  );
}

export default SearchBar;
