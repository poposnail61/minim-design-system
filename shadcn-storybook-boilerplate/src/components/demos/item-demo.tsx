import { Item } from "@/components/ui/item"
import { User } from "lucide-react"

export function ItemDemo() {
    return (
        <div className="w-[300px] border rounded-md p-4">
            <Item>
                <User className="h-4 w-4 mr-2" />
                <span>Profile Item</span>
            </Item>
        </div>
    )
}
