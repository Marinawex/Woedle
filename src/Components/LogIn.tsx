import { useEffect, useState, useContext, useRef } from "react";
import { json, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../Providers/auth-context";
import { user } from "../App";



interface FormValues {
  email: string;
  name: string;
}

export function LogIn({ onLogInClose }) {
  const [FormValues, setFormValues] = useState<FormValues>({
    email: "",
    name: "",
  });
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const emailInputRef = useRef<HTMLInputElement | null>()
  const nameInputRef = useRef<HTMLInputElement | null>()

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
    
    // validate form data and submit
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {


    setCurrentUser((prevFormValues:user) => ({
      ...prevFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Form>
      <div className="overlay">
        <div className="modalContainer">
          <div className="modal">
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onSubmit={handleSubmit}
            >
                <button className="closeBtn" onClick={onLogInClose}>
            x
          </button>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                ref={emailInputRef}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="your name"
                ref={nameInputRef}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" >
              <Link  className="btn-primary" to={`/game`} onClick={onLogInClose}>Submit</Link>
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
}
