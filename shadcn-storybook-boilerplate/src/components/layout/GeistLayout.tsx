import { AppSidebar } from "@/components/app-sidebar"
import { useLocation } from "react-router-dom"
import React, { useState } from "react"
import { PanelLeft } from "lucide-react"
import styles from "./GeistLayout.module.css"

export default function GeistLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean)
    const isHome = pathSegments.length === 0
    const category = pathSegments[0]
    const componentName = pathSegments[1]

    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className={`${styles.root} bg-bg-layer`}>
            <AppSidebar open={sidebarOpen} />
            <div className={styles.contentArea}>
                <header className={styles.header}>
                    <button
                        onClick={() => setSidebarOpen((v) => !v)}
                        className={`${styles.toggleBtn} text-fg-muted`}
                        aria-label="Toggle sidebar"
                    >
                        <PanelLeft className={styles.iconSize} />
                    </button>
                    <div className={styles.divider} />
                    <nav className={`${styles.breadcrumb} text-body-small`}>
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
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}
