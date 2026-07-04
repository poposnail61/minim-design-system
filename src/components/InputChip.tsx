import { type HTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type InputChipProps = {
  label?:   string;
  prefix?:  ReactNode;
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

function ChipIconSlot({ children, color }: { children: ReactNode; color: string }) {
  return (
    <div className={`content-stretch flex h-[var(--size-h20)] items-center overflow-clip relative shrink-0 ${color}`}>
      <div className="aspect-[24/24] h-full overflow-clip relative shrink-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function InputChip({
  label,
  prefix,
  onClose,
  disabled  = false,
  className,
  ...props
}: InputChipProps) {
  const bg        = disabled ? "bg-[var(--bg-disabled)]"   : "bg-[var(--bg-neutral)]";
  const textColor = disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]";

  const resolvedPrefix = prefix ?? <Icon name="checkbox-outline" size={20} />;

  return (
    <div
      className={[
        "content-stretch flex items-center justify-center",
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

        {/* 닫기 버튼 — 필수 */}
        <button
          type="button"
          disabled={disabled}
          onClick={onClose}
          className={`content-stretch flex h-[var(--size-h20)] items-center overflow-clip relative shrink-0 ${textColor} disabled:cursor-not-allowed`}
        >
          <div className="aspect-[24/24] h-full overflow-clip relative shrink-0 flex items-center justify-center">
            <Icon name="close-mini-outline" size={20} />
          </div>
        </button>
      </div>
    </div>
  );
}
