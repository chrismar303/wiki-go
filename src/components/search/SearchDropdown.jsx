import PropTypes from 'prop-types'
import {forwardRef} from 'react'
import {useNavigate} from 'react-router-dom'

const SearchDropdown = forwardRef(function SearchDropdown({list}, ref) {
  const navigate = useNavigate()
  const navigateToArticle = title =>
    navigate(`/article/${encodeURIComponent(title)}`)

  return (
    <ol
      ref={ref}
      className="absolute max-h-72 w-full overflow-y-scroll drop-shadow-md rounded-md bg-white z-(--modal-index)">
      {list.map((entry, index) => (
        <li
          onClick={() => navigateToArticle(entry.title)}
          className="px-7 py-3 cursor-pointer hover:bg-gray-300"
          key={index}>
          <h4 className="text-black font-medium">{entry.title}</h4>
          <span className="block h-10 overflow-hidden text-sm text-black font-thin">
            {entry.text || 'No Description'}
          </span>
          <span className="text-xs">Score: {entry.score?.toFixed(2)} </span>
        </li>
      ))}
    </ol>
  )
})

SearchDropdown.propTypes = {
  list: PropTypes.array.isRequired
}

export default SearchDropdown
