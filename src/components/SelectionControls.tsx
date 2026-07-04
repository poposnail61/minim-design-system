import { type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";

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

type SelectionIconProps = {
  kind: "checkbox" | "radio";
  selected?: boolean | "mixed";
  disabled?: boolean;
  size: ControlSize;
};

function SelectionIcon({ kind, selected = false, disabled, size }: SelectionIconProps) {
  const isSelected = selected === true || selected === "mixed";
  const color = disabled ? "text-[var(--fg-disabled)]" : isSelected ? "text-[var(--fg-primary)]" : "text-[var(--fg-disabled)]";
  const className = `block shrink-0 ${controlSizeMap[size]} ${color}`;

  if (kind === "radio") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        {isSelected ? (
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Zm0 4a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm0 2a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5Z"
            clipRule="evenodd"
          />
        )}
      </svg>
    );
  }

  if (selected === "mixed") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 3.25h11A3.25 3.25 0 0 1 20.75 6.5v11a3.25 3.25 0 0 1-3.25 3.25h-11A3.25 3.25 0 0 1 3.25 17.5v-11A3.25 3.25 0 0 1 6.5 3.25Zm2 7.75a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {isSelected ? (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 3.25h11A3.25 3.25 0 0 1 20.75 6.5v11a3.25 3.25 0 0 1-3.25 3.25h-11A3.25 3.25 0 0 1 3.25 17.5v-11A3.25 3.25 0 0 1 6.5 3.25Zm9.79 6.7a1 1 0 0 0-1.58-1.22l-3.63 4.72-1.86-1.86a1 1 0 1 0-1.41 1.42l2.67 2.66a1 1 0 0 0 1.5-.09l4.31-5.63Z"
          clipRule="evenodd"
        />
      ) : (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 3.25h11A3.25 3.25 0 0 1 20.75 6.5v11a3.25 3.25 0 0 1-3.25 3.25h-11A3.25 3.25 0 0 1 3.25 17.5v-11A3.25 3.25 0 0 1 6.5 3.25Zm0 2A1.25 1.25 0 0 0 5.25 6.5v11c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25v-11c0-.69-.56-1.25-1.25-1.25h-11Z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
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
