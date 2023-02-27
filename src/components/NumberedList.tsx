import { entryProps } from "../types/types";


export function NumberedEntry({index, src, alt, title, content}:entryProps) {
  return <article className="w-full 
  flex gap-6">
    <img src={src} alt={alt} className="col-span-1 object-cover h-full w-1/3"/>
    <div className="col-span-3 
    flex flex-col gap-2">
      <h2 className="text-grayish_blue text-3xl font-bold">{index}</h2>
      <a href=""><h3 className="text-very_dark_blue font-bold hover:text-primary_red">{title}</h3></a>
      <p className="text-dark_grayish_blue">{content}</p>
    </div>
  </article>
}
interface numberedListProps {
  entriesData: entryProps[],
  className?: string,
}
export default function NumberedList({entriesData, className}:numberedListProps) {
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
  return <section className={`
  flex flex-col gap-8 
  laptop:flex-row
  ${className}`}>
    {listItems}
  </section>
}