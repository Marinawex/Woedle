import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { Game } from '../Pages/game';
  import ErrorPage from '../Pages/Error-page';
  import App from "../App";
  import { Login } from "../Pages/Login";
import { Welcome } from "../Pages/Welcome";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
    
        {
            path: "/game",
            element: <Game />,
          },
         
      ],
    
  
    }
  ]);