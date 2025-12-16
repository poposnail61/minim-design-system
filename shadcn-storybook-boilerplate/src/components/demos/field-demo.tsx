import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FieldDemo() {
    return (
        <div className="w-[300px]">
            {/* Assuming Field is a wrapper for FormField-like structure or just a layout */}
            <Field>
                <Label>Username</Label>
                <Input placeholder="Enter username" />
                <p className="text-xs text-muted-foreground mt-1">This is a helper text.</p>
            </Field>
        </div>
    )
}
