type IconProps = {
  name: string;
  className?: string;
  size?: number | string;
  color?: string;
};

export function Icon({ name, className = "", size, color }: IconProps) {
  return (
    <i
      className={`icon icon-${name} ${className}`}
      style={{
        fontSize: size,
        color: color,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden="true"
    />
  );
}
