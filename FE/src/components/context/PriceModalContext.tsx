import React, { useState, createContext } from 'react';

const Context = createContext();

function PriceModalContext(props: { children: any }) {
  const [leftBtnValue, setLeftBtnValue] = useState(0);
  const [rightBtnValue, setRightBtnValue] = useState(100);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const ModalInfo = {
    leftBtnValue,
    setLeftBtnValue,
    rightBtnValue,
    setRightBtnValue,
  };

  // eslint-disable-next-line react/destructuring-assignment
  return <Context.Provider value={ModalInfo}>{props.children}</Context.Provider>;
}

export { PriceModalContext, Context };
