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

    const baseTypography = [
        { name: "300", size: "9px", lineHeight: "12px" },
        { name: "350", size: "10.5px", lineHeight: "14px" },
        { name: "400", size: "12px", lineHeight: "16px" },
        { name: "450", size: "13.5px", lineHeight: "18px" },
        { name: "500", size: "15px", lineHeight: "20px" },
        { name: "550", size: "16.5px", lineHeight: "22px" },
        { name: "600", size: "18px", lineHeight: "24px" },
        { name: "700", size: "21px", lineHeight: "28px" },
        { name: "800", size: "24px", lineHeight: "32px" },
        { name: "900", size: "27px", lineHeight: "36px" },
        { name: "1200", size: "36px", lineHeight: "48px" },
        { name: "1600", size: "48px", lineHeight: "64px" },
        { name: "2000", size: "60px", lineHeight: "80px" },
    ]

    const baseFontWeights = [
        { name: "300", value: "300" },
        { name: "400", value: "400" },
        { name: "500", value: "500" },
        { name: "600", value: "600" },
        { name: "700", value: "700" },
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
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Size & Line Height Pairings</h2>
                    <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-left bg-card">
                            <thead className="bg-muted text-muted-foreground border-b">
                                <tr>
                                    <th className="p-4 font-medium">Token</th>
                                    <th className="p-4 font-medium">Size</th>
                                    <th className="p-4 font-medium">Line Height</th>
                                    <th className="p-4 font-medium">Preview</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {baseTypography.map((item) => (
                                    <tr key={item.name}>
                                        <td className="p-4 font-mono text-sm text-muted-foreground">{item.name}</td>
                                        <td className="p-4 font-mono text-sm">{item.size}</td>
                                        <td className="p-4 font-mono text-sm">{item.lineHeight}</td>
                                        <td className="p-4">
                                            <p className={`text-${item.name} leading-${item.name} whitespace-nowrap`}>
                                                Ag (Text {item.name})
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
            </div>
        </div>
    )
}
