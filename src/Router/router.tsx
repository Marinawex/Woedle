import { createBrowserRouter } from "react-router-dom";
import { Game } from "../Pages/Game";
import ErrorPage from "../Pages/Error-page";
import App from "../App";
import { Welcome } from "../Pages/Welcome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
  },
]);
