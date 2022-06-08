import React, { useState, createContext } from 'react';

const GuestContext = createContext();

function GuestModalContext(props: { children: any }) {
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const GuestInfo = {
    adultCount,
    setAdultCount,
    childrenCount,
    setChildrenCount,
    infantCount,
    setInfantCount,
  };

  // eslint-disable-next-line react/destructuring-assignment
  return <GuestContext.Provider value={GuestInfo}>{props.children}</GuestContext.Provider>;
}

export { GuestModalContext, GuestContext };
