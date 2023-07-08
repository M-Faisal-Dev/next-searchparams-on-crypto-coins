"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react"
import Coin from "./component/Coin";
import SearchCoin from "./component/SearchCoin";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'searchParams with Next.js 13.4',
  description: 'implemente the "searchParam" to perform a search for different coins.',
}

export default function RootLayout({ children }) {
  const [getCoins, setCoins] = useState([]);
  useEffect(()=>{
    const getdata = async ()=>{
  const response = await fetch('/api/coins')
  const coinData = await response.json()
  setCoins(coinData.data.coins)
    }
    getdata()
  },[])
  return (
    <html lang="en">
      <body className={inter.className}>
     
        {children}
        <SearchCoin getSearchResults={(result)=> setCoins(result)}/>
   <Coin coins = {getCoins}/>
        
        </body>
    </html>
  )
}
