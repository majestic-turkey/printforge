import Link from "next/link"

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-orange-accent px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer">
            {children}
        </Link>
    )
}