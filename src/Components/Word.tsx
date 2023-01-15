import React, { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../Providers/game-context";



export function Word({ row }) {

  const { word, activeTileIndex, setActiveTileIndex, addLetter, colorLetters} = useContext(GameContext)
  const color = colorLetters()

  const tileRef = useRef<HTMLInputElement>(null);
  

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log('hu')
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>

  ) {
    
    addLetter(event.target.value);
   
    console.log(event.key)
  }

  useEffect(() => {
    document.addEventListener('keydown',(event)=>handleKeyDown(event))
  },[])

  useEffect(() => {
    tileRef.current?.focus();
  }, [activeTileIndex]);

  return (
    <div className={row}>
      {word.map((tile:string, index:number) => {
        return (
          <input
            type="text"
            className={`tile ${color}`}

            key={index}
            value={tile}
           ref={index === activeTileIndex ? tileRef : null}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
           
          />
        );
      })}
    </div>
  );
}
