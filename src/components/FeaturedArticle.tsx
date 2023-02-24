import { entryProps } from "../types/types"

interface buttonProps {
  href: string,
  children?: React.ReactNode,
  className?: string,
}
export function Button({href, children, className}:buttonProps) {
  return <a href={href} 
    className="w-40 h-11 
    flex justify-center items-center 
    text-white text-center tracking-widest font-normal
    bg-primary_red hover:bg-very_dark_blue
    transition-colors duration-150">
    {children}
  </a>
}

export default function FeaturedArticle({title, content, src, alt}:entryProps) {
  return <div className="flex flex-col gap-6">
    <img src={src} alt={alt} />
    <h1 className="text-5xl font-bold">{title}</h1>
    <p className="text-paragraph text-dark_grayish_blue">{content}</p>
    <Button href="">READ MORE</Button>
  </div>
}