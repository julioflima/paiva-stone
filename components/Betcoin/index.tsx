'use client'

import TextScramble from '@/styles/animations/TextScramble';
import clsx from 'clsx';
import { FC, useEffect } from 'react';
import CountUp from 'react-countup';
import './styles.scss';


interface IBetcoin {
  betcoin: unknown
}

const Betcoin: FC<IBetcoin> = ({ betcoin }) => {
  const coinValue = Number(betcoin)
  const isAvailable = Number(coinValue) >= 0

  useEffect(() => {
    const effectClass = isAvailable ? 'dud' : 'stop'

    const phrases = ['CONTA BLOQUEADA', 'CLIQUE PARA OBTER MAIS CRÉDITOS']

    const el = document.querySelector('.text-betcoin')
    const fx = new TextScramble(el, effectClass)

    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 3000)
      })
      counter = (counter + 1) % phrases.length
    }

    next()
  }, [isAvailable])

  return (
    <div className={clsx(
      "flex justify-end flex-1 space-x-8 cursor-pointer",
    )}
    >
      {
        isAvailable ?
          <div className='coin-betcoin'>
            <CountUp delay={0} end={coinValue} /> betcoins
          </div> :
          <div className="text-betcoin" />
      }
    </div>
  );
}

export default Betcoin
