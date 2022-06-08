import React, { createContext, useMemo, useReducer } from 'react';
import reducer from 'components/calender/context/reducer';
import { ActionType } from 'components/calender/context/action';

export interface FilterType {
  start?: Date;
  end?: Date;
  filtered?: {
    [year: number]: {
      [month: number]: number[];
    };
  };
}

interface IDateState {
  period: {
    checkIn: Date;
    checkOut: Date;
  } | null;
  filter: FilterType | null;
}

export interface IDateProvider {
  state: IDateState;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }> | null;
}

export const initState = { state: { period: null, filter: null }, dispatch: null };
const DateContext = createContext<IDateProvider>(initState);

const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dateDispatch] = useReducer(reducer, initState);
  const providerValue = useMemo<IDateProvider>(() => ({ ...state, dispatch: dateDispatch }), [state, dateDispatch]);

  return <DateContext.Provider value={providerValue}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
