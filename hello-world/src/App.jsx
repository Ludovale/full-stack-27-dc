import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuPrimeiroComponente from './assets/components/MeuPrimeiroComponente'
import SetData from './assets/components/SetData'
import Lista from './assets/components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SetData/>
    <Lista/>
    </>
  )
}

export default App
