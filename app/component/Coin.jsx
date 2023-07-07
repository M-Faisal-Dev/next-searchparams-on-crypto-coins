import Link from "next/link";
function Coin({ coins }) {
  return (
    <div className="bg-black">
     
      <section className="text-gray-50 body-font mx-4">
        <div className="container px-11 py-4 mx-auto ">
          <div className="flex flex-wrap -m-4 justify-center">
            {coins.map((coin) => (
              <div key={coin.name} className="lg:w-1/5 xl:w-1/6 md:w-1/4 sm:w-1/3 p-4 m-2 w-full flex flex-col items-center shadow-md justify-center hover:shadow-md hover:shadow-red-600 bg-slate-900">
                <Link href={coin.coinrankingUrl}>
                  <div className="block relative rounded overflow-hidden">
                    <img alt="Coin" className="block" src={coin.iconUrl} />
                      
                  </div>
                  <div className="mt-4 flex flex-col items-center">
                    <h2 className="text-gray-50 title-font text-lg font-medium">{coin.name}</h2>
                    <p className="mt-1">Price {!isNaN(parseFloat(coin.price)) ? `$${parseFloat(coin.price).toFixed(2)}` : 'Price not available'}</p>
                    <p className="mt-1">Rank:{coin.rank}</p>
                    <p className="mt-1">Symbol: {coin.symbol}</p>
                  </div>
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coin;
