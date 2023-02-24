import { useState } from "react"
import {Menu, MenuClose} from "./svg/SVGs"

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
    ${className}`}>
      {children}
  </div>
}

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    // setTimeout(() => {
      setOpen(!open);
    //   console.log(open);
    // }, 300);
  }
  if (open) {
    return (<>
      <div>
        <MenuWrapper 
        // className="relative right-0 z-10"
        >
          <MenuClose onClick={toggleOpen}/>
        </MenuWrapper>

      </div>
      {/* <div className="
      block
      fixed
      top-0 right-0
      h-screen w-2/6
    bg-off_white
      ">
      hello
      </div> */}
   </>)
  }
  return  <MenuWrapper>
    <Menu onClick={toggleOpen}/>
  </MenuWrapper>
}