"use client"
import NavLink from "@/app/components/NavLink"
import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"
import { usePathname } from "next/navigation"

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1)
  }
  return path
}

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const pathname = normalizePath(usePathname())
  const categories: Category[] = getAllCategories()
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row ml-7">
      {/* Responsive Navigation */}
      <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <div className="relative">
          <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
              <NavLink href="/3d-models" isActive={pathname === normalizePath("/3d-models")} className="font-bold">
                All
              </NavLink>
              {categories.map(item => {
                const categoryHref = `/3d-models/categories/${item.slug}`

                return (
                  <NavLink
                    href={categoryHref}
                    key={item.slug}
                    isActive={pathname === normalizePath(categoryHref)}
                  >
                    {item.displayName}
                  </NavLink>
                )
              })}
            </ul>
          </nav>
          {/* Fading edge/gradient for horizontal scroll hint on mobile */}
          <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-linear-to-l from-white to-transparent md:hidden" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}