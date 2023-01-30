import { useContext, useEffect, useState } from "react";
import { GameContext } from "../Providers/game-context";
import { Key } from "../types/types";

export function KeyBoard() {
  const [keys, setKeys] = useState<Array<Key>>([
    { key: "Q", status: "" },
    { key: "W", status: "" },
    { key: "E", status: "" },
    { key: "R", status: "" },
    { key: "T", status: "" },
    { key: "Y", status: "" },
    { key: "U", status: "" },
    { key: "I", status: "" },
    { key: "O", status: "" },
    { key: "P", status: "" },
    { key: "", status: "" },
    { key: "A", status: "" },
    { key: "S", status: "" },
    { key: "D", status: "" },
    { key: "F", status: "" },
    { key: "G", status: "" },
    { key: "H", status: "" },
    { key: "J", status: "" },
    { key: "K", status: "" },
    { key: "L", status: "" },
    { key: "", status: "" },
    { key: "key backspace", status: "" },
    { key: "Z", status: "" },
    { key: "X", status: "" },
    { key: "C", status: "" },
    { key: "V", status: "" },
    { key: "B", status: "" },
    { key: "N", status: "" },
    { key: "M", status: "" },
    { key: "key return", status: "" },
  ]);

  const { words, addLetter, checkWord, deleteLetter } = useContext(GameContext);

  const isLetter = (letter: string): boolean => {
    return /^[a-z]$/.test(letter.toLowerCase());
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [words]);

  const handleKeyboardEvent = (event: KeyboardEvent): void => {
    if (event.key === "Backspace") {
      deleteLetter();
    } else if (event.key === "Enter") {
      checkWord(keys, setKeys);
    } else {
      if (!isLetter(event.key)) return;
      addLetter(event.key.toUpperCase());
    }
  };

  const handleOnClick = (key: string) => {
    if (key === "key backspace") {
      deleteLetter();
    } else if (key === "key return") {
      checkWord(keys, setKeys);
    } else {
      addLetter(key);
    }
  };

  const backspace = <i className="bi bi-backspace"></i>;
  const enter = <i className="bi bi-arrow-return-left"></i>;

  return (
    <div className="keyboard">
      {keys.map((key, index) =>
        key.key ? (
          <button
            key={key.key}
            className={
              key.key === "key backspace"
                ? "key backspace"
                : key.key === "key return"
                ? "key return"
                : "key"
            }
            id={
              key.status === "right"
                ? "overlayRight"
                : key.status === "misplaced"
                ? "overlayMisplaced"
                : key.status === "wrong"
                ? "overlayWrong"
                : undefined
            }
            value={key.key}
            onClick={() => handleOnClick(key.key)}
          >
            {key.key === "key backspace"
              ? backspace
              : key.key === "key return"
              ? enter
              : key.key}
          </button>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
}
