import {NavLink} from 'react-router'

export default function NavBar() {
  const navOptions = {
    Home: '/',
    About: '/about'
  }
  return (
    <nav className="nav-main h-22 flex justify-between items-center px-8 border-b border-gray-100 drop-shadow-lg text-black bg-white">
      <NavLogo />
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
    </nav>
  )
}

function NavLogo() {
  return (
    <div className="font-black text-5xl text-white bg-(--primary-color) p-1 m-3 outline-2 outline-gray-300 rounded-full drop-shadow-lg border-5 hover:scale-115 duration-300 ease-in-out">
      <NavLink to="/">W</NavLink>
    </div>
  )
}
