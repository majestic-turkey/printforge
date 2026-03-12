import Link from "next/link"
import Image from "next/image"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
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
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}