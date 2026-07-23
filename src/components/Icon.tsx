import { MinimIcon, iconComponents, type IconName } from "minim-icon-react";

export type IconProps = {
  name: string;
  className?: string;
  size?: number | string;
  color?: string;
};

export function Icon({ name, className = "", size, color }: IconProps) {
  if (!(name in iconComponents)) {
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <MinimIcon
      name={name as IconName}
      className={className}
      size={size}
      color={color}
      aria-hidden="true"
    />
  );
}
