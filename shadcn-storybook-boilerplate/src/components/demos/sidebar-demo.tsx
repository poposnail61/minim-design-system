import { Sidebar } from "@/components/ui/sidebar"

export function SidebarDemo() {
    return (
        <div className="h-[200px] w-[200px] border rounded-md p-4">
            {/* Simplified sidebar demo */}
            <Sidebar>
                <div className="p-4">Sidebar Content</div>
            </Sidebar>
        </div>
    )
}
