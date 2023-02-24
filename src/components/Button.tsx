interface props {
  href: string,
  children?: React.ReactNode,
  className?: string,
}
export default function Button({href, children, className}:props) {
  return <a href={href} 
    className="w-40 h-11 
    flex justify-center items-center 
    text-center tracking-widest font-normal
    bg-primary_red hover:bg-very_dark_blue
    transition-colors duration-150">
    {children}
  </a>
}