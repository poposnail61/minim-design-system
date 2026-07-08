type IconProps = {
  name: string;
  className?: string;
  size?: number | string;
  color?: string;
};

const ICON_CDN_BASE = "https://cdn.jsdelivr.net/gh/poposnail61/minim-icon@main/public/icons";

export function Icon({ name, className = "", size, color }: IconProps) {
  if (name.startsWith("logo-")) {
    return (
      <img
        src={`${ICON_CDN_BASE}/${name}.svg`}
        className={className}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
        }}
        alt=""
        aria-hidden="true"
      />
    );
  }

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
