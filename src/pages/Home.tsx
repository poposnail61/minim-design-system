import styles from './Home.module.css'

const features = [
    {
        icon: '◈',
        title: 'Token-based',
        description: 'Every value — color, spacing, radius, shadow — is a named design token. Consistent and predictable across all surfaces.',
    },
    {
        icon: '⬡',
        title: 'Framework-agnostic',
        description: 'Tokens are defined in plain CSS variables. Use them in React, Vue, Svelte, or vanilla HTML without any dependency.',
    },
    {
        icon: '◎',
        title: 'Accessible by default',
        description: 'Semantic color roles ensure accessible contrast ratios. Components follow WCAG 2.1 AA guidelines out of the box.',
    },
    {
        icon: '⊞',
        title: 'Semantic structure',
        description: 'Colors, typography, and spacing are organized into semantic groups — Background, Foreground, Stroke — to remove ambiguity.',
    },
    {
        icon: '⟳',
        title: 'Variable fonts',
        description: 'Minim Base VF and Minim Soft VF ship as variable fonts supporting the full weight axis from 100 to 900.',
    },
    {
        icon: '◻',
        title: 'Living documentation',
        description: 'Every token is interactive. You can explore colors, type scales, spacing, shadows, and sizes live in this system.',
    },
]

export function Home() {
    return (
        <div className={`${styles.page} bg-bg-layer`}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroEyebrow} bg-bg-neutral`}>
                    <span className="text-caption-medium text-fg-muted font-mono">v1.0.0</span>
                    <span className="text-caption-medium text-fg-muted">·</span>
                    <span className="text-caption-medium text-fg-muted">Design System</span>
                </div>

                <div className={styles.heroHeading}>
                    <h1 className="text-title-large text-fg-neutral">Minim Design System</h1>
                    <p className={`${styles.heroDesc} text-body-large text-fg-muted`}>
                        A token-based, framework-agnostic design system built for precision and accessibility.
                        Every decision starts with a named token.
                    </p>
                </div>

                <div className={styles.pillsRow}>
                    {['Colors', 'Typography', 'Sizes', 'Effects', 'Fonts', 'Icons'].map((label) => (
                        <span key={label} className={`${styles.pill} bg-bg-neutral text-body-small text-fg-muted`}>
                            {label}
                        </span>
                    ))}
                </div>
            </section>

            <hr className={styles.divider} />

            {/* Features */}
            <section>
                <div className={styles.grid}>
                    {features.map((f) => (
                        <div key={f.title} className={`${styles.card} bg-bg-layer`}>
                            <div className={`${styles.cardIcon} bg-bg-neutral`}>
                                <span className="text-body-medium text-fg-muted">{f.icon}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <p className="text-body-small-strong text-fg-neutral">{f.title}</p>
                                <p className="text-body-small text-fg-muted">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className={styles.divider} />

            {/* Footer */}
            <footer className={styles.footer}>
                <span className="text-caption-medium text-fg-muted">
                    Minim Design System © 2024
                </span>
                <div className={styles.footerLinks}>
                    <span className="text-caption-medium text-fg-muted font-mono">minim-ds</span>
                </div>
            </footer>
        </div>
    )
}
