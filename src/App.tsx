import { Board } from "./Components/Board"
import { Header } from "./Components/Header"
import { KeyBoard } from "./Components/KeyBoard"

function App() {


  return (

  <>
    <Header />
    <hr />
    <div className="container">
      <Board />
      <KeyBoard />
    </div>
  </>
    
  )
}

export default App
