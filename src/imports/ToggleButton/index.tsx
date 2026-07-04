import svgPaths from "./svg-dxu0bf7533";

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
    <div className={className || "content-stretch flex items-start relative"}>
      <div className={`content-stretch flex items-center overflow-clip relative shrink-0 ${isMedium ? "h-[20px]" : "h-[22px]"}`} data-name="slot-icon-content">
        <RadioOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />
      </div>
      <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
        <p className={`[word-break:break-word] font-["Minim_Base_VF:Medium",sans-serif] font-medium relative shrink-0 text-[#18181b] whitespace-nowrap ${isMedium ? "leading-[20px] text-[15px]" : "leading-[22px] text-[16.5px]"}`}>label</p>
      </div>
    </div>
  );
}
type ToggleButtonProps = {
  className?: string;
  selected?: boolean;
  shape?: "soft" | "full";
  size?: "large" | "medium";
  state?: boolean;
  variant?: "outline";
};

export default function ToggleButton({ className, selected = false, shape = "soft", size = "large", state = true, variant = "outline" }: ToggleButtonProps) {
  const isMediumAndIsNotSelectedAndNotStateOrSelectedAndState = size === "medium" && ((!selected && !state) || (selected && state));
  const isNotSelectedAndState = !selected && state;
  const isSelectedAndState = selected && state;
  return (
    <div className={className || `content-stretch flex items-center justify-center relative ${size === "large" && shape === "soft" && !selected && state ? "bg-white min-w-[44px] p-[11px] rounded-[12px]" : size === "medium" && shape === "soft" && selected && state ? "bg-[#18181b] min-w-[36px] p-[8px] rounded-[12px]" : size === "medium" && shape === "soft" && !selected && state ? "bg-white min-w-[36px] p-[8px] rounded-[12px]" : size === "large" && shape === "soft" && selected && state ? "bg-[#18181b] min-w-[44px] p-[11px] rounded-[12px]" : size === "medium" && shape === "full" && !selected && state ? "bg-white min-w-[36px] p-[8px] rounded-[18px]" : size === "large" && shape === "full" && selected && state ? "bg-[#18181b] min-w-[44px] p-[11px] rounded-[22px]" : size === "large" && shape === "full" && !selected && state ? "bg-white min-w-[44px] p-[11px] rounded-[22px]" : size === "medium" && shape === "full" && selected && state ? "bg-[#18181b] min-w-[36px] p-[8px] rounded-[18px]" : size === "medium" && shape === "full" && !selected && !state ? "bg-[#f4f4f5] min-w-[36px] p-[8px] rounded-[18px]" : size === "large" && shape === "full" && !selected && !state ? "bg-[#f4f4f5] min-w-[44px] p-[11px] rounded-[22px]" : size === "medium" && shape === "soft" && !selected && !state ? "bg-[#f4f4f5] min-w-[36px] p-[8px] rounded-[12px]" : "bg-[#f4f4f5] min-w-[44px] p-[11px] rounded-[12px]"}`}>
      {((!selected && !state) || isSelectedAndState) && (
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className={`content-stretch flex items-center overflow-clip relative shrink-0 ${isMediumAndIsNotSelectedAndNotStateOrSelectedAndState ? "h-[20px]" : "h-[22px]"}`} data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isMediumAndIsNotSelectedAndNotStateOrSelectedAndState ? "0 0 16.25 16.25" : "0 0 17.875 17.875"}>
                  <path d={isMediumAndIsNotSelectedAndNotStateOrSelectedAndState ? svgPaths.p1ab64000 : svgPaths.p235aecf0} fill={isSelectedAndState ? "var(--fill-0, white)" : "var(--fill-0, #D4D4D8)"} id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className={`[word-break:break-word] font-["Minim_Base_VF:Medium",sans-serif] font-medium relative shrink-0 whitespace-nowrap ${size === "large" && selected && state ? "leading-[22px] text-[16.5px] text-white" : size === "medium" && selected && state ? "leading-[20px] text-[15px] text-white" : size === "medium" && !selected && !state ? "leading-[20px] text-[#d4d4d8] text-[15px]" : "leading-[22px] text-[#d4d4d8] text-[16.5px]"}`}>label</p>
          </div>
        </div>
      )}
      {isNotSelectedAndState && (
        <>
          <div aria-hidden className={`absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none ${shape === "soft" && state ? "rounded-[12px]" : size === "medium" && shape === "full" && state ? "rounded-[18px]" : "rounded-[22px]"}`} />
          <ButtonContent className="content-stretch flex items-start relative shrink-0" size={size === "large" && state ? "large" : undefined} />
        </>
      )}
    </div>
  );
}