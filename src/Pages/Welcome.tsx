import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/auth-context";
import { Modal } from "../Components/Modal";
import { LogIn } from "../Components/LogIn";

export function Welcome() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const guest = "GUEST";
  return (
    <>
      <div className="welcomecContainer">
        <div className="welcomeH1">
          HEY {currentUser ? currentUser.name : guest}
          <div className="wrapper nine">
            <div>
              <h1 className="rotate rotateS">
                <span>W</span>
                <span>E</span>
                <span>L</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
              </h1>
            </div>
            TO MY WORDLE!
          </div>
        </div>
        <div className="welcomeBtnContainer">
          <button
            className="welcomeBtn"
            onClick={() => setShowHelpModal(!showHelpModal)}
          >
            How To Play
          </button>
          {showHelpModal && (
            <Modal onClose={() => setShowHelpModal(!showHelpModal)} />
          )}
          <button
            className="welcomeBtn"
            onClick={() => setShowLoginModal(!showHelpModal)}
          >
            Login
          </button>
          {showLoginModal && (
            <LogIn onLogInClose={() => setShowLoginModal(!showLoginModal)} />
          )}
          <Link to={"/game"} className="welcomeBtn">
            Play as a guest
          </Link>
        </div>
      </div>
    </>
  );
}
