import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 space-y-6">
      <RegistrationForm />
      <FormikForm />
    </div>
    </>
  )
}

export default App
