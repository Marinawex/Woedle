import { useState, useEffect } from "react";
import { startGame, sendWordToTheServer } from "./serverRequests";
import { Key, serverResponse } from "../types/types";

export function useGame() {
  const [words, setWords] = useState([
    [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ],
    [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ],
    [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ],
    [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ],
    [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ],
    [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ],
  ]);
  const [activeTileIndex, setActiveTileIndex] = useState<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [game, setGame] = useState("");
  const [showWordModal, setWordModal] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const onCloseWordModal = () => {
    setWordModal(!showWordModal);
  };

  useEffect(() => {
    const fetchWord = async () => {
      const res = await startGame();
      setGame(res);
    };
    fetchWord();
  }, []);

  const addLetter = (letter: string) => {
    const newWords = [...words];
    if (activeTileIndex > 4) return;
    newWords[activeWordIndex][activeTileIndex].letter = letter;
    setWords(newWords);
    setActiveTileIndex(activeTileIndex + 1);
  };

  const deleteLetter = () => {
    if (activeTileIndex < 0) return;
    const newWords = [...words];
    newWords[activeWordIndex][activeTileIndex].letter = "";
    setWords(newWords);
    setActiveTileIndex(activeTileIndex - 1);
  };

  const checkWord = async (
    keys: Key[],
    setKeys: React.Dispatch<React.SetStateAction<Key[]>>
  ) => {
    if (activeTileIndex <= 4) return;
    const guess = words[activeWordIndex];
    const serverResponse = await sendWordToTheServer(guess);
    addStyleToTheBoard(serverResponse);
    addStyleToTheKeyBoard(serverResponse, keys, setKeys);
    checkWin(serverResponse);
    setActiveWordIndex(activeWordIndex + 1);
    setActiveTileIndex(0);
  };

  const addStyleToTheBoard = async (serverResponse: serverResponse) => {
    let newWords = [...words];
    newWords[activeWordIndex] = serverResponse.arrayResult;
    setWords(newWords);
  };

  const addStyleToTheKeyBoard = async (
    serverResponse: serverResponse,
    keys: Key[],
    setKeys: React.Dispatch<React.SetStateAction<Key[]>>
  ) => {
    const newKeys = keys.map((key) => {
      if (key.key !== "key return" && key.key !== "key backspace") {
        const letter = serverResponse.arrayResult.find(
          (word) => word.letter === key.key
        );
        if (letter) {
          key.status = letter.status;
        }
      }
      return key;
    });
    setKeys(newKeys);
  };

  const checkWin = async (serverResponse: serverResponse) => {
    if (serverResponse.win) {
      setWordModal(!showWordModal);
      setIsWin(!isWin);
    }
    if (!serverResponse.win && activeWordIndex === 5) {
      setWordModal(!showWordModal);
    }
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
    addStyleToTheBoard,
    addStyleToTheKeyBoard,
    showWordModal,
    setWordModal,
    onCloseWordModal,
    isWin,
    checkWin,
    game,
  };
}
