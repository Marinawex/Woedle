import { useEffect } from "react";
import { WordModalProps } from "../types/types";

export function WordModal({ onCloseWordModal, gameState }: WordModalProps) {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onCloseWordModal();
      }
    });
  }, []);

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modal">
          <h1 className="S">{gameState}</h1>
        </div>
      </div>
    </div>
  );
}
