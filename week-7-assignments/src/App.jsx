import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1Profile from './components/Question1-Profile'
import Question2BackgroundChanger from './components/Question2BackgroundChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Question1Profile/> */}
      <Question2BackgroundChanger/>
    </div>
  )
}

export default App
