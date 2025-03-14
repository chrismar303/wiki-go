import PropTypes from 'prop-types'
export default function ArticleNav({numParts}) {
  return (
    <nav className="bg-white py-6 z-10">
      <ol className="flex flex-row place-content-center gap-16 text-gray-400 font-medium text-md cursor-pointer">
        {Array.from(Array(numParts).keys()).map(partNum => (
          <li key={partNum}>Part {partNum + 1}</li>
        ))}
      </ol>
    </nav>
  )
}

ArticleNav.propTypes = {
  numParts: PropTypes.number.isRequired
}
