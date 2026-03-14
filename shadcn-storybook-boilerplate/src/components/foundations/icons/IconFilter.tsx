"use client"

import { Search, Tag, RefreshCcw, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface IconFilterProps {
    search: string
    setSearch: (value: string) => void
    tagFilters: Record<string, "include" | "exclude">
    toggleTag: (tag: string) => void
    clearTagFilters: () => void
    icons: { tags?: string[] }[]
    size: number
    setSize: (size: number) => void
    selectedColor: string | null
    setSelectedColor: (color: string | null) => void
}

const COLORS = [
    { name: "Original", value: null },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#EB3D3D" },
    { name: "Blue", value: "#449AFC" },
    { name: "Green", value: "#44B982" },
]

export default function IconFilter({
    search,
    setSearch,
    tagFilters,
    toggleTag,
    clearTagFilters,
    icons,
    size,
    setSize,
    selectedColor,
    setSelectedColor,
}: IconFilterProps) {
    const [customHex, setCustomHex] = useState("")

    const availableTags = Array.from(
        new Set(icons.flatMap((icon) => icon.tags || []))
    ).sort()

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setCustomHex(val)
        if (/^#[0-9A-F]{6}$/i.test(val)) {
            setSelectedColor(val)
        }
    }

    const activeFilterCount = Object.keys(tagFilters).length

    return (
        <div className="sticky top-0 z-30 bg-bg-layer border-b border-stroke-neutral">
            <div className="container py-400 space-y-400">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row gap-400 justify-between items-start md:items-center">
                    {/* Search */}
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-300 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted pointer-events-none" />
                        <input
                            type="search"
                            placeholder="Search icons..."
                            className="w-full h-h36 pl-[34px] pr-300 rounded-md border border-stroke-neutral bg-bg-field text-body-small text-fg-neutral placeholder:text-fg-placeholder focus:outline-none focus:border-stroke-primary transition-colors"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-400 w-full md:w-auto overflow-x-auto pb-200 md:pb-0">
                        {/* Color Picker */}
                        <div className="flex items-center gap-200 shrink-0">
                            <span className="text-caption-medium text-fg-muted">Color</span>
                            <div className="flex items-center gap-100">
                                {COLORS.map((color) => (
                                    <button
                                        key={color.name}
                                        title={color.name}
                                        onClick={() => {
                                            setSelectedColor(color.value)
                                            if (color.value === null) setCustomHex("")
                                        }}
                                        className={cn(
                                            "w-6 h-6 rounded-full border-2 transition-all hover:scale-110 focus:outline-none",
                                            selectedColor === color.value
                                                ? "border-stroke-primary scale-110"
                                                : "border-stroke-neutral"
                                        )}
                                        style={{
                                            backgroundColor: color.value ?? "transparent",
                                            background:
                                                color.name === "Original"
                                                    ? "repeating-conic-gradient(#E4E4E7 0% 25%, #FFFFFF 0% 50%)"
                                                    : undefined,
                                            backgroundSize: "8px 8px",
                                        }}
                                    >
                                        {color.name === "Original" && (
                                            <RefreshCcw className="w-3 h-3 text-fg-muted mx-auto" />
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-100 ml-200">
                                <span className="text-caption-small text-fg-muted">#</span>
                                <input
                                    className="h-h22 w-20 px-100 text-caption-medium font-mono uppercase rounded-md border border-stroke-neutral bg-bg-field text-fg-neutral placeholder:text-fg-placeholder focus:outline-none focus:border-stroke-primary"
                                    placeholder="000000"
                                    value={customHex}
                                    onChange={handleHexChange}
                                    maxLength={7}
                                />
                            </div>
                        </div>

                        <div className="w-px h-4 bg-stroke-neutral shrink-0" />

                        {/* Size Slider */}
                        <div className="flex items-center gap-300 shrink-0 min-w-[140px]">
                            <span className="text-caption-medium text-fg-muted">Size</span>
                            <input
                                type="range"
                                min={16}
                                max={64}
                                step={4}
                                value={size}
                                onChange={(e) => setSize(Number(e.target.value))}
                                className="w-24 accent-fg-primary"
                            />
                            <span className="text-caption-medium font-mono text-fg-muted w-8 text-right">{size}px</span>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                {availableTags.length > 0 && (
                    <div className="flex items-center gap-200 overflow-x-auto pb-100">
                        <div className="flex items-center gap-150 pr-300 shrink-0">
                            <Tag className="w-3.5 h-3.5 text-fg-muted" />
                            <span className="text-caption-medium text-fg-muted whitespace-nowrap">Filter by Tag</span>
                        </div>
                        {availableTags.map((tag) => {
                            const status = tagFilters[tag]
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={cn(
                                        "shrink-0 px-300 py-100 rounded-full border text-caption-medium whitespace-nowrap transition-colors",
                                        status === "include" && "bg-bg-primary-solid text-fg-neutral-inverted border-transparent",
                                        status === "exclude" && "bg-bg-critical-solid text-fg-neutral-inverted border-transparent",
                                        !status && "bg-bg-layer text-fg-neutral border-stroke-neutral hover:bg-bg-neutral"
                                    )}
                                >
                                    {tag}
                                    {status === "include" && <span className="ml-100 opacity-70">+</span>}
                                    {status === "exclude" && <span className="ml-100 opacity-70">-</span>}
                                </button>
                            )
                        })}
                        {activeFilterCount > 0 && (
                            <button
                                onClick={clearTagFilters}
                                className="shrink-0 flex items-center gap-100 px-300 py-100 rounded-full text-caption-medium text-fg-muted hover:text-fg-neutral ml-auto whitespace-nowrap"
                            >
                                <X className="w-3 h-3" />
                                Clear ({activeFilterCount})
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
