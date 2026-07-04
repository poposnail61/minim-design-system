import svgPaths from "./svg-c5v77suvkp";

function CloseMiniOutline({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="close-mini-outline">
      <div className="absolute inset-[26.04%]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 11.4999">
          <path d={svgPaths.p31b91900} fill="var(--fill-0, #18181B)" id="icon" />
        </svg>
      </div>
    </div>
  );
}

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
type InputChipProps = {
  className?: string;
  state?: boolean;
};

export default function InputChip({ className, state = true }: InputChipProps) {
  const isNotState = !state;
  const isState = state;
  return (
    <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"}>
      <div className="content-stretch flex items-start relative shrink-0" data-name="_filter-chip-content">
        <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
          {isNotState && (
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          )}
          {isState && <RadioOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />}
        </div>
        <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
          <p className={`[word-break:break-word] font-["Minim_Base_VF:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] whitespace-nowrap ${isState ? "text-[#18181b]" : "text-[#d4d4d8]"}`}>label</p>
        </div>
        <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
          {isNotState && (
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="close-mini-outline">
              <div className="absolute inset-[26.04%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.58324 9.58324">
                  <path d={svgPaths.p3846900} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          )}
          {isState && <CloseMiniOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />}
        </div>
      </div>
    </div>
  );
}