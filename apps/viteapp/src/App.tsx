import { useState } from 'react'
import './App.css'
import { Button } from "@noria_components/ui"

function App() {
  
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Components come from Noria UI Kit</h1>
      <div className="card">
         <Button onClick={handleClick} name='Login' />
         <p>Counter: {counter}</p>
      </div>
    </>
  )
}

export default App
