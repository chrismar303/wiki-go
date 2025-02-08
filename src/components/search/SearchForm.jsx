import SearchBar from "./SearchBar"
import ActionButton from "../buttons/ActionButton"

export default function SearchForm() {
    return (
        <div className="flex gap-8">
            <SearchBar />
            <ActionButton>Search</ActionButton>
        </div>
    )
}