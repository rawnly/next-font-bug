
import { FC } from "react";
import {
  type DocumentProps,
  Html,
  Main,
  Head,
  NextScript,
} from "next/document";
import clsx from "clsx";
import * as fonts from '../fonts'

const Document: FC<DocumentProps> = () => (
  <Html className={clsx(
    // try to comment the following fonts
    fonts.mona.variable,
    fonts.hubot.variable,
    fonts.jetbrains_mono.variable,
    'bg-white text-black dark:bg-black dark:text-white'
  )}>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
