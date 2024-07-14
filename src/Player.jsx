import { useState } from "react"



function Player({initialName,symbol,isActive, onChangeName}){
    const [isEdditing,setIsEdditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)
    

    function handleEditClick() {
        setIsEdditing((show) => !show)
        onChangeName(symbol,playerName)
    }

    
    function handleChange(event) {
        setPlayerName(event.target.value)
    }

return(


      <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {!isEdditing && <span className="player-name">{playerName}</span>}
            {isEdditing && <input type="text" required value={playerName} onChange={handleChange} ></input>}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEdditing ? "Edit" : "Save"}</button>  
        </li>
)


}


export default Player