import { Component } from "lucide-react"

export function Icons() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Icons
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Minim Design System uses the "Minim Icon" set.
                </p>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                <div className="flex flex-col items-center justify-center p-12 text-center text-muted-foreground border-dashed border-2 rounded-lg">
                    <Component className="h-12 w-12 mb-4 opacity-20" />
                    <h3 className="text-lg font-semibold">Minim Icon Library</h3>
                    <p className="text-sm">Icon gallery coming soon.</p>
                </div>
            </div>
        </div>
    )
}
