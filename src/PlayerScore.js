import React from "react";


const PlayerScore = ( props ) =>
{
    return (
        <tr>
            <td>{props.player.n}</td>
            <td>{props.player.s}</td>
        </tr>
    
    );
}



export default PlayerScore;