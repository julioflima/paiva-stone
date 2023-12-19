'use client'

import TextScramble from '@/styles/animations/TextScramble';
import { FC, useEffect } from 'react';
import './styles.scss';


interface ITyping {
  text: string
}

const Typing: FC<ITyping> = ({ text }) => {

  useEffect(() => {

    const phrases = [text]

    const el = document.querySelector('.text-typing')
    const fx = new TextScramble(el, 'dud')

    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 150)
      })
      counter = (counter + 1) % phrases.length
    }

    next()
  }, [text])

  return <div className="text-typing" />;
}

export default Typing
