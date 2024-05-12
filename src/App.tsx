import { ThemeProvider } from '@emotion/react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { globalTheme } from './components/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <NavigationBar children={undefined} />
      </ThemeProvider>
    </>
  )
}

export default App
