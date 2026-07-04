import { type HTMLAttributes, type ReactNode } from "react";

export type ContentSize = "h100" | "h68" | "h60" | "h44" | "h36" | "h32" | "h28";
export type ContentShape = "soft" | "full";

const sizeClass: Record<ContentSize, string> = {
  h100: "h-[var(--size-h100)] w-[var(--size-h100)]",
  h68: "h-[var(--size-h68)] w-[var(--size-h68)]",
  h60: "h-[var(--size-h60)] w-[var(--size-h60)]",
  h44: "h-[var(--size-h44)] w-[var(--size-h44)]",
  h36: "h-[var(--size-h36)] w-[var(--size-h36)]",
  h32: "h-[var(--size-h32)] w-[var(--size-h32)]",
  h28: "h-[var(--size-h28)] w-[var(--size-h28)]",
};

function radius(shape: ContentShape) {
  return shape === "full" ? "rounded-[var(--radius-full)]" : "rounded-[var(--radius-medium)]";
}

export function SlotLabelContent({
  label,
  description,
  size = "medium",
  variant = "default",
  className,
  ...props
}: {
  label: string;
  description?: string;
  size?: "large" | "medium" | "small";
  variant?: "default" | "button" | "badge";
} & HTMLAttributes<HTMLDivElement>) {
  const labelClass = size === "large" ? "ts-body-large-strong" : size === "small" ? "ts-caption-medium-strong" : "ts-body-medium-strong";
  return (
    <div className={`min-w-0 ${className ?? ""}`} {...props}>
      <p className={`${labelClass} truncate ${variant === "button" ? "text-[var(--fg-primary)]" : "text-[var(--fg-neutral)]"}`}>{label}</p>
      {description !== undefined && <p className="ts-caption-medium truncate text-[var(--fg-muted)]">{description}</p>}
    </div>
  );
}

export function SlotIconContent({ children, size = "medium", className, ...props }: { children: ReactNode; size?: "large" | "medium" | "small" } & HTMLAttributes<HTMLSpanElement>) {
  const dim = size === "large" ? "h-[var(--size-h22)] w-[var(--size-h22)]" : size === "small" ? "h-[var(--size-h18)] w-[var(--size-h18)]" : "h-[var(--size-h20)] w-[var(--size-h20)]";
  return <span className={`inline-flex shrink-0 items-center justify-center text-[var(--fg-neutral)] ${dim} ${className ?? ""}`} {...props}>{children}</span>;
}

export function ImageContent({
  src,
  alt = "",
  size = "h36",
  shape = "soft",
  className,
  ...props
}: {
  src?: string;
  alt?: string;
  size?: ContentSize;
  shape?: ContentShape;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`shrink-0 overflow-hidden bg-[var(--bg-neutral)] ${sizeClass[size]} ${radius(shape)} ${className ?? ""}`} {...props}>
      {src !== undefined ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : <div className="h-full w-full bg-[linear-gradient(135deg,var(--gray-200),var(--gray-100))]" />}
    </div>
  );
}

export function PersonContent({
  name,
  subtitle,
  src,
  size = "h36",
  className,
}: {
  name: string;
  subtitle?: string;
  src?: string;
  size?: ContentSize;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-[var(--spacing-200)] ${className ?? ""}`}>
      <ImageContent src={src} size={size} shape="full" />
      <SlotLabelContent label={name} description={subtitle} size={size === "h68" || size === "h100" ? "large" : "medium"} />
    </div>
  );
}

export function MultiPersonContent({
  people,
  size = "h32",
  className,
}: {
  people: { src?: string; alt?: string }[];
  size?: ContentSize;
  className?: string;
}) {
  return (
    <div className={`inline-flex ${className ?? ""}`}>
      {people.map((person, index) => (
        <ImageContent
          key={index}
          src={person.src}
          alt={person.alt}
          size={size}
          shape="full"
          className={index > 0 ? "ml-[var(--spacing-negative-200)] ring-2 ring-[var(--bg-layer)]" : "ring-2 ring-[var(--bg-layer)]"}
        />
      ))}
    </div>
  );
}
