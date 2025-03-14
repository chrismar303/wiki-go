import SearchForm from '../components/search/SearchForm'
import SectionDivider from '../components/divider/SectionDivider'
import SearchResultCard from '../components/cards/SearchResultCard'
import {useLocation} from 'react-router-dom'

export default function SearchPage() {
  const location = useLocation()
  const {
    state: {searchTerm, searchResults}
  } = location

  return (
    <section className="flex flex-col gap-8 h-full w-[90%] mx-auto">
      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-4xl text-(--primary-color) font-bold drop-shadow">
          Search Results
        </h1>
        <SearchForm />
      </div>

      <SectionDivider />
      <section className="w-full pb-16">
        <ol className="w-[90%] mx-auto grid grid-cols-2 gap-y-8 justify-items-center">
          {searchResults.map((res, index) => (
            <li key={index}>
              <SearchResultCard title={res.title} text={res.text} />
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}
