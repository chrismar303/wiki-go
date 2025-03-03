import {IoSearch} from 'react-icons/io5'
import PropTypes from 'prop-types'

export default function SearchBar({searchTerm, onChange}) {
  return (
    <div className="flex relative">
      <input
        value={searchTerm}
        onChange={onChange}
        placeholder="My Search Text"
        className="px-6 py-2 min-w-100 w-40% max-w-624 border-3 border-(--primary-color) rounded-3xl drop-shadow-xl bg-white text-black font-light"
      />
      <IoSearch className="absolute right-4 top-[15%] text-3xl text-(--primary-color)" />
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
