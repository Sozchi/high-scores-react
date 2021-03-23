import React from "react";
import './App.css';
import allCountryScores from "./scores.js";
import HighScoreTable from "./HighScoreTable";


function App() {
  return (
    <div>
      <h1>High Scores per Country</h1>
      {allCountryScores.map( ( countryData, index ) =>
      {
        return <HighScoreTable key={index} playersData={countryData} />
      })}
    </div>
  );
}

export default App;
