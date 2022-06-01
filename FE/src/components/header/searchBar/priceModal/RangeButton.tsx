import React, { useRef, useContext } from 'react';

import styled from 'styled-components';
import { Context } from 'components/context/PriceModalContext';

function RangeButton() {
  const PriceContext = useContext(Context);
  const onLeftBtnUp = (e: { target: { value: any } }) => {
    PriceContext.setLeftBtnValue(e.target.value);
  };
  const onRightBtnUp = (e: { target: { value: any } }) => {
    PriceContext.setRightBtnValue(e.target.value);
  };

  // const onLeftBtnDown = (e: { target: { value: any } }) => {
  //   // PriceContext.set
  //   // console.log('leftDownv', PriceContext.rightBtnValue);
  // };

  // const onRightBtnDown = (e: { target: { value: any } }) => {
  //   // console.log('leftDownv', PriceContext.rightBtnValue);
  // };

  return (
    <ButtonWrapper>
      <Input
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
        // onMouseDown={onLeftBtnDown}
      />
      <Input
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
        // onMouseDown={onRightBtnDown}
      />
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 380px;
  position: absolute;
  height: 1px;
  left: -9px;
`;

const Input = styled.input`
  width: ${(props) => props.width};
  position: absolute;
  bottom: 0px;
  ${(props) => props.position}: 0px;
  -webkit-appearance: none;
  pointer-events: none;
  ::-webkit-slider-thumb {
    pointer-events: auto;
  }
`;

export default RangeButton;
