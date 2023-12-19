'use client';

import usePromoCode from '@/hooks/usePromoCode';
import { FC, PropsWithChildren, createContext, useContext } from 'react';
type TBetcoinContext = {
  betcoin: unknown;
  setBetcoin: (betcoin: number) => void
};

const BetcoinContext = createContext<TBetcoinContext>({
  betcoin: 0,
  setBetcoin: () => { }
});

const useBetcoin = (): TBetcoinContext => useContext(BetcoinContext);

const BetcoinProvider: FC<PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
  const { betcoin, setBetcoin } = usePromoCode()

  return (
    <BetcoinContext.Provider value={{ betcoin, setBetcoin }}>
      {children}
    </BetcoinContext.Provider>
  );
};

export { BetcoinProvider, useBetcoin };
