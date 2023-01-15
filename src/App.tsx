import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Board } from "./Components/Board"
import { KeyBoard } from "./Components/KeyBoard"
import { Game } from "./Pages/game"
import { Welcome } from "./Pages/Welcome"
import { AuthContext } from "./Providers/auth-context"

export interface user {
  email: string;
  name: string;
}


function App() {


  const [currentUser, setCurrentUser] = useState<user | null>(null)
  const authApi = {currentUser, setCurrentUser}

  return (

  
  < AuthContext.Provider value={authApi}>
   <Outlet/>
  </AuthContext.Provider>
  
    
  )
}

export default App
