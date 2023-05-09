import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../Providers/game-context";
import { TileProps } from "../types/types";

export function Tile({
  letter,
  className,
  letterIndex,
  wordIndex,
  id,
}: TileProps) {
  const { activeTileIndex, activeWordIndex } = useContext(GameContext);
  const tileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    activeWordIndex;
    tileRef.current?.focus();
  }, [activeTileIndex, activeWordIndex]);

  return (
    <input
      type="text"
      readOnly={true}
      className={className}
      id={id}
      aria-label='letter'
      defaultValue={letter}
      ref={
        letterIndex === activeTileIndex && wordIndex === activeWordIndex
          ? tileRef
          : null
      }
    />
  );
}
