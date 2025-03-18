import {NavLink} from 'react-router'
import PropTypes from 'prop-types'

export default function DesktopNavItems({navOptions}) {
  return (
    <ul
      className="flex place-items-center list-none gap-x-16
      ">
      {Object.entries(navOptions).map(([option, url]) => (
        <li
          key={url}
          className="group text-(--primary-color) cursor-pointer hover:font-black ease-in-out duration-300">
          <NavLink to={url}>{option}</NavLink>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-(--primary-color)"></span>
        </li>
      ))}
      <li>
        <button
          className="px-3 py-2.5 bg-(--primary-color) hover:bg-white text-white hover:text-(--primary-color) 
                       outline rounded-3xl cursor-pointer ease-in duration-300">
          Contact
        </button>
      </li>
    </ul>
  )
}

DesktopNavItems.propTypes = {
  navOptions: PropTypes.object.isRequired
}
