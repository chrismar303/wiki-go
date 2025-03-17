import SectionDivider from '../components/divider/SectionDivider'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

export async function testArticleHyperlink(title) {
  const url = `${import.meta.env.VITE_API_URL}/article/${title}`
  try {
    const response = await axios.head(url, { withCredentials: true })
    return response.status >= 200 && response.status < 300 // Return true if status is 2xx
  } catch (error) {
    console.info(`Failed to validate hyperlink: ${url}`, error)
    return false
  }
}

export default function ArticlePage() {
  const { title } = useParams()
  const [articleTitle, setArticleTitle] = useState('')
  const [articleSections, setArticleSections] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function divideIntoSections(text) {
      const cleanedText = text.replace(/[^\x00-\x7F]/g, '')
      const paragraphs = cleanedText.split('\n\n')
      const articleSegments = []
      let currentSection = { title: '', content: [] }

      if (paragraphs.length > 0 && (paragraphs[0].startsWith('REDIRECT ') || paragraphs[0].startsWith('redirect '))) {
        const redirectTitle = paragraphs[0].substring(9).trim() // Extract the title after "REDIRECT "
        const isValid = await testArticleHyperlink(redirectTitle)

        currentSection.title = isValid
          ? `<a href="/article/${redirectTitle}" style="color: blue; text-decoration: underline;">${paragraphs[0]}</a>`
          : paragraphs[0]
        articleSegments.push(currentSection)
        return articleSegments
      }

      for (const paragraph of paragraphs) {
        const wordCount = paragraph.trim().split(/\s+/).length

        if (wordCount < 3) {
          // Treat as title if fewer than 3 words
          if (currentSection.content.length) {
            articleSegments.push(currentSection)
          }

          currentSection = { title: `${paragraph.trim()}`, content: [] }
        } else {
          let isSeeAlso = false
          const lines = paragraph.trim().split('\n')

          if (lines[0].includes('See also')) {
            isSeeAlso = true
          }

          // Replace single \n with <br /> and add to content
          const formattedParagraph = await Promise.all(
            lines.map(async (line, index) => {
              const trimmedLine = line.trim()
              let res = ''
              const lineWordCount = trimmedLine.split(/\s+/).length

              if (isSeeAlso && index !== 0) {
                // Ignore the first line if it contains "See also"
                const isValid = await testArticleHyperlink(trimmedLine)
                res = isValid
                  ? `<a href="/article/${trimmedLine}" style="color: blue; text-decoration: underline;">${trimmedLine}</a>`
                  : trimmedLine
              } else if (trimmedLine.includes('thumb|')) {
                // Ignore lines that start with "thumb|"
                res = ''
              } else if (lineWordCount < 3) {
                res = `<span class="text-lg font-bold">${trimmedLine}</span>` // Bolden if fewer than 3 words
              } else {
                res = trimmedLine
              }

              return res
            })
          )
          currentSection.content.push(formattedParagraph.join('<br />'))
        }
      }

      if (currentSection.title || currentSection.content.length) {
        articleSegments.push(currentSection)
      }

      return articleSegments
    }

    async function fetchArticle() {
      // mainly used for detecting malformed article URLs
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/article/${title}`, { withCredentials: true })
        setArticleTitle(response.data.title)
        const sections = await divideIntoSections(response.data.text)
        setArticleSections(sections)
      } catch (error) {
        console.error(error)
        navigate('/', {replace: true})
      }
    }
    fetchArticle()
  }, [title])

  return (
    <>
      <div className="h-full flex flex-col gap-y-4 md:gap-y-8 px-4 py-12">
        <section className="flex place-content-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-(--primary-color) font-bold drop-shadow">
            {articleTitle}
          </h1>
        </section>
        {/* Article Sections */}
        <div className="flex flex-col md:w-[80%] mx-auto">
          {articleSections.map((section, index) => (
            <div key={index} className="w-[90%] mx-auto">
              <div className="flex my-4 gap-8 items-center">
                <div className="bg-white drop-shadow-2xl border-2 border-(--primary-color) rounded-full h-5 w-5 -mx-2"></div>
                {/* Skip first entry */}
                {index && (
                  <div className="bg-gray-100 flex-1 rounded h-1 shadow-md"></div>
                )}
              </div>
              <section className="pl-8 border-l-2 border-(--primary-color)">
                <h5 className="text-gray-600 text-3xl font-bold truncate">
                  <span dangerouslySetInnerHTML={{ __html: section.title }}></span>
                </h5>
                <SectionDivider />
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-black font-light mt-6"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}