"use client"

export default function SizesPage() {
    const baseSpacing = [
        "0", "2", "4", "6", "8", "9", "10", "11", "12", "14", "15", "16", "18", "20", "22", "23", "24", "27", "28", "32", "36", "40", "44", "48", "52", "60", "64", "68", "76", "80", "96", "128", "1000"
    ]

    const semanticSpacing = [
        "50", "100", "150", "200", "250", "300", "400", "500", "800", "1200", "1800", "2400", "3200"
    ]

    const componentSpacing = ["component-sm", "component-md", "negative-100", "negative-200"]

    const sizeHelpers = [
        "h76", "h68", "h60", "h52", "h44", "h36", "h32", "h22", "h20", "h18"
    ]

    const radii = [
        "none", "xsmall", "small", "medium", "large", "xlarge", "full",
        "full-h44", "full-h36", "full-h32", "full-h22", "full-h20", "full-h18"
    ]

    return (
        <div className="flex flex-col gap-12 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Sizes & Spacing</h1>
                <p className="text-lg text-muted-foreground">
                    Complete spacing system including Base, Semantic, and Component tokens.
                </p>
            </div>

            <div className="space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">1. Base Spacing (Number)</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {baseSpacing.map((space) => (
                            <div key={space} className="flex flex-col gap-2 p-3 border rounded-lg">
                                <span className="text-sm font-mono text-muted-foreground">space-{space}</span>
                                <div className="flex items-end gap-2 h-8">
                                    <div
                                        className={`bg-blue-500/50 rounded-sm h-4 min-w-[1px]`}
                                        style={{ width: space === '1000' ? '100%' : undefined }}
                                    >
                                        <div className={`h-full w-${space} bg-blue-500`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">2. Semantic Spacing</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {semanticSpacing.map((space) => (
                            <div key={space} className="flex flex-col gap-2 p-3 border rounded-lg">
                                <span className="text-sm font-mono text-muted-foreground">space-{space}</span>
                                <div className="flex items-end gap-2 h-8">
                                    <div className={`h-4 w-${space} bg-green-500 rounded-sm`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">3. Component Spacing</h2>
                    <div className="flex gap-6">
                        {componentSpacing.map((space) => (
                            <div key={space} className="flex flex-col gap-2 p-3 border rounded-lg">
                                <span className="text-sm font-mono text-muted-foreground">{space}</span>
                                <div className="flex items-end gap-2 h-8">
                                    <div className={`h-4 w-${space} bg-purple-500 rounded-sm`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">4. Size Helpers</h2>
                    <div className="flex flex-wrap gap-4">
                        {sizeHelpers.map((size) => (
                            <div key={size} className="flex flex-col gap-2 p-3 border rounded-lg">
                                <span className="text-sm font-mono text-muted-foreground">{size}</span>
                                <div className={`h-4 w-${size} bg-orange-500 rounded-sm`}></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">5. Border Radius</h2>
                    <div className="flex flex-wrap gap-6">
                        {radii.map((radius) => (
                            <div key={radius} className="flex flex-col items-center gap-3">
                                <div
                                    className={`w-24 h-24 bg-secondary border-2 border-primary/20 shadow-sm flex items-center justify-center rounded-${radius} overflow-hidden`}
                                >
                                    <span className="text-xs text-muted-foreground">Example</span>
                                </div>
                                <div className="text-sm font-mono font-medium">rounded-{radius}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
