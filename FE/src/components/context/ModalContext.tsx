import React, { useState, createContext } from 'react';

const Context = createContext();

function ModalContext(props: { children: any }) {
  const [leftBtnValue, setLeftBtnValue] = useState(0);
  const [rightBtnValue, setRightBtnValue] = useState(100);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(0);
  const [guestCounts, setGuestCounts] = useState(1);
  const [infantCounts, setInfantCounts] = useState(0);
  const [isSmallStyle, setIsSmallStyle] = useState(false);
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
    infantCounts,
    setInfantCounts,
    isSmallStyle,
    setIsSmallStyle,
  };

  // eslint-disable-next-line react/destructuring-assignment
  return <Context.Provider value={ModalInfo}>{props.children}</Context.Provider>;
}

export { ModalContext, Context };
