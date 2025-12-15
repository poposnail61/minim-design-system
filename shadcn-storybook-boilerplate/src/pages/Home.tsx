import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Home() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Components Demo</h1>
                <p className="text-muted-foreground">
                    A showcase of the base components configured in this design system.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Button</h2>
                <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Badge</h2>
                <div className="flex gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Input</h2>
                <div className="max-w-sm">
                    <Input type="email" placeholder="Email" />
                </div>
            </section>
        </div>
    )
}
