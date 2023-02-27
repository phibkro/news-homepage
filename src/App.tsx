import FeaturedArticle from "./components/FeaturedArticle"
import Header from "./components/Header"
import New from "./components/New"
import NumberedList from "./components/NumberedList"
import { featuredData, newData, numberedData } from "./data/data"

function App() {
  return (
    <div className="
    grid grid-cols-1 gap-8
    bg-off_white px-2
    laptop:grid-cols-3
    laptop:max-h-screen
    laptop:m-6
    ">
      <Header className="
      mt-4
      laptop:mt-0
      laptop:col-span-3
      " />
      <FeaturedArticle {...featuredData} className="
      laptop:col-span-2 
      "/>
      <New entriesData={newData} className="
      laptop:col-span-1
      "/>
      <NumberedList entriesData={numberedData} className="
      mb-6
      laptop:col-span-3
      "/>
    </div>
  )
}

export default App
