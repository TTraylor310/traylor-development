import { Donegal_One, Cinzel_Decorative, Inter, Eczar, Roboto } from 'next/font/google'
import tahomaFont from 'next/font/local'

export const donegalOne = Donegal_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const cinzDec = Cinzel_Decorative({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})


export const tahomaChar = tahomaFont({
  src: './tahoma.woff2',
  display: 'swap',
})

export const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})