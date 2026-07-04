import svgPaths from "./svg-aqanxzklec";

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
type ButtonProps = {
  className?: string;
  kind?: "neutral" | "muted" | "primary" | "critical";
  shape?: "soft" | "full";
  size?: "xlarge" | "large" | "medium" | "small";
  state?: boolean;
  variant?: "solid" | "outline" | "subtle" | "ghost" | "glass";
};

export default function Button({ className, kind = "neutral", shape = "soft", size = "xlarge", state = true, variant = "solid" }: ButtonProps) {
  if (size === "medium" && shape === "soft" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "neutral" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=neutral, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "neutral" && variant === "glass" && state) {
    return (
      <div className={className || "backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=neutral, variant=glass, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "neutral" && variant === "subtle" && state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=neutral, variant=subtle, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#d4d4d8] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#d4d4d8] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#d4d4d8] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#d4d4d8] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#d4d4d8] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#d4d4d8] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#d4d4d8] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "neutral" && variant === "solid" && !state) {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=neutral, variant=solid, state=disabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #D4D4D8)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#d4d4d8] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#71717a] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#71717a] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#71717a] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#71717a] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#71717a] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#71717a] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "neutral" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=neutral, variant=ghost, state=enabled">
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#71717a] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "muted" && variant === "ghost" && state) {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=muted, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #71717A)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#71717a] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#449afc] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#449afc] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#449afc] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#449afc] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#449afc] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#449afc] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#449afc] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "primary" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#449afc] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=primary, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "primary" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=primary, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #449AFC)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#449afc] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" />
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#eb3d3d] text-[15px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[22px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "neutral" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=neutral, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[27px]" />
        <ButtonContent className="content-stretch flex items-start relative shrink-0" size="large" />
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[22px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "critical" && variant === "outline" && state) {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=critical, variant=outline, state=enabled">
        <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[27px]" />
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "critical" && variant === "ghost" && state) {
    return (
      <div className={className || "content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=critical, variant=ghost, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, #EB3D3D)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#eb3d3d] text-[16.5px] whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "soft" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[12px]"} data-name="size=medium, shape=soft, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "soft" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[12px]"} data-name="size=small, shape=soft, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "soft" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[12px]"} data-name="size=large, shape=soft, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "soft" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && shape === "full" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[36px] p-[8px] relative rounded-[18px]"} data-name="size=medium, shape=full, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && shape === "full" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[36px] p-[6px] relative rounded-[18px]"} data-name="size=small, shape=full, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={svgPaths.p1ab64000} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large" && shape === "full" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[44px] p-[11px] relative rounded-[22px]"} data-name="size=large, shape=full, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xlarge" && shape === "full" && kind === "critical" && variant === "solid" && state) {
    return (
      <div className={className || "bg-[#eb3d3d] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[27px]"} data-name="size=xlarge, shape=full, kind=critical, variant=solid, state=enabled">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
          <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
            <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
              <div className="absolute inset-[9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                  <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
            <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "bg-[#18181b] content-stretch flex items-center justify-center min-w-[44px] p-[15px] relative rounded-[12px]"} data-name="size=xlarge, shape=soft, kind=neutral, variant=solid, state=enabled">
      <div className="content-stretch flex items-start relative shrink-0" data-name="_button-content">
        <div className="content-stretch flex h-[22px] items-center overflow-clip relative shrink-0" data-name="slot-icon-content">
          <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="radio-outline">
            <div className="absolute inset-[9.38%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
                <path d={svgPaths.p235aecf0} fill="var(--fill-0, white)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-start px-[4px] relative shrink-0" data-name="slot-label-content">
          <p className="[word-break:break-word] font-['Minim_Base_VF:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16.5px] text-white whitespace-nowrap">label</p>
        </div>
      </div>
    </div>
  );
}