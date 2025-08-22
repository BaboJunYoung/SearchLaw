import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from "./pages/home/Home.jsx"
import Search from "./pages/search/Search.jsx"
import Detail from "./pages/detail/Detail.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    // element: </>,
    children: [
      {index: true, element: <Home/>},
      {path: "/search", element: <Search/>},
      {path: "/detail/:lawId", element: <Detail/>},
    ]
  }
],
{
  basename: "/" // /SearchLaw
});

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
