import { useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../Providers/auth-context";
import { LoginProps } from "../types/types";

export function LogIn({ onLogInClose }: LoginProps) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const emailInputRef = useRef<any>();
  const nameInputRef = useRef<any>();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onLogInClose();
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(currentUser));
  }, [currentUser]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserData = {
      ...currentUser,
      [event.target.name]: event.target.value,
    };
    setCurrentUser(newUserData);
  };

  return (
    <Form>
      <div className="overlay">
        <div className="LogInModalContainer">
          <div className="modal">
            <div className="formContainer">
              <h1 className="h1Login">Login</h1>
              <Form.Group className="formValues" onSubmit={handleSubmit}>
                <button className="closeBtn" onClick={onLogInClose}>
                  x
                </button>
                <Form.Label className="formLabel"></Form.Label>
                <Form.Control
                  className="InputValue"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  ref={emailInputRef}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="formValues">
                <Form.Label className="formLabel"></Form.Label>
                <Form.Control
                  className="InputValue"
                  type="text"
                  name="name"
                  placeholder="your name"
                  ref={nameInputRef}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit">
                <Link
                  className="btn-primary "
                  type="text"
                  to={`/game`}
                  onClick={onLogInClose}
                >
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
