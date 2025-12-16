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
        { name: "300", value: "9px" },
        { name: "350", value: "10.5px" },
        { name: "400", value: "12px" },
        { name: "450", value: "13.5px" },
        { name: "500", value: "15px" },
        { name: "550", value: "16.5px" },
        { name: "600", value: "18px" },
        { name: "700", value: "21px" },
        { name: "800", value: "24px" },
        { name: "900", value: "27px" },
        { name: "1200", value: "36px" },
        { name: "1600", value: "48px" },
        { name: "2000", value: "60px" },
    ]
    const baseFontWeights = [
        { name: "300", value: "300" },
        { name: "400", value: "400" },
        { name: "500", value: "500" },
        { name: "600", value: "600" },
        { name: "700", value: "700" },
    ]
    const baseLineHeights = [
        { name: "300", value: "12px" },
        { name: "350", value: "14px" },
        { name: "400", value: "16px" },
        { name: "450", value: "18px" },
        { name: "500", value: "20px" },
        { name: "550", value: "22px" },
        { name: "600", value: "24px" },
        { name: "700", value: "28px" },
        { name: "800", value: "32px" },
        { name: "900", value: "36px" },
        { name: "1200", value: "48px" },
        { name: "1600", value: "64px" },
        { name: "2000", value: "80px" },
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
                        {baseFontSizes.map((item) => (
                            <div key={item.name} className="flex items-baseline gap-8 border-b pb-2 last:border-0">
                                <div className="w-32 text-sm font-mono text-muted-foreground flex flex-col">
                                    <span>text-{item.name}</span>
                                    <span className="text-xs opacity-50">{item.value}</span>
                                </div>
                                <div className={`text-${item.name}`}>
                                    Ag (Size {item.name})
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Font Weight</h2>
                    <div className="flex flex-col gap-4">
                        {baseFontWeights.map((item) => (
                            <div key={item.name} className="flex items-center gap-8 border-b pb-2 last:border-0">
                                <div className="w-32 text-sm font-mono text-muted-foreground flex flex-col">
                                    <span>font-{item.name}</span>
                                    <span className="text-xs opacity-50">{item.value}</span>
                                </div>
                                <div className={`font-${item.name} text-2xl`}>
                                    Ag (Weight {item.name})
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Line Height</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {baseLineHeights.map((item) => (
                            <div key={item.name} className="border p-4 rounded-lg">
                                <div className="mb-2 text-sm font-mono text-muted-foreground flex justify-between">
                                    <span>leading-{item.name}</span>
                                    <span className="opacity-50">{item.value}</span>
                                </div>
                                <p className={`leading-${item.name} bg-muted/20 p-2 text-sm`}>
                                    Line height {item.name}. The quick brown fox jumps over the lazy dog. Multi-line text to demonstrate the line spacing effect visually.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
