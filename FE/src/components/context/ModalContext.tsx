import React, { useState, createContext } from 'react';

const Context = createContext();

function ModalContext(props: { children: any }) {
  const [leftBtnValue, setLeftBtnValue] = useState(0);
  const [rightBtnValue, setRightBtnValue] = useState(100);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [lowPrice, setLowPrice] = useState(false);
  const [highPrice, setHighPrice] = useState(false);
  const [guestCounts, setGuestCounts] = useState(' 추가');
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const ModalInfo = {
    leftBtnValue,
    setLeftBtnValue,
    rightBtnValue,
    setRightBtnValue,
    isDateOpen,
    setIsDateOpen,
    isPriceOpen,
    setIsPriceOpen,
    isGuestOpen,
    setIsGuestOpen,
    lowPrice,
    setLowPrice,
    highPrice,
    setHighPrice,
    guestCounts,
    setGuestCounts,
  };

  // eslint-disable-next-line react/destructuring-assignment
  return <Context.Provider value={ModalInfo}>{props.children}</Context.Provider>;
}

export { ModalContext, Context };
