import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
    </>
  )
}

export default App
