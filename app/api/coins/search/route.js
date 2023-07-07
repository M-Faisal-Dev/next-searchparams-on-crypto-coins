import { NextResponse } from "next/server";

async function fetchCoins() {
  const response = await fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    {
      headers: {
        "X-RapidAPI-Key": "8ab613900amshade2a739c3723d8p16f64djsnca6b5a1c4cdd",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  const coins = await response.json();
  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  const { searchParams } = new URL(request.url);
  console.log(searchParams)
  console.log(request.url)
  const query = searchParams.get("query");
  console.log(query)
  const filterCoins = coins.data.coins.filter((coin) => {
    const lowerCaseQuery = query.toLowerCase();
    return (
      coin.name.toLowerCase().includes(lowerCaseQuery) ||
      coin.symbol.toLowerCase().includes(lowerCaseQuery)
    );
  });
  

  return NextResponse.json(filterCoins);
}

