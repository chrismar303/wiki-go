import ArticleNav from '../components/navigation/ArticleNav'
import SectionDivider from '../components/divider/SectionDivider'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function ArticlePage() {
  const {title} = useParams()
  const [articleTitle, setArticleTitle] = useState('')
  const [articleText, setArticleText] = useState('')
  const [articleSections, setArticleSections] = useState([])
  const NUM_PARTS = 4

  useEffect(() => {
    function divideIntoSections(text) {
      // divide into NUM_PARTS (4) segments
      const articleSegments = []
      const stepSize = Number(text.split('.').length / NUM_PARTS)
      for (let i = 0; i < text.split('.').length; i += stepSize)
        articleSegments.push(text.split('.').slice(i, i + stepSize))
      return articleSegments
    }

    async function fetchArticle() {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/article/${title}`,
         { withCredentials: true } 
      )
      setArticleTitle(response.data.title)
      setArticleText(response.data.text)
      setArticleSections(divideIntoSections(response.data.text))
    }
    fetchArticle()
  }, [])

  return (
    <>
      <ArticleNav numParts={NUM_PARTS} />
      <section className="my-8 h-full w-[80%] mx-auto">
        <div className="flex mb-8 place-content-between">
          <h1 className="text-4xl text-(--primary-color) font-bold drop-shadow">
            {articleTitle}
          </h1>
          <span className="text-sm text-gray-700 self-end font-semibold">
            07/77/7777
          </span>
        </div>
        <div className="w-full h-128 relative rounded-2xl overflow-hidden">
          <img
            className="w-full object-cover max-w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUO36r9PwjwIlVO9CLAC4__aHRcwZJNpq8Q&s"
          />
        </div>
      </section>
      {/* Article Sections */}
      <div className="bg-white drop-shadow-2xl">
        <div className="flex flex-col w-[80%] mx-auto">
          {articleSections.map((section, index) => (
            <div key={index} className="w-[90%] mx-auto">
              <div className="flex my-4 gap-8 items-center">
                <div className="bg-white drop-shadow-2xl border-2 border-(--primary-color) rounded-full h-5 w-5 -mx-2"></div>
                <div className="bg-gray-100 flex-1 rounded h-1 shadow-md"></div>
              </div>
              <section className="pl-8 border-l-2 border-(--primary-color)">
                <div className="flex gap-8 text-2xl font-medium mb-6">
                  <span className="rounded w-8 text-center text-white bg-(--primary-color)">
                    {index + 1}
                  </span>
                  <h3 className="text-gray-600">Part {index + 1}</h3>
                </div>

                <SectionDivider />
                <p className="text-black font-light mt-6">{section}</p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
