import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./pages/home/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    // element: </>,
    children: [
      {index: true, element: <Home/>},
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
