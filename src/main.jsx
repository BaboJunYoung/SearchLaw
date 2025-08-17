import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from "./pages/home/Home.jsx"
import Search from "./pages/search/Search.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    // element: </>,
    children: [
      {index: true, element: <Home/>},
      {path: "/search", element: <Search/>},
    ]
  }
],
{
  basename: "/" // /SearchLaw
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
