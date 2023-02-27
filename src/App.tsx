import { useState, useEffect } from "react"
import FeaturedArticle from "./components/FeaturedArticle"
import Header from "./components/Header"
import New from "./components/New"
import NumberedList from "./components/NumberedList"
import { featuredData, newData, numberedData } from "./data/data"


function App() {
  const [currentWindowWidth, setWindowWidth] = useState(0);
  function updateDimensions() {
    const width = window.innerWidth;
    setWindowWidth(width);
  }
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])

  return (
    <div className="
      grid grid-cols-1 gap-8
      bg-off_white px-2
      laptop:grid-cols-3
      laptop:max-h-screen
      laptop:m-6
    ">
      <Header currentWindowWidth={currentWindowWidth} 
      className="
        mt-4
        laptop:mt-0
        laptop:col-span-3
      " />
      <FeaturedArticle currentWindowWidth={currentWindowWidth} {...featuredData} 
      className="
        laptop:col-span-2 
      "/>
      <New entriesData={newData} 
      className="
        laptop:col-span-1
      "/>
      <NumberedList entriesData={numberedData} 
      className="
        mb-6
        laptop:col-span-3
      "/>
    </div>
  )
}

export default App
