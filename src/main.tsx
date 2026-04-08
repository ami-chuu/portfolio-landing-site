import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Polar from './Polar.tsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      handle: {
        title: "ИНГРИЯТЕХ - главная страницы"
      }
    },
    {
      path: '/polar',
      element: <Polar />,
      handle: {
        title: "Поляр"
      }
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  <HashRouter>
    <App />
  </HashRouter>
)
