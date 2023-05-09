// import "bootstrap";
import ReactDOM from "react-dom/client";
import "./assets/wordle.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
