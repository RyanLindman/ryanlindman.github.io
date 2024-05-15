import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { globalTheme } from './components/theme.ts'
import About from './views/about/About.tsx'
import Contact from './views/contact/Contact.tsx'

const basePath = '/ryanlindman.github.io'

const router = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <App />,
  },
  {
    path: `${basePath}/career`,
    element: <About />,
  },
  {
    path: `${basePath}/contact`,
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
