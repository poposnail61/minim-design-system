import { type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type ControlSize = "large" | "medium";
export type ControlState = "enabled" | "disabled";

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type CheckboxProps = {
  selected?: boolean | "mixed";
  size?: ControlSize;
  label?: string;
} & NativeInputProps;

export type RadioProps = {
  selected?: boolean;
  size?: ControlSize;
  label?: string;
} & NativeInputProps;

export type SwitchProps = {
  selected?: boolean;
  size?: ControlSize;
  label?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export type SegmentOption = {
  value: string;
  label: string;
  prefix?: ReactNode;
};

export type SegmentControlProps = {
  options: SegmentOption[];
  value: string;
  onValueChange?: (value: string) => void;
  size?: ControlSize;
  shape?: "soft" | "full";
  width?: "hug" | "fixed";
  className?: string;
};

export type TabProps = {
  items: SegmentOption[];
  value: string;
  onValueChange?: (value: string) => void;
  size?: ControlSize;
  width?: "hug" | "fixed";
  className?: string;
};

const textMap: Record<ControlSize, string> = {
  large: "ts-body-large",
  medium: "ts-body-medium",
};

type SelectionIconProps = {
  kind: "checkbox" | "radio";
  selected?: boolean | "mixed";
  disabled?: boolean;
  size: ControlSize;
};

function SelectionIcon({ kind, selected = false, disabled, size }: SelectionIconProps) {
  const isSelected = selected === true || selected === "mixed";
  const color = disabled ? "text-[var(--fg-disabled)]" : isSelected ? "text-[var(--fg-primary)]" : "text-[var(--fg-disabled)]";
  const iconSize = size === "large" ? 22 : 20;
  const name =
    kind === "radio"
      ? isSelected
        ? "radio-checked-solid"
        : "radio-outline"
      : selected === "mixed"
        ? "checkbox-mixed-solid"
        : isSelected
          ? "checkbox-checked-solid"
          : "checkbox-outline";

  return <Icon name={name} size={iconSize} className={`shrink-0 ${color}`} />;
}

export function Checkbox({ selected = false, size = "medium", label, disabled, className, ...props }: CheckboxProps) {
  const isMixed = selected === "mixed";
  return (
    <label className={`inline-flex items-center gap-[var(--spacing-200)] ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className ?? ""}`}>
      <input type="checkbox" checked={selected === true} disabled={disabled} className="sr-only" readOnly {...props} />
      <SelectionIcon kind="checkbox" selected={isMixed ? "mixed" : selected} disabled={disabled} size={size} />
      {label !== undefined && <span className={`${textMap[size]} ${disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]"}`}>{label}</span>}
    </label>
  );
}

export function Radio({ selected = false, size = "medium", label, disabled, className, ...props }: RadioProps) {
  return (
    <label className={`inline-flex items-center gap-[var(--spacing-200)] ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className ?? ""}`}>
      <input type="radio" checked={selected} disabled={disabled} className="sr-only" readOnly {...props} />
      <SelectionIcon kind="radio" selected={selected} disabled={disabled} size={size} />
      {label !== undefined && <span className={`${textMap[size]} ${disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]"}`}>{label}</span>}
    </label>
  );
}

export function Switch({ selected = false, size = "medium", label, disabled, className, onClick, ...props }: SwitchProps) {
  const dims = size === "large" ? "h-[28px] w-[52px]" : "h-[24px] w-[44px]";
  const thumb = size === "large" ? "h-[24px] w-[32px]" : "h-[20px] w-[28px]";
  return (
    <span className={`inline-flex items-center gap-[var(--spacing-200)] ${className ?? ""}`}>
      <button
        type="button"
        role="switch"
        aria-checked={selected}
        disabled={disabled}
        onClick={onClick}
        className={[
          "relative inline-flex shrink-0 items-center rounded-full p-[2px] transition-colors disabled:cursor-not-allowed",
          dims,
          disabled
            ? "bg-[var(--bg-disabled)]"
            : selected
              ? "bg-[var(--bg-primary-solid)]"
              : "bg-[var(--stroke-neutral)]",
        ].join(" ")}
        {...props}
      >
        <span
          className={[
            "block rounded-full bg-[var(--bg-layer)] transition-transform",
            thumb,
            selected ? (size === "large" ? "translate-x-[16px]" : "translate-x-[12px]") : "translate-x-0",
          ].join(" ")}
        />
      </button>
      {label !== undefined && <span className={`${textMap[size]} ${disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]"}`}>{label}</span>}
    </span>
  );
}

export function SegmentControl({
  options,
  value,
  onValueChange,
  size = "medium",
  shape = "soft",
  width = "hug",
  className,
}: SegmentControlProps) {
  const radius = shape === "full" ? (size === "large" ? "rounded-[var(--radius-full-h44)]" : "rounded-[var(--radius-full-h36)]") : "rounded-[var(--radius-medium)]";
  const itemHeight = size === "large" ? "h-[var(--size-h44)]" : "h-[var(--size-h36)]";
  const itemWidth = size === "large" ? "w-[var(--size-segment-item-large)]" : "w-[var(--size-segment-item-medium)]";
  const selectedRadius = shape === "full" ? (size === "large" ? "rounded-[var(--radius-full-h44)]" : "rounded-[var(--radius-full-h36)]") : "rounded-[var(--radius-medium)]";
  return (
    <div
      className={[
        "inline-flex items-stretch bg-[var(--bg-neutral)]",
        radius,
        width === "fixed" ? "w-full max-w-[var(--size-segment-fixed)]" : "",
        className ?? "",
      ].join(" ")}
    >
      {options.map((item, index) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onValueChange?.(item.value)}
            className={[
              "inline-flex items-center justify-center gap-[var(--spacing-100)] border transition-colors",
              itemHeight,
              width === "fixed" ? "w-[var(--size-segment-item-fixed)] flex-none" : itemWidth,
              index > 0 ? "ml-[var(--spacing-negative-100)]" : "",
              selectedRadius,
              selected
                ? "border-[var(--stroke-neutral)] bg-[var(--bg-field)] text-[var(--fg-neutral)]"
                : "border-transparent bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg-neutral)]",
              textMap[size],
            ].join(" ")}
          >
            {item.prefix}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function Tabs({ items, value, onValueChange, size = "medium", width = "hug", className }: TabProps) {
  return (
    <div
      className={[
        "relative inline-flex border-b border-[var(--stroke-neutral)]",
        width === "fixed" ? "w-full max-w-[var(--size-tabs-fixed)]" : "",
        className ?? "",
      ].join(" ")}
      role="tablist"
    >
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onValueChange?.(item.value)}
            className={[
              "relative inline-flex items-center justify-center gap-[var(--spacing-100)] px-[var(--spacing-300)] transition-colors",
              size === "large" ? "h-[var(--size-h52)]" : "h-[var(--size-h44)]",
              width === "fixed" ? "flex-1" : "",
              selected ? "text-[var(--fg-neutral)]" : "text-[var(--fg-muted)] hover:text-[var(--fg-neutral)]",
              textMap[size],
            ].join(" ")}
          >
            {item.prefix}
            {item.label}
            {selected && <span className="absolute inset-x-[var(--spacing-200)] bottom-[-1px] z-10 h-[2px] rounded-full bg-[var(--bg-neutral-solid)]" />}
          </button>
        );
      })}
    </div>
  );
}
