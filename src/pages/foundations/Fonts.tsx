import { useState } from "react"
import { Check, Copy } from "lucide-react"
import styles from './Fonts.module.css'

const fonts = [
    { name: "font-sans", display: "Minim Base VF", weightRange: [100, 900] },
    { name: "font-soft", display: "Minim Soft VF", weightRange: [100, 900] },
]

const glyphs = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "=",
    "[", "]", "{", "}", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "?",
]

const CODE_TAB = ["HTML", "CSS"] as const

export default function Fonts() {
    const [selectedFont, setSelectedFont] = useState(fonts[0])
    const [fontSize, setFontSize] = useState(60)
    const [fontWeight, setFontWeight] = useState(400)
    const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog.")
    const [activeTab, setActiveTab] = useState<typeof CODE_TAB[number]>("HTML")
    const [copied, setCopied] = useState(false)

    const htmlCode = `<div class="${selectedFont.name}"> ... </div>`
    const cssCode = `font-family: var(--${selectedFont.name});`
    const currentCode = activeTab === "HTML" ? htmlCode : cssCode

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.pageHeader}>
                <div className={styles.headerText}>
                    <h1 className="text-title-large text-fg-neutral">Fonts</h1>
                    <p className="text-body-large text-fg-muted">Minim Design System typography foundation.</p>
                </div>

                {/* Font Switcher */}
                <div className={`${styles.fontSwitcher} bg-bg-neutral`}>
                    {fonts.map((font) => (
                        <button
                            key={font.name}
                            onClick={() => setSelectedFont(font)}
                            className={
                                selectedFont.name === font.name
                                    ? `${styles.fontBtnActive} bg-bg-layer text-fg-neutral text-body-small`
                                    : `${styles.fontBtn} text-fg-muted text-body-small`
                            }
                        >
                            {font.display}
                            {selectedFont.name === font.name && <Check style={{ width: '14px', height: '14px' }} />}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.previewSection}>
                {/* Preview card */}
                <div className={styles.previewCard}>
                    {/* Controls */}
                    <div className={`${styles.previewControls} bg-bg-neutral`}>
                        <span className="text-body-small text-fg-muted">Live Preview</span>
                        <div className={styles.rangeGroup}>
                            <span className={`${styles.rangeLabel} text-caption-small text-fg-muted`}>
                                Size {fontSize}px
                            </span>
                            <input
                                type="range"
                                min={12}
                                max={120}
                                step={1}
                                value={fontSize}
                                onChange={(e) => setFontSize(Number(e.target.value))}
                                className={`${styles.rangeInput} accent-fg-primary`}
                            />
                        </div>
                        <div className={styles.rangeGroup}>
                            <span className={`${styles.rangeLabel} text-caption-small text-fg-muted`}>
                                Weight {fontWeight}
                            </span>
                            <input
                                type="range"
                                min={selectedFont.weightRange[0]}
                                max={selectedFont.weightRange[1]}
                                step={100}
                                value={fontWeight}
                                onChange={(e) => setFontWeight(Number(e.target.value))}
                                className={`${styles.rangeInput} accent-fg-primary`}
                            />
                        </div>
                    </div>

                    {/* Text area */}
                    <div className={`${styles.previewTextArea} bg-bg-layer`}>
                        <textarea
                            value={previewText}
                            onChange={(e) => setPreviewText(e.target.value)}
                            className={`${styles.previewTextarea} text-fg-neutral ${selectedFont.name}`}
                            style={{ fontSize: `${fontSize}px`, fontWeight, lineHeight: 1.5 }}
                        />
                    </div>
                </div>

                {/* Usage */}
                <div className={styles.usageSection}>
                    <h3 className="text-title-small text-fg-neutral">How to Use</h3>
                    <div className={styles.codeCard}>
                        <div className={`${styles.codeCardHeader} bg-bg-neutral`}>
                            <span className="text-body-small-strong text-fg-neutral">{selectedFont.display}</span>
                            <div className={styles.codeTabs}>
                                {CODE_TAB.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={
                                            activeTab === tab
                                                ? `${styles.codeTabActive} bg-bg-layer text-fg-neutral text-caption-medium`
                                                : `${styles.codeTab} text-fg-muted text-caption-medium`
                                        }
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className={styles.codeBody}>
                            <pre className="text-caption-medium font-mono bg-bg-neutral-solid text-fg-neutral-inverted"
                                style={{ padding: 'var(--space-400)', borderRadius: '8px', overflowX: 'auto' }}
                            >
                                {currentCode}
                            </pre>
                            <button
                                onClick={copyToClipboard}
                                className={`${styles.copyBtn} text-fg-neutral-inverted`}
                            >
                                {copied
                                    ? <Check style={{ width: '14px', height: '14px' }} />
                                    : <Copy style={{ width: '14px', height: '14px' }} />
                                }
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info & Glyphs */}
                <div className={styles.infoGlyphsGrid}>
                    <div className={`${styles.infoCard} bg-bg-layer`}>
                        <h4 className="text-body-small-strong text-fg-neutral">About</h4>
                        <dl className={styles.infoList}>
                            {[
                                { label: 'Family', value: selectedFont.display },
                                { label: 'Style', value: 'Variable' },
                                { label: 'Version', value: '1.0.0' },
                                { label: 'License', value: 'OFL' },
                            ].map(({ label, value }) => (
                                <div key={label} className={`${styles.infoRow} text-body-small`}>
                                    <dt className="text-fg-muted">{label}</dt>
                                    <dd className="text-fg-neutral">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className={`${styles.glyphCard} bg-bg-layer`}>
                        <h4 className="text-body-small-strong text-fg-neutral">Glyphs</h4>
                        <div className={`${styles.glyphGrid} ${selectedFont.name}`}>
                            {glyphs.map((char) => (
                                <div
                                    key={char}
                                    title={`Character: ${char}`}
                                    className={`${styles.glyphCell} text-body-medium text-fg-neutral`}
                                >
                                    {char}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
