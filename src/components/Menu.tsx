import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type MenuSize = "large" | "medium";
export type MenuKind = "neutral" | "critical";
export type MenuItemVariant = "ghost" | "subtle";

type BaseMenuItemProps = {
  label: string;
  description?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: MenuSize;
  kind?: MenuKind;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export type MenuItemProps = BaseMenuItemProps;
export type ToggleMenuItemProps = BaseMenuItemProps & {
  selected?: boolean;
  variant?: MenuItemVariant;
};
export type CheckboxMenuItemProps = BaseMenuItemProps & {
  selected?: boolean;
};

const heightMap: Record<MenuSize, string> = {
  large: "min-h-[var(--size-h44)]",
  medium: "min-h-[var(--size-h36)]",
};

const textMap: Record<MenuSize, string> = {
  large: "ts-body-large",
  medium: "ts-body-medium",
};

function menuText(kind: MenuKind, disabled?: boolean) {
  if (disabled) return "text-[var(--fg-disabled)]";
  if (kind === "critical") return "text-[var(--fg-critical)]";
  return "text-[var(--fg-neutral)]";
}

function MenuCheckboxIcon({ selected, disabled }: { selected?: boolean; disabled?: boolean }) {
  const color = disabled ? "text-[var(--fg-disabled)]" : selected ? "text-[var(--fg-neutral)]" : "text-[var(--fg-disabled)]";
  return <Icon name={selected ? "checkbox-checked-solid" : "checkbox-outline"} size={20} className={`shrink-0 ${color}`} />;
}

function BaseMenuItem({
  label,
  description,
  prefix,
  suffix,
  size = "medium",
  kind = "neutral",
  disabled,
  className,
  children,
  selected,
  variant = "ghost",
  ...props
}: BaseMenuItemProps & { children?: ReactNode; selected?: boolean; variant?: MenuItemVariant }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        "flex w-full items-center gap-[var(--spacing-200)] rounded-[var(--radius-small)] px-[var(--spacing-300)] py-[var(--spacing-200)] text-left transition-colors disabled:cursor-not-allowed",
        heightMap[size],
        selected && variant === "subtle" ? "bg-[var(--bg-neutral)]" : "hover:bg-[var(--bg-neutral-subtle)]",
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {prefix !== undefined && <span className={`inline-flex h-[var(--size-h20)] w-[var(--size-h20)] shrink-0 items-center justify-center ${menuText(kind, disabled)}`}>{prefix}</span>}
      <span className="min-w-0 flex-1">
        <span className={`block truncate ${textMap[size]} ${menuText(kind, disabled)}`}>{label}</span>
        {description !== undefined && <span className="ts-caption-medium block truncate text-[var(--fg-muted)]">{description}</span>}
      </span>
      {children}
      {suffix !== undefined && <span className={`inline-flex h-[var(--size-h20)] w-[var(--size-h20)] shrink-0 items-center justify-center ${menuText(kind, disabled)}`}>{suffix}</span>}
    </button>
  );
}

export function MenuItem(props: MenuItemProps) {
  return <BaseMenuItem {...props} />;
}

export function ToggleMenuItem({ selected = false, variant = "ghost", ...props }: ToggleMenuItemProps) {
  return (
    <BaseMenuItem selected={selected} variant={variant} {...props}>
      {selected && <Icon name="check-outline" size={20} className={`shrink-0 ${props.disabled ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]"}`} />}
    </BaseMenuItem>
  );
}

export function CheckboxMenuItem({ selected = false, disabled, ...props }: CheckboxMenuItemProps) {
  return (
    <BaseMenuItem disabled={disabled} {...props}>
      <MenuCheckboxIcon selected={selected} disabled={disabled} />
    </BaseMenuItem>
  );
}

export function MenuDivider({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex h-[var(--size-menu-divider-height)] w-full items-center px-[var(--spacing-300)] py-[var(--spacing-200)] ${className ?? ""}`}
      role="separator"
      {...props}
    >
      <div className="h-[var(--size-menu-divider-line)] w-full bg-[var(--stroke-neutral-subtle)]" />
    </div>
  );
}

export function MenuModal({ children, size = "medium", className, ...props }: HTMLAttributes<HTMLDivElement> & { size?: MenuSize }) {
  return (
    <div
      className={[
        "inline-flex min-w-[var(--size-menu-modal-min-width)] flex-col gap-0 rounded-[var(--radius-medium)] border border-[var(--stroke-neutral)] bg-[var(--bg-layer)] p-[var(--spacing-200)] shadow-[var(--effect-menu-modal)]",
        className ?? "",
      ].join(" ")}
      data-size={size}
      {...props}
    >
      {children}
    </div>
  );
}
