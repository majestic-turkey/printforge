"use client"

import { useEffect, useMemo, useState } from "react"
import ModelsGrid from "@/app/components/ModelsGrid"
import type { Model } from "@/app/types"

type ModelsSearchResultsProps = {
    models: Model[]
}

export default function ModelsSearchResults({ models }: ModelsSearchResultsProps) {
    const [query, setQuery] = useState("")

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        setQuery((params.get("query") || "").toLowerCase())
    }, [])

    const filteredModels = useMemo(() => {
        if (!query) {
            return models
        }

        return models.filter(model =>
            model.name.toLowerCase().includes(query) ||
            model.description.toLowerCase().includes(query)
        )
    }, [models, query])

    return (
        <>
            <form className="w-full px-5 md:px-0 md:max-w-xl">
                <input
                    type="text"
                    name="query"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                    className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}