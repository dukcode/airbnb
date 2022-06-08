import React, { useReducer, useContext, useEffect } from 'react';
import styled from 'styled-components';

import MinusIcon from 'components/Icons/MinusIcon';
import PlusIcon from 'components/Icons/PlusIcon';
import { Context } from 'components/context/ModalContext';
import { GuestContext } from 'components/context/GuestModalContext';

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

function countReducer(state: ReducerState, action: { type: string }) {
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
    if (minusBtnColor === '#828282')
      if (type === '유아') {
        setInfantCounts((prev: number) => prev - 1);
      } else {
        setGuestCounts((prev: number) => prev - 1);
      }
  };

  useEffect(() => {
    if (type === '성인') {
      setAdultCount(guestCount);
    } else if (type === '어린이') {
      setChildrenCount(guestCount);
    } else {
      setInfantCount(guestCount);
    }
  }, [guestCount]);

  return (
    <GuestInfoWrapper>
      <GuestType>
        <TypeTitle>{type}</TypeTitle>
        <Description>{description}</Description>
      </GuestType>
      <GuestCount>
        <MinusIconWrapper onClick={onDecrease}>
          <MinusIcon color={minusBtnColor} />
        </MinusIconWrapper>
        <Count>{guestCount}</Count>
        <PlusIconWrapper onClick={onIncrease}>
          <PlusIcon color={plusBtnColor} />
        </PlusIconWrapper>
      </GuestCount>
    </GuestInfoWrapper>
  );
}

const MinusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const PlusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const GuestInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const GuestType = styled.div``;
const Count = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.grey1};
  font-style: normal;
  line-height: 29px;
`;
const TypeTitle = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  font-style: normal;
  line-height: 23px;
`;

const Description = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
  font-style: normal;
  line-height: 20px;
`;

const GuestCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

export default GuestInfo;
