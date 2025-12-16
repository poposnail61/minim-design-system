import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    EmptyContent,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export function EmptyDemo() {
    return (
        <div className="h-[300px] w-full border rounded-md flex items-center justify-center p-8">
            <Empty>
                <EmptyMedia variant="icon">
                    <FileQuestion className="h-6 w-6" />
                </EmptyMedia>
                <EmptyHeader>
                    <EmptyTitle>No Data Found</EmptyTitle>
                    <EmptyDescription>You haven't created any items yet.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <Button className="mt-4">Create Item</Button>
                </EmptyContent>
            </Empty>
        </div>
    )
}
