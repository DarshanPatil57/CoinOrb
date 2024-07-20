import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Crypto from './pages/Crypto.jsx'
import Trending from './pages/Trending.jsx'
import Saved from './pages/Saved.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Crypto/>
      },

      {
        path:"/trending",
        element:<Trending/>
      },

      {
        path:"/saved",
        element:<Saved/>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
