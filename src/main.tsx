import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { globalTheme } from './components/theme.ts'
import About from './views/about/About.tsx'
import Contact from './views/contact/Contact.tsx'
import Home from './views/home/Home.tsx'

const baseURL = '/ryanlindman.github.io'

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `/contact`,
      element: <Contact />,
    },
    {
      path: `/career`,
      element: <About />,
    },
  ],
  {
    basename: `${baseURL}/`,
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
