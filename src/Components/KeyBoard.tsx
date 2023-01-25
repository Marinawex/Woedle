import { useContext } from "react";
import { GameContext } from "../Providers/game-context";



export function KeyBoard() {

  const {addLetter, checkWord, deleteLetter} = useContext(GameContext)


  const handleOnClick  = (key:string) => {
    if(key === 'key backspace') {
      deleteLetter()
    } else if(key === 'key return'){
      checkWord()
    }else{
      addLetter(key)
    }

  }
  const keys: string[] = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "",
    "key backspace",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "key return",
  ];
  const backspace = <i className="bi bi-backspace"></i>;
  const enter = <i className="bi bi-arrow-return-left"></i>;

  return (
    <div className="keyboard">
      {keys.map((key, index) =>
        key ? (
          <button
            key={key}
            className={
              key === "key backspace"
                ? "key backspace"
                : "key" && key === "key return"
                ? "key return"
                : "key"
            }
            value={key}
            onClick={() => handleOnClick(key)}
          >
            {key === "key backspace"
              ? backspace
              : key && key === "key return"
              ? enter
              : key}
          </button>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
}
