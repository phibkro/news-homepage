import { entryProps } from "../types/types"
const entriesData = [{
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

export function Entry({title, content}:entryProps) {
  return <div>
    <a href=""><h3 className="font-bold mb-1 hover:text-primary_orange">{title}</h3></a>
    <p className="text-grayish_blue">{content}</p>
  </div>
}

export default function New() {
  const entriesItems = entriesData.map((entry, index) => {
    if (index != 0) {
      return <>
        <hr className="border-grayish_blue my-5" />
        <Entry key={index} 
          {...entry}
          // title={entry.title} 
          // content={entry.content} 
        />
      </> 
    }
    return <Entry key={index} 
      {...entry}
      // title={entry.title} 
      // content={entry.content} 
    />
  })
  return <section className="
  bg-very_dark_blue text-white p-4">
    <h2 className="text-primary_orange text-3xl font-extrabold">New</h2>
    {entriesItems}
  </section>
}