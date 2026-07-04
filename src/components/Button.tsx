import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonKind = "neutral" | "muted" | "primary" | "critical";
export type ButtonVariant = "solid" | "outline" | "subtle" | "ghost" | "glass";
export type ButtonShape = "soft" | "full";
export type ButtonSize = "xlarge" | "large" | "medium" | "small";

export type ButtonProps = {
  label?:   string;
  prefix?:  ReactNode;
  suffix?:  ReactNode;
  kind?:    ButtonKind;
  variant?: ButtonVariant;
  shape?:   ButtonShape;
  size?:    ButtonSize;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/* ─── Token maps ────────────────────────────────────────────────── */

const radiusMap: Record<ButtonShape, Record<ButtonSize, string>> = {
  soft: {
    small:  "rounded-[var(--radius-medium)]",
    medium: "rounded-[var(--radius-medium)]",
    large:  "rounded-[var(--radius-medium)]",
    xlarge: "rounded-[var(--radius-medium)]",
  },
  full: {
    small:  "rounded-[var(--radius-full-h36)]",
    medium: "rounded-[var(--radius-full-h36)]",
    large:  "rounded-[var(--radius-full-h44)]",
    xlarge: "rounded-[var(--radius-full-h52)]",
  },
};

const paddingMap: Record<ButtonSize, string> = {
  small:  "p-[var(--spacing-component-h32)]",
  medium: "p-[var(--spacing-200)]",
  large:  "p-[var(--spacing-component-h44)]",
  xlarge: "p-[var(--spacing-component-h52)]",
};

const minWidthMap: Record<ButtonSize, string> = {
  small:  "min-w-[var(--size-h36)]",
  medium: "min-w-[var(--size-h36)]",
  large:  "min-w-[var(--size-h44)]",
  xlarge: "min-w-[var(--size-h44)]",
};

const iconHeightMap: Record<ButtonSize, string> = {
  small:  "h-[var(--size-h20)]",
  medium: "h-[var(--size-h20)]",
  large:  "h-[var(--size-h22)]",
  xlarge: "h-[var(--size-h22)]",
};

const fontMap: Record<ButtonSize, string> = {
  small:  "ts-body-medium-strong",
  medium: "ts-body-medium-strong",
  large:  "ts-body-large-strong",
  xlarge: "ts-body-large-strong",
};

function getBg(kind: ButtonKind, variant: ButtonVariant, disabled: boolean): string {
  if (variant === "glass")   return "bg-[var(--bg-neutral-glass)] backdrop-blur-[6px]";
  if (variant === "ghost")   return "bg-transparent";
  if (variant === "subtle")  return "bg-[var(--bg-neutral)]";
  if (variant === "outline") return "bg-[var(--bg-field)]";
  if (disabled)              return "bg-[var(--bg-disabled)]";
  if (kind === "primary")    return "bg-[var(--bg-primary-solid)]";
  if (kind === "critical")   return "bg-[var(--bg-critical-solid)]";
  return "bg-[var(--bg-neutral-solid)]";
}

function getTextColor(kind: ButtonKind, variant: ButtonVariant, disabled: boolean): string {
  if (variant === "glass")   return "text-[var(--fg-on-surface)]";
  if (variant === "solid")   return disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-on-surface)]";
  if (variant === "subtle")  return "text-[var(--fg-neutral)]";
  if (variant === "outline") return kind === "critical" ? "text-[var(--fg-critical)]" : "text-[var(--fg-neutral)]";
  if (kind === "muted")    return "text-[var(--fg-muted)]";
  if (kind === "primary")  return "text-[var(--fg-primary)]";
  if (kind === "critical") return "text-[var(--fg-critical)]";
  return "text-[var(--fg-neutral)]";
}

/* ─── Component ─────────────────────────────────────────────────── */

export function Button({
  label,
  prefix,
  suffix,
  kind     = "neutral",
  variant  = "solid",
  shape    = "soft",
  size     = "xlarge",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const radius    = radiusMap[shape][size];
  const padding   = paddingMap[size];
  const minWidth  = minWidthMap[size];
  const iconH     = iconHeightMap[size];
  const font      = fontMap[size];
  const bg        = getBg(kind, variant, disabled);
  const textColor = getTextColor(kind, variant, disabled);

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
      {variant === "outline" && (
        <div
          aria-hidden
          className={`absolute border border-[var(--stroke-neutral)] border-solid inset-0 pointer-events-none ${radius}`}
        />
      )}

      <div className="content-stretch flex items-start relative shrink-0">
        {prefix !== undefined && <IconSlot>{prefix}</IconSlot>}

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
