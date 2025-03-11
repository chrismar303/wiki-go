import PropTypes from 'prop-types'

export default function ActionButton({onClick, children}) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 border-3 rounded-lg font-light bg-white drop-shadow text-(--primary-color) cursor-pointer">
      {children}
    </button>
  )
}

ActionButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
}
