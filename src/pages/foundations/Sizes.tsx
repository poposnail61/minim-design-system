import styles from './Sizes.module.css'

const semanticSpacingTokens: { name: string; px: number }[] = [
    { name: '50',   px: 2   },
    { name: '100',  px: 4   },
    { name: '150',  px: 6   },
    { name: '200',  px: 8   },
    { name: '250',  px: 10  },
    { name: '300',  px: 12  },
    { name: '400',  px: 16  },
    { name: '500',  px: 20  },
    { name: '800',  px: 32  },
    { name: '1200', px: 48  },
    { name: '1800', px: 64  },
    { name: '2400', px: 96  },
    { name: '3200', px: 128 },
]

const sizeHelpers: { name: string; px: number }[] = [
    { name: 'h76', px: 76 },
    { name: 'h68', px: 68 },
    { name: 'h60', px: 60 },
    { name: 'h52', px: 52 },
    { name: 'h44', px: 44 },
    { name: 'h36', px: 36 },
    { name: 'h32', px: 32 },
    { name: 'h22', px: 22 },
    { name: 'h20', px: 20 },
    { name: 'h18', px: 18 },
]

const borderRadii: { name: string; value: string }[] = [
    { name: 'none',    value: '0px'    },
    { name: 'xsmall',  value: '2px'    },
    { name: 'small',   value: '4px'    },
    { name: 'medium',  value: '8px'    },
    { name: 'large',   value: '12px'   },
    { name: 'xlarge',  value: '16px'   },
    { name: 'full',    value: '9999px' },
]

const baseSpacingValues = [
    "0", "2", "4", "6", "8", "9", "10", "11", "12", "14", "15", "16",
    "18", "20", "22", "23", "24", "27", "28", "32", "36", "40", "44",
    "48", "52", "60", "64", "68", "76", "80", "96", "128", "1000",
]

// Cap bar width for visual display (max 128px → 100%)
const maxBarPx = 128

export default function SizesPage() {
    return (
        <div className={`${styles.page} bg-bg-layer`}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className="text-title-large text-fg-neutral">Sizes & Spacing</h1>
                <p className="text-body-large text-fg-muted">
                    Complete spacing system including Base, Semantic, and Component tokens.
                </p>
            </div>

            <div className={styles.sections}>
                {/* 1. Base Spacing */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                        1. Base Spacing (Number)
                    </h2>
                    <div className={styles.baseSpacingList}>
                        {baseSpacingValues.map((val) => (
                            <div key={val} className={styles.baseSpacingRow}>
                                <span className={`${styles.baseSpacingToken} text-caption-medium font-mono text-fg-muted`}>
                                    space-{val}
                                </span>
                                <span className="text-caption-medium font-mono text-fg-neutral">
                                    {val === '1000' ? '∞' : `${Number(val) * 4}px`}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Semantic Spacing */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                        2. Semantic Spacing
                    </h2>
                    <div className={styles.spacingGrid}>
                        {semanticSpacingTokens.map(({ name, px }) => {
                            const barWidth = Math.min(px, maxBarPx)
                            const barPercent = (barWidth / maxBarPx) * 100
                            return (
                                <div key={name} className={`${styles.tokenCard} bg-bg-layer`}>
                                    <span className="text-caption-medium font-mono text-fg-muted">
                                        space-{name}
                                    </span>
                                    <div className={styles.barTrack}>
                                        <div
                                            className={styles.barFill}
                                            style={{
                                                width: `${barPercent}%`,
                                                backgroundColor: '#44B982',
                                            }}
                                        />
                                    </div>
                                    <span className="text-caption-medium font-mono text-fg-neutral">
                                        {px}px
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* 3. Size Helpers */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                        3. Size Helpers
                    </h2>
                    <div className={styles.sizeHelperList}>
                        {sizeHelpers.map(({ name, px }) => (
                            <div key={name} className={`${styles.sizeHelperCard} bg-bg-layer`}>
                                <span className="text-caption-medium font-mono text-fg-muted">{name}</span>
                                <div
                                    className={styles.sizeHelperBar}
                                    style={{
                                        height: `${px}px`,
                                        backgroundColor: '#F5A525',
                                        borderRadius: '4px',
                                    }}
                                />
                                <span className="text-caption-medium font-mono text-fg-neutral">{px}px</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Border Radius */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                        4. Border Radius
                    </h2>
                    <div className={styles.radiiList}>
                        {borderRadii.map(({ name, value }) => (
                            <div key={name} className={styles.radiusCard}>
                                <div
                                    className={`${styles.radiusBox} bg-bg-neutral`}
                                    style={{ borderRadius: value }}
                                >
                                    <span className="text-caption-medium text-fg-muted">Aa</span>
                                </div>
                                <span className="text-body-small-strong font-mono text-fg-neutral">{name}</span>
                                <span className="text-caption-medium text-fg-muted font-mono">{value}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
