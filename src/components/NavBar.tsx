import DropdownMenu from "./DropdownMenu";

interface linkProps {
  href: string,
  children: React.ReactNode,
}
export function Link({href, children}:linkProps) {
  return <a href={href} className="text-very_dark_blue hover:text-primary_red">
    {children}
  </a>
}

interface navbarProps {
  currentWindowWidth?: number,
}
export default function NavBar({currentWindowWidth}:navbarProps) {
  if (currentWindowWidth && currentWindowWidth >= 1024) {
    return <nav className="flex gap-4 items-center">
      <Link href="">Home</Link>
      <Link href="">New</Link>
      <Link href="">Popular</Link>
      <Link href="">Trending</Link>
      <Link href="">Categories</Link>
    </nav>
  }
  return <DropdownMenu/>
}