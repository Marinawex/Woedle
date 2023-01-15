import 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/wordle.scss'
import {
  RouterProvider,
} from "react-router-dom";
import {router} from './Router/router'
// import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
