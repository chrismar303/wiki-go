import SearchForm from '../components/search/SearchForm'
import wikiImage from '../assets/images/wikipedia-logo.png'
import SectionDivider from '../components/divider/SectionDivider'

export default function HomePage() {
    return (
        <div className="m-8 flex flex-col place-items-center text-(--primary-color) drop-shadow">
            <div className="w-full flex flex-col place-items-center py-8">
              <h1 className="text-6xl font-bold">Wiki GO +</h1>
              <SectionDivider className="w-[80%] my-4" />
              <h3 className="text-4xl text-black font-thin">Your Wiki Bud On The Go</h3>
            </div>
            <SearchForm className="min-h-100 flex place-items-center place-content-center flex-col bg-red-100" />
            <img src={wikiImage} alt="Wikipedia Globe Logo" className="w-[300px] h-[270px] mt-16" />
        </div>
    )
}