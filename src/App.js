import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Coin from './Coin'
import './App.css';
import Buttons from './Buttons'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [update, setUpdate] = useState(0)
  const [trueForAscOrder, setTrueForAscOrder] = useState(true)
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=PLN&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      // console.log(res.data)
      setCoins(res.data)
    }).catch(error => console.log(error))
  }, []);


  function sortByName () {
    console.log("sorting it smart")
    let tempCoins = [...coins]
    setUpdate(update+1)
    if(trueForAscOrder===true){
      tempCoins = coins.sort((a,b) => a.id > b.id ? -1 : 1)
      setTrueForAscOrder(false)
    }
    else { tempCoins = coins.sort((a,b) => a.id > b.id ? 1 : -1);
      setTrueForAscOrder(true)
    }
    
    setCoins(tempCoins)
  }

  function sortByPrice () {
    console.log("sorting it smart")
    let tempCoins = [...coins]
    setUpdate(update+1)
    if(trueForAscOrder===true){
      tempCoins = coins.sort((a,b) => a.current_price > b.current_price ? -1 : 1)
      setTrueForAscOrder(false)
    }
    else { tempCoins = coins.sort((a,b) => a.current_price > b.current_price ? 1 : -1);
      setTrueForAscOrder(true)
    }
    
    setCoins(tempCoins)
  }

  function sortByVolume () {
    console.log("sorting it smart")
    let tempCoins = [...coins]
    setUpdate(update+1)
    if(trueForAscOrder===true){
      tempCoins = coins.sort((a,b) => a.total_volume > b.total_volume ? -1 : 1)
      setTrueForAscOrder(false)
    }
    else { tempCoins = coins.sort((a,b) => a.total_volume > b.total_volume ? 1 : -1);
      setTrueForAscOrder(true)
    }
    
    setCoins(tempCoins)
  }

  function sortByPercent () {
    console.log("sorting it smart")
    let tempCoins = [...coins]
    setUpdate(update+1)
    if(trueForAscOrder===true){
      tempCoins = coins.sort((a,b) => a.price_change_percentage_24h > b.price_change_percentage_24h ? -1 : 1)
      setTrueForAscOrder(false)
    }
    else { tempCoins = coins.sort((a,b) => a.price_change_percentage_24h > b.price_change_percentage_24h ? 1 : -1);
      setTrueForAscOrder(true)
    }
    
    setCoins(tempCoins)
  }

  function sortByMarketCap () {
    console.log("sorting it smart")
    let tempCoins = [...coins]
    setUpdate(update+1)
    if(trueForAscOrder===true){
      tempCoins = coins.sort((a,b) => a.market_cap > b.market_cap ? -1 : 1)
      setTrueForAscOrder(false)
    }
    else { tempCoins = coins.sort((a,b) => a.market_cap > b.market_cap ? 1 : -1);
      setTrueForAscOrder(true)
    }
    
    setCoins(tempCoins)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log("setCoins",coins)
    // let tempCoins = [...coins];
    
    // tempCoins = tempCoins.filter(room => room.price_change_percentage_24h >= 0)
    // tempCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) )

    // setCoins(tempCoins)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        {/* <button onClick={sortByPrice}>sort me down</button>
        <button onClick={sortByUp}>sort me up</button>
        <button onClick={sortByName}>sort it smart</button> */}
        <form>
          <input type="text" placeholder="Search" 
          className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {/* {filteredCoins.map( (coin,i) => {
          console.log("number:",i, coin.total_volume)
      })} */}

      <Buttons 
      sortByName={sortByName}
      sortByPrice={sortByPrice}
      sortByVolume={sortByVolume}
      sortByPercent={sortByPercent}
      sortByMarketCap={sortByMarketCap}/>
        {filteredCoins.map(coin => {
          // console.log(coin.total_volume)
          return (
            <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            symbol={coin.symbol}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
          )
          })}
    </div>
  );
}

export default App;
