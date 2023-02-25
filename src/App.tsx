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
    laptop:min-w-screen laptop:min-h-screen
    laptop:m-6
    ">
      <Header className="
      mt-4
      flex justify-between items-center
      laptop:col-span-3
      laptop:mt-0
      " />
      <FeaturedArticle {...featuredData} 
      className="grid grid-cols-1 gap-6
      laptop:col-span-2 laptop:grid-cols-2
      "/>
      <New entriesData={newData} 
      className="flex flex-col gap-6
      laptop:col-span-1
      "/>
      <NumberedList entriesData={numberedData} 
      className="flex flex-col gap-8 mb-6
      laptop:flex-row laptop:col-span-3
      "/>
    </div>
  )
}

export default App
