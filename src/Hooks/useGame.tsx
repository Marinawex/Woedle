import { useState } from "react";



export function useGame() {
  const [words, setWords] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [activeTileIndex, setActiveTileIndex] = useState<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);

  const [letterStyleRight, setLetterStyleRight] = useState(false);
  const [letterStyleMisplaced, setLetterStyleMisplaced] = useState(false);

  const wordle = "super".toUpperCase();

  const addLetter = (letter: string) => {
    const newWords: string[][] = [...words];
    if (activeTileIndex > 4) return;
    newWords[activeWordIndex][activeTileIndex] = letter;
    setWords(newWords);
    setActiveTileIndex(activeTileIndex + 1);
  };

  const deleteLetter = () => {
    if (activeTileIndex <= 0) return;
    const newWords = [...words];

    newWords[activeWordIndex][activeTileIndex] = "";
    setWords(newWords);
    setActiveTileIndex(activeTileIndex - 1);
    console.log(words);
  };

  const checkWord = () => {
    if (activeTileIndex < 4) return;
    const guess = words[activeWordIndex].join("");
    console.log(guess);

    if (guess === wordle) {
      alert("sucsess");
    
    }

    words[activeWordIndex].map((letter, index) => {
      if (letter === wordle[index]) {
        console.log(wordle[index])
        setLetterStyleRight(!letterStyleRight)


       
      } else if (wordle.includes(letter)) {
        setLetterStyleMisplaced(!letterStyleMisplaced)
      } else {
      }
    });

  

    setActiveWordIndex(activeWordIndex + 1);
    setActiveTileIndex(0);
  };

  return {
    words,
    setWords,
    activeTileIndex,
    setActiveTileIndex,
    activeWordIndex,
    setActiveWordIndex,
    addLetter,
    deleteLetter,
    checkWord,
    letterStyleRight,
    setLetterStyleRight,
    letterStyleMisplaced,
    setLetterStyleMisplaced
  };
}
