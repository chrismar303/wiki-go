import SearchBar from './SearchBar'
import SearchDropdown from './SearchDropdown'
import ActionButton from '../buttons/ActionButton'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

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

  return (
    <div className="flex gap-8">
      <div className="relative">
        <SearchBar
          searchTerm={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        {hasResults() ? <SearchDropdown list={searchResults} /> : ''}
      </div>
      <ActionButton>Search</ActionButton>
    </div>
  )
}
