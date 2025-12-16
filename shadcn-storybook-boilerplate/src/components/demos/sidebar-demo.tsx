import { Sidebar, SidebarContent, SidebarProvider, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Home, Inbox, Calendar } from "lucide-react"

export function SidebarDemo() {
    return (
        <div className="h-[400px] w-full border rounded-md overflow-hidden bg-background relative flex">
            <SidebarProvider className="min-h-0 w-full">
                <Sidebar className="absolute left-0 top-0 h-full border-r" collapsible="none">
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive>
                                            <Home />
                                            <span>Home</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Inbox />
                                            <span>Inbox</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Calendar />
                                            <span>Calendar</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-8 ml-[--sidebar-width]">
                    <div className="rounded-lg border border-dashed shadow-sm h-full flex items-center justify-center text-muted-foreground">
                        Main Content Area
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}
