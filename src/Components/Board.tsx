import { useState } from "react";
import { Word } from "./Word";




export function Board() {
  const [board, setBoard] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState({
    currentTileIndex: 0,
    currentWordeIndex: 0,
  });

  return (
    <div className="gameContainer">
      {board.map((row, index) => (
        <Word key={`row ${index}`} row={`row r${index + 1}`} board={board} />
      ))}
    </div>
  );
}
