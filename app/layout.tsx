import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {AuthContext} from "@/app/context/AuthContext";
import {Providers} from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white flex max-h-screen flex-col items-center p-6 lg:p-24 h-screen`}>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  )
}