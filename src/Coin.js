import React, {forwardRef} from 'react'
import './Coin.css';


      
const Coin = forwardRef(({image, name, symbol, price, volume, priceChange, marketcap}, ref) => {
    let defaultVolume = volume || 500;
    return (
        <div className="coin-container" ref={ref}>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${defaultVolume.toLocaleString()}</p>
                    {priceChange < 0 ? 
                    (   <p className="coin-percent red"> {priceChange.toFixed(2)}%
                        </p> ) :
                        (<p className="coin-percent green"> {priceChange.toFixed(2)}%
                        </p> )
                    }
                    <p className="coin-marketcap">
                        Mkt Cap:  ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}
)
export default Coin
