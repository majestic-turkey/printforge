import { getAllCategories, getCategoryBySlug } from "../../../lib/categories"
import type {CategoryPageProps} from "../../../types"
import ModelsGrid from '@/app/components/ModelsGrid'
import { getModels } from "@/app/lib/models"

export const dynamicParams = false

export async function generateStaticParams() {
    const categories = getAllCategories()

    return categories.map((category) => ({
        categoryName: category.slug,
    }))
}

export default async function CategoryPage({params}: CategoryPageProps) {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    const models = await getModels({ category: category.slug })
    return (<ModelsGrid title={category.displayName} models={models} />)
}