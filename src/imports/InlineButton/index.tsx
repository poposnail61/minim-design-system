import svgPaths from "./svg-7sg9uu567f";

function RadioOutline({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="radio-outline">
      <div className="absolute inset-[9.38%]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
          <path d={svgPaths.p2b569500} fill="var(--fill-0, #18181B)" id="icon" />
        </svg>
      </div>
    </div>
  );
}
type ButtonContentProps = {
  className?: string;
  size?: "large" | "medium";
};

function ButtonContent({ className, size = "medium" }: ButtonContentProps) {
  const isMedium = size === "medium";
  return (
    <div className={className || "content-stretch flex gap-[4px] items-start relative"}>
      <div className={`content-stretch flex items-center overflow-clip relative shrink-0 ${isMedium ? "h-[20px]" : "h-[22px]"}`} data-name="slot-icon-content">
        <RadioOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="slot-label-content">
        <p className={`[word-break:break-word] font-["Minim_Base_VF:Regular",sans-serif] font-normal relative shrink-0 text-[#18181b] whitespace-nowrap ${isMedium ? "leading-[20px] text-[15px]" : "leading-[22px] text-[16.5px]"}`}>label</p>
      </div>
      <div className={`content-stretch flex items-center overflow-clip relative shrink-0 ${isMedium ? "h-[20px]" : "h-[22px]"}`} data-name="slot-icon-content">
        <RadioOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />
      </div>
    </div>
  );
}
type InlineButtonProps = {
  className?: string;
  kind?: "neutral" | "muted" | "primary" | "critical" | "on-surface";
  size?: "large" | "medium";
  state?: boolean;
};

export default function InlineButton({ className, kind = "neutral", size = "large", state = true }: InlineButtonProps) {
  const isCriticalAndState = kind === "critical" && state;
  const isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState = size === "large" && ((kind === "on-surface" && state) || (kind === "neutral" && !state) || (kind === "muted" && state) || (kind === "critical" && state) || (kind === "primary" && state));
  const isMutedAndState = kind === "muted" && state;
  const isNeutralAndNotState = kind === "neutral" && !state;
  const isPrimaryAndState = kind === "primary" && state;
  return (
    <div className={className || "content-stretch flex items-center justify-center relative"}>
      {((kind === "on-surface" && state) || isNeutralAndNotState || isMutedAndState || isCriticalAndState || isPrimaryAndState) && (
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="_button-content">
          <div className={`content-stretch flex items-center overflow-clip relative shrink-0 ${isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState ? "h-[22px]" : "h-[20px]"}`} data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState ? "0 0 17.875 17.875" : "0 0 16.25 16.25"}>
                  <path d={isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState ? svgPaths.p235aecf0 : svgPaths.p1ab64000} fill={isPrimaryAndState ? "var(--fill-0, #449AFC)" : isCriticalAndState ? "var(--fill-0, #EB3D3D)" : isMutedAndState ? "var(--fill-0, #71717A)" : isNeutralAndNotState ? "var(--fill-0, #D4D4D8)" : "var(--fill-0, white)"} id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="slot-label-content">
            <p className={`[word-break:break-word] font-["Minim_Base_VF:Regular",sans-serif] font-normal relative shrink-0 whitespace-nowrap ${size === "large" && kind === "primary" && state ? "leading-[22px] text-[#449afc] text-[16.5px]" : size === "large" && kind === "critical" && state ? "leading-[22px] text-[#eb3d3d] text-[16.5px]" : size === "medium" && kind === "primary" && state ? "leading-[20px] text-[#449afc] text-[15px]" : size === "medium" && kind === "critical" && state ? "leading-[20px] text-[#eb3d3d] text-[15px]" : size === "large" && kind === "muted" && state ? "leading-[22px] text-[#71717a] text-[16.5px]" : size === "medium" && kind === "muted" && state ? "leading-[20px] text-[#71717a] text-[15px]" : size === "large" && kind === "neutral" && !state ? "leading-[22px] text-[#d4d4d8] text-[16.5px]" : size === "medium" && kind === "neutral" && !state ? "leading-[20px] text-[#d4d4d8] text-[15px]" : size === "large" && kind === "on-surface" && state ? "leading-[22px] text-[16.5px] text-white" : "leading-[20px] text-[15px] text-white"}`}>label</p>
          </div>
          <div className={`content-stretch flex items-center overflow-clip relative shrink-0 ${isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState ? "h-[22px]" : "h-[20px]"}`} data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState ? "0 0 17.875 17.875" : "0 0 16.25 16.25"}>
                  <path d={isLargeAndIsOnSurfaceAndStateOrNeutralAndNotStateOrMutedAndState ? svgPaths.p235aecf0 : svgPaths.p1ab64000} fill={isPrimaryAndState ? "var(--fill-0, #449AFC)" : isCriticalAndState ? "var(--fill-0, #EB3D3D)" : isMutedAndState ? "var(--fill-0, #71717A)" : isNeutralAndNotState ? "var(--fill-0, #D4D4D8)" : "var(--fill-0, white)"} id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {kind === "neutral" && state && <ButtonContent className="content-stretch flex gap-[4px] items-start relative shrink-0" size={size === "large" && state ? "large" : undefined} />}
    </div>
  );
}