import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>React Query Demo</h1>
          <PostsComponent />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
