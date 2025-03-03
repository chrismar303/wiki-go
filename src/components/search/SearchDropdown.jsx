import PropTypes from 'prop-types'

export default function SearchDropdown({list}) {
  return (
    <ol className="absolute w-full drop-shadow-md rounded-md bg-white">
      {list.map((entry, index) => (
        <li className="px-7 py-3 cursor-pointer hover:bg-gray-200 " key={index}>
          <h4 className="text-black font-medium">{entry}</h4>
          <span className="block text-sm text-black font-thin">{entry}</span>
        </li>
      ))}
    </ol>
  )
}

SearchDropdown.propTypes = {
  list: PropTypes.array.isRequired
}
