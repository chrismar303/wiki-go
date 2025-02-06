import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navigation/NavBar'
import SearchForm from './components/search/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
        <h1>Wiki & GO+</h1>
        <SearchForm className="min-h-100 flex place-items-center place-content-center flex-col bg-red-100" />
      </div>
    </>
  )
}

export default App
