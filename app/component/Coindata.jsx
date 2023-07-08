"use client"
import React from 'react'

import { useState, useEffect } from "react"
import Coin from './Coin';
import SearchCoin from "./SearchCoin"

function Coindata() {
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
    <div>
         <SearchCoin getSearchResults={(result)=> setCoins(result)}/>
    <Coin coins = {getCoins}/>
        
    </div>
  )
}

export default Coindata
