import { entryProps } from "../types/types"

export function Entry({title, content}:entryProps) {
  return <div>
    <a href=""><h3 className="font-bold mb-1 hover:text-primary_orange">{title}</h3></a>
    <p className="text-grayish_blue">{content}</p>
  </div>
}

interface newProps {
  entriesData: entryProps[],
}
export default function New({entriesData}:newProps) {
  const entriesItems = entriesData.map((entry, index) => {
    if (index != 0) {
      return <>
        <hr className="border-grayish_blue" />
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
  flex flex-col gap-6
  bg-very_dark_blue text-white p-4">
    <h2 className="text-primary_orange text-3xl font-extrabold">New</h2>
    {entriesItems}
  </section>
}