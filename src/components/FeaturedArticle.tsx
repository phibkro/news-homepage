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

interface featuredarticleProps extends entryProps {
  currentWindowWidth?: number,
  src_laptop?: string,
}
export default function FeaturedArticle({title, content, src, src_laptop, alt, className, currentWindowWidth}:featuredarticleProps) {
  src = currentWindowWidth && currentWindowWidth >= 1024 ? 
    src_laptop :
    src
  return <main className={`
  grid grid-cols-1 gap-6
  laptop:grid-cols-2
  ${className}`}>
    <img src={src} alt={alt} className="
    laptop:col-span-2
    "/>
    <h1 className="text-5xl font-bold">{title}</h1>
    <div>
      <p className="text-paragraph text-dark_grayish_blue">{content}</p>
      <br />
      <Button href="">READ MORE</Button>
    </div>
  </main>
}