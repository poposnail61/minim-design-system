"use client"

export default function SizesPage() {
    const spaces = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]
    const radii = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"]

    return (
        <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Sizes & Spacing</h1>
                <p className="text-lg text-muted-foreground">
                    Spacing scale and border radius tokens.
                </p>
            </div>

            <div className="space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Spacing Scale</h2>
                    <div className="space-y-4">
                        {spaces.map((space) => (
                            <div key={space} className="flex items-center gap-4 group">
                                <div className="w-16 text-sm font-mono text-muted-foreground shrink-0">{space}</div>
                                <div className="w-16 text-xs text-muted-foreground shrink-0 opacity-50">{space * 0.25}rem</div>
                                <div
                                    className="bg-primary/20 rounded-sm h-6 transition-all group-hover:bg-primary/40"
                                    style={{ width: `${space * 0.25}rem` }}
                                />
                                <div className="text-xs text-muted-foreground opacity-50 ml-auto">{space * 4}px</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Border Radius</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {radii.map((radius) => (
                            <div key={radius} className="flex flex-col items-center gap-3">
                                <div
                                    className={`w-24 h-24 bg-secondary border-2 border-primary/20 shadow-sm flex items-center justify-center rounded-${radius}`}
                                />
                                <div className="text-sm font-mono font-medium">rounded-{radius}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
