import {NavLink} from 'react-router'
import DesktopNavItems from './DesktopNavItems'
import MobileNavItems from './MobileNavItems'
import {useState} from 'react'
import useIsMobile from '../../hooks/useIsMobile'

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false)
  const isMobile = useIsMobile()

  const navOptions = {
    Home: '/',
    About: '/about'
  }

  return (
    <nav className="nav-main h-22 flex justify-between items-center px-8 border-b border-gray-100 drop-shadow-lg text-black bg-white z-(--modal-index)">
      <NavLogo />
      {isMobile ? (
        <MobileNavItems
          openMenu={() => setOpenMenu(true)}
          closeMenu={() => setOpenMenu(false)}
          navOptions={navOptions}
          showMenu={openMenu}
        />
      ) : (
        <DesktopNavItems navOptions={navOptions} />
      )}
    </nav>
  )
}

function NavLogo() {
  return (
    <div className="font-black text-4xl lg:text-5xl text-white bg-(--primary-color) p-1 m-3 outline-2 outline-gray-300 rounded-full drop-shadow-lg border-5 hover:scale-115 duration-300 ease-in-out">
      <NavLink to="/">W</NavLink>
    </div>
  )
}
