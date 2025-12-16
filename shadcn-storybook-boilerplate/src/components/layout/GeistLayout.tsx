import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useLocation } from "react-router-dom"
import React from "react"

export default function GeistLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean)
    const isHome = pathSegments.length === 0
    const category = pathSegments[0]
    const componentName = pathSegments[1]

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-bg-layer text-fg-neutral">
                <header className="flex h-16 shrink-0 items-center gap-200 border-b border-stroke-neutral transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-400">
                    <SidebarTrigger className="-ml-1 text-fg-neutral" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-stroke-neutral" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/" className="text-fg-muted hover:text-fg-neutral">Minim Design System</BreadcrumbLink>
                            </BreadcrumbItem>
                            {!isHome && (
                                <>
                                    <BreadcrumbSeparator className="hidden md:block text-fg-muted" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="capitalize text-fg-neutral">{category}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            )}
                            {componentName && (
                                <>
                                    <BreadcrumbSeparator className="hidden md:block text-fg-muted" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="capitalize text-fg-neutral">{componentName.replace(/-/g, " ")}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            )}
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col overflow-y-auto">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
