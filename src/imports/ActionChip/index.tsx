import svgPaths from "./svg-tbq3l1xvmw";

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
type ChipContentProps = {
  className?: string;
  size?: "medium";
};

function ChipContent({ className, size = "medium" }: ChipContentProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"}>
      <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
        <RadioOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />
      </div>
      <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
        <p className="[word-break:break-word] font-['Minim_Base_VF:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#18181b] text-[15px] whitespace-nowrap">label</p>
      </div>
    </div>
  );
}
type ActionChipProps = {
  className?: string;
  kind?: "neutral";
  state?: boolean;
  variant?: "solid" | "subtle" | "outline";
};

export default function ActionChip({ className, kind = "neutral", state = true, variant = "solid" }: ActionChipProps) {
  const isOutlineAndState = variant === "outline" && state;
  const isState = state;
  return (
    <div className={className || `content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px] ${variant === "solid" && state ? "bg-[#18181b]" : isOutlineAndState ? "bg-white" : "bg-[#f4f4f5]"}`}>
      {variant === "solid" && (
        <div className="content-stretch flex items-start relative shrink-0" data-name="_chip-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill={isState ? "var(--fill-0, white)" : "var(--fill-0, #D4D4D8)"} id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className={`[word-break:break-word] font-["Minim_Base_VF:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] whitespace-nowrap ${isState ? "text-white" : "text-[#d4d4d8]"}`}>label</p>
          </div>
        </div>
      )}
      {variant === "subtle" && state && <ChipContent className="content-stretch flex items-start relative shrink-0" />}
      {isOutlineAndState && (
        <>
          <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
          <ChipContent className="content-stretch flex items-start relative shrink-0" />
        </>
      )}
    </div>
  );
}