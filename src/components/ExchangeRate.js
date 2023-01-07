import React from 'react'
import "../styles/ExchangeRate.css"

function ExchangeRate({ exchangeRate, chosenPrimaryCurr, chosenSecondaryCurr }) {
    return (
        <div className='ExchangeRate'>
            <h3>Exchange Rate</h3>
            <h2>{exchangeRate}</h2>
            <p>{chosenPrimaryCurr} to {chosenSecondaryCurr}</p>
        </div>
    )
}

export default ExchangeRate;