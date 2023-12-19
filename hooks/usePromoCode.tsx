'use client'

import { BET_COIN_PERSISTED_STATE } from '@/constants/persistedStates';
import { extractParam } from '@/utils/extractParam';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import usePersistentContext from './usePersistenceState';

const INITIAL_FREE = 100


export default function usePromoCode(): { betcoin: unknown, setBetcoin: (betcoin: number) => void } {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [betcoin, setBetcoin] = usePersistentContext(BET_COIN_PERSISTED_STATE);

  const promoCode = useMemo(
    () => extractParam(searchParams, 'code', ''),
    [searchParams]
  );

  useEffect(() => {
    const coinValue = Number(betcoin)

    if (Number.isNaN(coinValue)) {
      setBetcoin(INITIAL_FREE)
    }
  }, [betcoin, setBetcoin])

  useEffect(() => {
    if (promoCode === 'CLIENTE_PIKA' || promoCode === 'CLIENTE_EXCLUSIVO') {
      setBetcoin(10000)
      if (typeof window !== 'undefined') window.location.replace('/')
    }
  }, [promoCode, router, setBetcoin]);


  return { betcoin, setBetcoin }

}
