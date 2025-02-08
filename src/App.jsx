import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router"
import NavBar from './components/navigation/NavBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
