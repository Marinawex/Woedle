import  { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../Providers/game-context";
import { Tile } from "./tile";



export function Word() {
  const {words, activeTileIndex , activeWordIndex} = useContext(GameContext);
  const className = 'tile';
  
  return (
    <div className="gameContainer" >
    {words.map((word, wordIndex) => (
      <div key={wordIndex} className="row">
        {word.map((letter, letterIndex) => (
          <Tile key={letterIndex} letter={letter} className={className} letterIndex={letterIndex} wordIndex={wordIndex} />
        ))}
      </div>
    ))}
  </div>
);
  
 
}
