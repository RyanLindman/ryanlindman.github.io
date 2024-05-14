import { ThemeProvider } from '@emotion/react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { globalTheme } from './components/theme'

import Home from './views/home/Home'

function App() {
  // TODO: MOve global theme to Main.tsx

  // Home = root

  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <NavigationBar children={undefined} />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
