import { NavLink } from 'react-router'

export default function NavBar() {
    const navOptions = {
        Home: '/',
        About: '/about',
        Search: '/search' 
    }
    return (
        <nav className="nav-main h-14 flex justify-between items-center px-8 border-b border-gray-100 drop-shadow-lg text-black bg-white">
            <NavLogo />
            <ul className="flex place-items-center list-none gap-x-8 text-(--primary-color)">
                {Object.entries(navOptions).map(([option, url]) => (
                    <li key={url} className="cursor-pointer">
                        <NavLink to={ url }>{ option }</NavLink>
                    </li>
                ))}
                <button className="px-3 py-2.5 rounded-3xl drop-shadow-md bg-(--primary-color) text-white cursor-pointer">
                    Contact
                </button>
            </ul>
        </nav>
    )
}

function NavLogo() {
    return (
        <NavLink to="/">Chrismar</NavLink>
    )
}