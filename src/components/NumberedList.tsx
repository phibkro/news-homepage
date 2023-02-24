import { entryProps } from "../types/types";


export function NumberedEntry({index, src, alt, title, content}:entryProps) {
  return <div className="w-full flex gap-6">
    <img src={src} alt={alt} className="w-1/4"/>
    <div className="flex flex-col gap-2">
      <h2 className="text-grayish_blue text-3xl font-bold">{index}</h2>
      <h3 className="text-very_dark_blue font-bold">{title}</h3>
      <p className="text-dark_grayish_blue">{content}</p>
    </div>
  </div>
}
interface numberedListProps {
  entriesData: entryProps[],
}
export default function NumberedList({entriesData}:numberedListProps) {
  const listItems = entriesData.map((entry) => 
    <NumberedEntry key={entry.index} 
    {...entry}
    // index={entry.index}
    // title={entry.title}
    // content={entry.content}
    // src={entry.src}
    // alt={entry.alt}
    />
  )
  return <section className="flex flex-col gap-8 mb-6">
    {listItems}
  </section>
}