"use client"

import { Separator } from "@/components/ui/separator"

export default function TypographyPage() {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Typography</h1>
                <p className="text-lg text-muted-foreground">
                    Styles for headings, paragraphs, lists, and other inline text elements.
                </p>
            </div>

            <div className="space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Headings</h2>
                    <div className="space-y-8">
                        <div className="grid gap-4">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Heading 1
                            </h1>
                            <p className="text-sm text-muted-foreground font-mono">h1 .text-4xl .font-extrabold .tracking-tight .lg:text-5xl</p>
                        </div>
                        <Separator />
                        <div className="grid gap-4">
                            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                Heading 2
                            </h2>
                            <p className="text-sm text-muted-foreground font-mono">h2 .text-3xl .font-semibold .tracking-tight</p>
                        </div>
                        <Separator />
                        <div className="grid gap-4">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Heading 3
                            </h3>
                            <p className="text-sm text-muted-foreground font-mono">h3 .text-2xl .font-semibold .tracking-tight</p>
                        </div>
                        <Separator />
                        <div className="grid gap-4">
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                Heading 4
                            </h4>
                            <p className="text-sm text-muted-foreground font-mono">h4 .text-xl .font-semibold .tracking-tight</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Text Elements</h2>
                    <div className="space-y-8">
                        <div className="grid gap-2">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
                            </p>
                            <p className="text-sm text-muted-foreground font-mono">p .leading-7</p>
                        </div>
                        <div className="grid gap-2">
                            <blockquote className="mt-6 border-l-2 pl-6 italic">
                                "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
                            </blockquote>
                            <p className="text-sm text-muted-foreground font-mono">blockquote .border-l-2 .pl-6 .italic</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Inline Elements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground font-medium">Inline Code</p>
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                @radix-ui/react-alert-dialog
                            </code>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground font-medium">Lead</p>
                            <p className="text-xl text-muted-foreground">
                                A modal dialog that interrupts the user with important content and expects a response.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground font-medium">Large</p>
                            <div className="text-lg font-semibold">Are you absolutely sure?</div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground font-medium">Small</p>
                            <small className="text-sm font-medium leading-none">Email address</small>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground font-medium">Muted</p>
                            <p className="text-sm text-muted-foreground">Enter your email address.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
