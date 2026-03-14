"use client"

import { Copy, Code, Check, X } from "lucide-react"
import { useState, useEffect } from "react"
import styles from "./IconDetailsPanel.module.css"

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
                className={`${styles.backdrop} bg-bg-layer-overlay`}
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`${styles.panel} bg-bg-layer border-stroke-neutral`}>
                {/* Header */}
                <div className={`${styles.header} border-stroke-neutral`}>
                    <div className={styles.headerTitle}>
                        <h2 className="text-title-small text-fg-neutral">{icon.name}</h2>
                        {icon.tags?.map((tag) => (
                            <span
                                key={tag}
                                className={`${styles.tag} bg-bg-neutral text-caption-small text-fg-muted`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className={`${styles.closeButton} text-fg-muted hover:text-fg-neutral`}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {/* Preview */}
                    <div className={`${styles.preview} bg-bg-neutral border-stroke-neutral`}>
                        <div
                            className={styles.previewScaleWrapper}
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
                                    className={styles.previewImg}
                                />
                            )}
                        </div>
                        {/* Dot grid */}
                        <div
                            className={styles.dotGrid}
                            style={{
                                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </div>

                    {/* Info */}
                    <div className={`${styles.infoRow} text-caption-medium text-fg-muted`}>
                        <span>Preview Size</span>
                        <span className="font-mono">{size}px</span>
                    </div>

                    {/* Divider */}
                    <div className={`${styles.divider} bg-stroke-neutral`} />

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button
                            onClick={handleCopySvg}
                            className={`${styles.actionBtn} ${styles.actionBtnPrimary} bg-bg-neutral text-fg-neutral text-body-small`}
                        >
                            {copyFeedback === "svg" ? (
                                <Check className={styles.actionBtnIcon} />
                            ) : (
                                <Copy className={styles.actionBtnIcon} />
                            )}
                            {copyFeedback === "svg" ? "Copied" : "Copy SVG"}
                        </button>
                        <button
                            onClick={handleCopyJsx}
                            className={`${styles.actionBtn} ${styles.actionBtnOutline} border-stroke-neutral text-fg-neutral text-body-small`}
                        >
                            {copyFeedback === "jsx" ? (
                                <Check className={styles.actionBtnIcon} />
                            ) : (
                                <Code className={styles.actionBtnIcon} />
                            )}
                            {copyFeedback === "jsx" ? "Copied" : "Copy JSX"}
                        </button>
                    </div>

                    {/* SVG Code */}
                    <div className={styles.codeBlock}>
                        <span className="text-body-small text-fg-muted">SVG Code</span>
                        <div className={`${styles.codeScroll} border-stroke-neutral bg-bg-neutral`}>
                            <code className={`${styles.codeContent} text-caption-small font-mono text-fg-neutral`}>
                                {svgContent || "Loading..."}
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
