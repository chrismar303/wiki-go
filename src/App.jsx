import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router'
import NavBar from './components/navigation/NavBar'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ArticlePage from './pages/ArticlePage'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="article/:title" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
