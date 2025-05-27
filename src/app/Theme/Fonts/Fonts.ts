// fonts.ts
import { Bebas_Neue, Inter, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
