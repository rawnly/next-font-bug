import { JetBrains_Mono } from "@next/font/google";
import localFont from "@next/font/local";

export const mona = localFont({
  src: "./Mona-Sans.woff2",
  variable: "--font-mona",
});

export const hubot = localFont({
  src: "./Hubot-Sans.woff2",
  variable: "--font-hubot",
});

export const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
