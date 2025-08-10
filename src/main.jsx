import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProfileRoot from "./pages/root/ProfileRoot.jsx"
import HomeRoot from "./pages/root/HomeRoot.jsx"
import Home from "./pages/home/Home.jsx"
import Search from "./pages/search/Search.jsx"
import Login from "./pages/login/Login.jsx"
import Signup from "./pages/signup/Signup.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfileRoot/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/search/:category/:text", element: <Search/>},
    ]
  },
  {
    path: "/",
    element: <HomeRoot/>,
    children: [
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
