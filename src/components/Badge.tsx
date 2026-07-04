import { type HTMLAttributes, type ReactNode } from "react";

export type BadgeKind = "neutral" | "muted" | "primary" | "secondary" | "critical";
export type BadgeVariant = "solid" | "glass";
export type BadgeShape = "soft" | "full";
export type BadgeSize = "large" | "medium" | "small";

export type BadgeProps = {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  kind?: BadgeKind;
  variant?: BadgeVariant;
  shape?: BadgeShape;
  size?: BadgeSize;
} & HTMLAttributes<HTMLSpanElement>;

const sizeMap: Record<BadgeSize, string> = {
  large: "h-[var(--size-h22)] px-[var(--spacing-150)] ts-caption-large-strong",
  medium: "h-[var(--size-h20)] px-[var(--spacing-150)] ts-caption-medium-strong",
  small: "h-[var(--size-h18)] px-[var(--spacing-100)] ts-caption-small-strong",
};

const radiusMap: Record<BadgeShape, Record<BadgeSize, string>> = {
  soft: {
    large: "rounded-[var(--radius-xsmall)]",
    medium: "rounded-[var(--radius-xsmall)]",
    small: "rounded-[var(--radius-xsmall)]",
  },
  full: {
    large: "rounded-[var(--radius-full-h22)]",
    medium: "rounded-[var(--radius-full-h20)]",
    small: "rounded-[var(--radius-full-h18)]",
  },
};

function getTone(kind: BadgeKind, variant: BadgeVariant) {
  if (variant === "glass") {
    return "bg-[var(--bg-neutral-glass)] text-[var(--fg-on-surface)] backdrop-blur-[6px]";
  }

  if (kind === "primary") return "bg-[var(--bg-primary-solid)] text-[var(--fg-on-surface)]";
  if (kind === "secondary") return "bg-[var(--bg-secondary-solid)] text-[var(--fg-on-surface)]";
  if (kind === "critical") return "bg-[var(--bg-critical-solid)] text-[var(--fg-on-surface)]";
  if (kind === "muted") return "bg-[var(--bg-muted-solid)] text-[var(--fg-on-surface)]";
  return "bg-[var(--bg-neutral-solid)] text-[var(--fg-on-surface)]";
}

export function Badge({
  label,
  prefix,
  suffix,
  kind = "neutral",
  variant = "solid",
  shape = "soft",
  size = "medium",
  className,
  ...props
}: BadgeProps) {
  const tone = getTone(kind, variant);
  const iconSize = size === "large" ? "h-[var(--size-h18)]" : size === "medium" ? "h-[var(--size-h18)]" : "h-[var(--size-h18)]";

  return (
    <span
      className={[
        "inline-flex items-center justify-center gap-[var(--spacing-50)] whitespace-nowrap",
        sizeMap[size],
        radiusMap[shape][size],
        tone,
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {prefix !== undefined && <span className={`inline-flex aspect-square ${iconSize} items-center justify-center`}>{prefix}</span>}
      {label !== undefined && <span>{label}</span>}
      {suffix !== undefined && <span className={`inline-flex aspect-square ${iconSize} items-center justify-center`}>{suffix}</span>}
    </span>
  );
}
