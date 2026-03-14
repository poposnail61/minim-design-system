import { AppSidebar } from "@/components/app-sidebar"
import { useLocation } from "react-router-dom"
import React, { useState } from "react"
import { PanelLeft } from "lucide-react"

export default function GeistLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean)
    const isHome = pathSegments.length === 0
    const category = pathSegments[0]
    const componentName = pathSegments[1]

    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className="flex h-screen overflow-hidden bg-bg-layer">
            <AppSidebar open={sidebarOpen} />
            <div className="flex flex-1 flex-col min-w-0">
                <header className="flex h-16 shrink-0 items-center gap-200 border-b border-stroke-neutral px-400">
                    <button
                        onClick={() => setSidebarOpen((v) => !v)}
                        className="p-100 rounded-md text-fg-muted hover:text-fg-neutral hover:bg-bg-neutral transition-colors"
                        aria-label="Toggle sidebar"
                    >
                        <PanelLeft className="w-4 h-4" />
                    </button>
                    <div className="w-px h-4 bg-stroke-neutral mx-100" />
                    <nav className="flex items-center gap-100 text-body-small">
                        <span className="text-fg-muted">Minim Design System</span>
                        {!isHome && (
                            <>
                                <span className="text-fg-muted">/</span>
                                <span className="capitalize text-fg-neutral">{category}</span>
                            </>
                        )}
                        {componentName && (
                            <>
                                <span className="text-fg-muted">/</span>
                                <span className="capitalize text-fg-neutral">{componentName.replace(/-/g, " ")}</span>
                            </>
                        )}
                    </nav>
                </header>
                <main className="flex flex-1 flex-col overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
