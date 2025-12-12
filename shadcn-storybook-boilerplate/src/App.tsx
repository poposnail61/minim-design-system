import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Minim Design System</h1>
        <p className="text-muted-foreground">
          Ready to build with React, Vite, Tailwind CSS, and shadcn/ui.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Components Demo</h2>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Button</h3>
            <div className="flex gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Badge</h3>
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div className="space-y-2 w-full max-w-sm">
            <h3 className="text-sm font-medium">Input</h3>
            <Input type="email" placeholder="Email" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
