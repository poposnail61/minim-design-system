import { useState, useEffect } from "react"
import IconGrid from "@/components/foundations/icons/IconGrid"
import IconFilter from "@/components/foundations/icons/IconFilter"
import IconDetailsPanel from "@/components/foundations/icons/IconDetailsPanel"
import { Loader2 } from "lucide-react"

interface Icon {
    name: string
    url: string
    tags?: string[]
}

export default function IconsPage() {
    const [icons, setIcons] = useState<Icon[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [search, setSearch] = useState("")
    const [tagFilters, setTagFilters] = useState<Record<string, "include" | "exclude">>({})

    const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null)
    const [size, setSize] = useState(24)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const res = await fetch("/api/icons")
                const contentType = res.headers.get("content-type")
                if (!res.ok || !contentType || !contentType.includes("application/json")) {
                    if (import.meta.env.DEV) {
                        const mockRes = await fetch("/mock_icons.json")
                        const mockData = await mockRes.json()
                        setIcons(mockData.icons)
                        return
                    }
                    throw new Error("Failed to fetch icons")
                }
                const data = await res.json()
                setIcons(data.icons || [])
            } catch (err: any) {
                console.error("Failed to load icons:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchIcons()
    }, [])

    const filteredIcons = icons.filter((icon) => {
        const matchesSearch = icon.name.toLowerCase().includes(search.toLowerCase())
        const includedTags = Object.entries(tagFilters).filter(([, s]) => s === "include").map(([t]) => t)
        const excludedTags = Object.entries(tagFilters).filter(([, s]) => s === "exclude").map(([t]) => t)
        const iconTags = icon.tags || []
        const hasAllIncludes = includedTags.length === 0 || includedTags.every((t) => iconTags.includes(t))
        const hasNoExcludes = excludedTags.length === 0 || !excludedTags.some((t) => iconTags.includes(t))
        return matchesSearch && hasAllIncludes && hasNoExcludes
    })

    const toggleTag = (tag: string) => {
        setTagFilters((prev) => {
            const current = prev[tag]
            const next = { ...prev }
            if (!current) next[tag] = "include"
            else if (current === "include") next[tag] = "exclude"
            else delete next[tag]
            return next
        })
    }

    const clearTagFilters = () => setTagFilters({})

    return (
        <div className="flex flex-col min-h-screen bg-bg-layer">
            <div className="border-b border-stroke-neutral bg-bg-layer px-500 py-800">
                <h1 className="text-title-large text-fg-neutral tracking-tight">Icons</h1>
                <p className="text-body-medium text-fg-muted mt-200">
                    A collection of {icons.length || "..."} semantic vectors used across the design system.
                </p>
            </div>

            <IconFilter
                search={search}
                setSearch={setSearch}
                tagFilters={tagFilters}
                toggleTag={toggleTag}
                clearTagFilters={clearTagFilters}
                icons={icons}
                size={size}
                setSize={setSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />

            <main className="flex-1 p-500 md:p-800 bg-bg-layer">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 text-fg-muted">
                        <Loader2 className="w-8 h-8 animate-spin mb-400" />
                        <p className="text-body-small">Loading Icons...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center h-64 text-fg-critical">
                        <p className="text-body-small-strong">Failed to load icons</p>
                        <p className="text-caption-medium opacity-80 mt-100">{error}</p>
                        <p className="text-caption-small text-fg-muted mt-400">
                            Ensure GITHUB_TOKEN is set in environment variables.
                        </p>
                    </div>
                ) : (
                    <div className="max-w-[1600px] mx-auto">
                        <IconGrid
                            icons={filteredIcons}
                            onIconClick={setSelectedIcon}
                            size={size}
                            selectedColor={selectedColor}
                        />
                    </div>
                )}
            </main>

            <IconDetailsPanel
                icon={selectedIcon}
                onClose={() => setSelectedIcon(null)}
                color={selectedColor}
                size={size}
            />
        </div>
    )
}
