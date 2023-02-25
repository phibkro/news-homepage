import FeaturedArticle from "./components/FeaturedArticle"
import Header from "./components/Header"
import New from "./components/New"
import NumberedList from "./components/NumberedList"

const featuredData = {
  title: "The Bright Future of Web 3.0?",
  content: "We dive into the next evolution of the web that claims to put the power of platforms back into the hands of the people. But is it really fulfilling its promise?",
  src: "/images/image-web-3-mobile.jpg",
  alt: "Colorful blocks"
}
const newData = [{
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    title: "The Downsides of AI Artistry",
    content: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    content: "Private funding by VC firms is down 50% YOY. We take a look at what that means",
  },
]
const numberedData = [
  {
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
    index: "01",
    src: "/images/image-retro-pcs.jpg",
    alt: "A small retro pc surrounded by old technology",
  },
  {
    title: "Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets",
    index: "02",
    src: "/images/image-top-laptops.jpg",
    alt: "Close-up of keycaps on a laptop"
  },
  {
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities",
    index: "03",
    src: "/images/image-gaming-growth.jpg",
    alt: "A hand catching a Playstation 5 controller",
  }
]
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
      flex justify-between items-center
      laptop:col-span-3
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
