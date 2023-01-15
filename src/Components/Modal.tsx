import  { useEffect } from "react";

export function Modal({ onClose }) {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    });
  }, []);

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modal">
          <h1 className="modHeader">How To Play</h1>
          <h2 className="modSubHeader">Guess the Wordle in 6 tries.</h2>
          <ul className="modList">
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
          <p id="pMod">
              <b>Examples</b>
          </p>
          <div id="rowMod">
              <div className='letter' id="greenLet">W</div>
              <div className='letter' id="modalLet">O</div>
              <div className='letter' id="modalLet">R</div>
              <div className='letter' id="modalLet">D</div>
              <div className='letter' id="modalLet">S</div>
          </div>
          <p id="pMod">
              <b>W</b> is in the word and in the right spot.
          </p>
          <div id="rowMod">
              <div className='letter' id="modalLet">P</div>
              <div className='letter' id="modalLet">A</div>
              <div className='letter' id="yellowLet">G</div>
              <div className='letter' id="modalLet">E</div>
              <div className='letter' id="modalLet">S</div>
          </div>
          <p id="pMod">
              <b>G</b> is in the word but not in the right spot.
          </p>
          <div id="rowMod">
              <div className='letter' id="modalLet">L</div>
              <div className='letter' id="modalLet">E</div>
              <div className='letter' id="modalLet">M</div>
              <div className='letter' id="grayLet">O</div>
              <div className='letter' id="modalLet">N</div>
          </div>
          <p id="pMod">
              <b>O</b> is not in the word in any spot.
          </p>
          <button className="closeBtn" onClick={onClose}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}
