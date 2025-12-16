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

    // Filter States
    const [search, setSearch] = useState("")
    const [tagFilters, setTagFilters] = useState<Record<string, "include" | "exclude">>({})

    // Visualization States
    const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null)
    const [size, setSize] = useState(24) // Base grid preview size
    const [selectedColor, setSelectedColor] = useState<string | null>(null)

    // Details Panel State
    // We share size/color state with grid for consistent preview,
    // but details panel has its own slider for detailed inspection if needed.
    // For simplicity, let's sync them.
    const [detailSize, setDetailSize] = useState(64)

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                // Fetch from our local Vercel API proxy
                const res = await fetch("/api/icons")
                const contentType = res.headers.get("content-type")
                if (!res.ok || !contentType || !contentType.includes("application/json")) {
                    if (import.meta.env.DEV) {
                        console.warn("API not available or returned non-JSON (likely Vite serving source file). Falling back to mock data.")
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

    // Filter Logic
    const filteredIcons = icons.filter((icon) => {
        const matchesSearch = icon.name.toLowerCase().includes(search.toLowerCase())

        const includedTags = Object.entries(tagFilters)
            .filter(([_, status]) => status === "include")
            .map(([tag]) => tag)

        const excludedTags = Object.entries(tagFilters)
            .filter(([_, status]) => status === "exclude")
            .map(([tag]) => tag)

        const iconTags = icon.tags || []

        // 1. Must include ALL "includedTags"
        const hasAllIncludes =
            includedTags.length === 0 || includedTags.every((t) => iconTags.includes(t))

        // 2. Must NOT include ANY "excludedTags"
        const hasNoExcludes =
            excludedTags.length === 0 || !excludedTags.some((t) => iconTags.includes(t))

        return matchesSearch && hasAllIncludes && hasNoExcludes
    })

    const toggleTag = (tag: string) => {
        setTagFilters((prev) => {
            const current = prev[tag]
            const next = { ...prev }

            if (!current) {
                next[tag] = "include"
            } else if (current === "include") {
                next[tag] = "exclude"
            } else {
                delete next[tag]
            }

            return next
        })
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-background px-6 py-8">
                <h1 className="text-3xl font-bold tracking-tight">Icons</h1>
                <p className="text-muted-foreground mt-2">
                    A collection of {icons.length || "..."} semantic vectors used across the design system.
                </p>
            </div>

            {/* Filter Toolbar (Sticky) */}
            <IconFilter
                search={search}
                setSearch={setSearch}
                tagFilters={tagFilters}
                toggleTag={toggleTag}
                icons={icons}
                size={size}
                setSize={setSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-8 bg-muted/10">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 text-muted-foreground animate-pulse">
                        <Loader2 className="w-8 h-8 animate-spin mb-4" />
                        <p>Loading Icons...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center h-64 text-destructive">
                        <p className="font-medium">Failed to load icons</p>
                        <p className="text-sm opacity-80 mt-1">{error}</p>
                        <p className="text-xs text-muted-foreground mt-4">
                            Ensure GITHUB_TOKEN is set in Vercel Environment Variables.
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

            {/* Details Panel (Sheet) */}
            <IconDetailsPanel
                icon={selectedIcon}
                onClose={() => setSelectedIcon(null)}
                color={selectedColor}
                setColor={setSelectedColor}
                size={detailSize}
                setSize={setDetailSize}
            />
        </div>
    )
}
