import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"
import { Search } from "lucide-react"

export function InputGroupDemo() {
    return (
        <div className="w-[300px]">
            <InputGroup>
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                    <Search className="h-4 w-4" />
                </div>
                <Input placeholder="Search..." className="pl-9" />
            </InputGroup>
        </div>
    )
}
