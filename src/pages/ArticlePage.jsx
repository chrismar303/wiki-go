import ArticleNav from '../components/navigation/ArticleNav'
import SectionDivider from '../components/divider/SectionDivider'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function ArticlePage() {
  const {title} = useParams()
  const [articleTitle, setArticleTitle] = useState('')
  const [articleSections, setArticleSections] = useState([])

  useEffect(() => {
    function divideIntoSections(text) {
      const cleanedText = text.replace(/[^\x00-\x7F]/g, '');
      const paragraphs = cleanedText.split('\n\n');
      const articleSegments = [];
      let currentSection = { title: '', content: [] };
    
      paragraphs.forEach((paragraph) => {
        const wordCount = paragraph.trim().split(/\s+/).length;
    
        if (wordCount < 3) {
          // Treat as title if fewer than 3 words
          if (currentSection.title || currentSection.content.length) {
            articleSegments.push(currentSection);
          }
          currentSection = { title: `${paragraph.trim()}`, content: [] };
        } else {
          // Replace single \n with <br /> and add to content
          const formattedParagraph = paragraph
          .trim()
          .split('\n')
          .map((line) => {
            // Ignore lines that start with "thumb|"
            if (line.trim().includes('thumb|')) {
              // Ignore lines that start with "thumb|"
              return '';
            }
            
            const lineWordCount = line.trim().split(/\s+/).length;
            return lineWordCount < 3
              ? `<span class="text-lg font-bold">${line.trim()}</span>` // Bolden if fewer than 3 words
              : line.trim();
          })
          .join('<br />');
          currentSection.content.push(formattedParagraph);
        }
      });
    
      if (currentSection.title || currentSection.content.length) {
        articleSegments.push(currentSection);
      }
    
      return articleSegments;
    }

    async function fetchArticle() {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/article/${title}`,
         { withCredentials: true } 
      )
      setArticleTitle(response.data.title)
      setArticleSections(divideIntoSections(response.data.text))
    }
    fetchArticle()
  }, [])

  return (
    <>
      <section className="my-8 bg-white h-full w-[80%] mx-auto ">
        <div className="flex bg-white mb-8  place-content-between">
          <h1 className="text-7xl text-(--primary-color) font-bold drop-shadow">
            {articleTitle}
          </h1>
          {/* <span className="text-sm text-gray-700 self-end font-semibold">
            07/77/7777
          </span> */}
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
    <h5 className="text-gray-600 text-3xl font-bold">{section.title}</h5>
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
