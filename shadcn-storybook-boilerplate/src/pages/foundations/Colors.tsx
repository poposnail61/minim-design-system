"use client"

import { Card } from "@/components/ui/card"

const colorGroups = [
    {
        title: "Base Colors",
        colors: [
            { name: "Background", variable: "--background", class: "bg-background" },
            { name: "Foreground", variable: "--foreground", class: "bg-foreground" },
        ]
    },
    {
        title: "Semantic Colors",
        colors: [
            { name: "Primary", variable: "--primary", class: "bg-primary", foreground: "text-primary-foreground" },
            { name: "Primary Foreground", variable: "--primary-foreground", class: "bg-primary-foreground" },
            { name: "Secondary", variable: "--secondary", class: "bg-secondary", foreground: "text-secondary-foreground" },
            { name: "Secondary Foreground", variable: "--secondary-foreground", class: "bg-secondary-foreground" },
            { name: "Muted", variable: "--muted", class: "bg-muted", foreground: "text-muted-foreground" },
            { name: "Muted Foreground", variable: "--muted-foreground", class: "bg-muted-foreground" },
            { name: "Accent", variable: "--accent", class: "bg-accent", foreground: "text-accent-foreground" },
            { name: "Accent Foreground", variable: "--accent-foreground", class: "bg-accent-foreground" },
            { name: "Destructive", variable: "--destructive", class: "bg-destructive", foreground: "text-destructive-foreground" },
            { name: "Destructive Foreground", variable: "--destructive-foreground", class: "bg-destructive-foreground" },
        ]
    },
    {
        title: "Surfaces",
        colors: [
            { name: "Card", variable: "--card", class: "bg-card", foreground: "text-card-foreground" },
            { name: "Card Foreground", variable: "--card-foreground", class: "bg-card-foreground" },
            { name: "Popover", variable: "--popover", class: "bg-popover", foreground: "text-popover-foreground" },
            { name: "Popover Foreground", variable: "--popover-foreground", class: "bg-popover-foreground" },
        ]
    },
    {
        title: "Borders & Inputs",
        colors: [
            { name: "Border", variable: "--border", class: "bg-border" },
            { name: "Input", variable: "--input", class: "bg-input" },
            { name: "Ring", variable: "--ring", class: "bg-ring" },
        ]
    },
    {
        title: "Sidebar",
        colors: [
            { name: "Sidebar Background", variable: "--sidebar-background", class: "bg-sidebar-background" },
            { name: "Sidebar Foreground", variable: "--sidebar-foreground", class: "bg-sidebar-foreground" },
            { name: "Sidebar Primary", variable: "--sidebar-primary", class: "bg-sidebar-primary" },
            { name: "Sidebar Accent", variable: "--sidebar-accent", class: "bg-sidebar-accent" },
            { name: "Sidebar Border", variable: "--sidebar-border", class: "bg-sidebar-border" },
        ]
    }
]

export default function ColorsPage() {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Colors</h1>
                <p className="text-lg text-muted-foreground">
                    Semantic color palette used throughout the design system.
                </p>
            </div>

            <div className="space-y-12">
                {colorGroups.map((group) => (
                    <section key={group.title} className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">{group.title}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {group.colors.map((color) => (
                                <div key={color.name} className="space-y-3">
                                    <Card className="overflow-hidden rounded-xl border shadow-sm">
                                        <div className={`h-24 w-full ${color.class} flex items-center justify-center border-b`}>
                                            {/* Preview Text Contrast if applicable */}
                                            {color.foreground && (
                                                <span className={`text-sm font-medium opacity-90 ${color.foreground.replace('text-', 'text-')}`}>
                                                    Aa
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-3 bg-card">
                                            <div className="font-medium text-sm text-card-foreground">{color.name}</div>
                                            <div className="text-xs text-muted-foreground font-mono mt-1 opacity-70">
                                                {color.variable}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
