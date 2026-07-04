import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type ActionChipVariant = "solid" | "subtle" | "outline";

export type ActionChipProps = {
  label?:   string;
  prefix?:  ReactNode;
  suffix?:  ReactNode;
  variant?: ActionChipVariant;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/* ─── Token maps ────────────────────────────────────────────────── */
// Size is fixed: medium (h-36, p-8, icon-h20, ts-body-medium)
// Shape is fixed: full pill (radius-full-h36 = 18px)

function getBg(variant: ActionChipVariant, disabled: boolean): string {
  if (disabled)              return "bg-[var(--bg-disabled)]";
  if (variant === "solid")   return "bg-[var(--bg-neutral-solid)]";
  if (variant === "outline") return "bg-[var(--bg-field)]";
  return "bg-[var(--bg-neutral)]";
}

function getTextColor(variant: ActionChipVariant, disabled: boolean): string {
  if (disabled)              return "text-[var(--fg-disabled)]";
  if (variant === "solid")   return "text-[var(--fg-on-surface)]";
  return "text-[var(--fg-neutral)]";
}

/* ─── Component ─────────────────────────────────────────────────── */

export function ActionChip({
  label,
  prefix,
  suffix,
  variant  = "solid",
  disabled = false,
  className,
  ...props
}: ActionChipProps) {
  const bg        = getBg(variant, disabled);
  const textColor = getTextColor(variant, disabled);
  const showBorder = variant === "outline" && !disabled;

  const resolvedPrefix = prefix ?? <Icon name="checkbox-outline" size={20} />;

  function IconSlot({ children }: { children: ReactNode }) {
    return (
      <div className={`content-stretch flex h-[var(--size-h20)] items-center overflow-clip relative shrink-0 ${textColor}`}>
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
        "min-w-[var(--size-h36)] p-[var(--spacing-200)]",
        "rounded-[var(--radius-full-h36)]",
        bg,
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {showBorder && (
        <div
          aria-hidden
          className="absolute border border-[var(--stroke-neutral)] border-solid inset-0 pointer-events-none rounded-[var(--radius-full-h36)]"
        />
      )}

      <div className="content-stretch flex items-start relative shrink-0">
        <IconSlot>{resolvedPrefix}</IconSlot>

        {label !== undefined && (
          <div className="content-stretch flex gap-[var(--spacing-100)] items-start px-[var(--spacing-100)] relative shrink-0">
            <p className={`[word-break:break-word] ts-body-medium ${textColor} whitespace-nowrap relative shrink-0`}>
              {label}
            </p>
          </div>
        )}

        {suffix !== undefined && <IconSlot>{suffix}</IconSlot>}
      </div>
    </button>
  );
}
