import { useState } from 'react'
import './Component/Search'
import './App.css'
import Search from './Component/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to the World of Flight Search</h1>
        <Search></Search>
        
      </div>
     
     
      
    </>
  )
}

export default App
