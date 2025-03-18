import {NavLink} from 'react-router'
import {SlClose} from 'react-icons/sl'
import {TiThMenu} from 'react-icons/ti'
import PropTypes from 'prop-types'

export default function MobileNavItems({
  showMenu,
  openMenu,
  closeMenu,
  navOptions
}) {
  return (
    <>
      {/* Menu Button to open Slide Out Menu */}
      <button onClick={openMenu} className="text-3xl text-(--primary-color)">
        <TiThMenu />
      </button>
      {/* Slide out menu for mobile */}
      {showMenu && (
        <>
          <ul className="absolute left-0 top-0 w-dvw h-dvh flex flex-col justify-center items-center gap-4 text-3xl font-semibold text-white text-center bg-(--primary-color) z-(--modal-index)">
            {Object.entries(navOptions).map(([option, url]) => (
              <li key={url} className="w-full">
                <NavLink
                  to={url}
                  onClick={closeMenu}
                  className="w-full inline-block py-4">
                  {option}
                </NavLink>
              </li>
            ))}
            <li className="w-full">
              <button className="px-3 py-2.5 bg-white text-(--primary-color) outline rounded-4xl">
                Contact
              </button>
            </li>
          </ul>
          <button
            onClick={closeMenu}
            className="absolute right-8 text-4xl text-red-500 bg-white rounded-full z-(--modal-index)">
            <SlClose />
          </button>
        </>
      )}
    </>
  )
}

MobileNavItems.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  navOptions: PropTypes.object.isRequired
}
