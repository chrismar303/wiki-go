import PropTypes from 'prop-types'

export default function ArticleHeader({title}) {
  return (
    <section className="flex place-content-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-(--primary-color) font-bold drop-shadow">
        {title}
      </h1>
    </section>
  )
}

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired
}
