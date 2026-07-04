import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type ToggleChipProps = {
  label?:    string;
  prefix?:   ReactNode;
  suffix?:   ReactNode;
  selected?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/* ─── Fixed tokens ──────────────────────────────────────────────────
   Size:  medium (p-8, min-w-h36, icon-h20, ts-body-medium/Regular)
   Shape: full pill (radius-full-h36 = 18px)
   No border in any state.
────────────────────────────────────────────────────────────────── */

export function ToggleChip({
  label,
  prefix,
  suffix,
  selected  = false,
  disabled  = false,
  className,
  ...props
}: ToggleChipProps) {
  const bg        = disabled ? "bg-[var(--bg-disabled)]"   : selected ? "bg-[var(--bg-neutral-solid)]" : "bg-[var(--bg-neutral)]";
  const textColor = disabled ? "text-[var(--fg-disabled)]" : selected ? "text-[var(--fg-on-surface)]"  : "text-[var(--fg-neutral)]";

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
