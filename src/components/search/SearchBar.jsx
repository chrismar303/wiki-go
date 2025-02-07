import { IoSearch } from "react-icons/io5";

export default function SearchBar() {

    return (
        <div className="flex relative">
            <input
                placeholder="My Search Text"
                className="px-6 py-2 min-w-100 w-40% max-w-624 border-3 border-(--primary-color) rounded-3xl drop-shadow-xl bg-white text-black font-light"
            />
            <IoSearch className="absolute right-4 top-[15%] text-3xl" />
        </div>
    )
}