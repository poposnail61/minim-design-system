"use client"

import { Search, Check } from "lucide-react"
import { useState } from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

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
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        className="group relative flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-200 cursor-pointer border border-gray-100 hover:border-gray-200 hover:shadow-md"
                        onClick={() => {
                            if (onClick) {
                                onClick()
                            } else {
                                onCopy(`<i class="icon icon-${icon.name}"></i>`, icon.name)
                            }
                        }}
                    >
                        {/* Main Icon Content Area */}
                        <div className="flex-1 flex items-center justify-center p-4 min-h-[100px]">
                            <div className="transition-transform duration-200 group-hover:scale-110 text-gray-700 group-hover:text-gray-900">
                                {selectedColor ? (
                                    <i
                                        className={`icon icon-${icon.name} block bg-current`}
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

                        {/* Footer Name */}
                        <div className="px-3 py-2 bg-gray-50/50 border-t border-gray-50 text-xs text-center text-gray-500 truncate group-hover:text-gray-900">
                            {icon.name}
                        </div>

                        {/* Copied Feedback Overlay */}
                        {!onClick && copied === icon.name && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 rounded-xl animate-in fade-in duration-200 z-20">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                        )}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{icon.name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
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
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <Search className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No icons found matching your criteria.</p>
                <p className="text-sm text-gray-400 mt-1">Try adjusting your search or filters.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 pb-12">
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
