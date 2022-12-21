import { Board } from "../Components/Board";
import { Header } from "../Components/Header";
import { KeyBoard } from "../Components/KeyBoard";

export function Game() {
  return (
    <>
      <Header />
      <hr />
      <div className="container">
        <Board />
        <KeyBoard />
      </div>
    </>
  );
}
