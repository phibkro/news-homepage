import FeaturedArticle from "./components/FeaturedArticle"
import NavBar from "./components/NavBar"
import New from "./components/New"
import NumberedList from "./components/NumberedList"
import {Logo} from "./components/svg/SVGs"

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
    mx-auto
    max-w-xl
    flex flex-col
    bg-off_white px-2">
      <header className="
      my-4 
      flex justify-between items-center">
        <a href=""><Logo/></a>
        <NavBar/>
      </header>
      <div className="
      flex flex-col gap-16
      justify-center items-center">
        <main>
          <article>
            <FeaturedArticle {...featuredData} />
          </article>
        </main>
        <New entriesData={newData}/>
        <NumberedList entriesData={numberedData} />
      </div>
    </div>
  )
}

export default App
