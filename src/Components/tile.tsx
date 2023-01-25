import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../Providers/game-context";
interface TileProps {
  letter: string;
  className: string;
  letterIndex: number;
  wordIndex: number;
}

export function Tile({ letter, className, letterIndex, wordIndex }: TileProps) {
  const {
    activeTileIndex,
    activeWordIndex,
    addLetter,
    deleteLetter,
    checkWord,
  } = useContext(GameContext);
  const tileRef = useRef<HTMLInputElement>(null);
  const isLetter = (letter: string) => {
    /^[a-z]$/.test(letter.toLowerCase());
  };

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    // event.preventDefault();

    addLetter(event.target.value.toUpperCase());
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    // if(!isLetter(event.key)){
    //     event.preventDefault()
    // }

    if (event.key === "Backspace") {
      deleteLetter();
    } else if (event.key === "Enter") {
      checkWord();
    }
  }

  useEffect(() => {
    activeWordIndex;
    tileRef.current?.focus();
  }, [activeTileIndex, activeWordIndex]);

  return (
    <input
      type="text"
      className={className}
      defaultValue={letter}
      ref={
        letterIndex === activeTileIndex && wordIndex === activeWordIndex
          ? tileRef
          : null
      }
      onKeyDown={handleKeyDown}
      onChange={handleOnChange}
    />
  );
}
