import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type ToggleButtonShape = "soft" | "full";
export type ToggleButtonSize  = "large" | "medium";

export type ToggleButtonProps = {
  label?:    string;
  prefix?:   ReactNode;
  suffix?:   ReactNode;
  selected?: boolean;
  shape?:    ToggleButtonShape;
  size?:     ToggleButtonSize;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/* ─── Token maps ────────────────────────────────────────────────── */

const radiusMap: Record<ToggleButtonShape, Record<ToggleButtonSize, string>> = {
  soft: {
    medium: "rounded-[var(--radius-medium)]",
    large:  "rounded-[var(--radius-medium)]",
  },
  full: {
    medium: "rounded-[var(--radius-full-h36)]",
    large:  "rounded-[var(--radius-full-h44)]",
  },
};

const paddingMap: Record<ToggleButtonSize, string> = {
  medium: "p-[var(--spacing-200)]",
  large:  "p-[var(--spacing-component-h44)]",
};

const minWidthMap: Record<ToggleButtonSize, string> = {
  medium: "min-w-[var(--size-h36)]",
  large:  "min-w-[var(--size-h44)]",
};

const iconHeightMap: Record<ToggleButtonSize, string> = {
  medium: "h-[var(--size-h20)]",
  large:  "h-[var(--size-h22)]",
};

const iconSizeMap: Record<ToggleButtonSize, number> = {
  medium: 20,
  large:  22,
};

const fontMap: Record<ToggleButtonSize, string> = {
  medium: "ts-body-medium-strong",
  large:  "ts-body-large-strong",
};

/* ─── Component ─────────────────────────────────────────────────── */

export function ToggleButton({
  label,
  prefix,
  suffix,
  selected  = false,
  shape     = "soft",
  size      = "large",
  disabled  = false,
  className,
  ...props
}: ToggleButtonProps) {
  const radius   = radiusMap[shape][size];
  const padding  = paddingMap[size];
  const minWidth = minWidthMap[size];
  const iconH    = iconHeightMap[size];
  const iconPx   = iconSizeMap[size];
  const font     = fontMap[size];

  const bg        = disabled ? "bg-[var(--bg-disabled)]"   : selected ? "bg-[var(--bg-neutral-solid)]" : "bg-[var(--bg-field)]";
  const textColor = disabled ? "text-[var(--fg-disabled)]" : selected ? "text-[var(--fg-on-surface)]"  : "text-[var(--fg-neutral)]";
  const showBorder = !selected && !disabled;

  const resolvedPrefix = prefix ?? <Icon name="checkbox-outline" size={iconPx} />;

  function IconSlot({ children }: { children: ReactNode }) {
    return (
      <div className={`content-stretch flex ${iconH} items-center overflow-clip relative shrink-0 ${textColor}`}>
        <div className="aspect-[24/24] h-full overflow-clip relative shrink-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <button
      disabled={disabled}
      className={[
        "content-stretch flex items-center justify-center relative cursor-pointer",
        "disabled:cursor-not-allowed transition-opacity active:opacity-80",
        bg, padding, minWidth, radius,
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {showBorder && (
        <div
          aria-hidden
          className={`absolute border border-[var(--stroke-neutral)] border-solid inset-0 pointer-events-none ${radius}`}
        />
      )}

      <div className="content-stretch flex items-start relative shrink-0">
        <IconSlot>{resolvedPrefix}</IconSlot>

        {label !== undefined && (
          <div className="content-stretch flex gap-[var(--spacing-100)] items-start px-[var(--spacing-100)] relative shrink-0">
            <p className={`[word-break:break-word] ${font} ${textColor} whitespace-nowrap relative shrink-0`}>
              {label}
            </p>
          </div>
        )}

        {suffix !== undefined && <IconSlot>{suffix}</IconSlot>}
      </div>
    </button>
  );
}
