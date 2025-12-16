import { useState, useRef, useEffect } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const fonts = [
    {
        name: "MinimBaseVF",
        display: "Minim Base VF",
        cssUrl: "https://cdn.jsdelivr.net/gh/poposnail61/minim-font@main/dist/MinimBaseVF/css/MinimBaseVF.css",
        weightRange: [100, 900],
    },
    {
        name: "MinimSoftVF",
        display: "Minim Soft VF",
        cssUrl: "https://cdn.jsdelivr.net/gh/poposnail61/minim-font@main/dist/MinimSoftVF/css/MinimSoftVF.css",
        weightRange: [100, 900],
    },
]

const glyphs = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=",
    "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?"
]

export function Fonts() {
    const [selectedFont, setSelectedFont] = useState(fonts[0])
    const [fontSize, setFontSize] = useState([24])
    const [fontWeight, setFontWeight] = useState([400])
    const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog.")

    // Inject CSS
    useEffect(() => {
        const linkId = `font-${selectedFont.name}`
        if (!document.getElementById(linkId)) {
            const link = document.createElement("link")
            link.id = linkId
            link.rel = "stylesheet"
            link.href = selectedFont.cssUrl
            document.head.appendChild(link)
        }
    }, [selectedFont])

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        toast.success("Copied to clipboard")
    }

    const htmlCode = `<link rel="stylesheet" href="${selectedFont.cssUrl}" />`
    const cssCode = `@import url('${selectedFont.cssUrl}');\n\nbody {\n  font-family: '${selectedFont.name}', sans-serif;\n}`

    return (
        <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Fonts</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground mr-2">Active Font:</span>
                        <Select
                            value={selectedFont.name}
                            onValueChange={(val) => {
                                const font = fonts.find(f => f.name === val)
                                if (font) setSelectedFont(font)
                            }}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a font" />
                            </SelectTrigger>
                            <SelectContent>
                                {fonts.map(font => (
                                    <SelectItem key={font.name} value={font.name}>{font.display}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <p className="text-lg text-muted-foreground">
                    Minim Design System typography foundation.
                </p>
            </div>

            {/* Main Content - Vertical Stack */}
            <div className="space-y-8">
                {/* Main Preview Area */}
                <div className="space-y-6">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                        <div className="p-6 border-b bg-muted/30 flex items-center gap-6">
                            <span className="text-sm font-medium">Live Preview</span>
                            <div className="flex items-center gap-4 flex-1">
                                <Label className="w-12 text-xs text-muted-foreground">Size {fontSize}px</Label>
                                <Slider
                                    value={fontSize}
                                    onValueChange={setFontSize}
                                    min={12}
                                    max={120}
                                    step={1}
                                    className="flex-1"
                                />
                            </div>
                            <div className="flex items-center gap-4 flex-1">
                                <Label className="w-16 text-xs text-muted-foreground">Weight {fontWeight}</Label>
                                <Slider
                                    value={fontWeight}
                                    onValueChange={setFontWeight}
                                    min={selectedFont.weightRange[0]}
                                    max={selectedFont.weightRange[1]}
                                    step={100}
                                    className="flex-1"
                                />
                            </div>
                        </div>
                        <div className="p-8 min-h-[300px] flex items-center justify-center bg-background">
                            <Textarea
                                value={previewText}
                                onChange={(e) => setPreviewText(e.target.value)}
                                className="min-h-[200px] w-full resize-none text-center border-none shadow-none focus-visible:ring-0 text-foreground bg-transparent"
                                style={{
                                    fontFamily: selectedFont.name,
                                    fontSize: `${fontSize}px`,
                                    fontWeight: fontWeight[0],
                                    lineHeight: 1.5,
                                }}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">How to Use</h3>
                        <Tabs defaultValue="html" className="w-full rounded-xl border bg-muted/30 p-1">
                            <div className="flex items-center justify-between px-4 py-2">
                                <span className="font-semibold text-sm">{selectedFont.display}</span>
                                <TabsList className="bg-transparent p-0 h-auto">
                                    <TabsTrigger value="html" className="text-xs px-2 py-1 h-7">HTML</TabsTrigger>
                                    <TabsTrigger value="css" className="text-xs px-2 py-1 h-7">CSS</TabsTrigger>
                                </TabsList>
                            </div>
                            <Separator className="mb-2" />
                            <TabsContent value="html" className="p-4 pt-0 mt-0 relative group">
                                <pre className="p-4 rounded-lg bg-black text-white text-xs overflow-x-auto font-mono">
                                    {htmlCode}
                                </pre>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2 text-white hover:bg-white/20 h-6 w-6"
                                    onClick={() => copyToClipboard(htmlCode)}
                                >
                                    <Copy className="h-3 w-3" />
                                </Button>
                            </TabsContent>
                            <TabsContent value="css" className="p-4 pt-0 mt-0 relative group">
                                <pre className="p-4 rounded-lg bg-black text-white text-xs overflow-x-auto font-mono">
                                    {cssCode}
                                </pre>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2 text-white hover:bg-white/20 h-6 w-6"
                                    onClick={() => copyToClipboard(cssCode)}
                                >
                                    <Copy className="h-3 w-3" />
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Info & Glyphs */}
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-1 rounded-xl border bg-card p-6 space-y-4">
                        <h4 className="font-semibold text-sm">About</h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p><span className="font-medium text-foreground">Family:</span> {selectedFont.display}</p>
                            <p><span className="font-medium text-foreground">Styles:</span> Variable</p>
                            <p><span className="font-medium text-foreground">Version:</span> 1.0.0</p>
                            <p><span className="font-medium text-foreground">License:</span> OFL</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 rounded-xl border bg-card p-6 space-y-4">
                        <h4 className="font-semibold text-sm">Glyphs</h4>
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] gap-2" style={{ fontFamily: selectedFont.name }}>
                            {glyphs.map(char => (
                                <div key={char} className="aspect-square flex items-center justify-center text-lg border rounded hover:bg-muted transition-colors cursor-default" title={`Character: ${char}`}>
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
