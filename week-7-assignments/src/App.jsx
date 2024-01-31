import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1Profile from './components/Question1-Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Question1Profile/>
    </div>
  )
}

export default App
