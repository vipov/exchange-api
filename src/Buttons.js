import React from 'react';
import './Coin.css';
import {TiArrowUnsorted, Fas, FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaWater} from 'react-icons/fa';
import { RiArrowUpDownLine } from "react-icons/ri";


const Coin = ({sortByName, sortByPrice, sortByVolume, sortByPercent, sortByMarketCap  }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                <p onClick={sortByName}>Sort by name<RiArrowUpDownLine /></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price" onClick={sortByPrice}>Sort by price<RiArrowUpDownLine /></p>
                    <p className="coin-volume" onClick={sortByVolume}> Sort by value<RiArrowUpDownLine /> </p> 
                    <p className="coin-percent" onClick={sortByPercent}> Sort by percent<RiArrowUpDownLine /></p>
                    <p className="coin-marketcap" onClick={sortByMarketCap}> Sort by marketcap<RiArrowUpDownLine /></p>
                </div>
            </div>
        </div>
    )
}

export default Coin
