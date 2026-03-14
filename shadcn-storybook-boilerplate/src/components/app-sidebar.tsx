import { GalleryVerticalEnd, Home, Layers, Type, Palette, Ruler, Sparkles, ImageIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const foundations = [
    { label: "Font", path: "/foundations/font", icon: Type },
    { label: "Icons", path: "/foundations/icon", icon: ImageIcon },
    { label: "Color", path: "/foundations/color", icon: Palette },
    { label: "Typography", path: "/foundations/typography", icon: Layers },
    { label: "Size & Spacing", path: "/foundations/size", icon: Ruler },
    { label: "Effects", path: "/foundations/effect", icon: Sparkles },
]

interface AppSidebarProps {
    open: boolean
}

export function AppSidebar({ open }: AppSidebarProps) {
    const location = useLocation()

    if (!open) return null

    return (
        <aside className="w-64 shrink-0 flex flex-col border-r border-stroke-neutral bg-bg-layer overflow-y-auto">
            {/* Header */}
            <div className="flex h-16 items-center px-400 border-b border-stroke-neutral">
                <Link to="/" className="flex items-center gap-300">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-bg-primary-solid text-fg-neutral-inverted">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-body-small-strong text-fg-neutral">Minim Design</span>
                        <span className="text-caption-small text-fg-muted">v1.0.0</span>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-100 p-300">
                {/* Introduction */}
                <Link
                    to="/"
                    className={cn(
                        "flex items-center gap-300 px-300 py-200 rounded-md text-body-small transition-colors",
                        location.pathname === "/"
                            ? "bg-bg-neutral text-fg-neutral font-medium"
                            : "text-fg-muted hover:bg-bg-neutral hover:text-fg-neutral"
                    )}
                >
                    <Home className="w-4 h-4 shrink-0" />
                    Introduction
                </Link>

                {/* Foundations */}
                <div className="mt-300">
                    <p className="px-300 mb-100 text-caption-medium text-fg-muted uppercase tracking-wide">Foundations</p>
                    <div className="flex flex-col gap-50">
                        {foundations.map(({ label, path, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={cn(
                                    "flex items-center gap-300 px-300 py-200 rounded-md text-body-small transition-colors",
                                    location.pathname === path
                                        ? "bg-bg-neutral text-fg-neutral font-medium"
                                        : "text-fg-muted hover:bg-bg-neutral hover:text-fg-neutral"
                                )}
                            >
                                <Icon className="w-4 h-4 shrink-0" />
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Components - placeholder section for future */}
                <div className="mt-300">
                    <p className="px-300 mb-100 text-caption-medium text-fg-muted uppercase tracking-wide">Components</p>
                    <div className="px-300 py-200 text-caption-medium text-fg-muted italic">
                        Coming soon
                    </div>
                </div>
            </nav>
        </aside>
    )
}
