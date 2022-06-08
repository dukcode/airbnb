import React, { useReducer, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from 'components/header/searchBar/searchBar.style';
import Line from 'components/Icons/Line';
import SearchBarItem from 'components/header/searchBar/searchBarItem';
import SearchIcon from 'components/Icons/SearchIcon';
import { ActionType, reducer } from 'components/header/searchBar/contentReducer';
import { guestCustomStyles } from 'components/header/searchBar/guestModal/guestModal.style';

import { moneyToWon } from 'utils/utils';
import { Context } from 'components/context/ModalContext';
import PriceModal from './priceModal';
import { customStyles } from './priceModal/PriceModalInfo.style';
import GuestModal from './guestModal';

const initState = { checkIn: '날짜 입력', checkOut: '날짜 입력', price: '금액대 설정', guest: '게스트 추가' };

function SearchBar({ isSmallSize }) {
  const { infantCounts, guestCounts, setIsDateOpen, setIsPriceOpen, setIsGuestOpen, highPrice, lowPrice } =
    useContext(Context);
  const [state, dispatch] = useReducer(reducer, initState);
  const clickItem = (keyData: string, valueData: string) => () => {
    dispatch({
      type: ActionType.SET_CONTENTS,
      payload: { key: keyData, value: valueData },
    });
  };

  const modalOpenInfo = {
    date: setIsDateOpen,
    price: setIsPriceOpen,
    guest: setIsGuestOpen,
  };
  const onClickModal = (title: string) => () => {
    modalOpenInfo[title](true);
  };

  return (
    <Styled.SearchBarWrapper isSmallSize={isSmallSize}>
      <Styled.ItemWrapper onClick={onClickModal('date')}>
        <SearchBarItem isSmallSize={isSmallSize} title="체크인" contents={state.checkIn} />
        <SearchBarItem isSmallSize={isSmallSize} title="체크아웃" contents={state.checkOut} />
      </Styled.ItemWrapper>
      <Line size={{ width: '1', height: isSmallSize ? '26' : '44' }} />
      <Styled.ItemWrapper onClick={onClickModal('price')}>
        <SearchBarItem
          isSmallSize={isSmallSize}
          title="요금"
          contents={`${moneyToWon(Math.floor(lowPrice))} - ${moneyToWon(Math.floor(highPrice))}`}
        />
      </Styled.ItemWrapper>
      <PriceModal style={customStyles} />
      <Line size={{ width: '1', height: isSmallSize ? '26' : '44' }} />
      <Styled.ItemWrapper onClick={onClickModal('guest')}>
        <SearchBarItem
          isSmallSize={isSmallSize}
          title="인원"
          contents={`게스트${guestCounts}명, 유아${infantCounts}명`}
        />
      </Styled.ItemWrapper>
      <GuestModal style={guestCustomStyles} />
      <NavLink to="/searchResult">
        <SearchIcon size={{ width: isSmallSize ? '29' : '40', height: isSmallSize ? '29' : '40' }} />
      </NavLink>
    </Styled.SearchBarWrapper>
  );
}

export default SearchBar;
