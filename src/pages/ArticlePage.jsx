import ArticleNav from '../components/navigation/ArticleNav'

export default function ArticlePage() {
  return (
    <>
      <ArticleNav />
      <section className="h-full w-[80%] mx-auto">
        <div className="flex my-8 place-content-between">
          <h1 className="text-4xl text-(--primary-color) font-bold drop-shadow">
            Title of Article
          </h1>
          <span className="text-sm text-gray-500 self-end font-semibold">
            07/77/7777
          </span>
        </div>
        <div className="w-full h-128 relative rounded-2xl overflow-hidden">
          <img
            className="w-full object-cover  max-w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUO36r9PwjwIlVO9CLAC4__aHRcwZJNpq8Q&s"
          />
        </div>
      </section>
    </>
  )
}
