// fonts.ts
import { Anton, Bebas_Neue, Roboto, } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
