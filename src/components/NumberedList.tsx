import { entryProps } from "../types/types";

const entriesData = [
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
export function NumberedEntry({index, src, alt, title, content}:entryProps) {
  return <div className="w-full flex my-8 gap-6">
    <img src={src} alt={alt} className="w-1/4"/>
    <div className="flex flex-col gap-2">
      <h2 className="text-grayish_blue text-3xl font-bold">{index}</h2>
      <h3 className="text-very_dark_blue font-bold">{title}</h3>
      <p className="text-dark_grayish_blue">{content}</p>
    </div>
  </div>
}
export default function NumberedList() {
  const listItems = entriesData.map((entry) => 
    <NumberedEntry key={entry.index} 
    index={entry.index}
    title={entry.title}
    content={entry.content}
    src={entry.src}
    alt={entry.alt}
    />
  )
  return <section>
    {listItems}
  </section>
}