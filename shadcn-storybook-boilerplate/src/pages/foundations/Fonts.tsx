import { Typography } from "@/pages/Typography";

export function Fonts() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Fonts
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Minim Design System uses "Minim Font".
                </p>
            </div>
            <Typography />
        </div>
    )
}
