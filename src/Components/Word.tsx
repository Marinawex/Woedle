import { useContext } from 'react';
import { GameContext } from '../Providers/game-context';
import { Tile } from './tile';
import { WordModal } from './WordModal';

export function Word() {
  const { words, showWordModal, setWordModal, isWin }: any = useContext(GameContext);
  const className = 'tile';
  const gameState = isWin ? 'SUCCESS' : 'GAME OVER';

  return (
    <div className="gameContainer">
      {words.map((word: any, wordIndex: number) => (
        <div key={wordIndex} className="row">
          {word.map((letter: any, letterIndex: number) => (
            <Tile
              key={letterIndex}
              letter={letter.letter}
              className={className}
              id={
                letter.status === 'right'
                  ? 'overlayRight'
                  : letter.status === 'misplaced'
                  ? 'overlayMisplaced'
                  : letter.status === 'wrong'
                  ? 'overlayWrong'
                  : undefined
              }
              letterIndex={letterIndex}
              wordIndex={wordIndex}
            />
          ))}
        </div>
      ))}
      {showWordModal && <WordModal onCloseWordModal={() => setWordModal(!showWordModal)} gameState={gameState} />}
    </div>
  );
}
