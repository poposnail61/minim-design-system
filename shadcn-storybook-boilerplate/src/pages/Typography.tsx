import { useState } from "react"

export function Typography() {
    const [fontName, setFontName] = useState("MinimSoftVF")
    const [cssUrl, setCssUrl] = useState("http://localhost:3000")
    const [activeFont, setActiveFont] = useState<{ name: string; url: string } | null>(null)

    const handleApply = () => {
        let url = cssUrl
        if (!url.endsWith(".css")) {
            url = `${url.replace(/\/$/, "")}/release/${fontName}/${fontName}.css`
        }
        setActiveFont({ name: fontName, url })
    }

    return (
        <div className="space-y-800">
            <header className="flex flex-col gap-200">
                <h1 className="text-title-large text-fg-neutral tracking-tight">Typography</h1>
                <p className="text-body-medium text-fg-muted">
                    Preview and test fonts served by the Minim Font Manager.
                </p>
            </header>

            <section className="p-500 border border-stroke-neutral rounded-lg bg-bg-layer space-y-400">
                <h2 className="text-title-small text-fg-neutral">Font Configuration</h2>
                <div className="grid gap-400 md:grid-cols-2">
                    <div className="space-y-200">
                        <label className="text-body-small text-fg-neutral">Font Manager Base URL</label>
                        <input
                            className="w-full h-h36 px-300 rounded-md border border-stroke-neutral bg-bg-field text-body-small text-fg-neutral placeholder:text-fg-placeholder focus:outline-none focus:border-stroke-primary"
                            value={cssUrl}
                            onChange={(e) => setCssUrl(e.target.value)}
                            placeholder="http://localhost:3000"
                        />
                        <p className="text-caption-small text-fg-muted">URL of your running Font Manager</p>
                    </div>
                    <div className="space-y-200">
                        <label className="text-body-small text-fg-neutral">Font Family Name (ID)</label>
                        <div className="flex gap-200">
                            <input
                                className="flex-1 h-h36 px-300 rounded-md border border-stroke-neutral bg-bg-field text-body-small text-fg-neutral placeholder:text-fg-placeholder focus:outline-none focus:border-stroke-primary"
                                value={fontName}
                                onChange={(e) => setFontName(e.target.value)}
                                placeholder="e.g. MinimSoftVF"
                            />
                            <button
                                onClick={handleApply}
                                className="h-h36 px-400 rounded-md bg-bg-neutral-solid text-fg-neutral-inverted text-body-small hover:bg-bg-muted-solid transition-colors"
                            >
                                Load Font
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {activeFont && (
                <section className="space-y-500">
                    <link rel="stylesheet" href={activeFont.url} />

                    <div className="p-400 rounded-md bg-bg-neutral border border-stroke-neutral">
                        <p className="text-caption-medium text-fg-muted mb-100">
                            Loaded: <code className="font-mono text-fg-neutral">{activeFont.url}</code>
                        </p>
                        <p className="text-caption-medium text-fg-secondary">
                            ● Active Font Family: {activeFont.name}
                        </p>
                    </div>

                    <div className="space-y-800" style={{ fontFamily: `"${activeFont.name}", sans-serif` }}>
                        <div className="space-y-200">
                            <h3 className="text-title-small text-fg-neutral border-b border-stroke-neutral pb-200">Headings</h3>
                            <div className="space-y-400 text-fg-neutral">
                                <h1 className="text-2000">Heading 1 — The quick brown fox</h1>
                                <h2 className="text-1600">Heading 2 — The quick brown fox</h2>
                                <h3 className="text-1200">Heading 3 — The quick brown fox</h3>
                                <h4 className="text-900">Heading 4 — The quick brown fox</h4>
                            </div>
                        </div>

                        <div className="space-y-200">
                            <h3 className="text-title-small text-fg-neutral border-b border-stroke-neutral pb-200">Body Text</h3>
                            <p className="text-body-large text-fg-neutral leading-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-body-large-strong text-fg-neutral leading-600">
                                This is bold text using the same font family.
                            </p>
                        </div>

                        <div className="space-y-200">
                            <h3 className="text-title-small text-fg-neutral border-b border-stroke-neutral pb-200">Korean Support</h3>
                            <p className="text-800 text-fg-neutral leading-700">
                                다람쥐 헌 쳇바퀴에 타고파.
                                키스의 고유조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다.
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
