import SearchForm from "../components/search/SearchForm"
import SectionDivider from "../components/divider/SectionDivider"

export default function SearchPage() {
    return (
        <section className="flex flex-col gap-8 h-full w-[90%] mx-auto">
            <div class="flex flex-col gap-6 mt-12">
                <h1 className="text-4xl text-(--primary-color) font-bold drop-shadow">
                    Search Results
                </h1>
                <SearchForm />
            </div>
            <SectionDivider />
        </section>
    )
}