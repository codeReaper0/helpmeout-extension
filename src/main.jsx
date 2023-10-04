import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login'
import Homepage from "./Pages/Homepage";
import Details from "./Pages/Details";
import './index.css'
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
//    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "details",
        element: <Details/>,
      }]
    
  },
        {
        path: "/register",
        element: <Login />,
      }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
