import { type HTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/SelectionControls";
import { InputField } from "@/components/Fields";

export type CellKind = "neutral" | "critical";
export type CellStatus = "enabled" | "disabled";

export type CellProps = {
  label?: string;
  description?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  kind?: CellKind;
  status?: CellStatus;
} & HTMLAttributes<HTMLDivElement>;

export type HeaderCellProps = {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function cellText(kind: CellKind, status: CellStatus) {
  if (status === "disabled") return "text-[var(--fg-disabled)]";
  if (kind === "critical") return "text-[var(--fg-critical)]";
  return "text-[var(--fg-neutral)]";
}

export function HeaderCell({ label, prefix, suffix, className, ...props }: HeaderCellProps) {
  return (
    <div
      className={`flex h-[var(--size-h44)] min-w-[160px] items-center gap-[var(--spacing-200)] border-b border-[var(--stroke-neutral)] bg-[var(--bg-layer-base)] px-[var(--spacing-300)] ${className ?? ""}`}
      role="columnheader"
      {...props}
    >
      {prefix}
      {label !== undefined && <span className="ts-caption-medium-strong min-w-0 flex-1 truncate text-[var(--fg-muted)]">{label}</span>}
      {suffix}
    </div>
  );
}

export function Cell({
  label,
  description,
  prefix,
  suffix,
  kind = "neutral",
  status = "enabled",
  className,
  children,
  ...props
}: CellProps) {
  return (
    <div
      className={`flex min-h-[var(--size-h44)] min-w-[160px] items-center gap-[var(--spacing-200)] border-b border-[var(--stroke-neutral-subtle)] bg-[var(--bg-layer)] px-[var(--spacing-300)] ${className ?? ""}`}
      role="cell"
      {...props}
    >
      {prefix}
      <span className="min-w-0 flex-1">
        {label !== undefined && <span className={`ts-body-medium block truncate ${cellText(kind, status)}`}>{label}</span>}
        {description !== undefined && <span className="ts-caption-medium block truncate text-[var(--fg-muted)]">{description}</span>}
      </span>
      {children}
      {suffix}
    </div>
  );
}

export function CheckboxCell({
  selected = false,
  label,
  onSelectedChange,
  className,
}: {
  selected?: boolean | "mixed";
  label?: string;
  onSelectedChange?: (selected: boolean) => void;
  className?: string;
}) {
  return (
    <Cell
      className={className}
      prefix={<Checkbox selected={selected} onChange={() => onSelectedChange?.(selected !== true)} />}
      label={label}
    />
  );
}

export function SwitchCell({
  selected = false,
  icon,
  className,
}: {
  selected?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return <Cell className={className} prefix={icon} suffix={<span className={`h-[var(--size-h20)] w-[var(--size-h20)] rounded-full ${selected ? "bg-[var(--bg-neutral-solid)]" : "bg-[var(--stroke-neutral)]"}`} />} />;
}

export function ButtonCell({ label = "Action", className }: { label?: string; className?: string }) {
  return (
    <Cell className={className}>
      <Button label={label} size="small" variant="outline" kind="neutral" />
    </Cell>
  );
}

export function InputCell(props: InputHTMLAttributes<HTMLInputElement> & { status?: "enabled" | "readonly" | "focused" | "error" | "placeholder" | "disabled" }) {
  return (
    <div className="flex min-h-[var(--size-h44)] min-w-[220px] items-center border-b border-[var(--stroke-neutral-subtle)] bg-[var(--bg-layer)] px-[var(--spacing-200)]">
      <InputField size="medium" fullWidth {...props} />
    </div>
  );
}

export function DataTable({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`overflow-hidden rounded-[var(--radius-medium)] border border-[var(--stroke-neutral)] ${className ?? ""}`} role="table" {...props}>
      {children}
    </div>
  );
}

export function TableRow({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`grid auto-cols-fr grid-flow-col ${className ?? ""}`} role="row" {...props}>
      {children}
    </div>
  );
}
