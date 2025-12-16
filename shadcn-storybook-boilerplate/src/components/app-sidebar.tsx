import * as React from "react"
import { GalleryVerticalEnd, Home } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

const components = [
    "Accordion", "Alert Dialog", "Alert", "Aspect Ratio", "Avatar", "Badge", "Breadcrumb", "Button Group", "Button", "Calendar", "Card", "Carousel", "Chart", "Checkbox", "Collapsible", "Command", "Context Menu", "Dialog", "Drawer", "Dropdown Menu", "Empty", "Field", "Form", "Hover Card", "Input Group", "Input OTP", "Input", "Item", "Kbd", "Label", "Menubar", "Navigation Menu", "Pagination", "Popover", "Progress", "Radio Group", "Resizable", "Scroll Area", "Select", "Separator", "Sheet", "Sidebar", "Skeleton", "Slider", "Sonner", "Spinner", "Switch", "Table", "Tabs", "Textarea", "Toggle Group", "Toggle", "Tooltip"
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation()

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-bg-primary-solid text-fg-neutral-inverted">
                                    <GalleryVerticalEnd className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">Minim Design</span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={location.pathname === "/"}>
                                <Link to="/" className="font-medium">
                                    <Home className="mr-2 h-4 w-4" />
                                    Introduction
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Foundations</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/foundations/font"}>
                                    <Link to="/foundations/font">Font</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/foundations/icon"}>
                                    <Link to="/foundations/icon">Icons</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/foundations/color"}>
                                    <Link to="/foundations/color">Color</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/foundations/typography"}>
                                    <Link to="/foundations/typography">Typography</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/foundations/size"}>
                                    <Link to="/foundations/size">Size & Spacing</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/foundations/effect"}>
                                    <Link to="/foundations/effect">Effects</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Components</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {components.map((item) => {
                                const slug = item.toLowerCase().replace(/ /g, "-")
                                const path = `/components/${slug}`
                                return (
                                    <SidebarMenuItem key={item}>
                                        <SidebarMenuButton asChild isActive={location.pathname === path}>
                                            <Link to={path}>{item}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar >
    )
}
