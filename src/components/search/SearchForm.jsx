import SearchBar from './SearchBar'
import SearchDropdown from './SearchDropdown'
import ActionButton from '../buttons/ActionButton'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {testArticleHyperlink} from '../../pages/ArticlePage'
import useClickOutside from '../../hooks/useClickOutside'
import PropTypes from 'prop-types'

export default function SearchForm({text}) {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState(text || '')
  const [searchTime, setSearchTime] = useState(0)
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const dropdownRef = useClickOutside(() => setOpenMenu(false))

  const showMenu = () =>
    openMenu && !!searchTerm.length && searchResults[1]?.title
  useEffect(() => {
    async function fetchResults() {
      if (searchTerm.trim() === '') {
        setSearchResults([])
        setSearchTime(0)
        return
      }

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/search`, {
        params: {q: searchTerm},
        withCredentials: true // receive cookie when searching
      })
      const results = [...res.data]
      const lastElement = results.pop() // Remove the last element from the array, which is the search time. Apologize for the bad json format
      if (lastElement) setSearchTime(lastElement.searchTimeUsed / 1000)

          setSearchResults([...results])

      setSearchResults([...validatedResults])
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
        searchTerm: searchTerm.trim(),
        searchResults,
        searchTime
      }
    })
  }

  return (
    <form
      className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-4"
      onSubmit={navigateToSearch}>
      <div className="relative">
        <SearchBar
          ref={dropdownRef}
          onClick={() => setOpenMenu(!openMenu)}
          searchTerm={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        {error && (
          <p className="absolute ml-4 mt-1 text-sm font-light text-red-400">
            {error}
          </p>
        )}
        {showMenu() && <SearchDropdown list={searchResults} />}
      </div>
      <ActionButton onClick={navigateToSearch}>Search</ActionButton>
    </form>
  )
}

SearchForm.propTypes = {
  text: PropTypes.string
}
