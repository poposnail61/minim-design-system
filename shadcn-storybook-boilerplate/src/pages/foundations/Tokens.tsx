"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const spacingTokens = [
    { name: "0", value: "0px", class: "w-0 h-8" },
    { name: "50", value: "2px", class: "w-50 h-8" },
    { name: "100", value: "4px", class: "w-100 h-8" },
    { name: "150", value: "6px", class: "w-150 h-8" },
    { name: "200", value: "8px", class: "w-200 h-8" },
    { name: "250", value: "10px", class: "w-250 h-8" },
    { name: "300", value: "12px", class: "w-300 h-8" },
    { name: "400", value: "16px", class: "w-400 h-8" },
    { name: "500", value: "20px", class: "w-500 h-8" },
    { name: "800", value: "32px", class: "w-800 h-8" },
    { name: "1200", value: "48px", class: "w-1200 h-8" },
    { name: "1800", value: "64px", class: "w-1800 h-8" },
    { name: "2400", value: "96px", class: "w-2400 h-8" },
    { name: "3200", value: "128px", class: "w-3200 h-8" },
]

const componentTokens = [
    { name: "component-sm", value: "8px", class: "w-component-sm h-8" },
    { name: "component-md", value: "12px", class: "w-component-md h-8" },
]

const sizeTokens = [
    { name: "h76", value: "76px", class: "w-h76 h-8" },
    { name: "h68", value: "68px", class: "w-h68 h-8" },
    { name: "h60", value: "60px", class: "w-h60 h-8" },
    { name: "h44", value: "44px", class: "w-h44 h-8" },
    { name: "h32", value: "32px", class: "w-h32 h-8" },
]

const radiusTokens = [
    { name: "xsmall", value: "6px", class: "rounded-xsmall" },
    { name: "small", value: "8px", class: "rounded-small" },
    { name: "medium", value: "12px", class: "rounded-medium" },
    { name: "large", value: "20px", class: "rounded-large" },
    { name: "xlarge", value: "32px", class: "rounded-xlarge" },
    { name: "full", value: "1000px", class: "rounded-full" },
    { name: "full-h44", value: "22px", class: "rounded-full-h44" },
]

export default function TokensPage() {
    return (
        <div className="flex flex-col gap-12 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Tokens</h1>
                <p className="text-lg text-muted-foreground">
                    Semantic Base Tokens for Spacing, Size, and Radius.
                </p>
            </div>

            <section className="space-y-8">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold tracking-tight">Semantic Spacing</h2>
                    <p className="text-muted-foreground">Used for padding, margin, and gap.</p>
                </div>
                <div className="grid gap-4">
                    {spacingTokens.map(token => (
                        <div key={token.name} className="flex items-center gap-4">
                            <div className="w-24 font-mono text-sm text-muted-foreground">{token.name}</div>
                            <div className={`${token.class} bg-blue-500 rounded-sm`}></div>
                            <div className="font-mono text-xs opacity-50">{token.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold tracking-tight">Component Spacing</h2>
                </div>
                <div className="grid gap-4">
                    {componentTokens.map(token => (
                        <div key={token.name} className="flex items-center gap-4">
                            <div className="w-24 font-mono text-sm text-muted-foreground">{token.name}</div>
                            <div className={`${token.class} bg-green-500 rounded-sm`}></div>
                            <div className="font-mono text-xs opacity-50">{token.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold tracking-tight">Size Helpers</h2>
                </div>
                <div className="grid gap-4">
                    {sizeTokens.map(token => (
                        <div key={token.name} className="flex items-center gap-4">
                            <div className="w-24 font-mono text-sm text-muted-foreground">{token.name}</div>
                            <div className={`${token.class} bg-purple-500 rounded-sm`}></div>
                            <div className="font-mono text-xs opacity-50">{token.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold tracking-tight">Radius</h2>
                </div>
                <div className="flex flex-wrap gap-8">
                    {radiusTokens.map(token => (
                        <div key={token.name} className="flex flex-col items-center gap-3">
                            <div className={`w-24 h-24 bg-gray-900 border-2 border-white ${token.class} flex items-center justify-center text-white font-bold`}>
                                R
                            </div>
                            <div className="font-mono text-sm text-muted-foreground">{token.name}</div>
                            <div className="font-mono text-xs opacity-50">{token.value}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
