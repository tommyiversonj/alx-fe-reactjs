import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="app">
        <h2>Github User Search</h2>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
        
    </>
  )
}

export default App
