import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { Game } from '../Pages/game';
  import ErrorPage from '../Pages/Error-page';
  import App from "../App";
  import { Login } from "../Pages/Login";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/wordle",
          element: <Game />,
        },
        {
            path: "/login",
            element: <Login />,
          },
      ],
    
  
    }
  ]);