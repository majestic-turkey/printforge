import NavLink from "@/app/components/NavLink"
import Image from "next/image"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src={PFLogo}
              alt="PrintForge Logo"
              className="w-50 h-auto hidden md:block"
              priority
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon}
              alt="PrintForge Logo"
              className="w-10 h-auto block md:hidden"
              priority
            />
          </div>
        </NavLink>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase">
            <NavLink href="/3d-models">3D Models</NavLink>
          </li>
          <li className="text-sm uppercase">
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}