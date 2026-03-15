import ModelsSearchResults from "@/app/components/ModelsSearchResults"
import { getModels } from "@/app/lib/models"

export default async function Page() {
    const models = await getModels()

    return <ModelsSearchResults models={models} />
}
