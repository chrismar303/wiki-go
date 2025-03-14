import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import NavBar from './components/navigation/NavBar'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="article/:title" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App
