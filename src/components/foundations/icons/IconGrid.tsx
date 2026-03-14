"use client"

import { Search, Check } from "lucide-react"
import { useState } from "react"
import styles from "./IconGrid.module.css"

interface Icon {
    name: string
    url: string
    tags?: string[]
}

interface IconGridProps {
    icons: Icon[]
    onIconClick?: (icon: Icon) => void
    size?: number
    selectedColor?: string | null
}

const IconItem = ({
    icon,
    size = 24,
    onCopy,
    copied,
    selectedColor,
    onClick,
}: {
    icon: Icon
    size: number
    onCopy: (text: string, name: string) => void
    copied: string | null
    selectedColor: string | null
    onClick?: () => void
}) => {
    return (
        <div
            title={icon.name}
            className={`${styles.card} bg-bg-layer border-stroke-neutral`}
            onClick={() => {
                if (onClick) {
                    onClick()
                } else {
                    onCopy(`<i class="icon icon-${icon.name}"></i>`, icon.name)
                }
            }}
        >
            {/* Icon Content */}
            <div className={styles.iconArea}>
                <div className={`${styles.iconScaleWrapper} text-fg-neutral`}>
                    {selectedColor ? (
                        <i
                            className={`icon icon-${icon.name} block`}
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                maskImage: `url(${icon.url})`,
                                WebkitMaskImage: `url(${icon.url})`,
                                maskSize: "100% 100%",
                                WebkitMaskSize: "100% 100%",
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskPosition: "center",
                                backgroundColor: selectedColor,
                            }}
                        />
                    ) : (
                        <img
                            src={icon.url}
                            alt={icon.name}
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                objectFit: "contain",
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Name */}
            <div className={`${styles.iconName} bg-bg-neutral border-stroke-neutral text-caption-small text-fg-muted`}>
                {icon.name}
            </div>

            {/* Copy Feedback */}
            {!onClick && copied === icon.name && (
                <div className={`${styles.copyOverlay} bg-bg-neutral-solid`}>
                    <Check className={`${styles.copyOverlayIcon} text-fg-neutral-inverted`} />
                </div>
            )}
        </div>
    )
}

export default function IconGrid({
    icons,
    onIconClick,
    size = 24,
    selectedColor = null,
}: IconGridProps) {
    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = (text: string, name: string) => {
        navigator.clipboard.writeText(text)
        setCopied(name)
        setTimeout(() => setCopied(null), 2000)
    }

    if (icons.length === 0) {
        return (
            <div className={`${styles.emptyState} bg-bg-neutral border-stroke-neutral`}>
                <Search className={`${styles.emptyIcon} text-fg-muted`} />
                <p className="text-body-small-strong text-fg-muted">No icons found matching your criteria.</p>
                <p className="text-caption-medium text-fg-muted" style={{ marginTop: "var(--space-100)" }}>Try adjusting your search or filters.</p>
            </div>
        )
    }

    return (
        <div className={styles.grid}>
            {icons.map((icon) => (
                <IconItem
                    key={icon.name}
                    icon={icon}
                    size={size}
                    onCopy={copyToClipboard}
                    copied={copied}
                    selectedColor={selectedColor}
                    onClick={onIconClick ? () => onIconClick(icon) : undefined}
                />
            ))}
        </div>
    )
}
