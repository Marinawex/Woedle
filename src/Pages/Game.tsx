import { useContext } from "react";
import { Board } from "../Components/Board";
import { KeyBoard } from "../Components/KeyBoard";
import {  TopBar } from "../Components/TopBar";

import { useGame } from "../Hooks/useGame";
import { GameContext } from "../Providers/game-context";

export function Game() {
  const gameApi = useGame();
  return (
    <>
      <GameContext.Provider value={gameApi}>
      <TopBar />
      <hr />
      <div className="container">
        <Board />
        <KeyBoard />
      </div>
      </GameContext.Provider>
    </>
  );
}
