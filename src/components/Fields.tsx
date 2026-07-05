import { Children, isValidElement, useState, type InputHTMLAttributes, type ReactElement, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { Icon } from "@/components/Icon";
import { MenuItem, MenuPopover } from "@/components/Menu";

export type FieldSize = "large" | "medium";
export type FieldShape = "soft" | "full";
export type FieldVariant = "outline" | "subtle";
export type FieldStatus = "enabled" | "focused" | "error" | "placeholder" | "disabled" | "readonly";
type FieldSlotSize = FieldSize;

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
export type SelectFieldProps = FieldBaseProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "prefix"> & {
  onValueChange?: (value: string) => void;
};
export type TextareaFieldProps = Omit<FieldBaseProps, "prefix"> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "prefix">;

const heightMap: Record<FieldShape, Record<FieldSize, string>> = {
  soft: {
    large: "h-[var(--size-h52)]",
    medium: "h-[var(--size-h44)]",
  },
  full: {
    large: "h-[var(--size-h44)]",
    medium: "h-[var(--size-h36)]",
  },
};

const disabledHeightMap: Record<FieldShape, Record<FieldSize, string>> = {
  soft: {
    large: "h-[var(--size-h52)]",
    medium: "h-[var(--size-h48)]",
  },
  full: {
    large: "h-[var(--size-h44)]",
    medium: "h-[var(--size-h36)]",
  },
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
    large: "rounded-[var(--radius-full-h44)]",
    medium: "rounded-[var(--radius-full-h36)]",
  },
};

function getFieldHeight(size: FieldSize, shape: FieldShape, status: FieldStatus) {
  return status === "disabled" ? disabledHeightMap[shape][size] : heightMap[shape][size];
}

function getFieldGap(size: FieldSize, shape: FieldShape) {
  if (shape === "full") return "gap-[var(--spacing-100)]";
  return size === "large" ? "gap-[var(--spacing-field-gap-large)]" : "gap-[var(--spacing-field-gap-medium)]";
}

function getFieldPadding(size: FieldSize, shape: FieldShape, variant: FieldVariant, status: FieldStatus) {
  if (shape === "full") {
    return size === "large" ? "px-[var(--spacing-field-padding-full-large)]" : "px-[var(--spacing-field-padding-full-medium)]";
  }
  const outlinePadding = size === "large" ? "px-[var(--spacing-field-padding-large-outline)]" : "px-[var(--spacing-field-padding-medium-outline)]";
  const subtleDefaultPadding = size === "large" ? "px-[var(--spacing-field-padding-large-subtle)]" : "px-[var(--spacing-field-padding-medium-subtle)]";
  return variant === "subtle" && status !== "focused" && status !== "error" ? subtleDefaultPadding : outlinePadding;
}

function getFieldIconSize(size: FieldSize, shape: FieldShape, status?: FieldStatus) {
  return size === "large" ? 22 : 20;
}

function getFieldSlotSize(size: FieldSize, shape: FieldShape, status?: FieldStatus): FieldSlotSize {
  return getFieldIconSize(size, shape, status) === 22 ? "large" : "medium";
}

function getFieldWidth(shape: FieldShape, fullWidth?: boolean) {
  if (fullWidth) return "w-full";
  return shape === "full" ? "w-[var(--size-field-full-width)]" : "w-[var(--size-field-width)]";
}

function getTextInset(shape: FieldShape) {
  return shape === "full" ? "px-[var(--spacing-field-text-padding-x)]" : "";
}

function getFieldChrome(variant: FieldVariant, status: FieldStatus) {
  const disabled = status === "disabled";
  const readonly = status === "readonly";
  const error = status === "error";

  const bg = disabled
    ? "bg-[var(--bg-disabled)]"
    : readonly
      ? "bg-[var(--bg-readonly)]"
      : variant === "subtle"
        ? "bg-[var(--bg-field-subtle)]"
        : "bg-[var(--bg-field)]";

  const border = error
    ? "border-[var(--stroke-critical-subtle)]"
    : status === "focused"
      ? "border-[var(--stroke-primary)]"
      : variant === "outline"
        ? "border-[var(--stroke-neutral)]"
        : "border-transparent";

  return `${bg} border ${border}`;
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

function Slot({ children, muted, size = "medium" }: { children: ReactNode; muted?: boolean; size?: FieldSlotSize }) {
  const height = size === "large" ? "h-[var(--size-field-icon-large)]" : "h-[var(--size-field-icon-medium)]";
  const width = size === "large" ? "w-[var(--size-field-icon-large)]" : "w-[var(--size-field-icon-medium)]";
  return (
    <span className={`inline-flex ${height} ${width} shrink-0 items-center justify-center ${muted ? "text-[var(--fg-muted)]" : "text-[var(--fg-neutral)]"}`}>
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
          "inline-flex items-center",
          getFieldGap(size, shape),
          getFieldPadding(size, shape, variant, resolvedStatus),
          getFieldHeight(size, shape, resolvedStatus),
          radiusMap[shape][size],
          getFieldChrome(variant, resolvedStatus),
          getFieldWidth(shape, fullWidth),
          className ?? "",
        ].join(" ")}
      >
        {prefix !== undefined && <Slot muted={resolvedStatus === "placeholder"} size={getFieldSlotSize(size, shape, resolvedStatus)}>{prefix}</Slot>}
        <input
          className={`min-w-0 flex-1 bg-transparent outline-none placeholder:text-[var(--fg-placeholder)] disabled:cursor-not-allowed ${getTextInset(shape)} ${textMap[size]} ${textColor}`}
          disabled={disabled || resolvedStatus === "disabled"}
          readOnly={readOnly || resolvedStatus === "readonly"}
          placeholder={placeholder ?? "Placeholder"}
          {...props}
        />
        {suffix !== undefined && <Slot size={getFieldSlotSize(size, shape, resolvedStatus)}>{suffix}</Slot>}
      </span>
    </FieldShell>
  );
}

export function SearchField(props: SearchFieldProps) {
  const size = props.size ?? "large";
  const shape = props.shape ?? "soft";
  const status: FieldStatus = props.disabled ? "disabled" : props.status ?? "enabled";
  return <InputField prefix={<Icon name="search-outline" size={getFieldIconSize(size, shape, status)} />} placeholder="Search" {...props} />;
}

export function SelectField({
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
  children,
  value,
  defaultValue,
  onChange: _onChange,
  onValueChange,
  ...props
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(() => String(value ?? defaultValue ?? ""));
  const selectedValue = String(value ?? internalValue);
  const options = Children.toArray(children)
    .filter(isValidElement)
    .map((child) => {
      const option = child as ReactElement<{ value?: string; children?: ReactNode; disabled?: boolean }>;
      return {
        value: String(option.props.value ?? option.props.children ?? ""),
        label: option.props.children,
        disabled: option.props.disabled,
      };
    });
  const selectedOption = options.find((option) => option.value === selectedValue) ?? options[0];
  const resolvedStatus: FieldStatus = disabled ? "disabled" : open ? "focused" : status ?? "enabled";
  const textColor = resolvedStatus === "disabled" ? "text-[var(--fg-disabled)]" : "text-[var(--fg-neutral)]";

  return (
    <FieldShell label={label} helperText={helperText} errorText={errorText} size={size} status={resolvedStatus} fullWidth={fullWidth}>
      <MenuPopover
        open={open && !disabled}
        size={size === "large" ? "large" : "medium"}
        className={fullWidth ? "w-full" : ""}
        menuClassName={fullWidth ? "w-full [&>div]:w-full" : "w-[var(--size-field-width)] [&>div]:w-full"}
        trigger={(
          <button
            type="button"
            disabled={disabled || resolvedStatus === "disabled"}
            onClick={() => setOpen((next) => !next)}
            className={[
              "inline-flex items-center",
              getFieldGap(size, shape),
              getFieldPadding(size, shape, variant, resolvedStatus),
              getFieldHeight(size, shape, resolvedStatus),
              radiusMap[shape][size],
              getFieldChrome(variant, resolvedStatus),
              getFieldWidth(shape, fullWidth),
              className ?? "",
            ].join(" ")}
            {...props}
          >
            {prefix !== undefined && <Slot muted={resolvedStatus === "placeholder"} size={getFieldSlotSize(size, shape, resolvedStatus)}>{prefix}</Slot>}
            <span className={`min-w-0 flex-1 text-left ${getTextInset(shape)} ${textMap[size]} ${textColor}`}>{selectedOption?.label ?? "Select"}</span>
            <Slot muted size={getFieldSlotSize(size, shape, resolvedStatus)}>
              {suffix ?? <Icon name="chevron-down-outline" size={getFieldIconSize(size, shape, resolvedStatus)} />}
            </Slot>
          </button>
        )}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            label={String(option.label ?? "")}
            size={size === "large" ? "large" : "medium"}
            disabled={option.disabled}
            suffix={option.value === selectedValue ? <Icon name="check-outline" size={20} /> : undefined}
            onClick={() => {
              if (option.disabled) return;
              setInternalValue(option.value);
              onValueChange?.(option.value);
              setOpen(false);
            }}
          />
        ))}
      </MenuPopover>
    </FieldShell>
  );
}

export function TextareaField({
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
          "inline-flex items-start gap-[var(--spacing-100)]",
          size === "large"
            ? "min-h-[var(--size-textarea-large)] px-[var(--spacing-textarea-padding-large-x)] py-[var(--spacing-textarea-padding-large-y)]"
            : "min-h-[var(--size-textarea-medium)] px-[var(--spacing-textarea-padding-medium-x)] py-[var(--spacing-textarea-padding-medium-y)]",
          shape === "full" ? radiusMap.full[size] : radiusMap[shape][size],
          getFieldChrome(variant, resolvedStatus),
          fullWidth ? "w-full" : "w-[var(--size-textarea-width)]",
          className ?? "",
        ].join(" ")}
      >
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
