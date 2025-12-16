import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
    return (
        <div className="flex items-center space-x-4">
            <Spinner className="h-4 w-4" />
            <Spinner className="h-8 w-8" />
            <Spinner className="h-12 w-12" />
        </div>
    )
}
