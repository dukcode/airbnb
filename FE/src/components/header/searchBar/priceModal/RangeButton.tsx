import React, { useContext } from 'react';

import { Context } from 'components/context/PriceModalContext';
import * as Styled from 'components/header/searchBar/priceModal/RangeButton.style';

function RangeButton() {
  const PriceContext = useContext(Context);
  const onLeftBtnUp = (e: { target: { value: any } }) => {
    PriceContext.setLeftBtnValue(e.target.value);
  };
  const onRightBtnUp = (e: { target: { value: any } }) => {
    PriceContext.setRightBtnValue(e.target.value);
  };

  return (
    <Styled.ButtonWrapper>
      <Styled.Input
        width={`${PriceContext.rightBtnValue - 1}%`}
        position="left"
        type="range"
        id="cowbell"
        name="cowbell"
        min="0"
        max={`${PriceContext.rightBtnValue - 1}`}
        defaultValue="0"
        step="any"
        onChange={onLeftBtnUp}
      />
      <Styled.Input
        width={`${99 - PriceContext.leftBtnValue}%`}
        position="right"
        type="range"
        id="cowbell"
        name="cowbell"
        min={`${PriceContext.leftBtnValue + 1}`}
        max="100"
        defaultValue="100"
        step="any"
        onChange={onRightBtnUp}
      />
    </Styled.ButtonWrapper>
  );
}

export default RangeButton;
