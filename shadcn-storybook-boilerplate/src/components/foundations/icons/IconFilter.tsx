"use client"

import { Search, Tag, RefreshCcw, X } from "lucide-react"
import { useState } from "react"
import styles from "./IconFilter.module.css"

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
        <div className={`${styles.wrapper} bg-bg-layer border-stroke-neutral`}>
            <div className={`${styles.inner} container`}>
                {/* Top Row */}
                <div className={styles.topRow}>
                    {/* Search */}
                    <div className={styles.searchWrapper}>
                        <Search className={`${styles.searchIcon} text-fg-muted`} />
                        <input
                            type="search"
                            placeholder="Search icons..."
                            className={`${styles.searchInput} border-stroke-neutral bg-bg-field text-body-small text-fg-neutral placeholder:text-fg-placeholder focus:border-stroke-primary`}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className={styles.controlsRow}>
                        {/* Color Picker */}
                        <div className={styles.colorPicker}>
                            <span className="text-caption-medium text-fg-muted">Color</span>
                            <div className={styles.colorDots}>
                                {COLORS.map((color) => (
                                    <button
                                        key={color.name}
                                        title={color.name}
                                        onClick={() => {
                                            setSelectedColor(color.value)
                                            if (color.value === null) setCustomHex("")
                                        }}
                                        className={`${styles.colorDot} ${
                                            selectedColor === color.value
                                                ? styles.colorDotActive
                                                : "border-stroke-neutral"
                                        }`}
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
                                            <RefreshCcw className={`${styles.searchIcon} text-fg-muted`} style={{ width: "12px", height: "12px", position: "static", transform: "none", margin: "auto" }} />
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className={styles.hexInputWrapper}>
                                <span className="text-caption-small text-fg-muted">#</span>
                                <input
                                    className={`${styles.hexInput} text-caption-medium font-mono border-stroke-neutral bg-bg-field text-fg-neutral placeholder:text-fg-placeholder`}
                                    placeholder="000000"
                                    value={customHex}
                                    onChange={handleHexChange}
                                    maxLength={7}
                                />
                            </div>
                        </div>

                        <div className={`${styles.divider} bg-stroke-neutral`} />

                        {/* Size Slider */}
                        <div className={styles.sizeSlider}>
                            <span className="text-caption-medium text-fg-muted">Size</span>
                            <input
                                type="range"
                                min={16}
                                max={64}
                                step={4}
                                value={size}
                                onChange={(e) => setSize(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                            <span className={`${styles.sizeValue} text-caption-medium font-mono text-fg-muted`}>{size}px</span>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                {availableTags.length > 0 && (
                    <div className={styles.tagsRow}>
                        <div className={styles.tagLabel}>
                            <Tag className={`${styles.tagLabelIcon} text-fg-muted`} />
                            <span className="text-caption-medium text-fg-muted whitespace-nowrap">Filter by Tag</span>
                        </div>
                        {availableTags.map((tag) => {
                            const status = tagFilters[tag]
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`${styles.tag} text-caption-medium ${
                                        status === "include"
                                            ? styles.tagInclude
                                            : status === "exclude"
                                            ? styles.tagExclude
                                            : `${styles.tagDefault} bg-bg-layer text-fg-neutral`
                                    }`}
                                >
                                    {tag}
                                    {status === "include" && <span className={styles.tagStatusMark}>+</span>}
                                    {status === "exclude" && <span className={styles.tagStatusMark}>-</span>}
                                </button>
                            )
                        })}
                        {activeFilterCount > 0 && (
                            <button
                                onClick={clearTagFilters}
                                className={`${styles.clearButton} text-caption-medium text-fg-muted`}
                            >
                                <X className={styles.clearButtonIcon} />
                                Clear ({activeFilterCount})
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
