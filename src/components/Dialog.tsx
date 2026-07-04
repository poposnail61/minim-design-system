import { type HTMLAttributes, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/Button";

export type DialogProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export function Dialog({
  title,
  description,
  children,
  footer,
  onClose,
  className,
  ...props
}: DialogProps) {
  return (
    <div
      className={`w-full max-w-[420px] rounded-[var(--radius-large)] border border-[var(--stroke-neutral)] bg-[var(--bg-layer)] p-[var(--spacing-500)] shadow-xl ${className ?? ""}`}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      <div className="mb-[var(--spacing-400)] flex items-start gap-[var(--spacing-300)]">
        <div className="min-w-0 flex-1">
          {title !== undefined && <h2 className="ts-title-small text-[var(--fg-neutral)]">{title}</h2>}
          {description !== undefined && <p className="ts-body-medium mt-[var(--spacing-100)] text-[var(--fg-muted)]">{description}</p>}
        </div>
        {onClose !== undefined && (
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-[var(--size-h32)] w-[var(--size-h32)] shrink-0 items-center justify-center rounded-[var(--radius-small)] text-[var(--fg-muted)] hover:bg-[var(--bg-neutral)] hover:text-[var(--fg-neutral)]"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        )}
      </div>
      {children !== undefined && <div className="mb-[var(--spacing-500)]">{children}</div>}
      {footer ?? (
        <div className="flex justify-end gap-[var(--spacing-200)]">
          <Button label="Cancel" size="medium" variant="outline" kind="neutral" />
          <Button label="Confirm" size="medium" variant="solid" kind="neutral" />
        </div>
      )}
    </div>
  );
}
