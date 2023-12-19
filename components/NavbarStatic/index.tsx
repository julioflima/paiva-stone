'use client'

import { useBetcoin } from '@/contexts/BetcoinContext';
import { LogoMiniIcon } from '@/lib';
import Link from 'next/link';
import Betcoin from '../Betcoin';
import s from './NavbarStatic.module.css';

export default function NavbarStatic() {
  const { betcoin } = useBetcoin()

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/checkout" className={s.logo} aria-label="Logo">
              <LogoMiniIcon />
            </Link>
            {false && < nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/checkout" className={s.link}>
                Pricing
              </Link>
              <Link href="/checkout/account" className={s.link}>
                Account
              </Link>
            </nav>}
          </div>
          <Betcoin betcoin={betcoin} />
        </div>
      </div>
    </nav >
  );
}
