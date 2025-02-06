export default function NavBar() {
    const navOptions = {
        Home: '/',
        About: '/about',
        Search: '/search' 
    }
    return (
        <nav className="nav-main h-14 flex justify-between items-center bg-red-600 px-8 border-b border-gray-500 drop-shadow-lg">
            <NavLogo />
            <ul className="flex list-none gap-x-8">
                {Object.entries(navOptions).map(([option, url]) => (
                    <li key={url} className="cursor-pointer">
                        <a href={ url }>{ option }</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function NavLogo() {
    return (
        <span>Chrismar</span>
    )
}