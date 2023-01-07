import React from "react";
import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import "./styles/App.css"



function App() {
  return (

    <div className="App">
      <h1>CRYPTO DASHBOARD</h1>
      <div className="App-container">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
