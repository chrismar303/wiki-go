import SearchBar from "./SearchBar"
import ActionButton from "../buttons/ActionButton"

export default function Search({ className }) {

    return (
        <div className="flex gap-8 place-content-center" >
            <SearchBar />
            <ActionButton>Search</ActionButton>
        </div>
    )

}