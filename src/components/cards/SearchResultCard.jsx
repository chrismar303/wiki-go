export default function SearchResultCard({ title, text, caption, img }) {
    return (
        <article className="h-72 max-w-3xl hover:scale-115 ease-in-out duration-300 flex border-3 rounded-3xl shadow-xl border-gray-100 bg-white overflow-hidden">
            <div className="flex gap-2 flex-col p-4">
                <header>
                    <h2 className="text-xl text-gray-700 font-bold">{ title }</h2>
                </header>
                <p class="truncate text-wrap text-md font-light text-gray-600">{ text }</p>
                <footer class="mt-auto text-xs border-t-2 pt-2 border-gray-200 font-light text-gray-400">{ caption }</footer>
            </div>
            <img src={img} alt={title}/>
        </article>
    )
}