import './App.css'
import NavigationBar from './components/NavigationBar'

import Home from './views/home/Home'

function App() {
  // Home = root

  return (
    <>
      <NavigationBar children={undefined} />
      <Home />
    </>
  )
}

export default App
