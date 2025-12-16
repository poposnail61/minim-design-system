import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupDemo() {
    return (
        <div className="space-y-4">
            <ButtonGroup>
                <Button variant="outline">Year</Button>
                <Button variant="outline">Month</Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Day</Button>
            </ButtonGroup>
        </div>
    )
}
