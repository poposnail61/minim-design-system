import { GalleryVerticalEnd, Home, Layers, Type, Palette, Ruler, Sparkles, ImageIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import styles from "./AppSidebar.module.css"

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
        <aside className={`${styles.aside} bg-bg-layer`}>
            {/* Header */}
            <div className={styles.sidebarHeader}>
                <Link to="/" className={styles.logoLink}>
                    <div className={`${styles.logoIcon} bg-bg-primary-solid text-fg-neutral-inverted`}>
                        <GalleryVerticalEnd className={styles.logoIconSize} />
                    </div>
                    <div className={styles.logoText}>
                        <span className="text-body-small-strong text-fg-neutral">Minim Design</span>
                        <span className="text-caption-small text-fg-muted">v1.0.0</span>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav className={styles.nav}>
                {/* Introduction */}
                <Link
                    to="/"
                    className={
                        location.pathname === "/"
                            ? `${styles.navLink} ${styles.navLinkActive} text-body-small`
                            : `${styles.navLink} text-fg-muted text-body-small`
                    }
                >
                    <Home className={styles.navIcon} />
                    Introduction
                </Link>

                {/* Foundations */}
                <div className={styles.sectionGroup}>
                    <p className={`${styles.sectionLabel} text-caption-medium text-fg-muted`}>Foundations</p>
                    <div className={styles.sectionLinks}>
                        {foundations.map(({ label, path, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={
                                    location.pathname === path
                                        ? `${styles.navLink} ${styles.navLinkActive} text-body-small`
                                        : `${styles.navLink} text-fg-muted text-body-small`
                                }
                            >
                                <Icon className={styles.navIcon} />
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Components */}
                <div className={styles.sectionGroup}>
                    <p className={`${styles.sectionLabel} text-caption-medium text-fg-muted`}>Components</p>
                    <div className={`${styles.comingSoon} text-caption-medium text-fg-muted`}>
                        Coming soon
                    </div>
                </div>
            </nav>
        </aside>
    )
}
