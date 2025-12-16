"use client"

import { Card } from "@/components/ui/card"

export default function EffectsPage() {
    const shadows = ["none", "sm", "md", "ls", "xl", "2xl"]

    return (
        <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Effects</h1>
                <p className="text-lg text-muted-foreground">
                    Shadows, blurs, and other visual effects.
                </p>
            </div>

            <div className="space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Shadows</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4">
                        {shadows.map((shadow) => (
                            <div key={shadow} className="flex flex-col items-center gap-4">
                                <div
                                    className={`w-32 h-32 bg-card rounded-lg flex items-center justify-center text-sm font-medium border shadow-${shadow}`}
                                >
                                    shadow-{shadow}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Glassmorphism</h2>
                    <div className="relative w-full h-64 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl overflow-hidden flex items-center justify-center">
                        <div className="w-1/2 h-1/2 bg-background/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl">
                            Backdrop Blur
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Utility: `bg-background/XX backdrop-blur-md`
                    </p>
                </section>
            </div>
        </div>
    )
}
