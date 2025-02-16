import ArticleNav from '../components/navigation/ArticleNav'
import SectionDivider from '../components/divider/SectionDivider'
export default function ArticlePage() {
  const article = {
    title: 'Title of Article',
    date: '07/77/7777',
    text: 'Velit anim labore ullamco officia deserunt dolor aliqua. Aliquip fugiat duis id Lorem. Occaecat sunt id consequat in in laborum in consequat id aliquip. Lorem ea est veniam est anim sint pariatur.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUO36r9PwjwIlVO9CLAC4__aHRcwZJNpq8Q&s',
    sections: ['Intro', 'History', 'Production', 'Adaptation', 'External'], // TODO: this passed to ArticleNav
  }
  return (
    <>
      <ArticleNav />
      <section className="my-8 h-full w-[80%] mx-auto">
        <div className="flex mb-8 place-content-between">
          <h1 className="text-4xl text-(--primary-color) font-bold drop-shadow">
            {article.title}
          </h1>
          <span className="text-sm text-gray-500 self-end font-semibold">
            {article.date}
          </span>
        </div>
        <div className="w-full h-128 relative rounded-2xl overflow-hidden">
          <img
            className="w-full object-cover max-w-full h-full"
            src={article.img}
          />
        </div>
      </section>
      {/* Article Sections */}
      <div className="bg-white drop-shadow-2xl">
        <div className="flex flex-col w-[80%] mx-auto">
          {article.sections.map((section, index) => (
            <section key={index} className="my-8 first:mt-12 w-[90%] mx-auto">
              <div className="flex gap-8 text-2xl font-medium mb-6">
                <span className="rounded w-8 text-center text-white bg-(--primary-color)">
                  {index}
                </span>
                <h3 className="text-gray-600">{section.toUpperCase()}</h3>
              </div>

              <SectionDivider />
              <p className="text-black font-light mt-6">
                Ipsum in voluptate commodo sit sunt velit dolore ex nisi ullamco
                cupidatat esse. Reprehenderit exercitation labore esse eu
                deserunt consectetur excepteur mollit consequat ipsum proident
                ipsum excepteur. Do mollit proident fugiat dolore minim. Quis
                dolor officia aliqua Lorem ipsum excepteur anim quis elit
                adipisicing fugiat ullamco esse excepteur. Laborum occaecat
                dolore occaecat in culpa incididunt veniam. Sit pariatur aliquip
                duis proident minim aute veniam. Culpa velit duis pariatur
                mollit dolore excepteur adipisicing sunt deserunt.
              </p>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
