import './App.css'
import NavBar from './components/navigation/NavBar'
import SearchForm from './components/search/SearchForm'

function App() {
  return (
    <>
      <NavBar />
      <div className="text-(--primary-color) drop-shadow">
        <div className="flex flex-col place-items-center py-8">
          <h1 className="text-6xl font-bold">Wiki GO +</h1>
          <hr className="w-[80%] my-4" />
          <h3 className="text-4xl text-black font-thin">Your Wiki Bud On The Go</h3>
        </div>
        <SearchForm className="min-h-100 flex place-items-center place-content-center flex-col bg-red-100" />
      </div>
    </>
  )
}

export default App
