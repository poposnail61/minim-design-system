import styles from './Effects.module.css'

const shadows = [
    {
        name: 'none',
        label: 'None',
        value: 'none',
        cssValue: 'none',
    },
    {
        name: 'sm',
        label: 'Small',
        value: '0 1px 2px rgba(0,0,0,0.08)',
        cssValue: '0 1px 2px rgba(0,0,0,0.08)',
    },
    {
        name: 'md',
        label: 'Medium',
        value: '0 2px 8px rgba(0,0,0,0.10)',
        cssValue: '0 2px 8px rgba(0,0,0,0.10)',
    },
    {
        name: 'lg',
        label: 'Large',
        value: '0 4px 16px rgba(0,0,0,0.12)',
        cssValue: '0 4px 16px rgba(0,0,0,0.12)',
    },
    {
        name: 'xl',
        label: 'Extra Large',
        value: '0 8px 32px rgba(0,0,0,0.16)',
        cssValue: '0 8px 32px rgba(0,0,0,0.16)',
    },
]

export default function EffectsPage() {
    return (
        <div className={`${styles.page} bg-bg-layer`}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className="text-title-large text-fg-neutral">Effects</h1>
                <p className="text-body-large text-fg-muted">
                    Shadows and elevation levels used across Minim components.
                </p>
            </div>

            {/* Shadows section */}
            <section>
                <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                    1. Shadows
                </h2>

                <div className={styles.shadowGrid}>
                    {shadows.map((shadow) => (
                        <div key={shadow.name} className={styles.shadowCard}>
                            <div
                                className={`${styles.shadowBox} bg-bg-layer`}
                                style={{ boxShadow: shadow.value }}
                            >
                                <span className="text-caption-medium text-fg-muted font-mono">
                                    shadow-{shadow.name}
                                </span>
                            </div>
                            <div className={styles.shadowMeta}>
                                <span className="text-body-small-strong text-fg-neutral">{shadow.label}</span>
                                <span
                                    className="text-caption-medium text-fg-muted font-mono"
                                    style={{ textAlign: 'center', wordBreak: 'break-all' }}
                                >
                                    {shadow.cssValue}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Token reference table */}
            <section>
                <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                    2. Token Reference
                </h2>

                <div className={styles.valueList}>
                    {shadows.map((shadow) => (
                        <div key={shadow.name} className={styles.valueRow}>
                            <span className={`${styles.valueLabel} text-caption-medium font-mono text-fg-muted`}>
                                shadow-{shadow.name}
                            </span>
                            <div
                                className={`${styles.valueSwatch} bg-bg-layer`}
                                style={{ boxShadow: shadow.value }}
                            />
                            <span className="text-caption-medium font-mono text-fg-muted">
                                {shadow.cssValue}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
