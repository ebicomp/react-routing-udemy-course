import React from "react"
import ReactDOM from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import App from "./App"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Customers from "./Pages/Customers"
import ErrorPage from "./Pages/ErrorPage"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/customers",
        element: <Customers />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
