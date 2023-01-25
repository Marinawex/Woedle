
import { KeyBoard } from "../Components/KeyBoard";
import {  TopBar } from "../Components/TopBar";
import { Word } from "../Components/Word";

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
        <Word />
        <KeyBoard />
        </div>
      </GameContext.Provider>
    </>
  );
}
