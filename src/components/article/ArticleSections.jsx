import PropTypes from 'prop-types'
import ArticleSection from './ArticleSection'

export default function ArticleSections({sections}) {
  return (
    <div className="flex flex-col md:w-[80%] mx-auto">
      {sections.map((section, index) => (
        <ArticleSection key={index} section={section} separator={!!index} />
      ))}
    </div>
  )
}

ArticleSections.propTypes = {
  sections: PropTypes.array.isRequired
}
