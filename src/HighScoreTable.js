import React from "react";
import PlayerScore from "./PlayerScore";


const HighScoreTable = ({playersData} ) =>
{
    return (
        
        <div>
            <h3>High Scores: {playersData.name}</h3>
            <table className="">
                <tbody>
                    {playersData.scores.map( ( playerData, index ) =>
                    {
                       return <PlayerScore key={index} player={playerData}  />
                    })}
                </tbody>
            </table>
        </div>
        
    );
}



export default HighScoreTable;