import styles from './Colors.module.css'

interface ColorToken {
    name: string
    variable: string
    class: string
    foreground: string
    hasAlpha?: boolean
}

const semanticGroups: { title: string; colors: ColorToken[] }[] = [
    {
        title: "1-1. Background",
        colors: [
            { name: "Layer", variable: "gray-0", class: "bg-bg-layer", foreground: "text-fg-neutral" },
            { name: "Layer Base", variable: "gray-100", class: "bg-bg-layer-base", foreground: "text-fg-neutral" },
            { name: "Layer Overlay", variable: "blackAlpha-400", class: "bg-bg-layer-overlay", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Neutral", variable: "gray-100", class: "bg-bg-neutral", foreground: "text-fg-neutral" },
            { name: "Neutral Subtle", variable: "gray-0", class: "bg-bg-neutral-subtle", foreground: "text-fg-neutral" },
            { name: "Neutral Solid", variable: "gray-900", class: "bg-bg-neutral-solid", foreground: "text-fg-neutral-inverted" },
            { name: "Neutral Tint", variable: "blackAlpha-400", class: "bg-bg-neutral-tint", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Neutral Glass", variable: "blackAlpha-200", class: "bg-bg-neutral-glass", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Muted Solid", variable: "gray-500", class: "bg-bg-muted-solid", foreground: "text-fg-neutral-inverted" },
            { name: "Primary", variable: "blue-100", class: "bg-bg-primary", foreground: "text-fg-neutral" },
            { name: "Primary Solid", variable: "blue-500", class: "bg-bg-primary-solid", foreground: "text-fg-neutral-inverted" },
            { name: "Secondary", variable: "green-100", class: "bg-bg-secondary", foreground: "text-fg-neutral" },
            { name: "Secondary Solid", variable: "green-500", class: "bg-bg-secondary-solid", foreground: "text-fg-neutral-inverted" },
            { name: "Critical", variable: "red-100", class: "bg-bg-critical", foreground: "text-fg-neutral" },
            { name: "Critical Solid", variable: "red-500", class: "bg-bg-critical-solid", foreground: "text-fg-neutral-inverted" },
            { name: "Field", variable: "gray-0", class: "bg-bg-field", foreground: "text-fg-neutral" },
            { name: "Field Subtle", variable: "gray-100", class: "bg-bg-field-subtle", foreground: "text-fg-neutral" },
            { name: "Readonly", variable: "gray-50", class: "bg-bg-readonly", foreground: "text-fg-neutral" },
            { name: "Disabled", variable: "gray-200", class: "bg-bg-disabled", foreground: "text-fg-neutral" },
        ]
    },
    {
        title: "1-2. Foreground",
        colors: [
            { name: "Neutral", variable: "gray-900", class: "bg-fg-neutral", foreground: "text-fg-neutral-inverted" },
            { name: "Muted", variable: "gray-500", class: "bg-fg-muted", foreground: "text-fg-neutral-inverted" },
            { name: "Neutral Inverted", variable: "gray-0", class: "bg-fg-neutral-inverted", foreground: "text-fg-neutral" },
            { name: "On Surface", variable: "gray-0", class: "bg-fg-on-surface", foreground: "text-fg-neutral" },
            { name: "On Surface Subtle", variable: "whiteAlpha-600", class: "bg-fg-on-surface-subtle", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "Primary", variable: "blue-500", class: "bg-fg-primary", foreground: "text-fg-neutral-inverted" },
            { name: "Secondary", variable: "green-500", class: "bg-fg-secondary", foreground: "text-fg-neutral-inverted" },
            { name: "Critical", variable: "red-500", class: "bg-fg-critical", foreground: "text-fg-neutral-inverted" },
            { name: "Placeholder", variable: "gray-400", class: "bg-fg-placeholder", foreground: "text-fg-neutral" },
            { name: "Disabled", variable: "gray-400", class: "bg-fg-disabled", foreground: "text-fg-neutral" },
        ]
    },
    {
        title: "1-3. Stroke",
        colors: [
            { name: "Neutral", variable: "gray-200", class: "bg-stroke-neutral", foreground: "text-fg-neutral" },
            { name: "Neutral Subtle", variable: "gray-100", class: "bg-stroke-neutral-subtle", foreground: "text-fg-neutral" },
            { name: "Neutral Strong", variable: "gray-900", class: "bg-stroke-neutral-strong", foreground: "text-fg-neutral-inverted" },
            { name: "Neutral Overlay", variable: "blackAlpha-50", class: "bg-stroke-neutral-overlay", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "Primary", variable: "blue-500", class: "bg-stroke-primary", foreground: "text-fg-neutral-inverted" },
            { name: "Secondary", variable: "green-500", class: "bg-stroke-secondary", foreground: "text-fg-neutral-inverted" },
            { name: "Critical", variable: "red-500", class: "bg-stroke-critical", foreground: "text-fg-neutral-inverted" },
        ]
    }
]

const baseGroups: { title: string; colors: ColorToken[] }[] = [
    {
        title: "Gray Scale",
        colors: [
            { name: "Gray 0", variable: "#FFFFFF", class: "bg-gray-0", foreground: "text-fg-neutral" },
            { name: "Gray 50", variable: "#FAFAFA", class: "bg-gray-50", foreground: "text-fg-neutral" },
            { name: "Gray 100", variable: "#F4F4F5", class: "bg-gray-100", foreground: "text-fg-neutral" },
            { name: "Gray 200", variable: "#E4E4E7", class: "bg-gray-200", foreground: "text-fg-neutral" },
            { name: "Gray 300", variable: "#D4D4D8", class: "bg-gray-300", foreground: "text-fg-neutral" },
            { name: "Gray 400", variable: "#9E9E9E", class: "bg-gray-400", foreground: "text-fg-neutral" },
            { name: "Gray 500", variable: "#71717A", class: "bg-gray-500", foreground: "text-fg-neutral-inverted" },
            { name: "Gray 600", variable: "#52525B", class: "bg-gray-600", foreground: "text-fg-neutral-inverted" },
            { name: "Gray 700", variable: "#3F3F46", class: "bg-gray-700", foreground: "text-fg-neutral-inverted" },
            { name: "Gray 800", variable: "#27272A", class: "bg-gray-800", foreground: "text-fg-neutral-inverted" },
            { name: "Gray 900", variable: "#18181B", class: "bg-gray-900", foreground: "text-fg-neutral-inverted" },
            { name: "Gray 950", variable: "#09090B", class: "bg-gray-950", foreground: "text-fg-neutral-inverted" },
            { name: "Gray 1000", variable: "#000000", class: "bg-gray-1000", foreground: "text-fg-neutral-inverted" },
        ]
    },
    {
        title: "Red Scale",
        colors: [
            { name: "Red 50", variable: "#FCF1F1", class: "bg-red-50", foreground: "text-fg-neutral" },
            { name: "Red 100", variable: "#FAE5E5", class: "bg-red-100", foreground: "text-fg-neutral" },
            { name: "Red 200", variable: "#F7CECE", class: "bg-red-200", foreground: "text-fg-neutral" },
            { name: "Red 300", variable: "#F5A5A5", class: "bg-red-300", foreground: "text-fg-neutral" },
            { name: "Red 400", variable: "#F06E6E", class: "bg-red-400", foreground: "text-fg-neutral" },
            { name: "Red 500", variable: "#EB3D3D", class: "bg-red-500", foreground: "text-fg-neutral-inverted" },
            { name: "Red 600", variable: "#D81A1A", class: "bg-red-600", foreground: "text-fg-neutral-inverted" },
            { name: "Red 700", variable: "#B61414", class: "bg-red-700", foreground: "text-fg-neutral-inverted" },
            { name: "Red 800", variable: "#971818", class: "bg-red-800", foreground: "text-fg-neutral-inverted" },
            { name: "Red 900", variable: "#7F1B1B", class: "bg-red-900", foreground: "text-fg-neutral-inverted" },
            { name: "Red 950", variable: "#460A0A", class: "bg-red-950", foreground: "text-fg-neutral-inverted" },
        ]
    },
    {
        title: "Yellow Scale",
        colors: [
            { name: "Yellow 50", variable: "#FEFCEA", class: "bg-yellow-50", foreground: "text-fg-neutral" },
            { name: "Yellow 100", variable: "#FDF9C8", class: "bg-yellow-100", foreground: "text-fg-neutral" },
            { name: "Yellow 200", variable: "#FCF194", class: "bg-yellow-200", foreground: "text-fg-neutral" },
            { name: "Yellow 300", variable: "#FBE152", class: "bg-yellow-300", foreground: "text-fg-neutral" },
            { name: "Yellow 400", variable: "#F5CA0F", class: "bg-yellow-400", foreground: "text-fg-neutral" },
            { name: "Yellow 500", variable: "#E6B313", class: "bg-yellow-500", foreground: "text-fg-neutral-inverted" },
            { name: "Yellow 600", variable: "#C68A0B", class: "bg-yellow-600", foreground: "text-fg-neutral-inverted" },
            { name: "Yellow 700", variable: "#9C630F", class: "bg-yellow-700", foreground: "text-fg-neutral-inverted" },
            { name: "Yellow 800", variable: "#804E13", class: "bg-yellow-800", foreground: "text-fg-neutral-inverted" },
            { name: "Yellow 900", variable: "#6C4018", class: "bg-yellow-900", foreground: "text-fg-neutral-inverted" },
            { name: "Yellow 950", variable: "#3E210B", class: "bg-yellow-950", foreground: "text-fg-neutral-inverted" },
        ]
    },
    {
        title: "Green Scale",
        colors: [
            { name: "Green 50", variable: "#EFFCF5", class: "bg-green-50", foreground: "text-fg-neutral" },
            { name: "Green 100", variable: "#D8F9E6", class: "bg-green-100", foreground: "text-fg-neutral" },
            { name: "Green 200", variable: "#B6F2D2", class: "bg-green-200", foreground: "text-fg-neutral" },
            { name: "Green 300", variable: "#86E6B8", class: "bg-green-300", foreground: "text-fg-neutral" },
            { name: "Green 400", variable: "#55D197", class: "bg-green-400", foreground: "text-fg-neutral" },
            { name: "Green 500", variable: "#44B982", class: "bg-green-500", foreground: "text-fg-neutral-inverted" },
            { name: "Green 600", variable: "#35966A", class: "bg-green-600", foreground: "text-fg-neutral-inverted" },
            { name: "Green 700", variable: "#2A7858", class: "bg-green-700", foreground: "text-fg-neutral-inverted" },
            { name: "Green 800", variable: "#235F47", class: "bg-green-800", foreground: "text-fg-neutral-inverted" },
            { name: "Green 900", variable: "#1E4D3C", class: "bg-green-900", foreground: "text-fg-neutral-inverted" },
            { name: "Green 950", variable: "#0E2B22", class: "bg-green-950", foreground: "text-fg-neutral-inverted" },
        ]
    },
    {
        title: "Blue Scale",
        colors: [
            { name: "Blue 50", variable: "#F0F8FE", class: "bg-blue-50", foreground: "text-fg-neutral" },
            { name: "Blue 100", variable: "#DEEFFC", class: "bg-blue-100", foreground: "text-fg-neutral" },
            { name: "Blue 200", variable: "#C4E3FC", class: "bg-blue-200", foreground: "text-fg-neutral" },
            { name: "Blue 300", variable: "#9AD2FD", class: "bg-blue-300", foreground: "text-fg-neutral" },
            { name: "Blue 400", variable: "#65B6FD", class: "bg-blue-400", foreground: "text-fg-neutral" },
            { name: "Blue 500", variable: "#449AFC", class: "bg-blue-500", foreground: "text-fg-neutral-inverted" },
            { name: "Blue 600", variable: "#2D79F2", class: "bg-blue-600", foreground: "text-fg-neutral-inverted" },
            { name: "Blue 700", variable: "#2361DD", class: "bg-blue-700", foreground: "text-fg-neutral-inverted" },
            { name: "Blue 800", variable: "#224FB1", class: "bg-blue-800", foreground: "text-fg-neutral-inverted" },
            { name: "Blue 900", variable: "#234789", class: "bg-blue-900", foreground: "text-fg-neutral-inverted" },
            { name: "Blue 950", variable: "#192D52", class: "bg-blue-950", foreground: "text-fg-neutral-inverted" },
        ]
    },
    {
        title: "White Alpha",
        colors: [
            { name: "White Alpha 50", variable: "5%", class: "bg-whiteAlpha-50", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "White Alpha 200", variable: "20%", class: "bg-whiteAlpha-200", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "White Alpha 400", variable: "40%", class: "bg-whiteAlpha-400", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "White Alpha 600", variable: "60%", class: "bg-whiteAlpha-600", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "White Alpha 800", variable: "80%", class: "bg-whiteAlpha-800", foreground: "text-fg-neutral", hasAlpha: true },
            { name: "White Alpha 950", variable: "95%", class: "bg-whiteAlpha-950", foreground: "text-fg-neutral", hasAlpha: true },
        ]
    },
    {
        title: "Black Alpha",
        colors: [
            { name: "Black Alpha 50", variable: "5%", class: "bg-blackAlpha-50", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Black Alpha 200", variable: "20%", class: "bg-blackAlpha-200", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Black Alpha 400", variable: "40%", class: "bg-blackAlpha-400", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Black Alpha 600", variable: "60%", class: "bg-blackAlpha-600", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Black Alpha 800", variable: "80%", class: "bg-blackAlpha-800", foreground: "text-fg-neutral-inverted", hasAlpha: true },
            { name: "Black Alpha 950", variable: "95%", class: "bg-blackAlpha-950", foreground: "text-fg-neutral-inverted", hasAlpha: true },
        ]
    },
]

const checkerStyle: React.CSSProperties = {
    backgroundImage: 'repeating-conic-gradient(#E4E4E7 0% 25%, #FFFFFF 0% 50%)',
    backgroundSize: '12px 12px',
}

export default function ColorsPage() {
    return (
        <div className={`${styles.page} bg-bg-layer`}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className="text-title-large text-fg-neutral">Colors</h1>
                <p className="text-body-large text-fg-muted">
                    Our color palette is built with a semantic approach.
                </p>
            </div>

            <div className={styles.sections}>
                {/* Semantic Colors */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                        1. Semantic Colors
                    </h2>
                    <p className="text-body-medium text-fg-muted">
                        Semantic colors are used to communicate meaning and hierarchy. They are derived from the base palette.
                    </p>

                    <div className={styles.groupsGrid}>
                        {semanticGroups.map((group) => (
                            <div key={group.title} className={styles.group}>
                                <h3 className="text-title-small text-fg-neutral">{group.title}</h3>
                                <div className={styles.colorGrid5}>
                                    {group.colors.map((color) => (
                                        <div key={color.name} className={styles.colorItem}>
                                            <div
                                                className={`${styles.colorSwatch} ${color.class}`}
                                                style={{ height: '6rem' }}
                                            >
                                                {color.hasAlpha && (
                                                    <div className={styles.checkerboard} style={checkerStyle} />
                                                )}
                                                <span className={`relative ${color.foreground} font-medium`}>Aa</span>
                                            </div>
                                            <div className={styles.colorMeta}>
                                                <span className="text-body-small-strong text-fg-neutral">{color.name}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono">{color.variable}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono" style={{ opacity: 0.5 }}>{color.class}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Base Colors */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} text-title-medium text-fg-neutral`}>
                        2. Base Colors
                    </h2>
                    <p className="text-body-medium text-fg-muted">
                        Primitive color scales that feed into the semantic tokens.
                    </p>
                    <div className={styles.baseGroups}>
                        {baseGroups.map((group) => (
                            <div key={group.title} className={styles.group}>
                                <h3 className="text-title-small text-fg-neutral">{group.title}</h3>
                                <div className={styles.colorGrid6}>
                                    {group.colors.map((color) => (
                                        <div key={color.name} className={styles.colorItem}>
                                            <div
                                                className={`${styles.colorSwatch} ${color.class}`}
                                                style={{ height: '4rem' }}
                                            >
                                                {color.hasAlpha && (
                                                    <div className={styles.checkerboard} style={checkerStyle} />
                                                )}
                                                <span className={`relative ${color.foreground} text-caption-medium font-medium`}>Aa</span>
                                            </div>
                                            <div className={styles.colorMeta}>
                                                <span className="text-body-small-strong text-fg-neutral">{color.name}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono">{color.variable}</span>
                                                <span className="text-caption-medium text-fg-muted font-mono" style={{ opacity: 0.5 }}>{color.class}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
