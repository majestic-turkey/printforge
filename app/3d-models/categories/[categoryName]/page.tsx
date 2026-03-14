import { getCategoryBySlug } from "../../../lib/categories"
import type {CategoryPageProps} from "../../../types"
import ModelsGrid from '@/app/components/ModelsGrid'
import { getModels } from "@/app/lib/models"

export default async function CategoryPage({params}: CategoryPageProps) {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    const models = await getModels({ category: category.slug })
    return (<ModelsGrid title={category.displayName} models={models} />)
}