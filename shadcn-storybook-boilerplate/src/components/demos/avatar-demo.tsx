import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
    return (
        <div className="flex gap-4 items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarImage src="https://github.com/poposnail61.png" alt="@poposnail61" />
                <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
    )
}
