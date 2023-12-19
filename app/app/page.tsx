'use client';

import { LogoMiniIcon, LogoNameIcon } from '@/lib';
import { MendableInPlace } from '@mendable/search';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import NavbarStatic from '@/components/NavbarStatic';
import { useBetcoin } from '@/contexts/BetcoinContext';
import './mendable-styles.scss';

const Home = () => {
  const [loadded, setLoaded] = useState(false);
  const { betcoin, setBetcoin } = useBetcoin()


  const onChangeVisibility = () => {
    if (typeof window !== 'undefined')
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          console.log('visible');
          setLoaded(true);
        }

        if (document.visibilityState === 'hidden') {
          console.log('hidden');
          setLoaded(false);
        }
      });
  };

  const handleOnMessage = async (
    question: string,
    answer: string,
    sources?: string[]
  ) => {
    // console.log('User asked:', question);
    // console.log('Received answer:', answer);
    // console.log('Sources:', sources);

    const auxBetcoin = Number(betcoin)
    setBetcoin(auxBetcoin - 20);
    const response = await fetch('/api/calculate-tokens', {
      body: JSON.stringify({ question }),
      method: 'POST'
    });
    const data = await response.json();
    console.log(data.tokensLength);
    setBetcoin(auxBetcoin - data.tokensLength);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    onChangeVisibility();
  }, []);

  return (
    <>
      <NavbarStatic />
      <div className="flex flex-col items-center justify-start gap-2 ">
        <LogoNameIcon className="scale-[0.2]" />
        <div
          className={clsx(
            'aposta-gpt',
            'w-full relative',
            !loadded
              ? 'hidden block opacity-0'
              : 'block opacity-1 animate__animated animate__pulse',
            Number(betcoin) <= 0 ? 'block-chat' : '',
          )}
        >
          <MendableInPlace
            welcomeMessage="O que gostaria de analisar?"
            hintText="Quais os melhores confrontos para over gols?"
            footer={{
              bottomRightLink: {
                label: '',
                link: '#'
              }
            }}
            anon_key={process.env.NEXT_PUBLIC_MENDABLE_ANON_KEY ?? ''}
            language="pt"
            onMessageForTracking={handleOnMessage}
            style={{
              backgroundColor: '#22212C',
              accentColor: '#6DF663',
              darkMode: true
            }}
            inputSettings={{
              askButtonStyle: {
                textColor: '#13181A',
                activeColor: '#00FF0A',
                disabledColor: '#00FF0Ad0',
                disabledTextColor: '##13181A'
              }
            }}
            messageSettings={{
              hideSources: true
            }}
            botIcon={<LogoMiniIcon />}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
