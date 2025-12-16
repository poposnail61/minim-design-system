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

    return (
        <div className="flex flex-col gap-12 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Typography</h1>
                <p className="text-lg text-muted-foreground">
                    Semantic typography tokens for headings, body text, and captions.
                </p>
            </div>

            <div className="space-y-12">
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
        </div>
    )
}
