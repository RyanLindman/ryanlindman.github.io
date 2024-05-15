import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { globalTheme } from './components/theme.ts'
import About from './views/about/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/career',
    element: <About />,
  },
  {
    path: '/contact',
    element: undefined,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
