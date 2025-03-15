import PropTypes from 'prop-types'

export default function ActionButton({onClick, children}) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-white hover:bg-(--primary-color) text-(--primary-color) hover:text-white 
                 border-3 hover:border-0 rounded-lg font-light drop-shadow cursor-pointer ease-in duration-300">
      {children}
    </button>
  )
}

ActionButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
}
