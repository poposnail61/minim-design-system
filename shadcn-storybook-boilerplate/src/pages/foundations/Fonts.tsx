import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

const fonts = [
    { name: "font-sans", display: "Minim Base VF", weightRange: [100, 900] },
    { name: "font-soft", display: "Minim Soft VF", weightRange: [100, 900] },
]

const glyphs = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "=",
    "[", "]", "{", "}", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "?",
]

const CODE_TAB = ["HTML", "CSS"] as const

export default function Fonts() {
    const [selectedFont, setSelectedFont] = useState(fonts[0])
    const [fontSize, setFontSize] = useState(60)
    const [fontWeight, setFontWeight] = useState(400)
    const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog.")
    const [activeTab, setActiveTab] = useState<typeof CODE_TAB[number]>("HTML")
    const [copied, setCopied] = useState(false)

    const htmlCode = `<div class="${selectedFont.name}"> ... </div>`
    const cssCode = `font-family: var(--${selectedFont.name});`
    const currentCode = activeTab === "HTML" ? htmlCode : cssCode

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-col gap-800 p-1200 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-400">
                <div className="space-y-400">
                    <h1 className="text-title-large text-fg-neutral tracking-tight">Fonts</h1>
                    <p className="text-body-large text-fg-muted">Minim Design System typography foundation.</p>
                </div>
                {/* Font Switcher */}
                <div className="flex items-center gap-100 bg-bg-neutral p-100 rounded-lg">
                    {fonts.map((font) => (
                        <button
                            key={font.name}
                            onClick={() => setSelectedFont(font)}
                            className={cn(
                                "flex items-center gap-200 h-h32 px-300 rounded-md text-body-small transition-colors",
                                selectedFont.name === font.name
                                    ? "bg-bg-layer text-fg-neutral shadow-sm"
                                    : "text-fg-muted hover:text-fg-neutral"
                            )}
                        >
                            {font.display}
                            {selectedFont.name === font.name && <Check className="w-3.5 h-3.5" />}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-800">
                {/* Preview */}
                <div className="rounded-xl border border-stroke-neutral overflow-hidden">
                    {/* Controls */}
                    <div className="flex items-center gap-500 px-500 py-300 border-b border-stroke-neutral bg-bg-neutral">
                        <span className="text-body-small text-fg-muted">Live Preview</span>
                        <div className="flex items-center gap-300 flex-1">
                            <span className="text-caption-small text-fg-muted w-16">Size {fontSize}px</span>
                            <input
                                type="range"
                                min={12}
                                max={120}
                                step={1}
                                value={fontSize}
                                onChange={(e) => setFontSize(Number(e.target.value))}
                                className="flex-1 accent-fg-primary"
                            />
                        </div>
                        <div className="flex items-center gap-300 flex-1">
                            <span className="text-caption-small text-fg-muted w-16">Weight {fontWeight}</span>
                            <input
                                type="range"
                                min={selectedFont.weightRange[0]}
                                max={selectedFont.weightRange[1]}
                                step={100}
                                value={fontWeight}
                                onChange={(e) => setFontWeight(Number(e.target.value))}
                                className="flex-1 accent-fg-primary"
                            />
                        </div>
                    </div>
                    {/* Text area */}
                    <div className="p-800 min-h-[200px] flex items-center justify-center bg-bg-layer">
                        <textarea
                            value={previewText}
                            onChange={(e) => setPreviewText(e.target.value)}
                            className={cn(
                                "min-h-[160px] w-full resize-none text-center border-none outline-none bg-transparent text-fg-neutral",
                                selectedFont.name
                            )}
                            style={{ fontSize: `${fontSize}px`, fontWeight, lineHeight: 1.5 }}
                        />
                    </div>
                </div>

                {/* Usage */}
                <div className="space-y-400">
                    <h3 className="text-title-small text-fg-neutral">How to Use</h3>
                    <div className="rounded-xl border border-stroke-neutral overflow-hidden">
                        <div className="flex items-center justify-between px-400 py-300 bg-bg-neutral border-b border-stroke-neutral">
                            <span className="text-body-small-strong text-fg-neutral">{selectedFont.display}</span>
                            <div className="flex items-center gap-100">
                                {CODE_TAB.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={cn(
                                            "px-300 py-100 rounded-md text-caption-medium transition-colors",
                                            activeTab === tab
                                                ? "bg-bg-layer text-fg-neutral shadow-sm"
                                                : "text-fg-muted hover:text-fg-neutral"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-400">
                            <pre className="p-400 rounded-lg bg-bg-neutral-solid text-fg-neutral-inverted text-caption-medium font-mono overflow-x-auto">
                                {currentCode}
                            </pre>
                            <button
                                onClick={copyToClipboard}
                                className="absolute top-600 right-600 p-150 rounded text-fg-neutral-inverted hover:bg-bg-muted-solid transition-colors"
                            >
                                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info & Glyphs */}
                <div className="grid gap-800 md:grid-cols-3">
                    <div className="md:col-span-1 rounded-xl border border-stroke-neutral bg-bg-layer p-500 space-y-400">
                        <h4 className="text-body-small-strong text-fg-neutral">About</h4>
                        <dl className="space-y-200 text-body-small">
                            <div className="flex justify-between">
                                <dt className="text-fg-muted">Family</dt>
                                <dd className="text-fg-neutral">{selectedFont.display}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-fg-muted">Style</dt>
                                <dd className="text-fg-neutral">Variable</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-fg-muted">Version</dt>
                                <dd className="text-fg-neutral">1.0.0</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-fg-muted">License</dt>
                                <dd className="text-fg-neutral">OFL</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="md:col-span-2 rounded-xl border border-stroke-neutral bg-bg-layer p-500 space-y-400">
                        <h4 className="text-body-small-strong text-fg-neutral">Glyphs</h4>
                        <div className={cn("grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-200", selectedFont.name)}>
                            {glyphs.map((char) => (
                                <div
                                    key={char}
                                    title={`Character: ${char}`}
                                    className="aspect-square flex items-center justify-center text-body-medium border border-stroke-neutral rounded hover:bg-bg-neutral transition-colors cursor-default text-fg-neutral"
                                >
                                    {char}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
