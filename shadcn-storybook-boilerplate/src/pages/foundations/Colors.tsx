```javascript
"use client"

import { Card } from "@/components/ui/card"

const colorGroups = [
    {
        title: "Semantic Foreground (Text/Icon)",
        colors: [
            { name: "Neutral", variable: "gray-900", class: "bg-fg-neutral" },
            { name: "Muted", variable: "gray-500", class: "bg-fg-muted" },
            { name: "Inverted", variable: "gray-0", class: "bg-fg-neutral-inverted" },
            { name: "Primary", variable: "blue-500", class: "bg-fg-primary" },
            { name: "Secondary", variable: "green-500", class: "bg-fg-secondary" },
            { name: "Critical", variable: "red-500", class: "bg-fg-critical" },
            { name: "Placeholder", variable: "gray-400", class: "bg-fg-placeholder" },
            { name: "Disabled", variable: "gray-400", class: "bg-fg-disabled" },
        ]
    },
    {
        title: "Semantic Background",
        colors: [
            { name: "Layer", variable: "gray-0", class: "bg-bg-layer" },
            { name: "Layer Base", variable: "gray-100", class: "bg-bg-layer-base" },
            { name: "Neutral Solid", variable: "gray-900", class: "bg-bg-neutral-solid" },
            { name: "Primary Solid", variable: "blue-500", class: "bg-bg-primary-solid" },
            { name: "Secondary Solid", variable: "green-500", class: "bg-bg-secondary-solid" },
            { name: "Critical Solid", variable: "red-500", class: "bg-bg-critical-solid" },
            { name: "Field", variable: "gray-0", class: "bg-bg-field" },
            { name: "Field Subtle", variable: "gray-100", class: "bg-bg-field-subtle" },
            { name: "Disabled", variable: "gray-200", class: "bg-bg-disabled" },
        ]
    },
    {
        title: "Semantic Stroke (Border)",
        colors: [
            { name: "Neutral", variable: "gray-200", class: "bg-stroke-neutral" },
            { name: "Neutral Strong", variable: "gray-900", class: "bg-stroke-neutral-strong" },
            { name: "Primary", variable: "blue-500", class: "bg-stroke-primary" },
            { name: "Secondary", variable: "green-500", class: "bg-stroke-secondary" },
            { name: "Critical", variable: "red-500", class: "bg-stroke-critical" },
        ]
    },
    {
        title: "Gray Scale",
        colors: [
            { name: "Gray 0", variable: "#FFFFFF", class: "bg-gray-0" },
            { name: "Gray 50", variable: "#FAFAFA", class: "bg-gray-50" },
            { name: "Gray 100", variable: "#F4F4F5", class: "bg-gray-100" },
            { name: "Gray 200", variable: "#E4E4E7", class: "bg-gray-200" },
            { name: "Gray 300", variable: "#D4D4D8", class: "bg-gray-300" },
            { name: "Gray 400", variable: "#9E9E9E", class: "bg-gray-400" },
            { name: "Gray 500", variable: "#71717A", class: "bg-gray-500" },
            { name: "Gray 600", variable: "#52525B", class: "bg-gray-600" },
            { name: "Gray 700", variable: "#3F3F46", class: "bg-gray-700" },
            { name: "Gray 800", variable: "#27272A", class: "bg-gray-800" },
            { name: "Gray 900", variable: "#18181B", class: "bg-gray-900", foreground: "text-white" },
            { name: "Gray 950", variable: "#09090B", class: "bg-gray-950", foreground: "text-white" },
            { name: "Gray 1000", variable: "#000000", class: "bg-gray-1000", foreground: "text-white" },
        ]
    },
    {
        title: "Colors",
        colors: [
            { name: "Red 500", variable: "#EB3D3D", class: "bg-red-500" },
            { name: "Yellow 500", variable: "#E6B313", class: "bg-yellow-500" },
            { name: "Green 500", variable: "#44B982", class: "bg-green-500" },
            { name: "Blue 500", variable: "#449AFC", class: "bg-blue-500" },
        ]
    },
    {
        title: "Alpha",
        colors: [
            { name: "White Alpha 200", variable: "20%", class: "bg-whiteAlpha-200" },
            { name: "White Alpha 600", variable: "60%", class: "bg-whiteAlpha-600" },
            { name: "Black Alpha 200", variable: "20%", class: "bg-blackAlpha-200" },
            { name: "Black Alpha 600", variable: "60%", class: "bg-blackAlpha-600" },
        ]
    }
]

export default function ColorsPage() {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Colors</h1>
                <p className="text-lg text-muted-foreground">
                    Semantic color palette used throughout the design system.
                </p>
            </div>

            <div className="space-y-12">
                {colorGroups.map((group) => (
                    <section key={group.title} className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">{group.title}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {group.colors.map((color) => (
                                <div key={color.name} className="space-y-3">
                                    <Card className="overflow-hidden rounded-xl border shadow-sm">
                                        <div className={`h - 24 w - full ${ color.class } flex items - center justify - center border - b`}>
                                            {/* Preview Text Contrast if applicable */}
                                            {color.foreground && (
                                                <span className={`text - sm font - medium opacity - 90 ${ color.foreground.replace('text-', 'text-') } `}>
                                                    Aa
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-3 bg-card">
                                            <div className="font-medium text-sm text-card-foreground">{color.name}</div>
                                            <div className="text-xs text-muted-foreground font-mono mt-1 opacity-70">
                                                {color.variable}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
