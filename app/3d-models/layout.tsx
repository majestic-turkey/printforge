import { getAllCategories } from "@/app/lib/categories"
import Link from "next/link"
import type {Category} from "@/app/types"

export default function CategoryLayout({children}: {children: React.ReactNode}) {
    const categories: Category[] = getAllCategories()
    return (<>
    <nav className="mt-5">
        <ul className="flex gap-4 mb-6 justify-around w-3/4 mx-auto">
            <Link href="/3d-models/categories" className="font-bold">All</Link>
            {categories.map(category => (
                <Link href={`/3d-models/categories/${category.slug}`} key={category.slug}><li>{category.displayName}</li></Link>
            ))}
        </ul>
    </nav>
    {children}
    </>)
}