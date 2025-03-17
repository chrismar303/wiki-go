import ArticleSections from '../components/article/ArticleSections'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import ArticleHeader from '../components/article/ArticleHeader'

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
    function divideIntoSections(text) {
      const cleanedText = text.replace(/[^\x00-\x7F]/g, '')
      const paragraphs = cleanedText.split('\n\n')
      const articleSegments = []
      let currentSection = {title: '', content: []}

      paragraphs.forEach(paragraph => {
        const wordCount = paragraph.trim().split(/\s+/).length

        if (wordCount < 3) {
          // Treat as title if fewer than 3 words
          if (currentSection.title || currentSection.content.length) {
            articleSegments.push(currentSection)
          }
          currentSection = {title: `${paragraph.trim()}`, content: []}
        } else {
          // Replace single \n with <br /> and add to content
          const formattedParagraph = paragraph
            .trim()
            .split('\n')
            .map(line => {
              // Ignore lines that start with "thumb|"
              if (line.trim().includes('thumb|')) {
                // Ignore lines that start with "thumb|"
                return ''
              }

              const lineWordCount = line.trim().split(/\s+/).length
              return lineWordCount < 3
                ? `<span class="text-lg font-bold">${line.trim()}</span>` // Bolden if fewer than 3 words
                : line.trim()
            })
            .join('<br />')
          currentSection.content.push(formattedParagraph)
        }
      })

      if (currentSection.title || currentSection.content.length) {
        articleSegments.push(currentSection)
      }

      articleSegments.forEach((segment, index) => {
        if (segment.content.length === 1 && (segment.content[0].startsWith('REDIRECT ') || segment.content[0].startsWith('redirect '))) {
          console.log(`Found redirect in segment ${index}:`, segment.content[0])
          const redirectTitle = segment.content[0].substring(9).trim() // Extract the title after "REDIRECT "
          segment.content[0] = `<a href="/article/${redirectTitle}"  style="color: blue; text-decoration: underline;">${segment.content[0]}</a>`
        }
      })

      return articleSegments
    }

    async function fetchArticle() {
      // mainly used for detecting malformed article URLs
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/article/${title}`, { withCredentials: true })
        setArticleTitle(response.data.title)
        const sections = divideIntoSections(response.data.text)
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
      <div className="min-h-full flex flex-col gap-y-4 md:gap-y-8 px-4 py-12 bg-white">
        <ArticleHeader title={articleTitle} />
        <ArticleSections sections={articleSections} />
      </div>
    </>
  )
}