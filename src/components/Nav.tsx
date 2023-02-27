import { useState } from "react"
import {Menu, MenuClose} from "./svg/SVGs"

interface linkProps {
  href: string,
  children: React.ReactNode,
}
export function Link({href, children}:linkProps) {
  return <a href={href} className="text-very_dark_blue hover:text-primary_red">
    {children}
  </a>
}

const navLinkData = [{
    p: "Home",
    href: "",
  }, {
    p: "New",
    href: "",
  }, {
    p: "Popular",
    href: "",
  }, {
    p: "Trending",
    href: "",
  }, {
    p: "Categories",
    href: ""
  },
]

const linkList = navLinkData.map((data, i) => <Link key={i} href={data.href}>{data.p}</Link>)

interface wrapperProps {
  onClick?: VoidFunction,
  children?: React.ReactNode,
  className?: string,
}
function MenuWrapper({onClick, children, className}: wrapperProps) {
  return <div 
    onClick={onClick}
    className={`
    hover:cursor-pointer
    transition-transform duration-100 
    z-50
    ${className}`}>
      {children}
  </div>
}

export function DropdownMenu() {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    // setTimeout(() => {
      setOpen(!open);
    //   console.log(open);
    // }, 300);
  }
  if (open) {
    return (<>
        <MenuWrapper className="
          self-end
        ">
          <MenuClose onClick={toggleOpen}/>
        </MenuWrapper>
   </>)
  }
  return <MenuWrapper>
    <Menu onClick={toggleOpen}/>
  </MenuWrapper>
}

interface navProps {
  currentWindowWidth?: number,
}
export default function Nav({currentWindowWidth}:navProps) {
  if (currentWindowWidth && currentWindowWidth >= 1024) {
    return <nav className="flex gap-4 items-center">
      {linkList}
    </nav>
  }
  return <DropdownMenu/>
}