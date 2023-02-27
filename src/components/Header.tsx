import { Logo } from "./svg/SVGs"
import Nav from "./Nav"

interface headerProps {
  className?: string,
  currentWindowWidth?: number,
}
export default function Header({className, currentWindowWidth}:headerProps) {
  return <header className={`
  flex justify-between items-center
  ${className}`}>
    <a href=""><Logo/></a>

    <Nav currentWindowWidth={currentWindowWidth}/>
  </header>
}