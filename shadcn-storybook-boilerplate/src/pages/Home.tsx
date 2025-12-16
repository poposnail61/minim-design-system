export function Home() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="max-w-3xl space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Minim Design System</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        A reusable component library built with Shadcn UI and Radix UI.
                    </p>
                </div>

                <div className="prose dark:prose-invert">
                    <p>
                        This design system serves as the foundation for Minim applications. It includes a comprehensive set of accessible, reusable, and composable React components.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li><strong>Accessible</strong>: Built on Radix UI primitives.</li>
                        <li><strong>Customizable</strong>: Styled with Tailwind CSS.</li>
                        <li><strong>Dark Mode</strong>: Native support for dark mode.</li>
                    </ul>
                    <h3>How to use</h3>
                    <p>
                        Explore the components using the sidebar navigation. Each component page demonstrates its usage and variants.
                    </p>
                </div>
            </div>
        </div>
    )
}
