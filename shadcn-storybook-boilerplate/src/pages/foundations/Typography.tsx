"use client"



export default function TypographyPage() {
    const typography = [
        {
            group: "Title",
            styles: [
                { name: "title-large", class: "text-title-large", description: "27px / 36px / Bold (700)" },
                { name: "title-medium", class: "text-title-medium", description: "21px / 28px / Bold (700)" },
                { name: "title-small", class: "text-title-small", description: "18px / 24px / Bold (700)" },
            ]
        },
        {
            group: "Body",
            styles: [
                { name: "body-large", class: "text-body-large", description: "16.5px / 22px / Regular (400)" },
                { name: "body-large-strong", class: "text-body-large-strong", description: "16.5px / 22px / Medium (500)" },
                { name: "body-medium", class: "text-body-medium", description: "15px / 20px / Regular (400)" },
                { name: "body-medium-strong", class: "text-body-medium-strong", description: "15px / 20px / Medium (500)" },
                { name: "body-small", class: "text-body-small", description: "13.5px / 18px / Regular (400)" },
                { name: "body-small-strong", class: "text-body-small-strong", description: "13.5px / 18px / Medium (500)" },
            ]
        },
        {
            group: "Caption",
            styles: [
                { name: "caption-large", class: "text-caption-large", description: "13.5px / 18px / Regular (400)" },
                { name: "caption-large-strong", class: "text-caption-large-strong", description: "13.5px / 18px / Medium (500)" },
                { name: "caption-medium", class: "text-caption-medium", description: "12px / 16px / Regular (400)" },
                { name: "caption-medium-strong", class: "text-caption-medium-strong", description: "12px / 16px / Medium (500)" },
                { name: "caption-small", class: "text-caption-small", description: "10.5px / 14px / Regular (400)" },
                { name: "caption-small-strong", class: "text-caption-small-strong", description: "10.5px / 14px / Medium (500)" },
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
        <div className="flex flex-col gap-1800 p-1200 max-w-5xl mx-auto bg-bg-layer min-h-screen">
            <div className="space-y-400">
                <h1 className="text-title-large text-fg-neutral tracking-tight">Typography</h1>
                <p className="text-body-large text-fg-muted">
                    Semantic typography tokens and Base primitives.
                </p>
            </div>

            <div className="flex flex-col gap-1200">
                <div className="space-y-400 border-b border-stroke-neutral pb-400">
                    <h2 className="text-title-medium text-fg-neutral tracking-tight">1. Semantic Typography</h2>
                    <p className="text-body-medium text-fg-muted">Contextual text styles used in components.</p>
                </div>

                {typography.map((group) => (
                    <section key={group.group} className="space-y-800">
                        <h2 className="text-title-small text-fg-neutral tracking-tight border-b border-stroke-neutral pb-200">{group.group}</h2>
                        <div className="flex flex-col">
                            {group.styles.map((style) => (
                                <div key={style.name} className="flex flex-col gap-200 py-800 border-b border-stroke-neutral last:border-0">
                                    <div className="flex items-center justify-between mb-200">
                                        <span className="text-caption-medium text-fg-muted font-mono">{style.name}</span>
                                        <span className="text-caption-small text-fg-muted opacity-60 font-mono">{style.description}</span>
                                    </div>
                                    <p className={`${style.class} text-fg-neutral break-words`}>
                                        The quick brown fox jumps over the lazy dog.
                                    </p>
                                    <p className={`${style.class} text-fg-neutral opacity-50 break-words`}>
                                        다람쥐 헌 쳇바퀴에 타고파. 1234567890
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="flex flex-col gap-1200 pt-800">
                <div className="space-y-400 border-b border-stroke-neutral pb-400">
                    <h2 className="text-title-medium text-fg-neutral tracking-tight">2. Base Typography Tokens</h2>
                    <p className="text-body-medium text-fg-muted">Primitive values for Size, Weight, and Line Height.</p>
                </div>

                <section className="space-y-400">
                    <h2 className="text-title-small text-fg-neutral tracking-tight border-b border-stroke-neutral pb-200">Size & Line Height Pairings</h2>
                    <div className="border border-stroke-neutral rounded-md overflow-hidden">
                        <table className="w-full text-left bg-bg-layer">
                            <thead className="bg-bg-layer-base text-fg-muted border-b border-stroke-neutral">
                                <tr>
                                    <th className="p-400 text-body-small-strong">Token</th>
                                    <th className="p-400 text-body-small-strong">Size</th>
                                    <th className="p-400 text-body-small-strong">Line Height</th>
                                    <th className="p-400 text-body-small-strong">Preview</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stroke-neutral">
                                {baseTypography.map((item) => (
                                    <tr key={item.name}>
                                        <td className="p-400 font-mono text-caption-medium text-fg-muted">
                                            <div className="flex flex-col gap-50">
                                                <span>text-{item.name}</span>
                                                <span className="opacity-50">leading-{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-400 font-mono text-caption-medium text-fg-neutral">{item.size}</td>
                                        <td className="p-400 font-mono text-caption-medium text-fg-neutral">{item.lineHeight}</td>
                                        <td className="p-400">
                                            <p className={`text-${item.name} leading-${item.name} whitespace-nowrap text-fg-neutral`}>
                                                Ag (Text {item.name})
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="space-y-400">
                    <h2 className="text-title-small text-fg-neutral tracking-tight border-b border-stroke-neutral pb-200">Font Weight</h2>
                    <div className="flex flex-col gap-400">
                        {baseFontWeights.map((item) => (
                            <div key={item.name} className="flex items-center gap-800 border-b border-stroke-neutral pb-200 last:border-0">
                                <div className="w-32 text-caption-medium font-mono text-fg-muted flex flex-col">
                                    <span>font-{item.name}</span>
                                    <span className="text-caption-small opacity-50">{item.value}</span>
                                </div>
                                <div className={`font-${item.name} text-title-medium text-fg-neutral`}>
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
