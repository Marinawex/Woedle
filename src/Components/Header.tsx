import { NavBar } from "./NavBar";



export function Header() {

    return(
    <header className="header">
      <button className="user"><i className="bi bi-person"></i></button>
      <h1>wordle</h1>
      <NavBar />
    </header>
    )
}