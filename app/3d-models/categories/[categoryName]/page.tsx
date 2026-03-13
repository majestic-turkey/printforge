import { getCategoryBySlug, getAllCategories } from "../../../lib/categories"
import type {CategoryPageProps} from "../../../types"

export async function generateStaticParams() {
    const categories = getAllCategories()
    return categories.map((category) => ({
        categoryName: category.slug
    }))
}

export default async function CategoryPage({params}: CategoryPageProps) {
    const { categoryName } = await params
    return (<h1>{getCategoryBySlug(categoryName)?.displayName}</h1>)
}