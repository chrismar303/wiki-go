import SearchForm from "../components/search/SearchForm"
import SectionDivider from "../components/divider/SectionDivider"
import SearchResultCard from "../components/cards/SearchResultCard"
import { useState } from "react"

export default function SearchPage() {

    const testData = {
        title: 'UCI Student Graduates',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
        caption: 'The caption goes here',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUO36r9PwjwIlVO9CLAC4__aHRcwZJNpq8Q&s'
    }
    const [results, setResults] = useState(new Array(3).fill(testData))


    return (
        <section className="flex flex-col gap-8 h-full w-[90%] mx-auto">
            <div class="flex flex-col gap-6 mt-12">
                <h1 className="text-4xl text-(--primary-color) font-bold drop-shadow">
                    Search Results
                </h1>
                <SearchForm />
            </div>
            
            <SectionDivider />
            <section className="w-full pb-16">
                <ol class="grid grid-cols-1 gap-8 w-[60%] mx-auto">
                    {results.map((res, index) => (
                        <li key={index}>
                            <SearchResultCard
                                title={res.title}
                                text={res.text}
                                caption={res.caption}
                                img={res.img}
                            />
                        </li>
                    ))}
                </ol>
            </section>
        </section>
    )
}