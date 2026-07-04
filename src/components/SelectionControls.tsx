import { type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";
import { Check, Minus } from "lucide-react";

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

const controlSizeMap: Record<ControlSize, string> = {
  large: "h-[var(--size-h22)] w-[var(--size-h22)]",
  medium: "h-[var(--size-h20)] w-[var(--size-h20)]",
};

const textMap: Record<ControlSize, string> = {
  large: "ts-body-large",
  medium: "ts-body-medium",
};

export function Checkbox({ selected = false, size = "medium", label, disabled, className, ...props }: CheckboxProps) {
  const isMixed = selected === "mixed";
  const isSelected = selected === true || isMixed;
  return (
    <label className={`inline-flex items-center gap-[var(--spacing-200)] ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className ?? ""}`}>
      <input type="checkbox" checked={selected === true} disabled={disabled} className="sr-only" readOnly {...props} />
      <span
        className={[
          "inline-flex shrink-0 items-center justify-center border transition-colors",
          controlSizeMap[size],
          "rounded-[var(--radius-xsmall)]",
          disabled
            ? "border-[var(--stroke-neutral)] bg-[var(--bg-disabled)] text-[var(--fg-disabled)]"
            : isSelected
              ? "border-[var(--stroke-primary)] bg-[var(--bg-primary-solid)] text-[var(--fg-on-surface)]"
              : "border-[var(--stroke-neutral)] bg-[var(--bg-field)] text-transparent",
        ].join(" ")}
      >
        {isMixed ? <Minus size={size === "large" ? 16 : 14} strokeWidth={2.5} /> : <Check size={size === "large" ? 16 : 14} strokeWidth={2.5} />}
      </span>
      {label !== undefined && <span className={`${textMap[size]} ${disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]"}`}>{label}</span>}
    </label>
  );
}

export function Radio({ selected = false, size = "medium", label, disabled, className, ...props }: RadioProps) {
  return (
    <label className={`inline-flex items-center gap-[var(--spacing-200)] ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className ?? ""}`}>
      <input type="radio" checked={selected} disabled={disabled} className="sr-only" readOnly {...props} />
      <span
        className={[
          "inline-flex shrink-0 items-center justify-center rounded-full border transition-colors",
          controlSizeMap[size],
          disabled
            ? "border-[var(--stroke-neutral)] bg-[var(--bg-disabled)]"
            : selected
              ? "border-[var(--stroke-primary)] bg-[var(--bg-field)]"
              : "border-[var(--stroke-neutral)] bg-[var(--bg-field)]",
        ].join(" ")}
      >
        {selected && <span className={`${size === "large" ? "h-[10px] w-[10px]" : "h-[8px] w-[8px]"} rounded-full ${disabled ? "bg-[var(--fg-disabled)]" : "bg-[var(--bg-primary-solid)]"}`} />}
      </span>
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
            "block rounded-full bg-[var(--bg-layer)] shadow-sm transition-transform",
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
  const radius = shape === "full" ? (size === "large" ? "rounded-[var(--radius-full-h44)]" : "rounded-[var(--radius-full-h36)]") : "rounded-[var(--radius-small)]";
  const itemHeight = size === "large" ? "h-[var(--size-h44)]" : "h-[var(--size-h36)]";
  return (
    <div className={`inline-flex gap-[var(--spacing-100)] ${width === "fixed" ? "w-full max-w-[400px]" : ""} ${className ?? ""}`}>
      {options.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onValueChange?.(item.value)}
            className={[
              "inline-flex min-w-[60px] items-center justify-center gap-[var(--spacing-100)] border px-[var(--spacing-300)] transition-colors",
              itemHeight,
              radius,
              width === "fixed" ? "flex-1" : "",
              selected ? "border-[var(--stroke-neutral-strong)] bg-[var(--bg-neutral-solid)] text-[var(--fg-on-surface)]" : "border-[var(--stroke-neutral)] bg-[var(--bg-field)] text-[var(--fg-neutral)] hover:border-[var(--stroke-neutral-strong)]",
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
    <div className={`inline-flex ${width === "fixed" ? "w-full max-w-[400px]" : ""} ${className ?? ""}`} role="tablist">
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
            {selected && <span className="absolute inset-x-[var(--spacing-200)] bottom-[-1px] h-[2px] rounded-full bg-[var(--bg-neutral-solid)]" />}
          </button>
        );
      })}
    </div>
  );
}
