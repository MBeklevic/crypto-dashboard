import React, { useState } from "react";
import "../styles/CurrencyConverter.css";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

function CurrencyConverter() {

    const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
    const [chosenPrimaryCurr, setChosenPrimaryCurr] = useState("BTC");
    const [chosenSecondaryCurr, setChosenSecondaryCurr] = useState("BTC");
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [primaryCurrExchange, setPrimaryCurrExchange] = useState("BTC");
    const [secondaryCurrExchange, setSecondaryCurrExchange] = useState("BTC");
    const [result, setResult] = useState(1)

    // console.log(exchangeRate)

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
                from_currency: chosenPrimaryCurr,
                function: 'CURRENCY_EXCHANGE_RATE',
                to_currency: chosenSecondaryCurr
            },
            headers: {
                'X-RapidAPI-Key': '25002bdbd2mshd0842aaee362151p107b6cjsn6a61d06aedda',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };

        axios.request(options).then(response => {
            const ApiResult = response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
            // console.log(ApiResult);
            setExchangeRate(ApiResult);
            setResult(ApiResult * amount);
            setPrimaryCurrExchange(chosenPrimaryCurr);
            setSecondaryCurrExchange(chosenSecondaryCurr)
        }).catch(error => {
            console.error(error);
        });
    }
    return (
        <div className="CurrencyConverter">
            <h2>Currency Converter</h2>
            <div className="CurrencyConverter-inputBox">
                <table>
                    <body>
                        <tr>
                            <td>Primary Currency</td>
                            <td>
                                <input
                                    className="CurrencyConverter-input"
                                    type="number"
                                    name="currency-amount-1"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenPrimaryCurr}
                                    name="currency-option-1"
                                    className="CurrencyConverter-options"
                                    onChange={(e) => setChosenPrimaryCurr(e.target.value)}
                                >
                                    {currencies.map((curr, i) =>
                                        <option key={i}>{curr}</option>)
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Currency</td>
                            <td>
                                <input
                                    className="CurrencyConverter-input"
                                    name="currency-amount-2"
                                    value={result}
                                    disabled={true}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenSecondaryCurr}
                                    name="currency-option-2"
                                    className="CurrencyConverter-options"
                                    onChange={(e) => setChosenSecondaryCurr(e.target.value)}
                                >
                                    {currencies.map((curr, i) =>
                                        <option key={i}>{curr}</option>)
                                    }
                                </select>
                            </td>
                        </tr>
                    </body>
                </table>
                <button
                    className="CurrencyConverter-button"
                    onClick={convert}
                >
                    Convert
                </button>
            </div>
            <ExchangeRate
                exchangeRate={exchangeRate}
                chosenSecondaryCurr={secondaryCurrExchange}
                chosenPrimaryCurr={primaryCurrExchange}
            />
        </div>
    )
}

export default CurrencyConverter;