"use client"

import { Copy, Code, Check, X } from "lucide-react"
import { useState, useEffect } from "react"

interface Icon {
    name: string
    url: string
    tags?: string[]
}

interface IconDetailsPanelProps {
    icon: Icon | null
    onClose: () => void
    color: string | null
    size: number
}

export default function IconDetailsPanel({
    icon,
    onClose,
    color,
    size,
}: IconDetailsPanelProps) {
    const [svgContent, setSvgContent] = useState<string>("")
    const [copyFeedback, setCopyFeedback] = useState<string | null>(null)

    useEffect(() => {
        if (icon) {
            fetch(icon.url)
                .then((res) => res.text())
                .then((text) => setSvgContent(text))
                .catch((err) => console.error("Failed to load SVG content", err))
        }
    }, [icon])

    const handleCopySvg = () => {
        navigator.clipboard.writeText(svgContent)
        setCopyFeedback("svg")
        setTimeout(() => setCopyFeedback(null), 2000)
    }

    const handleCopyJsx = () => {
        const jsx = `<i class="icon icon-${icon?.name}"></i>`
        navigator.clipboard.writeText(jsx)
        setCopyFeedback("jsx")
        setTimeout(() => setCopyFeedback(null), 2000)
    }

    if (!icon) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-bg-layer-overlay z-40"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="fixed right-0 top-0 h-full w-[400px] sm:w-[480px] bg-bg-layer border-l border-stroke-neutral z-50 flex flex-col overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between px-500 py-400 border-b border-stroke-neutral">
                    <div className="flex items-center gap-200 flex-wrap">
                        <h2 className="text-title-small text-fg-neutral">{icon.name}</h2>
                        {icon.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-200 py-50 rounded-full bg-bg-neutral text-caption-small text-fg-muted"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-100 rounded-md text-fg-muted hover:text-fg-neutral hover:bg-bg-neutral transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-500 p-500">
                    {/* Preview */}
                    <div className="aspect-square bg-bg-neutral rounded-2xl flex items-center justify-center border border-stroke-neutral relative overflow-hidden">
                        <div
                            className="transition-all duration-300"
                            style={{ transform: `scale(${size / 24})` }}
                        >
                            {color ? (
                                <i
                                    className={`icon icon-${icon.name} block`}
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        maskImage: `url(${icon.url})`,
                                        WebkitMaskImage: `url(${icon.url})`,
                                        maskSize: "100% 100%",
                                        WebkitMaskSize: "100% 100%",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskPosition: "center",
                                        WebkitMaskPosition: "center",
                                        backgroundColor: color,
                                    }}
                                />
                            ) : (
                                <img
                                    src={icon.url}
                                    alt={icon.name}
                                    className="w-6 h-6 object-contain"
                                />
                            )}
                        </div>
                        {/* Dot grid */}
                        <div
                            className="absolute inset-0 pointer-events-none opacity-[0.03]"
                            style={{
                                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between text-caption-medium text-fg-muted">
                        <span>Preview Size</span>
                        <span className="font-mono">{size}px</span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-stroke-neutral" />

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-300">
                        <button
                            onClick={handleCopySvg}
                            className="flex items-center justify-center gap-200 h-h36 px-400 rounded-md bg-bg-neutral text-fg-neutral text-body-small hover:bg-bg-neutral-solid hover:text-fg-neutral-inverted transition-colors"
                        >
                            {copyFeedback === "svg" ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                            {copyFeedback === "svg" ? "Copied" : "Copy SVG"}
                        </button>
                        <button
                            onClick={handleCopyJsx}
                            className="flex items-center justify-center gap-200 h-h36 px-400 rounded-md border border-stroke-neutral text-fg-neutral text-body-small hover:bg-bg-neutral transition-colors"
                        >
                            {copyFeedback === "jsx" ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <Code className="w-4 h-4" />
                            )}
                            {copyFeedback === "jsx" ? "Copied" : "Copy JSX"}
                        </button>
                    </div>

                    {/* SVG Code */}
                    <div className="space-y-200">
                        <span className="text-body-small text-fg-muted">SVG Code</span>
                        <div className="h-40 w-full rounded-md border border-stroke-neutral bg-bg-neutral overflow-y-auto p-300">
                            <code className="text-caption-small font-mono text-fg-neutral break-all whitespace-pre-wrap">
                                {svgContent || "Loading..."}
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
