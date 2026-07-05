import { type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { Icon } from "@/components/Icon";

export type FieldSize = "large" | "medium";
export type FieldShape = "soft" | "full";
export type FieldVariant = "outline" | "subtle";
export type FieldStatus = "enabled" | "focused" | "error" | "placeholder" | "disabled" | "readonly";

type FieldBaseProps = {
  label?: string;
  helperText?: string;
  errorText?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: FieldSize;
  shape?: FieldShape;
  variant?: FieldVariant;
  status?: FieldStatus;
  fullWidth?: boolean;
};

export type InputFieldProps = FieldBaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">;
export type SearchFieldProps = Omit<InputFieldProps, "prefix">;
export type SelectFieldProps = FieldBaseProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "prefix">;
export type TextareaFieldProps = FieldBaseProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "prefix">;

const heightMap: Record<FieldSize, string> = {
  large: "h-[var(--size-h52)]",
  medium: "h-[var(--size-h44)]",
};

const textMap: Record<FieldSize, string> = {
  large: "ts-body-large",
  medium: "ts-body-medium",
};

const radiusMap: Record<FieldShape, Record<FieldSize, string>> = {
  soft: {
    large: "rounded-[var(--radius-medium)]",
    medium: "rounded-[var(--radius-medium)]",
  },
  full: {
    large: "rounded-[var(--radius-full-h52)]",
    medium: "rounded-[var(--radius-full-h44)]",
  },
};

function getFieldChrome(variant: FieldVariant, status: FieldStatus) {
  const disabled = status === "disabled";
  const readonly = status === "readonly";
  const focused = status === "focused";
  const error = status === "error";

  const bg = disabled
    ? "bg-[var(--bg-disabled)]"
    : readonly
      ? "bg-[var(--bg-readonly)]"
      : variant === "subtle"
        ? "bg-[var(--bg-field-subtle)]"
        : "bg-[var(--bg-field)]";

  const border = error
    ? "border-[var(--stroke-critical)]"
    : focused
      ? "border-[var(--stroke-primary)]"
      : variant === "outline"
        ? "border-[var(--stroke-neutral)]"
        : "border-transparent";

  const ring = focused ? "ring-2 ring-[color-mix(in_srgb,var(--stroke-primary)_18%,transparent)]" : "";

  return `${bg} border ${border} ${ring}`;
}

function FieldShell({
  label,
  helperText,
  errorText,
  size,
  status,
  fullWidth,
  children,
}: {
  label?: string;
  helperText?: string;
  errorText?: string;
  size: FieldSize;
  status: FieldStatus;
  fullWidth?: boolean;
  children: ReactNode;
}) {
  const message = status === "error" ? errorText || helperText : helperText;
  return (
    <label className={["inline-flex flex-col gap-[var(--spacing-100)]", fullWidth ? "w-full" : ""].join(" ")}>
      {label !== undefined && <span className="ts-caption-medium-strong text-[var(--fg-neutral)]">{label}</span>}
      {children}
      {message !== undefined && (
        <span className={`${size === "large" ? "ts-caption-medium" : "ts-caption-small"} ${status === "error" ? "text-[var(--fg-critical)]" : "text-[var(--fg-muted)]"}`}>
          {message}
        </span>
      )}
    </label>
  );
}

function Slot({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <span className={`inline-flex h-[var(--size-h20)] w-[var(--size-h20)] shrink-0 items-center justify-center ${muted ? "text-[var(--fg-muted)]" : "text-[var(--fg-neutral)]"}`}>
      {children}
    </span>
  );
}

export function InputField({
  label,
  helperText,
  errorText,
  prefix,
  suffix,
  size = "large",
  shape = "soft",
  variant = "outline",
  status,
  fullWidth,
  className,
  disabled,
  readOnly,
  placeholder,
  ...props
}: InputFieldProps) {
  const resolvedStatus: FieldStatus = disabled ? "disabled" : readOnly ? "readonly" : status ?? (placeholder && !props.value ? "placeholder" : "enabled");
  const textColor = resolvedStatus === "disabled" ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]";

  return (
    <FieldShell label={label} helperText={helperText} errorText={errorText} size={size} status={resolvedStatus} fullWidth={fullWidth}>
      <span
        className={[
          "inline-flex items-center gap-[var(--spacing-200)] px-[var(--spacing-300)]",
          heightMap[size],
          radiusMap[shape][size],
          getFieldChrome(variant, resolvedStatus),
          fullWidth ? "w-full" : "w-[280px]",
          className ?? "",
        ].join(" ")}
      >
        {prefix !== undefined && <Slot muted={resolvedStatus === "placeholder"}>{prefix}</Slot>}
        <input
          className={`min-w-0 flex-1 bg-transparent outline-none placeholder:text-[var(--fg-placeholder)] disabled:cursor-not-allowed ${textMap[size]} ${textColor}`}
          disabled={disabled || resolvedStatus === "disabled"}
          readOnly={readOnly || resolvedStatus === "readonly"}
          placeholder={placeholder ?? "Placeholder"}
          {...props}
        />
        {suffix !== undefined && <Slot>{suffix}</Slot>}
      </span>
    </FieldShell>
  );
}

export function SearchField(props: SearchFieldProps) {
  return <InputField prefix={<Icon name="search-outline" size={18} />} placeholder="Search" {...props} />;
}

export function SelectField({
  label,
  helperText,
  errorText,
  suffix,
  size = "large",
  shape = "soft",
  variant = "outline",
  status,
  fullWidth,
  className,
  disabled,
  children,
  ...props
}: SelectFieldProps) {
  const resolvedStatus: FieldStatus = disabled ? "disabled" : status ?? "enabled";
  const textColor = resolvedStatus === "disabled" ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]";

  return (
    <FieldShell label={label} helperText={helperText} errorText={errorText} size={size} status={resolvedStatus} fullWidth={fullWidth}>
      <span
        className={[
          "inline-flex items-center gap-[var(--spacing-200)] px-[var(--spacing-300)]",
          heightMap[size],
          radiusMap[shape][size],
          getFieldChrome(variant, resolvedStatus),
          fullWidth ? "w-full" : "w-[280px]",
          className ?? "",
        ].join(" ")}
      >
        <select
          className={`min-w-0 flex-1 appearance-none bg-transparent outline-none disabled:cursor-not-allowed ${textMap[size]} ${textColor}`}
          disabled={disabled || resolvedStatus === "disabled"}
          {...props}
        >
          {children}
        </select>
        <Slot muted>{suffix ?? <Icon name="chevron-down-outline" size={18} />}</Slot>
      </span>
    </FieldShell>
  );
}

export function TextareaField({
  label,
  helperText,
  errorText,
  prefix,
  suffix,
  size = "large",
  shape = "soft",
  variant = "outline",
  status,
  fullWidth,
  className,
  disabled,
  readOnly,
  placeholder,
  rows = 4,
  ...props
}: TextareaFieldProps) {
  const resolvedStatus: FieldStatus = disabled ? "disabled" : readOnly ? "readonly" : status ?? "enabled";
  const textColor = resolvedStatus === "disabled" ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]";

  return (
    <FieldShell label={label} helperText={helperText} errorText={errorText} size={size} status={resolvedStatus} fullWidth={fullWidth}>
      <span
        className={[
          "inline-flex min-h-[120px] items-start gap-[var(--spacing-200)] px-[var(--spacing-300)] py-[var(--spacing-300)]",
          shape === "full" ? "rounded-[var(--radius-large)]" : radiusMap[shape][size],
          getFieldChrome(variant, resolvedStatus),
          fullWidth ? "w-full" : "w-[280px]",
          className ?? "",
        ].join(" ")}
      >
        {prefix !== undefined && <Slot muted={resolvedStatus === "placeholder"}>{prefix}</Slot>}
        <textarea
          className={`min-w-0 flex-1 resize-none bg-transparent outline-none placeholder:text-[var(--fg-placeholder)] disabled:cursor-not-allowed ${textMap[size]} ${textColor}`}
          disabled={disabled || resolvedStatus === "disabled"}
          readOnly={readOnly || resolvedStatus === "readonly"}
          placeholder={placeholder ?? "Placeholder"}
          rows={rows}
          {...props}
        />
        {suffix !== undefined && <Slot>{suffix}</Slot>}
      </span>
    </FieldShell>
  );
}
