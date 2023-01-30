import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { LogIn } from "./LogIn";
import { AuthContext } from "../Providers/auth-context";

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const userName = () => {
    if (currentUser?.name) {
      return currentUser?.name.split(" ")[0];
    }
  };

  const onClose = () => {
    setIsOpen(!isOpen);
  };
  const onLogInClose = () => {
    setIsLogInOpen(!isLogInOpen);
  };
  const modal = !isOpen ? null : <Modal onClose={onClose} />;
  const logInModal = !isLogInOpen ? null : (
    <LogIn onLogInClose={onLogInClose} />
  );

  const handleLogOut = () => {
    localStorage.removeItem("form");
    setCurrentUser(null);
  };

  return (
    <>
      <header className="header">
        {!currentUser ? (
          <button
            className="LoginBtn"
            onClick={() => setIsLogInOpen(!isLogInOpen)}
          >
            Login
          </button>
        ) : (
          <button className="LoginBtn" onClick={handleLogOut}>
            <p>{userName()}</p>
            Logout
          </button>
        )}

        <h1>WORDLE</h1>
        <nav className="nav">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-question"></i>
          </button>
        </nav>
        {logInModal}

        {modal}
      </header>
    </>
  );
}
