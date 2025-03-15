import SearchBar from './SearchBar'
import SearchDropdown from './SearchDropdown'
import ActionButton from '../buttons/ActionButton'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function SearchForm() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')

  const hasResults = () => searchTerm.length && searchResults[1]?.title
  useEffect(() => {
    async function fetchResults() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/search`, {
        params: {q: searchTerm}
      })
      setSearchResults([...res.data])
    }
    fetchResults()
  }, [searchTerm])

  const navigateToSearch = event => {
    event.preventDefault()
    // validate form is not empty
    if (!searchTerm.length) {
      setError('Please Enter Search Request')
      return
    }

    navigate('/search', {
      state: {
        searchTerm,
        searchResults
      }
    })
  }

  return (
    <form className="flex gap-8" onSubmit={navigateToSearch}>
      <div className="relative">
        <SearchBar
          searchTerm={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        {error && (
          <p className="absolute ml-4 mt-1 text-sm font-light text-red-400">
            {error}
          </p>
        )}
        {hasResults() ? <SearchDropdown list={searchResults} /> : ''}
      </div>
      <ActionButton onClick={navigateToSearch}>Search</ActionButton>
    </form>
  )
}
