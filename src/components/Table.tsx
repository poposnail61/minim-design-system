import { type HTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/Button";
import { Checkbox, Switch } from "@/components/SelectionControls";

export type TableStatus = "enabled" | "readonly" | "focused" | "error" | "placeholder" | "disabled";
export type TableCellKind = "neutral" | "critical";

type DivProps = HTMLAttributes<HTMLDivElement>;
type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">;

export type TableProps = DivProps;

export type TableRowProps = DivProps & {
  variant?: "header" | "cell";
};

export type HeaderCellProps = DivProps & {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
};

export type CheckboxHeaderCellProps = Omit<HeaderCellProps, "prefix"> & {
  selected?: boolean | "mixed";
  onSelectedChange?: (selected: boolean) => void;
};

export type CellProps = DivProps & {
  label?: string;
  description?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  kind?: TableCellKind;
  status?: TableStatus;
};

export type CheckboxCellProps = Omit<CellProps, "prefix" | "suffix" | "kind" | "status"> & {
  selected?: boolean | "mixed";
  disabled?: boolean;
  onSelectedChange?: (selected: boolean) => void;
};

export type SwitchCellProps = DivProps & {
  selected?: boolean;
  disabled?: boolean;
  onSelectedChange?: (selected: boolean) => void;
};

export type ButtonCellProps = DivProps & {
  actions?: ButtonProps[];
};

export type InputCellProps = NativeInputProps & {
  leadingAddon?: ReactNode;
  trailingAddon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  status?: TableStatus;
};

const tableCellBase = "relative flex bg-[var(--bg-field)]";
const tableCellWidth = "w-[var(--size-table-cell-width)]";
const tableText = "ts-body-medium block min-w-0 truncate";
const tableAddonText = "ts-body-medium shrink-0 text-[var(--fg-muted)]";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function statusText(status: TableStatus, kind: TableCellKind) {
  if (status === "disabled") return "text-[var(--fg-disabled)]";
  if (status === "placeholder") return "text-[var(--fg-placeholder)]";
  if (kind === "critical") return "text-[var(--fg-critical)]";
  return "text-[var(--fg-neutral)]";
}

function statusChrome(status: TableStatus) {
  if (status === "readonly") return "bg-[var(--bg-readonly)]";
  if (status === "focused") return "bg-[var(--bg-field)] after:absolute after:inset-0 after:pointer-events-none after:border after:border-[var(--stroke-primary)]";
  if (status === "error") return "bg-[var(--bg-field)] after:absolute after:inset-0 after:pointer-events-none after:border after:border-[var(--stroke-critical)]";
  if (status === "disabled") return "bg-[var(--bg-disabled)]";
  return "bg-[var(--bg-field)]";
}

function Slot({ children }: { children: ReactNode }) {
  return <span className="flex h-[var(--size-h20)] w-[var(--size-h20)] shrink-0 items-center justify-center text-[var(--fg-muted)]">{children}</span>;
}

export function HeaderCell({ label, prefix, suffix, disabled, className, children, ...props }: HeaderCellProps) {
  return (
    <div
      role="columnheader"
      className={cx(
        tableCellBase,
        tableCellWidth,
        "h-[var(--size-table-header-cell)] items-center gap-[var(--spacing-table-cell-gap)] p-[var(--spacing-table-cell-padding-x)]",
        disabled && "bg-[var(--bg-disabled)]",
        className,
      )}
      {...props}
    >
      {prefix !== undefined && <Slot>{prefix}</Slot>}
      {label !== undefined && (
        <span className={cx(tableText, "flex-1", disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-muted)]")}>{label}</span>
      )}
      {children}
      {suffix !== undefined && <Slot>{suffix}</Slot>}
    </div>
  );
}

export function CheckboxHeaderCell({
  selected = false,
  onSelectedChange,
  label,
  suffix,
  disabled,
  className,
  ...props
}: CheckboxHeaderCellProps) {
  return (
    <HeaderCell
      className={className}
      disabled={disabled}
      suffix={suffix}
      {...props}
    >
      <Checkbox
        selected={selected}
        disabled={disabled}
        onChange={() => onSelectedChange?.(selected !== true)}
        className="shrink-0"
      />
      {label !== undefined && (
        <span className={cx(tableText, "flex-1", disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-muted)]")}>{label}</span>
      )}
    </HeaderCell>
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
      role="cell"
      className={cx(
        tableCellBase,
        tableCellWidth,
        "min-h-[var(--size-table-cell)] items-start gap-[var(--spacing-200)] px-[var(--spacing-table-cell-padding-x)] py-[var(--spacing-300)]",
        statusChrome(status),
        className,
      )}
      {...props}
    >
      {prefix !== undefined && <Slot>{prefix}</Slot>}
      <span className="min-w-0 flex-1">
        {label !== undefined && <span className={cx(tableText, statusText(status, kind))}>{label}</span>}
        {description !== undefined && <span className="ts-caption-medium block truncate text-[var(--fg-muted)]">{description}</span>}
      </span>
      {children}
      {suffix !== undefined && <Slot>{suffix}</Slot>}
    </div>
  );
}

export function CheckboxCell({
  selected = false,
  label,
  disabled,
  onSelectedChange,
  className,
  children,
  ...props
}: CheckboxCellProps) {
  return (
    <div
      role="cell"
      className={cx(
        tableCellBase,
        label === undefined ? "w-[var(--size-table-checkbox-cell)]" : tableCellWidth,
        "min-h-[var(--size-table-cell)] items-start gap-[var(--spacing-table-cell-gap)] px-[var(--spacing-table-cell-padding-x)] py-[var(--spacing-300)]",
        disabled && "bg-[var(--bg-disabled)]",
        className,
      )}
      {...props}
    >
      <Checkbox
        selected={selected}
        disabled={disabled}
        onChange={() => onSelectedChange?.(selected !== true)}
        className="shrink-0"
      />
      {label !== undefined && <span className={cx(tableText, "flex-1", disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]")}>{label}</span>}
      {children}
    </div>
  );
}

export function SwitchCell({ selected = false, disabled, onSelectedChange, className, ...props }: SwitchCellProps) {
  return (
    <div
      role="cell"
      className={cx(
        tableCellBase,
        "h-[var(--size-table-cell)] w-[var(--size-table-switch-cell)] items-center px-[var(--spacing-table-cell-padding-x)]",
        disabled && "bg-[var(--bg-disabled)]",
        className,
      )}
      {...props}
    >
      <Switch selected={selected} disabled={disabled} size="large" onClick={() => onSelectedChange?.(!selected)} />
    </div>
  );
}

export function ButtonCell({ actions, className, children, ...props }: ButtonCellProps) {
  const items = actions ?? [{ label: "Button" }];
  return (
    <div
      role="cell"
      className={cx(
        tableCellBase,
        "h-[var(--size-table-cell)] w-fit items-center gap-[var(--spacing-table-button-gap)] px-[var(--spacing-table-cell-padding-x)] py-[var(--spacing-table-button-padding-y)]",
        className,
      )}
      {...props}
    >
      {children ?? items.map((action, index) => (
        <Button
          key={`${action.label ?? "button"}-${index}`}
          size="small"
          shape="soft"
          variant="outline"
          kind="neutral"
          {...action}
          className={cx("h-[var(--size-h32)] min-w-[var(--size-h32)]", action.className)}
        />
      ))}
    </div>
  );
}

export function InputCell({
  leadingAddon,
  trailingAddon,
  prefix,
  suffix,
  status = "enabled",
  disabled,
  readOnly,
  className,
  ...props
}: InputCellProps) {
  const resolvedStatus: TableStatus = disabled ? "disabled" : readOnly ? "readonly" : status;
  return (
    <div
      role="cell"
      className={cx(
        tableCellBase,
        tableCellWidth,
        "min-h-[var(--size-table-cell)] items-start gap-[var(--spacing-table-cell-gap)] px-[var(--spacing-table-cell-padding-x)] py-[var(--spacing-300)]",
        statusChrome(resolvedStatus),
        className,
      )}
    >
      {prefix !== undefined && <Slot>{prefix}</Slot>}
      {leadingAddon !== undefined && <span className={tableAddonText}>{leadingAddon}</span>}
      <input
        disabled={disabled}
        readOnly={readOnly}
        className={cx(
          "ts-body-medium min-w-0 flex-1 bg-transparent outline-none placeholder:text-[var(--fg-placeholder)]",
          statusText(resolvedStatus, "neutral"),
        )}
        {...props}
      />
      {trailingAddon !== undefined && <span className={tableAddonText}>{trailingAddon}</span>}
      {suffix !== undefined && <Slot>{suffix}</Slot>}
    </div>
  );
}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div
      role="table"
      className={cx("inline-flex flex-col gap-[var(--size-table-divider)] overflow-hidden bg-[var(--stroke-neutral)]", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function TableRow({ children, variant = "cell", className, ...props }: TableRowProps) {
  return (
    <div
      role="row"
      className={cx(
        "inline-flex gap-[var(--size-table-divider)] bg-[var(--stroke-neutral)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const DataTable = Table;
