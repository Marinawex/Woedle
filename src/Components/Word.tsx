import React, { useEffect, useRef, useState } from "react";
interface BoardDetails {
  row: string;
  board: string[][];
}

let currentTileIndex: number = 0;
export function Word({ row, board, onSetTile }: BoardDetails) {
  const [tile, setTile] = useState<string[]>(board[0]);
  const tileRef = useRef<HTMLInputElement>(null);
  const [activeTileIndex, setActiveTileIndex] = useState<number>(0);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    const newTile: string[] = [...tile];
    newTile[currentTileIndex] = value.substring(value.length - 1);
    if (!value) setActiveTileIndex(currentTileIndex - 1);
    else setActiveTileIndex(currentTileIndex + 1);

    setTile(newTile);

    // console.log( value.substring(value.length-1))
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    currentTileIndex = index;
    if (event.key === "Backspace") setActiveTileIndex(currentTileIndex - 1);
    if (currentTileIndex === 4) console.log('Done');
  }

  console.log(tile);
  useEffect(() => {
    tileRef.current?.focus();
  }, [activeTileIndex]);

  console.log(tile);
  console.log(board);
  return (
    <div className={row}>
      {tile.map((_, index) => {
        return (
          <input
            type="text"
            className="tile"
            ref={index === activeTileIndex ? tileRef : null}
            key={index}
            onChange={handleOnChange}
            onKeyDown={(event) => handleKeyDown(event, index)}
            value={tile[index]}
          />
        );
      })}
    </div>
  );
}
