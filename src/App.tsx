// App.tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { RootState } from './store/store'

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', height: '100vh', color: theme === 'light' ? 'black' : 'white', textAlign: 'center', paddingTop: '50px' }}>
        <Home />
      </div>
    </>
  )
}

export default App
