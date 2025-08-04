import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./pages/home/Home.jsx"
import Header from "./pages/root/Root.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {index: true, element: <Home/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
