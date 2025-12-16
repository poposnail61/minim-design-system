"use client"



const semanticGroups = [
    {
        title: "1-1. Background",
        colors: [
            { name: "Layer", variable: "gray-0", class: "bg-bg-layer", foreground: "text-black" },
            { name: "Layer Base", variable: "gray-100", class: "bg-bg-layer-base", foreground: "text-black" },
            { name: "Neutral Solid", variable: "gray-900", class: "bg-bg-neutral-solid", foreground: "text-white" },
            { name: "Primary Solid", variable: "blue-500", class: "bg-bg-primary-solid", foreground: "text-white" },
            { name: "Secondary Solid", variable: "green-500", class: "bg-bg-secondary-solid", foreground: "text-white" },
            { name: "Critical Solid", variable: "red-500", class: "bg-bg-critical-solid", foreground: "text-white" },
            { name: "Field", variable: "gray-0", class: "bg-bg-field", foreground: "text-black" },
            { name: "Field Subtle", variable: "gray-100", class: "bg-bg-field-subtle", foreground: "text-black" },
            { name: "Disabled", variable: "gray-200", class: "bg-bg-disabled", foreground: "text-black" },
        ]
    },
    {
        title: "1-2. Foreground",
        colors: [
            { name: "Neutral", variable: "gray-900", class: "bg-fg-neutral", foreground: "text-white" },
            { name: "Muted", variable: "gray-500", class: "bg-fg-muted", foreground: "text-white" },
            { name: "Inverted", variable: "gray-0", class: "bg-fg-neutral-inverted", foreground: "text-black" },
            { name: "Primary", variable: "blue-500", class: "bg-fg-primary", foreground: "text-white" },
            { name: "Secondary", variable: "green-500", class: "bg-fg-secondary", foreground: "text-white" },
            { name: "Critical", variable: "red-500", class: "bg-fg-critical", foreground: "text-white" },
            { name: "Placeholder", variable: "gray-400", class: "bg-fg-placeholder", foreground: "text-black" },
            { name: "Disabled", variable: "gray-400", class: "bg-fg-disabled", foreground: "text-black" },
        ]
    },
    {
        title: "1-3. Stroke",
        colors: [
            { name: "Neutral", variable: "gray-200", class: "bg-stroke-neutral", foreground: "text-black" },
            { name: "Neutral Strong", variable: "gray-900", class: "bg-stroke-neutral-strong", foreground: "text-white" },
            { name: "Primary", variable: "blue-500", class: "bg-stroke-primary", foreground: "text-white" },
            { name: "Secondary", variable: "green-500", class: "bg-stroke-secondary", foreground: "text-white" },
            { name: "Critical", variable: "red-500", class: "bg-stroke-critical", foreground: "text-white" },
        ]
    }
]

const baseGroups = [
    {
        title: "Gray Scale",
        colors: [
            { name: "Gray 0", variable: "#FFFFFF", class: "bg-gray-0", foreground: "text-black" },
            { name: "Gray 50", variable: "#FAFAFA", class: "bg-gray-50", foreground: "text-black" },
            { name: "Gray 100", variable: "#F4F4F5", class: "bg-gray-100", foreground: "text-black" },
            { name: "Gray 200", variable: "#E4E4E7", class: "bg-gray-200", foreground: "text-black" },
            { name: "Gray 300", variable: "#D4D4D8", class: "bg-gray-300", foreground: "text-black" },
            { name: "Gray 400", variable: "#9E9E9E", class: "bg-gray-400", foreground: "text-black" },
            { name: "Gray 500", variable: "#71717A", class: "bg-gray-500", foreground: "text-white" },
            { name: "Gray 600", variable: "#52525B", class: "bg-gray-600", foreground: "text-white" },
            { name: "Gray 700", variable: "#3F3F46", class: "bg-gray-700", foreground: "text-white" },
            { name: "Gray 800", variable: "#27272A", class: "bg-gray-800", foreground: "text-white" },
            { name: "Gray 900", variable: "#18181B", class: "bg-gray-900", foreground: "text-white" },
            { name: "Gray 950", variable: "#09090B", class: "bg-gray-950", foreground: "text-white" },
            { name: "Gray 1000", variable: "#000000", class: "bg-gray-1000", foreground: "text-white" },
        ]
    },
    {
        title: "Red Scale",
        colors: [
            { name: "Red 50", variable: "#FCF1F1", class: "bg-red-50", foreground: "text-black" },
            { name: "Red 100", variable: "#FAE5E5", class: "bg-red-100", foreground: "text-black" },
            { name: "Red 200", variable: "#F7CECE", class: "bg-red-200", foreground: "text-black" },
            { name: "Red 300", variable: "#F5A5A5", class: "bg-red-300", foreground: "text-black" },
            { name: "Red 400", variable: "#F06E6E", class: "bg-red-400", foreground: "text-black" },
            { name: "Red 500", variable: "#EB3D3D", class: "bg-red-500", foreground: "text-white" },
            { name: "Red 600", variable: "#D81A1A", class: "bg-red-600", foreground: "text-white" },
            { name: "Red 700", variable: "#B61414", class: "bg-red-700", foreground: "text-white" },
            { name: "Red 800", variable: "#971818", class: "bg-red-800", foreground: "text-white" },
            { name: "Red 900", variable: "#7F1B1B", class: "bg-red-900", foreground: "text-white" },
            { name: "Red 950", variable: "#460A0A", class: "bg-red-950", foreground: "text-white" },
        ]
    },
    {
        title: "Yellow Scale",
        colors: [
            { name: "Yellow 50", variable: "#FEFCEA", class: "bg-yellow-50", foreground: "text-black" },
            { name: "Yellow 100", variable: "#FDF9C8", class: "bg-yellow-100", foreground: "text-black" },
            { name: "Yellow 200", variable: "#FCF194", class: "bg-yellow-200", foreground: "text-black" },
            { name: "Yellow 300", variable: "#FBE152", class: "bg-yellow-300", foreground: "text-black" },
            { name: "Yellow 400", variable: "#F5CA0F", class: "bg-yellow-400", foreground: "text-black" },
            { name: "Yellow 500", variable: "#E6B313", class: "bg-yellow-500", foreground: "text-white" },
            { name: "Yellow 600", variable: "#C68A0B", class: "bg-yellow-600", foreground: "text-white" },
            { name: "Yellow 700", variable: "#9C630F", class: "bg-yellow-700", foreground: "text-white" },
            { name: "Yellow 800", variable: "#804E13", class: "bg-yellow-800", foreground: "text-white" },
            { name: "Yellow 900", variable: "#6C4018", class: "bg-yellow-900", foreground: "text-white" },
            { name: "Yellow 950", variable: "#3E210B", class: "bg-yellow-950", foreground: "text-white" },
        ]
    },
    {
        title: "Green Scale",
        colors: [
            { name: "Green 50", variable: "#EFFCF5", class: "bg-green-50", foreground: "text-black" },
            { name: "Green 100", variable: "#D8F9E6", class: "bg-green-100", foreground: "text-black" },
            { name: "Green 200", variable: "#B6F2D2", class: "bg-green-200", foreground: "text-black" },
            { name: "Green 300", variable: "#86E6B8", class: "bg-green-300", foreground: "text-black" },
            { name: "Green 400", variable: "#55D197", class: "bg-green-400", foreground: "text-black" },
            { name: "Green 500", variable: "#44B982", class: "bg-green-500", foreground: "text-white" },
            { name: "Green 600", variable: "#35966A", class: "bg-green-600", foreground: "text-white" },
            { name: "Green 700", variable: "#2A7858", class: "bg-green-700", foreground: "text-white" },
            { name: "Green 800", variable: "#235F47", class: "bg-green-800", foreground: "text-white" },
            { name: "Green 900", variable: "#1E4D3C", class: "bg-green-900", foreground: "text-white" },
            { name: "Green 950", variable: "#0E2B22", class: "bg-green-950", foreground: "text-white" },
        ]
    },
    {
        title: "Blue Scale",
        colors: [
            { name: "Blue 50", variable: "#F0F8FE", class: "bg-blue-50", foreground: "text-black" },
            { name: "Blue 100", variable: "#DEEFFC", class: "bg-blue-100", foreground: "text-black" },
            { name: "Blue 200", variable: "#C4E3FC", class: "bg-blue-200", foreground: "text-black" },
            { name: "Blue 300", variable: "#9AD2FD", class: "bg-blue-300", foreground: "text-black" },
            { name: "Blue 400", variable: "#65B6FD", class: "bg-blue-400", foreground: "text-black" },
            { name: "Blue 500", variable: "#449AFC", class: "bg-blue-500", foreground: "text-white" },
            { name: "Blue 600", variable: "#2D79F2", class: "bg-blue-600", foreground: "text-white" },
            { name: "Blue 700", variable: "#2361DD", class: "bg-blue-700", foreground: "text-white" },
            { name: "Blue 800", variable: "#224FB1", class: "bg-blue-800", foreground: "text-white" },
            { name: "Blue 900", variable: "#234789", class: "bg-blue-900", foreground: "text-white" },
            { name: "Blue 950", variable: "#192D52", class: "bg-blue-950", foreground: "text-white" },
        ]
    },
    {
        title: "Alpha",
        colors: [
            { name: "White Alpha 200", variable: "20%", class: "bg-whiteAlpha-200", foreground: "text-black" },
            { name: "White Alpha 600", variable: "60%", class: "bg-whiteAlpha-600", foreground: "text-black" },
            { name: "Black Alpha 200", variable: "20%", class: "bg-blackAlpha-200", foreground: "text-black" },
            { name: "Black Alpha 600", variable: "60%", class: "bg-blackAlpha-600", foreground: "text-white" },
        ]
    }
]

export default function ColorsPage() {
    // ... (group definitions omitted for brevity, assuming they are static strings anyway)

    return (
        <div className="flex flex-col gap-1800 p-1200 max-w-5xl mx-auto bg-bg-layer min-h-screen">
            <div className="space-y-800">
                <h1 className="text-title-large text-fg-neutral tracking-tight">Colors</h1>
                <p className="text-body-large text-fg-muted">
                    Our color palette is built with a semantic approach.
                </p>
            </div>

            <div className="flex flex-col gap-1800">
                <section className="space-y-800">
                    <h2 className="text-title-medium text-fg-neutral border-b border-stroke-neutral pb-200">1. Semantic Colors</h2>
                    <p className="text-body-medium text-fg-muted">
                        Semantic colors are used to communicate meaning and hierarchy. They are derived from the base palette.
                    </p>

                    <div className="grid gap-800">
                        {semanticGroups.map((group) => (
                            <div key={group.title} className="space-y-400">
                                <h3 className="text-title-small text-fg-neutral">{group.title}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-500">
                                    {group.colors.map((color) => (
                                        <div key={color.name} className="flex flex-col gap-300">
                                            <div
                                                className={`w-full rounded-md border border-stroke-neutral shadow-sm ${color.class} flex items-center justify-center`}
                                                style={{ height: '6rem' }}
                                            >
                                                <span className={`${color.foreground ? color.foreground : 'text-fg-neutral'} font-medium`}>Aa</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-body-small-strong text-fg-neutral">{color.name}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono">{color.variable}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono opacity-50">{color.class}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-800">
                    <h2 className="text-title-medium text-fg-neutral border-b border-stroke-neutral pb-200">2. Base Colors</h2>
                    <p className="text-body-medium text-fg-muted">
                        Primitive color scales that feed into the semantic tokens.
                    </p>
                    <div className="space-y-1200">
                        {baseGroups.map((group) => (
                            <div key={group.title} className="space-y-400">
                                <h3 className="text-title-small text-fg-neutral">{group.title}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-500">
                                    {group.colors.map((color) => (
                                        <div key={color.name} className="flex flex-col gap-300">
                                            <div
                                                className={`w-full rounded-md border border-stroke-neutral shadow-sm ${color.class} flex items-center justify-center`}
                                                style={{ height: '4rem' }}
                                            >
                                                <span className={`${color.foreground ? color.foreground : 'text-fg-neutral'} text-caption-medium font-medium`}>Aa</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-body-small-strong text-fg-neutral">{color.name}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono">{color.variable}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono opacity-50">{color.class}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
