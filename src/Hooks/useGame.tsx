import { useState } from "react";

export function useGame() {
    const [word, setWord] = useState<string[]>(["", "", "", "", ""]);
    const [activeTileIndex, setActiveTileIndex] = useState<number>(0);
    const [activeWordIndex, setActiveWordIndex] = useState<number>(0);

    const wordle = 'super'.toUpperCase()


    const addLetter = (letter) => {
        if(activeTileIndex<5){
            const newWord = [...word];
            newWord[activeTileIndex] = letter;
            setWord(newWord)
            setActiveTileIndex(activeTileIndex+1)
            console.log(word)
        }
       

    }


    const deleteLetter = () => {
        const newWord = [...word];
            newWord[activeTileIndex] = "";
            setWord(newWord)
        setActiveTileIndex(activeTileIndex-1)
        console.log(word);
        
    }


   const checkWord = () => {
    const guess = word.join("")
    if (activeTileIndex > 5) return
    

    if (guess === wordle){
        alert('sucsess')
        colorLetters('sucsess')
        
    } if (!wordle.includes(guess)){
        colorLetters('wrong')
        
        
    }
    
   }

   const colorLetters = (letters) => {
    if(letters === "sucsess"){
        return "overlayRight"
    } else if (letters === "wrong")
    return "overlayWrong"

    

   }


    return{
        word,
        setWord,
        activeTileIndex,
        setActiveTileIndex,
        addLetter,
        deleteLetter,
        checkWord,
        colorLetters
    }
}