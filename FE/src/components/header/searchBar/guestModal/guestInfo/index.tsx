import React, { useReducer, useContext, useEffect } from 'react';
import styled from 'styled-components';

import MinusIcon from 'components/Icons/MinusIcon';
import PlusIcon from 'components/Icons/PlusIcon';
import { Context } from 'components/context/ModalContext';
import { GuestContext } from 'components/context/GuestModalContext';
import * as Styled from 'components/header/searchBar/guestModal/guestInfo/guestInfo.style';

interface GuestProps {
  type: string;
  description: string;
}

interface ReducerState {
  guestCount: number;
  minusBtnColor: string;
  plusBtnColor: string;
  defaultCount: number;
}

function countReducer(state: any, action: any) {
  const { guestCount, minusBtnColor, defaultCount } = state;
  switch (action.type) {
    case 'INCREMENT':
      if (guestCount < 7) {
        return { ...state, guestCount: guestCount + 1, minusBtnColor: '#828282' };
      }
      if (guestCount === 7) {
        return { ...state, plusBtnColor: '#E0E0E0', guestCount: guestCount + 1 };
      }
      return state;

    case 'DECREMENT':
      if (minusBtnColor === '#E0E0E0') return state;
      if (guestCount > defaultCount + 1) {
        return { ...state, guestCount: guestCount - 1, plusBtnColor: '#828282' };
      }
      if (guestCount === defaultCount + 1) {
        return { ...state, guestCount: guestCount - 1, minusBtnColor: '#E0E0E0' };
      }
      break;
    default:
      return state;
  }
  return state;
}

function GuestInfo({ type, description }: GuestProps) {
  const { adultCount, setAdultCount, childrenCount, setChildrenCount, infantCount, setInfantCount } =
    useContext(GuestContext);
  // eslint-disable-next-line no-nested-ternary
  const count = type === '성인' ? adultCount : type === '어린이' ? childrenCount : infantCount;
  const initialState = {
    defaultCount: count,
    guestCount: count,
    minusBtnColor: '#E0E0E0',
    plusBtnColor: '#828282',
  };
  const [state, dispatch] = useReducer(countReducer, initialState);
  const { guestCount, minusBtnColor, plusBtnColor } = state;
  const { setGuestCounts, setInfantCounts } = useContext(Context);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });

    if (!setInfantCounts || !setGuestCounts) {
      return;
    }

    if (plusBtnColor === '#828282') {
      if (type === '유아') {
        setInfantCounts((prev: number) => prev + 1);
      } else {
        setGuestCounts((prev: number) => prev + 1);
      }
    }
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });

    if (!setInfantCounts || !setGuestCounts) {
      return;
    }

    if (minusBtnColor === '#828282') {
      if (type === '유아') {
        setInfantCounts((prev: number) => prev - 1);
      } else {
        setGuestCounts((prev: number) => prev - 1);
      }
    }
  };

  useEffect(() => {
    if (!setAdultCount || !setChildrenCount || !setInfantCount) {
      return;
    }

    if (type === '성인') {
      setAdultCount(guestCount);
    } else if (type === '어린이') {
      setChildrenCount(guestCount);
    } else {
      setInfantCount(guestCount);
    }
  }, [guestCount]);

  return (
    <Styled.GuestInfoWrapper>
      <Styled.GuestType>
        <Styled.TypeTitle>{type}</Styled.TypeTitle>
        <Styled.Description>{description}</Styled.Description>
      </Styled.GuestType>
      <Styled.GuestCount>
        <Styled.MinusIconWrapper onClick={onDecrease}>
          <MinusIcon color={minusBtnColor} />
        </Styled.MinusIconWrapper>
        <Styled.Count>{guestCount}</Styled.Count>
        <Styled.PlusIconWrapper onClick={onIncrease}>
          <PlusIcon color={plusBtnColor} />
        </Styled.PlusIconWrapper>
      </Styled.GuestCount>
    </Styled.GuestInfoWrapper>
  );
}

export default GuestInfo;
