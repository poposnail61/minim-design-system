"use client"

import { Copy, Code, Check } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

interface Icon {
    name: string
    url: string
    tags?: string[]
}

interface IconDetailsPanelProps {
    icon: Icon | null
    onClose: () => void
    color: string | null
    setColor: (color: string | null) => void
    size: number
    setSize: (size: number) => void
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
        setCopyFeedback("SVG Copied!")
        setTimeout(() => setCopyFeedback(null), 2000)
    }

    const handleCopyJsx = () => {
        const jsx = `<i class="icon icon-${icon?.name}"></i>`
        navigator.clipboard.writeText(jsx)
        setCopyFeedback("JSX Copied!")
        setTimeout(() => setCopyFeedback(null), 2000)
    }

    // Using Sheet logic controlled by parent or internal state?
    // Parent controls visibility via `icon` prop, so we render a Sheet that is open when icon is present.
    // However, Shadcn Sheet `open` prop is boolean.

    return (
        <Sheet open={!!icon} onOpenChange={(open) => !open && onClose()}>
            <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader className="mb-6">
                    <SheetTitle className="flex items-center gap-2">
                        {icon?.name}
                        {icon?.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] font-normal">
                                {tag}
                            </Badge>
                        ))}
                    </SheetTitle>
                </SheetHeader>

                {icon && (
                    <div className="space-y-8">
                        {/* Preview */}
                        <div className="aspect-square bg-muted/30 rounded-2xl flex items-center justify-center border border-border relative overflow-hidden group">
                            <div
                                className="transition-all duration-300"
                                style={{
                                    transform: `scale(${size / 24})`, // Visual scaling
                                }}
                            >
                                {color ? (
                                    <i
                                        className={`icon icon-${icon.name} block bg-current`}
                                        style={{
                                            width: "24px", // Base size
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

                            {/* Grid Pattern */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                                style={{
                                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                        </div>

                        {/* Controls */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-3">
                                    <label className="text-sm font-medium">Preview Size</label>
                                    <span className="text-sm text-muted-foreground">{size}px</span>
                                </div>
                                {/* Slider logic inherited from parent state, ensuring sync */}
                            </div>
                        </div>

                        <Separator />

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button onClick={handleCopySvg} className="w-full" variant="secondary">
                                {copyFeedback === "SVG Copied!" ? (
                                    <Check className="w-4 h-4 mr-2" />
                                ) : (
                                    <Copy className="w-4 h-4 mr-2" />
                                )}
                                {copyFeedback === "SVG Copied!" ? "Copied" : "Copy SVG"}
                            </Button>
                            <Button onClick={handleCopyJsx} className="w-full" variant="outline">
                                {copyFeedback === "JSX Copied!" ? (
                                    <Check className="w-4 h-4 mr-2" />
                                ) : (
                                    <Code className="w-4 h-4 mr-2" />
                                )}
                                {copyFeedback === "JSX Copied!" ? "Copied" : "Copy JSX"}
                            </Button>
                        </div>

                        {/* SVG Code Preview */}
                        <div className="space-y-2">
                            <span className="text-sm font-medium text-muted-foreground">SVG Code</span>
                            <ScrollArea className="h-40 w-full rounded-md border bg-muted/50 p-4">
                                <code className="text-xs font-mono break-all whitespace-pre-wrap">
                                    {svgContent || "Loading..."}
                                </code>
                            </ScrollArea>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
