"use client"

import { useMemo, useSyncExternalStore } from "react"
import ModelsGrid from "@/app/components/ModelsGrid"
import type { Model } from "@/app/types"
import Form from "next/form"

type ModelsSearchResultsProps = {
    models: Model[]
}

function subscribeToSearchParams(onStoreChange: () => void) {
    if (typeof window === "undefined") {
        return () => undefined
    }

    const notify = () => onStoreChange()
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function (...args) {
        originalPushState.apply(this, args)
        notify()
    }

    window.history.replaceState = function (...args) {
        originalReplaceState.apply(this, args)
        notify()
    }

    window.addEventListener("popstate", notify)

    return () => {
        window.history.pushState = originalPushState
        window.history.replaceState = originalReplaceState
        window.removeEventListener("popstate", notify)
    }
}

function getSearchQuery() {
    if (typeof window === "undefined") {
        return ""
    }

    return new URLSearchParams(window.location.search).get("query")?.toLowerCase() || ""
}

export default function ModelsSearchResults({ models }: ModelsSearchResultsProps) {
    const query = useSyncExternalStore(subscribeToSearchParams, getSearchQuery, () => "")

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
            <Form action="/3d-models/" className="mb-6">
                <input
                    type="text"
                    name="query"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                    className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </Form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}