import svgPaths from "./svg-gyaiwleaev";

function ChevronUpOutline({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="chevron-up-outline">
      <div className="absolute inset-[30.21%_17.71%_34.38%_17.71%]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4999 8.50006">
          <path d={svgPaths.p28255680} fill="var(--fill-0, #18181B)" id="icon" />
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

function ChevronDownOutline({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="chevron-down-outline">
      <div className="absolute inset-[34.38%_17.71%_30.21%_17.71%]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4999 8.49989">
          <path d={svgPaths.p170e6580} fill="var(--fill-0, #18181B)" id="icon" />
        </svg>
      </div>
    </div>
  );
}
type FilterChipProps = {
  className?: string;
  expanded?: boolean;
  selected?: boolean;
  state?: boolean;
};

export default function FilterChip({ className, expanded = true, selected = false, state = true }: FilterChipProps) {
  const isNotSelectedAndState = !selected && state;
  const isSelectedAndState = selected && state;
  return (
    <div className={className || `content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px] ${isSelectedAndState ? "bg-[#18181b]" : "bg-[#f4f4f5]"}`}>
      <div className="content-stretch flex items-start relative shrink-0" data-name="_filter-chip-content">
        <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
          {((!selected && !expanded && !state) || isSelectedAndState) && (
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill={isSelectedAndState ? "var(--fill-0, white)" : "var(--fill-0, #D4D4D8)"} id="icon" />
                </svg>
              </div>
            </div>
          )}
          {isNotSelectedAndState && <RadioOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />}
        </div>
        <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
          <p className={`[word-break:break-word] font-["Minim_Base_VF:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] whitespace-nowrap ${isNotSelectedAndState ? "text-[#18181b]" : isSelectedAndState ? "text-white" : "text-[#d4d4d8]"}`}>label</p>
        </div>
        <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
          {!expanded && ((!selected && !state) || (selected && state)) && (
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="chevron-down-outline">
              <div className="absolute inset-[34.38%_17.71%_30.21%_17.71%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9166 7.08324">
                  <path d={svgPaths.p26bb6780} fill={isSelectedAndState ? "var(--fill-0, white)" : "var(--fill-0, #D4D4D8)"} id="icon" />
                </svg>
              </div>
            </div>
          )}
          {selected && expanded && state && (
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="chevron-up-outline">
              <div className="absolute inset-[30.21%_17.71%_34.38%_17.71%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9166 7.08338">
                  <path d={svgPaths.peb36e80} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          )}
          {!selected && !expanded && state && <ChevronDownOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />}
          {!selected && expanded && state && <ChevronUpOutline className="aspect-[24/24] h-full overflow-clip relative shrink-0" />}
        </div>
      </div>
    </div>
  );
}