import { Logo } from "./svg/SVGs"
import NavBar from "./NavBar"

interface headerProps {
  className?: string,
}
export default function Header({className}:headerProps) {
  return <header className={`
  ${className}
  `}>
    <a href=""><Logo/></a>

    <NavBar/>
  </header>
}