import SearchBar from './SearchBar'
import ActionButton from '../buttons/ActionButton'
import {useState, useEffect} from 'react'

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('Search: ', searchTerm)
  }, [searchTerm])

  return (
    <div className="flex gap-8">
      <SearchBar
        searchTerm={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <ActionButton>Search</ActionButton>
    </div>
  )
}
