import { ButtonDemo } from "./button-demo";
import { BadgeDemo } from "./badge-demo";
import { InputDemo } from "./input-demo";

export const demoRegistry: Record<string, React.ComponentType> = {
    "button": ButtonDemo,
    "badge": BadgeDemo,
    "input": InputDemo,
};
