import React, { useReducer, useContext } from 'react';
import styled from 'styled-components';

import MinusIcon from 'components/Icons/MinusIcon';
import PlusIcon from 'components/Icons/PlusIcon';
import { Context } from 'components/context/ModalContext';

interface GuestProps {
  type: string;
  count: number;
  description: string;
}

function countReducer(state: number, action: { type: string }) {
  const { setGuestCounts } = useContext(Context);

  switch (action.type) {
    case 'INCREMENT':
      if (state < 8) {
        setGuestCounts(` ${state + 1}명`);
        return state + 1;
      }
      return state;
    case 'DECREMENT':
      if (state > 0) {
        setGuestCounts(` ${state - 1}명`);
        return state - 1;
      }
      return state;
    default:
      return state;
  }
}

function GuestInfo({ type, count, description }: GuestProps) {
  const [guestCount, dispatch] = useReducer(countReducer, count);
  const { setIsGuestOpen } = useContext(Context);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <GuestInfoWrapper>
      <GuestType>
        <TypeTitle>{type}</TypeTitle>
        <Description>{description}</Description>
      </GuestType>
      <GuestCount>
        <MinusIconWrapper onClick={onDecrease}>
          <MinusIcon color="black" />
        </MinusIconWrapper>
        <Count>{guestCount}</Count>
        <PlusIconWrapper onClick={onIncrease}>
          <PlusIcon color="black" />
        </PlusIconWrapper>
      </GuestCount>
    </GuestInfoWrapper>
  );
}

const MinusIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const PlusIconWrapper = styled.div`
  display: flex;
  align-items: center;
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
