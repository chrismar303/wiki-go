import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'

export default function SearchResultCard({title, text}) {
  const navigate = useNavigate()
  const navigateToArticle = () =>
    navigate(`/article/${encodeURIComponent(title)}`)
  return (
    <article
      onClick={navigateToArticle}
      className="h-40 w-lg hover:scale-115 ease-in-out duration-300 flex border-3 rounded-3xl shadow-xl border-gray-100 bg-white overflow-hidden cursor-pointer">
      <div className="flex flex-1 gap-2 flex-col p-4">
        <header>
          <h2 className="text-xl text-gray-700 font-bold">{title}</h2>
        </header>
        <p className="truncate text-wrap text-md font-light text-gray-600">
          {text || 'No Description'}
        </p>
        <footer className="mt-auto text-xs border-t-2 pt-2 border-gray-200 font-light text-gray-400"></footer>
      </div>

    </article>
  )
}

SearchResultCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}
