"use client"

import { Separator } from "@/components/ui/separator"

export default function TypographyPage() {
    const typography = [
        {
            group: "Title",
            styles: [
                { name: "title-large", class: "text-title-large" },
                { name: "title-medium", class: "text-title-medium" },
                { name: "title-small", class: "text-title-small" },
            ]
        },
        {
            group: "Body",
            styles: [
                { name: "body-large", class: "text-body-large" },
                { name: "body-large-strong", class: "text-body-large-strong" },
                { name: "body-medium", class: "text-body-medium" },
                { name: "body-medium-strong", class: "text-body-medium-strong" },
                { name: "body-small", class: "text-body-small" },
                { name: "body-small-strong", class: "text-body-small-strong" },
            ]
        },
        {
            group: "Caption",
            styles: [
                { name: "caption-large", class: "text-caption-large" },
                { name: "caption-large-strong", class: "text-caption-large-strong" },
                { name: "caption-medium", class: "text-caption-medium" },
                { name: "caption-medium-strong", class: "text-caption-medium-strong" },
                { name: "caption-small", class: "text-caption-small" },
                { name: "caption-small-strong", class: "text-caption-small-strong" },
            ]
        }
    ]

    const baseFontSizes = [
        "300", "350", "400", "450", "500", "550", "600", "700", "800", "900", "1200", "1600", "2000"
    ]
    const baseFontWeights = ["300", "400", "500", "600", "700"]
    const baseLineHeights = [
        "300", "350", "400", "450", "500", "550", "600", "700", "800", "900", "1200", "1600", "2000"
    ]

    return (
        <div className="flex flex-col gap-12 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Typography</h1>
                <p className="text-lg text-muted-foreground">
                    Semantic typography tokens and Base primitives.
                </p>
            </div>

            <div className="space-y-12">
                <div className="space-y-4 border-b pb-4">
                    <h2 className="text-3xl font-bold tracking-tight">1. Semantic Typography</h2>
                    <p className="text-muted-foreground">Contextual text styles used in components.</p>
                </div>

                {typography.map((group) => (
                    <section key={group.group} className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">{group.group}</h2>
                        <div className="space-y-8">
                            {group.styles.map((style) => (
                                <div key={style.name} className="flex flex-col gap-2 p-4 border rounded-lg bg-card text-card-foreground">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-mono text-muted-foreground">{style.name}</span>
                                    </div>
                                    <p className={`${style.class} break-words`}>
                                        The quick brown fox jumps over the lazy dog.
                                    </p>
                                    <p className={`${style.class} opacity-50 break-words`}>
                                        다람쥐 헌 쳇바퀴에 타고파. 1234567890
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="space-y-12 pt-8">
                <div className="space-y-4 border-b pb-4">
                    <h2 className="text-3xl font-bold tracking-tight">2. Base Typography Tokens</h2>
                    <p className="text-muted-foreground">Primitive values for Size, Weight, and Line Height.</p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Font Size</h2>
                    <div className="flex flex-col gap-4">
                        {baseFontSizes.map((size) => (
                            <div key={size} className="flex items-baseline gap-8 border-b pb-2 last:border-0">
                                <div className="w-24 text-sm font-mono text-muted-foreground">text-{size}</div>
                                <div className={`text-${size}`}>
                                    Ag (Size {size})
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Font Weight</h2>
                    <div className="flex flex-col gap-4">
                        {baseFontWeights.map((weight) => (
                            <div key={weight} className="flex items-center gap-8 border-b pb-2 last:border-0">
                                <div className="w-24 text-sm font-mono text-muted-foreground">font-{weight}</div>
                                <div className={`font-${weight} text-2xl`}>
                                    Ag (Weight {weight})
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Line Height</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {baseLineHeights.map((lh) => (
                            <div key={lh} className="border p-4 rounded-lg">
                                <div className="mb-2 text-sm font-mono text-muted-foreground">leading-{lh}</div>
                                <p className={`leading-${lh} bg-muted/20 p-2 text-sm`}>
                                    Line height {lh}. The quick brown fox jumps over the lazy dog. Multi-line text to demonstrate the line spacing effect visually.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
