import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type FilterChipProps = {
  label?:    string;
  prefix?:   ReactNode;
  selected?: boolean;
  expanded?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

function ChipIconSlot({ children, color }: { children: ReactNode; color: string }) {
  return (
    <div className={`content-stretch flex h-[var(--size-h20)] items-center overflow-clip relative shrink-0 ${color}`}>
      <div className="aspect-[24/24] h-full overflow-clip relative shrink-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function FilterChip({
  label,
  prefix,
  selected  = false,
  expanded  = false,
  disabled  = false,
  className,
  ...props
}: FilterChipProps) {
  const bg        = disabled ? "bg-[var(--bg-disabled)]"   : selected ? "bg-[var(--bg-neutral-solid)]" : "bg-[var(--bg-neutral)]";
  const textColor = disabled ? "text-[var(--fg-disabled)]" : selected ? "text-[var(--fg-on-surface)]"  : "text-[var(--fg-neutral)]";

  const resolvedPrefix = prefix ?? <Icon name="checkbox-outline" size={20} />;
  const chevron = <Icon name={expanded ? "chevron-up-outline" : "chevron-down-outline"} size={20} />;

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
        <ChipIconSlot color={textColor}>{resolvedPrefix}</ChipIconSlot>

        {label !== undefined && (
          <div className="content-stretch flex gap-[var(--spacing-100)] items-start px-[var(--spacing-100)] relative shrink-0">
            <p className={`[word-break:break-word] ts-body-medium ${textColor} whitespace-nowrap relative shrink-0`}>
              {label}
            </p>
          </div>
        )}

        <ChipIconSlot color={textColor}>{chevron}</ChipIconSlot>
      </div>
    </button>
  );
}
