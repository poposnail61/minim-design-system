"use client"

import { Search, Check } from "lucide-react"
import { useState } from "react"

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
            className="group relative flex flex-col bg-bg-layer rounded-xl overflow-hidden transition-all duration-200 cursor-pointer border border-stroke-neutral hover:border-stroke-neutral-strong hover:shadow-sm"
            onClick={() => {
                if (onClick) {
                    onClick()
                } else {
                    onCopy(`<i class="icon icon-${icon.name}"></i>`, icon.name)
                }
            }}
        >
            {/* Icon Content */}
            <div className="flex-1 flex items-center justify-center p-400 min-h-[100px]">
                <div className="transition-transform duration-200 group-hover:scale-110 text-fg-neutral">
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
            <div className="px-300 py-200 bg-bg-neutral border-t border-stroke-neutral text-caption-small text-center text-fg-muted truncate group-hover:text-fg-neutral">
                {icon.name}
            </div>

            {/* Copy Feedback */}
            {!onClick && copied === icon.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg-neutral-solid rounded-xl">
                    <Check className="w-6 h-6 text-fg-neutral-inverted" />
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
            <div className="text-center py-1800 bg-bg-neutral rounded-xl border border-dashed border-stroke-neutral">
                <Search className="w-10 h-10 text-fg-muted mx-auto mb-400" />
                <p className="text-body-small-strong text-fg-muted">No icons found matching your criteria.</p>
                <p className="text-caption-medium text-fg-muted mt-100">Try adjusting your search or filters.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-400 pb-1200">
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
