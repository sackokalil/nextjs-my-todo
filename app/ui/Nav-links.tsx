"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {

    const pathname = usePathname()
    const navLink = pathname.startsWith('/create-todo') ? 
    <Link className="link" href='/todos'>My tasks</Link> :
    <Link className="link" href='/create-todo'>Create a task</Link>

  return navLink
   
}
