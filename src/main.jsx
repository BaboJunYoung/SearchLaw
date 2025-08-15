import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeRoot from "./pages/root/HomeRoot.jsx"
import AuthRoot from "./pages/root/AuthRoot.jsx"
import SearchRoot from "./pages/root/SearchRoot.jsx"
import DetailRoot from "./pages/root/DetailRoot.jsx"
import Home from "./pages/home/Home.jsx"
import Search from "./pages/search/Search.jsx"
import Login from "./pages/login/Login.jsx"
import Signup from "./pages/signup/Signup.jsx"
import Detail from "./pages/detail/Detail.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot/>,
    children: [
      {index: true, element: <Home/>},
    ]
  },
  {
    path: "/",
    element: <AuthRoot/>,
    children: [
      {path: "/login", element: <Login/>},
      {path: "/signup", element: <Signup/>},
    ]
  },
  {
    path: "/",
    element: <SearchRoot/>,
    children: [
      {path: "/search/:category/:text", element: <Search/>},
    ]
  },
  {
    path: "/",
    element: <DetailRoot/>,
    children: [
      {path: "/detail/:lawId", element: <Detail/>},
    ]
  },
],
{
  basename: "/" // /SearchLaw
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
