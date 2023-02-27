import { Logo } from "./svg/SVGs"
import NavBar from "./NavBar"

interface headerProps {
  className?: string,
  currentWindowWidth?: number,
}
export default function Header({className, currentWindowWidth}:headerProps) {
  return <header className={`
  flex justify-between items-center
  ${className}`}>
    <a href=""><Logo/></a>

    <NavBar currentWindowWidth={currentWindowWidth}/>
  </header>
}