import { useContext } from "react";
import { Link } from "react-router-dom";

import {  TopBar } from "../Components/TopBar";
import { AuthContext } from "../Providers/auth-context";

export function Welcome() {
    const {currentUser} = useContext(AuthContext)
    const guest = 'guest'
  return (
    <>
      <TopBar />
      <div> welcome {currentUser ? currentUser.name : guest}</div>
     
      <button>
        <Link to={"/game"} className="welcome_page-main-link">
          play as a guest
        </Link>
      </button> 
      
    </>
  );
}
