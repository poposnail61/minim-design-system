import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type InlineButtonKind = "neutral" | "muted" | "primary" | "critical" | "on-surface";
export type InlineButtonSize = "large" | "medium";

export type InlineButtonProps = {
  label?:   string;
  prefix?:  ReactNode;
  suffix?:  ReactNode;
  kind?:    InlineButtonKind;
  size?:    InlineButtonSize;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/* ─── Token maps ────────────────────────────────────────────────── */

const iconHeightMap: Record<InlineButtonSize, string> = {
  medium: "h-[var(--size-h20)]",
  large:  "h-[var(--size-h22)]",
};

const iconSizeMap: Record<InlineButtonSize, number> = {
  medium: 20,
  large:  22,
};

const fontMap: Record<InlineButtonSize, string> = {
  medium: "ts-body-medium",
  large:  "ts-body-large",
};

function getTextColor(kind: InlineButtonKind, disabled: boolean): string {
  if (disabled)              return "text-[var(--fg-disabled)]";
  if (kind === "primary")    return "text-[var(--fg-primary)]";
  if (kind === "critical")   return "text-[var(--fg-critical)]";
  if (kind === "muted")      return "text-[var(--fg-muted)]";
  if (kind === "on-surface") return "text-[var(--fg-on-surface)]";
  return "text-[var(--fg-neutral)]";
}

/* ─── Component ─────────────────────────────────────────────────── */

export function InlineButton({
  label,
  prefix,
  suffix,
  kind     = "neutral",
  size     = "large",
  disabled = false,
  className,
  ...props
}: InlineButtonProps) {
  const iconH     = iconHeightMap[size];
  const iconPx    = iconSizeMap[size];
  const font      = fontMap[size];
  const textColor = getTextColor(kind, disabled);

  const resolvedPrefix = prefix ?? <Icon name="checkbox-outline" size={iconPx} />;

  function IconSlot({ children }: { children: ReactNode }) {
    return (
      <div className={`content-stretch flex ${iconH} items-center overflow-clip relative shrink-0`}>
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
        "content-stretch flex gap-[var(--spacing-100)] items-center relative cursor-pointer",
        "disabled:cursor-not-allowed",
        textColor,
        className ?? "",
      ].join(" ")}
      {...props}
    >
      <IconSlot>{resolvedPrefix}</IconSlot>

      {label !== undefined && (
        <div className="content-stretch flex gap-[var(--spacing-100)] items-start relative shrink-0">
          <p className={`[word-break:break-word] ${font} whitespace-nowrap relative shrink-0`}>
            {label}
          </p>
        </div>
      )}

      {suffix !== undefined && <IconSlot>{suffix}</IconSlot>}
    </button>
  );
}
