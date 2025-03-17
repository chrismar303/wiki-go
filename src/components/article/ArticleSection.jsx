import PropTypes from 'prop-types'
import SectionDivider from '../divider/SectionDivider'

export default function ArticleSection({section, separator}) {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex my-4 gap-8 items-center">
        <div className="bg-white drop-shadow-2xl border-2 border-(--primary-color) rounded-full h-5 w-5 -mx-2"></div>
        {/* Skip first entry */}
        {separator && (
          <div className="bg-gray-100 flex-1 rounded h-1 shadow-md"></div>
        )}
      </div>
      <section className="pl-8 border-l-2 border-(--primary-color)">
        <h5 className="text-gray-600 text-3xl font-bold truncate">
          <span dangerouslySetInnerHTML={{__html: section.title}}></span>
        </h5>
        <SectionDivider />
        {section.content.map((paragraph, index) => (
          <p
            key={index}
            className="text-black font-light mt-6"
            dangerouslySetInnerHTML={{__html: paragraph}}></p>
        ))}
      </section>
    </div>
  )
}

ArticleSection.propTypes = {
  section: PropTypes.object.isRequired,
  separator: PropTypes.bool
}
