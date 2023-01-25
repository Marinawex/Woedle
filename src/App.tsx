import { useState } from "react"
import { Outlet } from "react-router-dom"
import { AuthContext, user } from "./Providers/auth-context"




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
