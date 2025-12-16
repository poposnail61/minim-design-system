import { Kbd } from "@/components/ui/kbd"

export function KbdDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Kbd>⌘</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>T</Kbd>
        </div>
    )
}
