import { AppProps } from 'next/app'
import { FC } from 'react'

import * as fonts from '../fonts'
import clsx from 'clsx'

import '../global.css'

// try to remove className and keep the fonts only inside `_document.tsx`
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <main className={clsx(fonts.mona.variable, fonts.hubot.variable, fonts.jetbrains_mono.variable)}>
    <Component {...pageProps} />
  </main>
);

export default App

