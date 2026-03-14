import Link from "next/link"

export default function NavLink({ href, isActive = false, children, className = "" }: { href: string; isActive?: boolean; children: React.ReactNode; className?: string }) {
    return (
        <Link href={href} className={`${isActive ? "text-orange-accent" : "text-gray-700"} px-4 py-2 transition-colors rounded-md cursor-pointer ${className}`}>
            {children}
        </Link>
    )
}