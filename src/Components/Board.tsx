import { useContext, useState } from "react";
import { GameContext } from "../Providers/game-context";
import { Word } from "./Word";
import { useGame } from "../Hooks/useGame";

export function Board() {
  const {activeTileIndex, setActiveTileIndex, activeWordIndex, setActiveWordIndex} = useContext(GameContext)
 
  const words = [1,2,3,4,5,6]

  return (
  
      <div className="gameContainer">
        {words.map((row, index) => (
          
          <Word key={`row ${index}`} row={`row r${index + 1}`} />
        ))}
      </div>
    
  );
}
