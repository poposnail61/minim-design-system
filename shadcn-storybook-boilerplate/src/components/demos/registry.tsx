import { ButtonDemo } from "./button-demo";
import { BadgeDemo } from "./badge-demo";
import { InputDemo } from "./input-demo";
import { AspectRatioDemo } from "./aspect-ratio-demo";
import { CardDemo } from "./card-demo";
import { AlertDemo } from "./alert-demo";
import { AvatarDemo } from "./avatar-demo";
import { DialogDemo } from "./dialog-demo";
import { ProgressDemo } from "./progress-demo";
import { TooltipDemo } from "./tooltip-demo";
import { SonnerDemo } from "./sonner-demo";
import { CheckboxDemo } from "./checkbox-demo";
import { RadioGroupDemo } from "./radio-group-demo";
import { SelectDemo } from "./select-demo";
import { SwitchDemo } from "./switch-demo";
import { SliderDemo } from "./slider-demo";
import { TextareaDemo } from "./textarea-demo";

export const demoRegistry: Record<string, React.ComponentType> = {
    "button": ButtonDemo,
    "badge": BadgeDemo,
    "input": InputDemo,
    "aspect-ratio": AspectRatioDemo,
    "card": CardDemo,
    "alert": AlertDemo,
    "avatar": AvatarDemo,
    "checkbox": CheckboxDemo,
    "radio-group": RadioGroupDemo,
    "select": SelectDemo,
    "switch": SwitchDemo,
    "slider": SliderDemo,
    "textarea": TextareaDemo,
    "dialog": DialogDemo,
    "progress": ProgressDemo,
    "tooltip": TooltipDemo,
    "sonner": SonnerDemo,
};
