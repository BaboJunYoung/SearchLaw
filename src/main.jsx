import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from "/pages/root/Root.jsx"
import Home from "/pages/home/Home.jsx"
import Search from "/pages/search/Search.jsx"
import Signup from "/pages/auth/Signup.jsx"
import Login from "/pages/auth/Login.jsx"
import "/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/search/:category/:text", element: <Search/>},
      {path: "/login", element: <Login/>},
      {path: "/signup", element: <Signup/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
