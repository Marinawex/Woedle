import { createContext } from "react";




interface GameContext {
    words: string[][],
    setWords: (words: string[][]) => void,
    activeTileIndex: number,
    setActiveTileIndex: (index: number) => void,
    activeWordIndex: number,
    setActiveWordIndex: (index: number) => void,
    letterStyleRight: boolean,
    setLetterStyleRight: (state: boolean) => void,
    letterStyleMisplaced: boolean,
    setLetterStyleMisplaced: (state: boolean) => void,
    wordle?: string 
    addLetter: (letter: string) => void,
    deleteLetter: () => void,
    checkWord: () => void
  }

export const GameContext = createContext<GameContext> (null);