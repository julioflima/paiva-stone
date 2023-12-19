'use client'

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from "@tanstack/react-query";
import {
  PersistQueryClientProvider, Persister
} from '@tanstack/react-query-persist-client';

import { BetcoinProvider } from '@/contexts/BetcoinContext';
import { Analytics } from '@vercel/analytics/react';
import { Public_Sans } from "next/font/google";
import { FC, PropsWithChildren, useMemo } from "react";
import "./globals.scss";

const publicSans = Public_Sans({ subsets: ["latin"] });

const RootLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {

  const persister = useMemo(() => typeof window !== 'undefined'
    ? createSyncStoragePersister({
      storage: window.localStorage
    })
    : ({} as Persister), [])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        refetchOnWindowFocus: true,
        keepPreviousData: true
      }
    }
  });

  const persistOptions = useMemo(
    () => ({
      persister,
      buster: 'CLIENTE_NAO_EXLUSIVO',
      maxAge: Infinity,
      hydrateOptions: {},
      dehydrateOptions: {}
    }),
    [persister]
  );



  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>Aposta GPT - I.A para e-Soccer FIFA</title>
        <link rel="shortcut icon" href="/images/logo_mini.svg" />
        <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
        <link rel="icon" href="images/favicon.png" />
        <meta property="og:image" content="/images/logo_mini.svg" />
        <meta name="twitter:image" content="/images/logo_mini.svg" />
        <meta
          name="description"
          content="Eu sou um avançado AI especializado na análise de jogadores de futebol de video game, especificamente em e-soccer. Faço parte da equipe de investimentos esportivos da Aposta GPT. Sou reconhecido pela minha habilidade em avaliar o desempenho dos jogadores e identificar tendências e padrões. Estou aqui para ajudar os investidores e entusiastas do investimento esportivo a tomar decisões de apostas mais informadas."
        />
        <meta property="og:title" content="Aposta GPT - I.A para e-Soccer FIFA" />
        <meta
          property="og:description"
          content="Eu sou um avançado AI especializado na análise de jogadores de futebol de video game, especificamente em e-soccer. Faço parte da equipe de investimentos esportivos da Aposta GPT. Sou reconhecido pela minha habilidade em avaliar o desempenho dos jogadores e identificar tendências e padrões. Estou aqui para ajudar os investidores e entusiastas do investimento esportivo a tomar decisões de apostas mais informadas."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aposta GPT - I.A para e-Soccer FIFA" />
        <meta
          name="twitter:description"
          content="I.A para e-Soccer FIFA"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/* <!-- Iconic Fonts --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" />

        {/* <!-- Fonts --> */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

      </head>
      <body className={publicSans.className}>
        <Analytics />
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={persistOptions}
        >
          <div className="flex flex-col h-[100vh] ">
            <BetcoinProvider>
              {children}
            </BetcoinProvider>
          </div>
        </PersistQueryClientProvider>
      </body>
    </html >
  );
}

export default RootLayout