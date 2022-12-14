


export function Header() {

    return(
    <header className="header">
      <button className="user"><i className="bi bi-person"></i></button>
      <h1>wordle</h1>
      <nav className="nav">
        <button><i className="bi bi-question"></i></button>
        <button className="sta"><i className="bi bi-bar-chart"></i></button>
        <button className="settings"><i className="bi bi-gear"></i></button>
      </nav>
    </header>
    )
}