"use client"

import NavLink from "@/app/components/NavLink"
import Image from "next/image"
import {usePathname} from "next/navigation"

export default function Navbar() {

  const pathname = usePathname()

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/" isActive={pathname === "/"}>
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src="/printforge-logo.png"
              alt="PrintForge Logo"
              width={200}
              height={50}
              className="w-50 h-auto hidden md:block"
              priority
            />
            {/* Mobile Logo */}
            <Image
              src="/printforge-logo-mobile.png"
              alt="PrintForge Logo"
              width={40}
              height={40}
              className="w-10 h-auto block md:hidden"
              priority
            />
          </div>
        </NavLink>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase">
            <NavLink href="/3d-models" isActive={pathname.startsWith("/3d-models")}>3D Models</NavLink>
          </li>
          <li className="text-sm uppercase">
            <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}