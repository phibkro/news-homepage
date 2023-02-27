import { useState } from "react"
import { useEffect } from "react";
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

export default function NavBar() {
  const [currentWidth, setWindowWidth] = useState(0);
  function updateDimensions() {
    const width = window.innerWidth;
    setWindowWidth(width);
  }
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])
  if (currentWidth >= 1024) {
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