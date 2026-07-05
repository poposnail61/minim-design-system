import { useState } from "react";
import { Button, type ButtonKind, type ButtonVariant, type ButtonShape, type ButtonSize } from "@/components/Button";
import { ToggleButton, type ToggleButtonShape, type ToggleButtonSize } from "@/components/ToggleButton";
import { InlineButton, type InlineButtonKind, type InlineButtonSize } from "@/components/InlineButton";
import { ActionChip, type ActionChipVariant } from "@/components/ActionChip";
import { ToggleChip } from "@/components/ToggleChip";
import { FilterChip } from "@/components/FilterChip";
import { InputChip } from "@/components/InputChip";
import { Icon } from "@/components/Icon";
import { Badge, type BadgeKind, type BadgeShape, type BadgeSize, type BadgeVariant } from "@/components/Badge";
import { InputField, SearchField, SelectField, TextareaField, type FieldShape, type FieldSize, type FieldVariant } from "@/components/Fields";
import { Checkbox, Radio, SegmentControl, Switch, Tabs, type ControlSize } from "@/components/SelectionControls";
import { MenuDivider, MenuItem, MenuModal, MenuPopover, ToggleMenuItem, CheckboxMenuItem, type MenuItemVariant, type MenuKind, type MenuSize } from "@/components/Menu";
import { Cell, CheckboxCell, DataTable, HeaderCell, InputCell, TableRow } from "@/components/Table";
import { Dialog } from "@/components/Dialog";
import { ImageContent, MultiPersonContent, PersonContent, SlotIconContent, SlotLabelContent } from "@/components/Content";

/* ─── Navigation ─────────────────────────────────────────────────── */

type Page = "colors" | "typography" | "spacing" | "button" | "toggle-button" | "inline-button" | "action-chip" | "toggle-chip" | "filter-chip" | "input-chip" | "badge" | "fields" | "selection-controls" | "menu" | "table" | "dialog" | "content";

const NAV = [
  {
    group: "Foundations",
    items: [
      { id: "colors" as Page,     label: "Colors" },
      { id: "typography" as Page, label: "Typography" },
      { id: "spacing" as Page,    label: "Spacing & Radius" },
    ],
  },
  {
    group: "Components",
    items: [
      { id: "button" as Page,        label: "Button" },
      { id: "toggle-button" as Page, label: "ToggleButton" },
      { id: "inline-button" as Page, label: "InlineButton" },
      { id: "action-chip"  as Page, label: "ActionChip" },
      { id: "toggle-chip"  as Page, label: "ToggleChip" },
      { id: "filter-chip"  as Page, label: "FilterChip" },
      { id: "input-chip"   as Page, label: "InputChip" },
      { id: "badge"        as Page, label: "Badge" },
      { id: "fields"       as Page, label: "Fields" },
      { id: "selection-controls" as Page, label: "Selection" },
      { id: "menu"         as Page, label: "Menu" },
      { id: "table"        as Page, label: "Table" },
      { id: "dialog"       as Page, label: "Dialog" },
      { id: "content"      as Page, label: "Content" },
    ],
  },
];

/* ─── Shared UI ──────────────────────────────────────────────────── */

function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-10 pb-8 border-b border-[var(--stroke-neutral)]">
      <h1 className="ts-title-large text-[var(--fg-neutral)] mb-2">{title}</h1>
      <p className="ts-body-medium text-[var(--fg-muted)]">{description}</p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="ts-title-small text-[var(--fg-neutral)] mb-4">{children}</h2>;
}

function PreviewBox({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 items-center p-8 rounded-t-[var(--radius-large)] ${dark ? "bg-[var(--bg-neutral-solid)]" : "bg-[var(--bg-layer-base)]"}`}>
      {children}
    </div>
  );
}

function PropSelect<T extends string>({
  label, value, options, onChange,
}: {
  label: string; value: T; options: T[]; onChange: (v: T) => void;
}) {
  return (
    <label className="flex items-center gap-2">
      <span className="ts-caption-medium text-[var(--fg-muted)] shrink-0">{label}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value as T)}
        className="ts-caption-medium text-[var(--fg-neutral)] bg-[var(--bg-field)] border border-[var(--stroke-neutral)] rounded-[var(--radius-small)] px-2 py-1 cursor-pointer"
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function PropToggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span className="ts-caption-medium text-[var(--fg-muted)] shrink-0">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`w-8 h-4 rounded-full transition-colors relative ${value ? "bg-[var(--bg-neutral-solid)]" : "bg-[var(--stroke-neutral)]"}`}
      >
        <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${value ? "translate-x-4" : "translate-x-0.5"}`} />
      </button>
    </label>
  );
}

function PropsTable({ rows }: { rows: { prop: string; type: string; default: string; description: string }[] }) {
  return (
    <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-medium)] overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[var(--bg-layer-base)]">
          <tr>
            {["Prop", "Type", "Default", "Description"].map(h => (
              <th key={h} className="ts-caption-medium-strong text-[var(--fg-muted)] px-4 py-3 border-b border-[var(--stroke-neutral)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[var(--stroke-neutral-subtle)] last:border-0">
              <td className="px-4 py-3"><code className="ts-caption-medium font-mono text-[var(--fg-primary)]">{r.prop}</code></td>
              <td className="px-4 py-3"><code className="ts-caption-medium font-mono text-[var(--fg-muted)]">{r.type}</code></td>
              <td className="px-4 py-3"><code className="ts-caption-medium font-mono text-[var(--fg-muted)]">{r.default}</code></td>
              <td className="px-4 py-3 ts-caption-medium text-[var(--fg-muted)]">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TokensTable({ rows }: { rows: { token: string; value: string; role: string }[] }) {
  return (
    <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-medium)] overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[var(--bg-layer-base)]">
          <tr>
            {["Token", "Value", "Role"].map(h => (
              <th key={h} className="ts-caption-medium-strong text-[var(--fg-muted)] px-4 py-3 border-b border-[var(--stroke-neutral)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[var(--stroke-neutral-subtle)] last:border-0">
              <td className="px-4 py-3"><code className="ts-caption-medium font-mono text-[var(--fg-neutral)]">{r.token}</code></td>
              <td className="px-4 py-3"><code className="ts-caption-medium font-mono text-[var(--fg-muted)]">{r.value}</code></td>
              <td className="px-4 py-3 ts-caption-medium text-[var(--fg-muted)]">{r.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Pages ──────────────────────────────────────────────────────── */

function ColorsPage() {
  const palette = [
    { label: "Gray",   vars: ["gray-0","gray-50","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","gray-950","gray-1000"] },
    { label: "Blue",   vars: ["blue-50","blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900","blue-950"] },
    { label: "Red",    vars: ["red-50","red-100","red-200","red-300","red-400","red-500","red-600","red-700","red-800","red-900","red-950"] },
    { label: "Green",  vars: ["green-50","green-100","green-200","green-300","green-400","green-500","green-600","green-700","green-800","green-900","green-950"] },
    { label: "Yellow", vars: ["yellow-50","yellow-100","yellow-200","yellow-300","yellow-400","yellow-500","yellow-600","yellow-700","yellow-800","yellow-900","yellow-950"] },
  ];
  const semantic = [
    { group: "Foreground", vars: ["fg-neutral","fg-muted","fg-neutral-inverted","fg-on-surface","fg-on-surface-subtle","fg-primary","fg-secondary","fg-critical","fg-placeholder","fg-disabled"] },
    { group: "Background", vars: ["bg-layer","bg-layer-base","bg-neutral","bg-neutral-subtle","bg-neutral-solid","bg-neutral-glass","bg-muted-solid","bg-primary","bg-primary-solid","bg-secondary","bg-secondary-solid","bg-critical","bg-critical-solid","bg-field","bg-field-subtle","bg-readonly","bg-disabled"] },
    { group: "Stroke",     vars: ["stroke-neutral","stroke-neutral-subtle","stroke-neutral-strong","stroke-primary","stroke-secondary","stroke-critical","stroke-neutral-overlay"] },
  ];

  return (
    <div>
      <PageHeader title="Colors" description="베이스 컬러 팔레트와 시멘틱 컬러 토큰." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Base Palette</SectionTitle>
          <div className="space-y-5">
            {palette.map(({ label, vars }) => (
              <div key={label}>
                <p className="ts-caption-medium text-[var(--fg-muted)] mb-2">{label}</p>
                <div className="flex gap-1">
                  {vars.map(v => (
                    <div key={v} className="flex-1 min-w-0">
                      <div className="h-8 rounded-sm border border-[var(--stroke-neutral-overlay)]" style={{ backgroundColor: `var(--${v})` }} />
                      <p className="ts-caption-small text-[var(--fg-muted)] mt-1 truncate">{v.split("-").pop()}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Semantic Tokens</SectionTitle>
          <div className="space-y-6">
            {semantic.map(({ group, vars }) => (
              <div key={group}>
                <p className="ts-caption-medium-strong text-[var(--fg-muted)] mb-3">{group}</p>
                <div className="grid grid-cols-2 gap-2">
                  {vars.map(v => (
                    <div key={v} className="flex items-center gap-3 p-2 rounded-[var(--radius-small)] border border-[var(--stroke-neutral-subtle)]">
                      <div className="w-8 h-8 rounded-[var(--radius-xsmall)] border border-[var(--stroke-neutral-overlay)] shrink-0" style={{ backgroundColor: `var(--${v})` }} />
                      <code className="ts-caption-medium font-mono text-[var(--fg-neutral)]">--{v}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TypographyPage() {
  const styles = [
    { name: "ts-display-large",          size: "60px", lh: "80px",  weight: "700", label: "Display Large" },
    { name: "ts-display-medium",         size: "48px", lh: "64px",  weight: "700", label: "Display Medium" },
    { name: "ts-display-small",          size: "36px", lh: "48px",  weight: "700", label: "Display Small" },
    { name: "ts-title-large",            size: "27px", lh: "36px",  weight: "700", label: "Title Large" },
    { name: "ts-title-medium",           size: "21px", lh: "28px",  weight: "700", label: "Title Medium" },
    { name: "ts-title-small",            size: "18px", lh: "24px",  weight: "700", label: "Title Small" },
    { name: "ts-body-large",             size: "16.5px",lh: "22px", weight: "400", label: "Body Large" },
    { name: "ts-body-large-strong",      size: "16.5px",lh: "22px", weight: "500", label: "Body Large Strong" },
    { name: "ts-body-medium",            size: "15px", lh: "20px",  weight: "400", label: "Body Medium" },
    { name: "ts-body-medium-strong",     size: "15px", lh: "20px",  weight: "500", label: "Body Medium Strong" },
    { name: "ts-caption-large",          size: "13.5px",lh: "18px", weight: "400", label: "Caption Large" },
    { name: "ts-caption-large-strong",   size: "13.5px",lh: "18px", weight: "500", label: "Caption Large Strong" },
    { name: "ts-caption-medium",         size: "12px", lh: "16px",  weight: "400", label: "Caption Medium" },
    { name: "ts-caption-medium-strong",  size: "12px", lh: "16px",  weight: "500", label: "Caption Medium Strong" },
    { name: "ts-caption-small",          size: "10.5px",lh: "14px", weight: "400", label: "Caption Small" },
    { name: "ts-caption-small-strong",   size: "10.5px",lh: "14px", weight: "500", label: "Caption Small Strong" },
  ];
  return (
    <div>
      <PageHeader title="Typography" description="MinimBaseVF 폰트 기반 텍스트 스타일 시스템." />
      <SectionTitle>Text Styles</SectionTitle>
      <div className="divide-y divide-[var(--stroke-neutral-subtle)]">
        {styles.map(s => (
          <div key={s.name} className="py-4 flex items-baseline gap-6">
            <div className="w-52 shrink-0">
              <code className="ts-caption-medium font-mono text-[var(--fg-primary)]">.{s.name}</code>
              <div className="flex gap-3 mt-1">
                <span className="ts-caption-small text-[var(--fg-muted)]">{s.size}</span>
                <span className="ts-caption-small text-[var(--fg-muted)]">/{s.lh}</span>
                <span className="ts-caption-small text-[var(--fg-muted)]">w{s.weight}</span>
              </div>
            </div>
            <p className={`${s.name} text-[var(--fg-neutral)] truncate`}>
              The quick brown fox
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpacingPage() {
  const spacing = [
    { name: "spacing-0",    val: "0px"   }, { name: "spacing-50",   val: "2px"  },
    { name: "spacing-100",  val: "4px"   }, { name: "spacing-150",  val: "6px"  },
    { name: "spacing-200",  val: "8px"   }, { name: "spacing-250",  val: "10px" },
    { name: "spacing-300",  val: "12px"  }, { name: "spacing-400",  val: "16px" },
    { name: "spacing-500",  val: "20px"  }, { name: "spacing-800",  val: "32px" },
    { name: "spacing-1200", val: "48px"  }, { name: "spacing-1800", val: "64px" },
  ];
  const radius = [
    { name: "radius-none",    val: "0px",    label: "None"    },
    { name: "radius-xsmall",  val: "6px",    label: "XSmall"  },
    { name: "radius-small",   val: "8px",    label: "Small"   },
    { name: "radius-medium",  val: "12px",   label: "Medium"  },
    { name: "radius-large",   val: "20px",   label: "Large"   },
    { name: "radius-xlarge",  val: "32px",   label: "XLarge"  },
    { name: "radius-full",    val: "1000px", label: "Full"    },
  ];
  const sizes = [
    { name: "size-h18", val: "18px" }, { name: "size-h20", val: "20px" },
    { name: "size-h22", val: "22px" }, { name: "size-h28", val: "28px" },
    { name: "size-h32", val: "32px" }, { name: "size-h36", val: "36px" },
    { name: "size-h44", val: "44px" }, { name: "size-h52", val: "52px" },
    { name: "size-h60", val: "60px" }, { name: "size-h68", val: "68px" },
  ];
  return (
    <div>
      <PageHeader title="Spacing & Radius" description="스페이싱, 라디우스, 컴포넌트 사이즈 토큰." />
      <div className="space-y-10">
        <div>
          <SectionTitle>Spacing</SectionTitle>
          <div className="space-y-2">
            {spacing.map(s => (
              <div key={s.name} className="flex items-center gap-4">
                <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-36 shrink-0">--{s.name}</code>
                <span className="ts-caption-medium text-[var(--fg-muted)] w-10 shrink-0">{s.val}</span>
                <div className="h-4 rounded-[2px] bg-[var(--bg-primary-solid)]" style={{ width: s.val === "0px" ? "2px" : s.val, opacity: s.val === "0px" ? 0.3 : 1 }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Radius</SectionTitle>
          <div className="flex flex-wrap gap-4">
            {radius.map(r => (
              <div key={r.name} className="flex flex-col gap-2 items-start">
                <div className="w-14 h-14 bg-[var(--bg-neutral)] border border-[var(--stroke-neutral)]" style={{ borderRadius: r.val === "1000px" ? "9999px" : r.val }} />
                <div>
                  <p className="ts-caption-medium-strong text-[var(--fg-neutral)]">{r.label}</p>
                  <code className="ts-caption-small font-mono text-[var(--fg-muted)]">{r.val}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Component Size</SectionTitle>
          <div className="space-y-2">
            {sizes.map(s => (
              <div key={s.name} className="flex items-center gap-4">
                <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-28 shrink-0">--{s.name}</code>
                <span className="ts-caption-medium text-[var(--fg-muted)] w-10 shrink-0">{s.val}</span>
                <div className="bg-[var(--bg-neutral)] border border-[var(--stroke-neutral)] rounded-sm w-20" style={{ height: s.val }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type ButtonCombo = `${ButtonKind}/${ButtonVariant}`;

const BUTTON_COMBOS: ButtonCombo[] = [
  "neutral/solid", "neutral/outline", "neutral/subtle", "neutral/ghost", "neutral/glass",
  "muted/ghost",
  "primary/solid", "primary/ghost",
  "critical/solid", "critical/outline", "critical/ghost",
];

function parseCombo(combo: ButtonCombo): { kind: ButtonKind; variant: ButtonVariant } {
  const [kind, variant] = combo.split("/") as [ButtonKind, ButtonVariant];
  return { kind, variant };
}

function ButtonPage() {
  const [combo, setCombo]       = useState<ButtonCombo>("neutral/solid");
  const [shape, setShape]       = useState<ButtonShape>("soft");
  const [size, setSize]         = useState<ButtonSize>("large");
  const [disabled, setDisabled] = useState(false);

  const { kind, variant } = parseCombo(combo);

  return (
    <div>
      <PageHeader title="Button" description="액션을 트리거하는 기본 버튼 컴포넌트. kind, variant, shape, size 조합으로 다양한 맥락을 지원." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox dark={variant === "glass"}>
              <Button kind={kind} variant={variant} shape={shape} size={size} disabled={disabled}
                label="label" prefix={<Icon name="checkbox-outline" size={size === "small" || size === "medium" ? 20 : 22} />} />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropSelect label="kind + variant" value={combo}  options={BUTTON_COMBOS}               onChange={setCombo} />
              <PropSelect label="shape"   value={shape}  options={["soft","full"]}                      onChange={setShape} />
              <PropSelect label="size"    value={size}   options={["xlarge","large","medium","small"]}  onChange={setSize} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Variants</SectionTitle>
          <div className="divide-y divide-[var(--stroke-neutral-subtle)]">
            {BUTTON_COMBOS.map(c => {
              const { kind, variant } = parseCombo(c);
              const isDark = variant === "glass";
              return (
                <div key={c} className="flex items-center gap-6 py-3">
                  <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-36 shrink-0">{c}</code>
                  <div className={`flex items-center px-3 py-2 rounded-[var(--radius-small)] ${isDark ? "bg-[var(--bg-neutral-solid)]" : ""}`}>
                    <Button kind={kind} variant={variant} shape="soft" size="medium"
                      label="label" prefix={<Icon name="checkbox-outline" size={20} />} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",                                    default: "—",        description: "버튼 텍스트" },
            { prop: "prefix",   type: "ReactNode",                                 default: "—",        description: "왼쪽 아이콘 슬롯" },
            { prop: "suffix",   type: "ReactNode",                                 default: "—",        description: "오른쪽 아이콘 슬롯" },
            { prop: "kind",     type: '"neutral" | "muted" | "primary" | "critical"', default: '"neutral"', description: "색상 의미 역할" },
            { prop: "variant",  type: '"solid" | "outline" | "subtle" | "ghost" | "glass"', default: '"solid"', description: "시각적 스타일" },
            { prop: "shape",    type: '"soft" | "full"',                           default: '"soft"',   description: "모서리 형태" },
            { prop: "size",     type: '"xlarge" | "large" | "medium" | "small"',  default: '"xlarge"', description: "버튼 크기" },
            { prop: "disabled", type: "boolean",                                   default: "false",    description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-neutral-solid",   value: "var(--gray-900)",    role: "solid neutral 배경" },
            { token: "--bg-primary-solid",   value: "var(--blue-500)",    role: "solid primary 배경" },
            { token: "--bg-critical-solid",  value: "var(--red-500)",     role: "solid critical 배경" },
            { token: "--bg-neutral",         value: "var(--gray-100)",    role: "subtle 배경" },
            { token: "--bg-field",           value: "var(--gray-0)",      role: "outline 배경" },
            { token: "--bg-disabled",        value: "var(--gray-100)",    role: "disabled 배경" },
            { token: "--fg-on-surface",      value: "var(--gray-0)",      role: "solid 텍스트/아이콘" },
            { token: "--fg-neutral",         value: "var(--gray-900)",    role: "subtle/outline 텍스트" },
            { token: "--fg-disabled",        value: "var(--gray-300)",    role: "disabled 텍스트" },
            { token: "--stroke-neutral",     value: "var(--gray-200)",    role: "outline 테두리" },
            { token: "--radius-medium",      value: "12px",               role: "soft shape 라디우스" },
            { token: "--radius-full-h52",    value: "27px",               role: "full xlarge 라디우스" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function ToggleButtonPage() {
  const [selected, setSelected] = useState(false);
  const [shape, setShape]       = useState<ToggleButtonShape>("soft");
  const [size, setSize]         = useState<ToggleButtonSize>("large");
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <PageHeader title="ToggleButton" description="선택/비선택 상태를 토글하는 버튼. outline에서 solid로 전환." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox>
              <ToggleButton selected={selected} shape={shape} size={size} disabled={disabled}
                label="label" onClick={() => !disabled && setSelected(s => !s)} />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropToggle label="selected" value={selected} onChange={setSelected} />
              <PropSelect label="shape"    value={shape}    options={["soft","full"]}       onChange={setShape} />
              <PropSelect label="size"     value={size}     options={["large","medium"]}    onChange={setSize} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>States</SectionTitle>
          <div className="flex gap-6 items-center">
            {[
              { label: "Unselected", selected: false, disabled: false },
              { label: "Selected",   selected: true,  disabled: false },
              { label: "Disabled",   selected: false, disabled: true  },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <ToggleButton label="label" selected={s.selected} disabled={s.disabled} />
                <span className="ts-caption-medium text-[var(--fg-muted)]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",                    default: "—",       description: "버튼 텍스트" },
            { prop: "prefix",   type: "ReactNode",                 default: "checkbox-outline icon", description: "왼쪽 아이콘 슬롯" },
            { prop: "suffix",   type: "ReactNode",                 default: "—",       description: "오른쪽 아이콘 슬롯" },
            { prop: "selected", type: "boolean",                   default: "false",   description: "선택 상태" },
            { prop: "shape",    type: '"soft" | "full"',           default: '"soft"',  description: "모서리 형태" },
            { prop: "size",     type: '"large" | "medium"',        default: '"large"', description: "버튼 크기" },
            { prop: "disabled", type: "boolean",                   default: "false",   description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-field",           value: "var(--gray-0)",   role: "unselected 배경" },
            { token: "--bg-neutral-solid",   value: "var(--gray-900)", role: "selected 배경" },
            { token: "--bg-disabled",        value: "var(--gray-100)", role: "disabled 배경" },
            { token: "--fg-neutral",         value: "var(--gray-900)", role: "unselected 텍스트/아이콘" },
            { token: "--fg-on-surface",      value: "var(--gray-0)",   role: "selected 텍스트/아이콘" },
            { token: "--fg-disabled",        value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--stroke-neutral",     value: "var(--gray-200)", role: "unselected 테두리" },
            { token: "--radius-medium",      value: "12px",            role: "soft shape" },
            { token: "--radius-full-h44",    value: "22px",            role: "full large shape" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function InlineButtonPage() {
  const [kind, setKind]         = useState<InlineButtonKind>("neutral");
  const [size, setSize]         = useState<InlineButtonSize>("large");
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <PageHeader title="InlineButton" description="배경 없이 텍스트와 아이콘으로만 구성된 인라인 버튼. 링크나 보조 액션에 사용." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox dark={kind === "on-surface"}>
              <InlineButton kind={kind} size={size} disabled={disabled} label="label" />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropSelect label="kind"    value={kind}    options={["neutral","muted","primary","critical","on-surface"]} onChange={setKind} />
              <PropSelect label="size"    value={size}    options={["large","medium"]}                                    onChange={setSize} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Kinds</SectionTitle>
          <div className="flex flex-wrap gap-4 items-center">
            {(["neutral","muted","primary","critical"] as InlineButtonKind[]).map(k => (
              <div key={k} className="flex flex-col items-center gap-2">
                <InlineButton kind={k} label="label" />
                <span className="ts-caption-medium text-[var(--fg-muted)]">{k}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2 px-3 py-1 rounded bg-[var(--bg-neutral-solid)]">
              <InlineButton kind="on-surface" label="label" />
              <span className="ts-caption-medium text-[var(--fg-muted-foreground,#ccc)]">on-surface</span>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",                                                    default: "—",        description: "버튼 텍스트" },
            { prop: "prefix",   type: "ReactNode",                                                 default: "checkbox-outline icon", description: "왼쪽 아이콘 슬롯" },
            { prop: "suffix",   type: "ReactNode",                                                 default: "—",        description: "오른쪽 아이콘 슬롯" },
            { prop: "kind",     type: '"neutral" | "muted" | "primary" | "critical" | "on-surface"', default: '"neutral"', description: "색상 의미 역할" },
            { prop: "size",     type: '"large" | "medium"',                                        default: '"large"',  description: "텍스트/아이콘 크기" },
            { prop: "disabled", type: "boolean",                                                   default: "false",    description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--fg-neutral",    value: "var(--gray-900)",  role: "neutral 텍스트/아이콘" },
            { token: "--fg-muted",      value: "var(--gray-500)",  role: "muted 텍스트/아이콘" },
            { token: "--fg-primary",    value: "var(--blue-500)",  role: "primary 텍스트/아이콘" },
            { token: "--fg-critical",   value: "var(--red-500)",   role: "critical 텍스트/아이콘" },
            { token: "--fg-on-surface", value: "var(--gray-0)",    role: "on-surface 텍스트/아이콘" },
            { token: "--fg-disabled",   value: "var(--gray-300)",  role: "disabled 텍스트/아이콘" },
            { token: "--size-h20",      value: "20px",             role: "medium 아이콘 높이" },
            { token: "--size-h22",      value: "22px",             role: "large 아이콘 높이" },
          ]} />
        </div>
      </div>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────────────── */

function ActionChipPage() {
  const [variant, setVariant]   = useState<ActionChipVariant>("solid");
  const [disabled, setDisabled] = useState(false);

  const COMBOS: { label: string; variant: ActionChipVariant; disabled: boolean }[] = [
    { label: "solid",           variant: "solid",   disabled: false },
    { label: "solid/disabled",  variant: "solid",   disabled: true  },
    { label: "subtle",          variant: "subtle",  disabled: false },
    { label: "outline",         variant: "outline", disabled: false },
  ];

  return (
    <div>
      <PageHeader title="ActionChip" description="고정된 full-pill 형태의 칩. 필터, 태그, 선택 액션 등에 사용. 사이즈는 medium 고정." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox>
              <ActionChip variant={variant} disabled={disabled} label="label" />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropSelect label="variant" value={variant} options={["solid","subtle","outline"]} onChange={setVariant} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Variants</SectionTitle>
          <div className="divide-y divide-[var(--stroke-neutral-subtle)]">
            {COMBOS.map(c => (
              <div key={c.label} className="flex items-center gap-6 py-3">
                <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-36 shrink-0">{c.label}</code>
                <ActionChip variant={c.variant} disabled={c.disabled} label="label" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",                          default: "—",       description: "칩 텍스트" },
            { prop: "prefix",   type: "ReactNode",                       default: "checkbox-outline icon", description: "왼쪽 아이콘 슬롯" },
            { prop: "suffix",   type: "ReactNode",                       default: "—",       description: "오른쪽 아이콘 슬롯" },
            { prop: "variant",  type: '"solid" | "subtle" | "outline"',  default: '"solid"', description: "시각적 스타일" },
            { prop: "disabled", type: "boolean",                         default: "false",   description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-neutral-solid",  value: "var(--gray-900)", role: "solid 배경" },
            { token: "--bg-neutral",        value: "var(--gray-100)", role: "subtle 배경" },
            { token: "--bg-field",          value: "var(--gray-0)",   role: "outline 배경" },
            { token: "--bg-disabled",       value: "var(--gray-100)", role: "disabled 배경" },
            { token: "--fg-on-surface",     value: "var(--gray-0)",   role: "solid 텍스트/아이콘" },
            { token: "--fg-neutral",        value: "var(--gray-900)", role: "subtle/outline 텍스트/아이콘" },
            { token: "--fg-disabled",       value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--stroke-neutral",    value: "var(--gray-200)", role: "outline 테두리" },
            { token: "--size-h36",          value: "36px",            role: "최소 너비 (min-w)" },
            { token: "--spacing-200",       value: "8px",             role: "padding" },
            { token: "--radius-full-h36",   value: "18px",            role: "pill 라디우스 (고정)" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function ToggleChipPage() {
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <PageHeader title="ToggleChip" description="선택/비선택을 토글하는 칩. 사이즈·모양 고정(medium + full pill). 테두리 없음." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox>
              <ToggleChip selected={selected} disabled={disabled} label="label"
                onClick={() => !disabled && setSelected(s => !s)} />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropToggle label="selected" value={selected} onChange={setSelected} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>States</SectionTitle>
          <div className="divide-y divide-[var(--stroke-neutral-subtle)]">
            {[
              { label: "unselected",        selected: false, disabled: false },
              { label: "selected",          selected: true,  disabled: false },
              { label: "disabled",          selected: false, disabled: true  },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-6 py-3">
                <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-36 shrink-0">{s.label}</code>
                <ToggleChip selected={s.selected} disabled={s.disabled} label="label" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",    default: "—",     description: "칩 텍스트" },
            { prop: "prefix",   type: "ReactNode", default: "checkbox-outline icon", description: "왼쪽 아이콘 슬롯" },
            { prop: "suffix",   type: "ReactNode", default: "—",     description: "오른쪽 아이콘 슬롯" },
            { prop: "selected", type: "boolean",   default: "false", description: "선택 상태" },
            { prop: "disabled", type: "boolean",   default: "false", description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-neutral",        value: "var(--gray-100)", role: "unselected 배경" },
            { token: "--bg-neutral-solid",  value: "var(--gray-900)", role: "selected 배경" },
            { token: "--bg-disabled",       value: "var(--gray-100)", role: "disabled 배경" },
            { token: "--fg-neutral",        value: "var(--gray-900)", role: "unselected 텍스트/아이콘" },
            { token: "--fg-on-surface",     value: "var(--gray-0)",   role: "selected 텍스트/아이콘" },
            { token: "--fg-disabled",       value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--size-h36",          value: "36px",            role: "최소 너비 (min-w)" },
            { token: "--spacing-200",       value: "8px",             role: "padding (고정)" },
            { token: "--radius-full-h36",   value: "18px",            role: "pill 라디우스 (고정)" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function FilterChipPage() {
  const [selected, setSelected] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <PageHeader title="FilterChip" description="드롭다운 필터용 칩. 오른쪽에 chevron이 항상 붙고 expanded/selected 상태를 표현." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox>
              <div className="flex min-h-[180px] items-start">
                <MenuPopover
                  open={expanded && !disabled}
                  trigger={(
                    <FilterChip
                      selected={selected}
                      expanded={expanded}
                      disabled={disabled}
                      label="label"
                      onClick={() => !disabled && setExpanded(e => !e)}
                    />
                  )}
                >
                  <CheckboxMenuItem label="Option one" selected />
                  <CheckboxMenuItem label="Option two" />
                  <CheckboxMenuItem label="Option three" />
                </MenuPopover>
              </div>
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropToggle label="selected" value={selected} onChange={setSelected} />
              <PropToggle label="expanded" value={expanded} onChange={setExpanded} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>States</SectionTitle>
          <div className="divide-y divide-[var(--stroke-neutral-subtle)]">
            {[
              { label: "unselected/collapsed", selected: false, expanded: false, disabled: false },
              { label: "unselected/expanded",  selected: false, expanded: true,  disabled: false },
              { label: "selected/collapsed",   selected: true,  expanded: false, disabled: false },
              { label: "selected/expanded",    selected: true,  expanded: true,  disabled: false },
              { label: "disabled",             selected: false, expanded: false, disabled: true  },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-6 py-3">
                <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-44 shrink-0">{s.label}</code>
                <FilterChip selected={s.selected} expanded={s.expanded} disabled={s.disabled} label="label" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",    default: "—",     description: "칩 텍스트" },
            { prop: "prefix",   type: "ReactNode", default: "checkbox-outline icon", description: "왼쪽 아이콘 슬롯" },
            { prop: "selected", type: "boolean",   default: "false", description: "선택 상태 (solid 배경)" },
            { prop: "expanded", type: "boolean",   default: "false", description: "펼침 상태 (chevron 방향)" },
            { prop: "disabled", type: "boolean",   default: "false", description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-neutral",        value: "var(--gray-100)", role: "unselected 배경" },
            { token: "--bg-neutral-solid",  value: "var(--gray-900)", role: "selected 배경" },
            { token: "--bg-disabled",       value: "var(--gray-100)", role: "disabled 배경" },
            { token: "--fg-neutral",        value: "var(--gray-900)", role: "unselected 텍스트/아이콘" },
            { token: "--fg-on-surface",     value: "var(--gray-0)",   role: "selected 텍스트/아이콘" },
            { token: "--fg-disabled",       value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--radius-full-h36",   value: "18px",            role: "pill 라디우스 (고정)" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function InputChipPage() {
  const [disabled, setDisabled] = useState(false);
  const [chips, setChips]       = useState(["React", "TypeScript", "Design System"]);

  return (
    <div>
      <PageHeader title="InputChip" description="입력된 값을 태그로 표현하는 칩. 오른쪽 닫기 버튼이 항상 필수로 포함됨." />

      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox>
              <div className="flex flex-wrap gap-2">
                {chips.map(chip => (
                  <InputChip key={chip} label={chip} disabled={disabled}
                    onClose={() => setChips(c => c.filter(x => x !== chip))} />
                ))}
                {chips.length === 0 && (
                  <button onClick={() => setChips(["React", "TypeScript", "Design System"])}
                    className="ts-caption-medium text-[var(--fg-muted)] underline">
                    chips 복원
                  </button>
                )}
              </div>
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>States</SectionTitle>
          <div className="divide-y divide-[var(--stroke-neutral-subtle)]">
            {[
              { label: "enabled",  disabled: false },
              { label: "disabled", disabled: true  },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-6 py-3">
                <code className="ts-caption-medium font-mono text-[var(--fg-muted)] w-44 shrink-0">{s.label}</code>
                <InputChip label="label" disabled={s.disabled} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",    type: "string",                               default: "—",     description: "칩 텍스트" },
            { prop: "prefix",   type: "ReactNode",                            default: "checkbox-outline icon", description: "왼쪽 아이콘 슬롯" },
            { prop: "onClose",  type: "(e: MouseEvent) => void",              default: "—",     description: "닫기 버튼 클릭 핸들러 (항상 렌더링됨)" },
            { prop: "disabled", type: "boolean",                              default: "false", description: "비활성화 상태" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-neutral",       value: "var(--gray-100)", role: "항상 고정 배경 (enabled)" },
            { token: "--bg-disabled",      value: "var(--gray-100)", role: "disabled 배경" },
            { token: "--fg-neutral",       value: "var(--gray-900)", role: "enabled 텍스트/아이콘" },
            { token: "--fg-disabled",      value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--radius-full-h36",  value: "18px",            role: "pill 라디우스 (고정)" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function BadgePage() {
  const [kind, setKind] = useState<BadgeKind>("neutral");
  const [variant, setVariant] = useState<BadgeVariant>("solid");
  const [shape, setShape] = useState<BadgeShape>("soft");
  const [size, setSize] = useState<BadgeSize>("medium");

  return (
    <div>
      <PageHeader title="Badge" description="짧은 상태와 카테고리를 표시하는 비상호작용 컴포넌트." />
      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox dark={variant === "glass"}>
              <Badge kind={kind} variant={variant} shape={shape} size={size} label="Badge" prefix={<Icon name="check-outline" size={14} />} />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropSelect label="kind" value={kind} options={["neutral","muted","primary","secondary","critical"]} onChange={setKind} />
              <PropSelect label="variant" value={variant} options={["solid","glass"]} onChange={setVariant} />
              <PropSelect label="shape" value={shape} options={["soft","full"]} onChange={setShape} />
              <PropSelect label="size" value={size} options={["large","medium","small"]} onChange={setSize} />
            </div>
          </div>
        </div>
        <div>
          <SectionTitle>Kinds</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {(["neutral","muted","primary","secondary","critical"] as BadgeKind[]).map(k => <Badge key={k} kind={k} label={k} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldsPage() {
  const [size, setSize] = useState<FieldSize>("large");
  const [shape, setShape] = useState<FieldShape>("soft");
  const [variant, setVariant] = useState<FieldVariant>("outline");

  return (
    <div>
      <PageHeader title="Fields" description="Input, Search, Select, Textarea 필드 컴포넌트." />
      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <PreviewBox>
              <InputField label="Input" size={size} shape={shape} variant={variant} defaultValue="Text value" />
              <SearchField label="Search" size={size} shape={shape} variant={variant} />
              <SelectField label="Select" size={size} shape={shape} variant={variant} defaultValue="one">
                <option value="one">Option one</option>
                <option value="two">Option two</option>
              </SelectField>
              <TextareaField label="Textarea" size={size} shape={shape} variant={variant} defaultValue="Multiline value" />
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropSelect label="size" value={size} options={["large","medium"]} onChange={setSize} />
              <PropSelect label="shape" value={shape} options={["soft","full"]} onChange={setShape} />
              <PropSelect label="variant" value={variant} options={["outline","subtle"]} onChange={setVariant} />
            </div>
          </div>
        </div>
        <div>
          <SectionTitle>States</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField label="Enabled" defaultValue="Value" />
            <InputField label="Focused" status="focused" defaultValue="Value" />
            <InputField label="Error" status="error" defaultValue="Value" errorText="Error message" />
            <InputField label="Disabled" disabled defaultValue="Value" />
          </div>
        </div>
        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",       type: "string",                         default: "—",          description: "field label 텍스트" },
            { prop: "helperText",  type: "string",                         default: "—",          description: "보조 설명 텍스트" },
            { prop: "errorText",   type: "string",                         default: "—",          description: "error 상태 설명 텍스트" },
            { prop: "prefix",      type: "ReactNode",                      default: "—",          description: "InputField 왼쪽 슬롯" },
            { prop: "suffix",      type: "ReactNode",                      default: "—",          description: "InputField / SelectField 오른쪽 슬롯" },
            { prop: "size",        type: "'large' | 'medium'",             default: "'large'",    description: "field 높이, padding, typography, icon 크기" },
            { prop: "shape",       type: "'soft' | 'full'",                default: "'soft'",     description: "field radius" },
            { prop: "variant",     type: "'outline' | 'subtle'",           default: "'outline'",  description: "stroke / fill 스타일" },
            { prop: "status",      type: "FieldStatus",                    default: "'enabled'",  description: "enabled, focused, error, placeholder, disabled, readonly" },
            { prop: "fullWidth",   type: "boolean",                        default: "false",      description: "부모 너비에 맞춤" },
            { prop: "onValueChange", type: "(value: string) => void",       default: "—",          description: "SelectField 선택 변경 콜백" },
          ]} />
        </div>
        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-field",          value: "var(--gray-0)",   role: "outline field 배경" },
            { token: "--bg-field-subtle",   value: "var(--gray-100)", role: "subtle field 배경" },
            { token: "--bg-disabled",       value: "var(--gray-100)", role: "disabled field 배경" },
            { token: "--fg-neutral",        value: "var(--gray-900)", role: "입력 텍스트" },
            { token: "--fg-muted",          value: "var(--gray-500)", role: "아이콘 / helper 텍스트" },
            { token: "--fg-placeholder",    value: "var(--gray-400)", role: "placeholder 텍스트" },
            { token: "--fg-disabled",       value: "var(--gray-300)", role: "disabled 텍스트 / 아이콘" },
            { token: "--stroke-neutral",    value: "var(--gray-200)", role: "outline default stroke" },
            { token: "--stroke-primary",    value: "var(--blue-500)", role: "focused stroke" },
            { token: "--stroke-critical",   value: "var(--red-500)",  role: "error stroke" },
            { token: "--radius-small",      value: "8px",             role: "soft field radius" },
            { token: "--radius-full-h52",   value: "27px",            role: "large full field radius" },
            { token: "--radius-full-h44",   value: "22px",            role: "medium full field radius" },
            { token: "--size-field-width",  value: "300px",           role: "Input / Search / Select 기본 너비" },
            { token: "--size-textarea-width", value: "280px",         role: "Textarea 기본 너비" },
            { token: "--size-h52",          value: "52px",            role: "large field 높이" },
            { token: "--size-h44",          value: "44px",            role: "medium field 높이" },
            { token: "--size-h48",          value: "48px",            role: "medium disabled field 높이" },
            { token: "--size-field-icon-large", value: "24px",        role: "large field icon" },
            { token: "--size-field-icon-medium", value: "20px",       role: "medium field icon" },
            { token: "--size-field-caret-large", value: "12px",       role: "large select caret" },
            { token: "--size-field-caret-medium", value: "10px",      role: "medium select caret" },
            { token: "--spacing-field-gap-large", value: "10px",      role: "large field slot gap" },
            { token: "--spacing-field-gap-medium", value: "8px",      role: "medium field slot gap" },
            { token: "--spacing-field-padding-large-outline", value: "13px", role: "large outline/focused/error padding" },
            { token: "--spacing-field-padding-medium-outline", value: "11px", role: "medium outline/focused/error padding" },
            { token: "--spacing-field-padding-large-subtle", value: "14px", role: "large subtle default padding" },
            { token: "--spacing-field-padding-medium-subtle", value: "12px", role: "medium subtle default padding" },
            { token: "--size-textarea-large", value: "134px",         role: "large textarea wrap 높이" },
            { token: "--size-textarea-medium", value: "116px",        role: "medium textarea wrap 높이" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function SelectionControlsPage() {
  const [selected, setSelected] = useState("overview");
  const [tab, setTab] = useState("details");
  const [on, setOn] = useState(true);

  const options = [
    { value: "overview", label: "label" },
    { value: "details", label: "label" },
    { value: "settings", label: "label" },
  ];

  function MatrixCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="rounded-[var(--radius-medium)] border border-dashed border-[var(--stroke-neutral)] bg-[var(--bg-layer)] p-[var(--spacing-400)]">
        <p className="ts-caption-medium-strong mb-[var(--spacing-300)] text-[var(--fg-neutral)]">{title}</p>
        {children}
      </div>
    );
  }

  function StateTile({ label, children }: { label: string; children: React.ReactNode }) {
    return (
      <div className="flex min-h-[72px] min-w-[92px] flex-col items-center justify-center gap-[var(--spacing-200)] rounded-[var(--radius-small)] bg-[var(--bg-layer-base)] px-[var(--spacing-300)]">
        <span className="ts-caption-small text-[var(--fg-muted)]">{label}</span>
        {children}
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Selection Controls" description="Figma selection-control 섹션의 Checkbox, Radio, Switch, SegmentControl, Tab." />
      <div className="grid gap-10 2xl:grid-cols-2">
        <section className="rounded-[var(--radius-large)] bg-[var(--bg-layer-base)] p-[var(--spacing-500)]">
          <SectionTitle>Checkbox</SectionTitle>
          <MatrixCard title="state, selected">
            <div className="flex flex-wrap gap-[var(--spacing-300)]">
              <StateTile label="enabled, false"><Checkbox label="label" /></StateTile>
              <StateTile label="disabled, false"><Checkbox label="label" disabled /></StateTile>
              <StateTile label="enabled, true"><Checkbox label="label" selected /></StateTile>
              <StateTile label="disabled, true"><Checkbox label="label" selected disabled /></StateTile>
            </div>
          </MatrixCard>
          <div className="mt-[var(--spacing-500)] inline-flex rounded-[var(--radius-medium)] border border-dashed border-[var(--stroke-primary)] p-[var(--spacing-300)]">
            <div className="grid gap-[var(--spacing-300)]">
              <Checkbox label="label" />
              <Checkbox label="label" selected />
              <Checkbox label="label" disabled />
              <Checkbox label="label" selected disabled />
            </div>
          </div>
        </section>

        <section className="rounded-[var(--radius-large)] bg-[var(--bg-layer-base)] p-[var(--spacing-500)]">
          <SectionTitle>SegmentControl</SectionTitle>
          <MatrixCard title="size / shape / width">
            <div className="grid gap-[var(--spacing-500)] lg:grid-cols-2">
              <div>
                <p className="ts-caption-medium mb-[var(--spacing-200)] text-[var(--fg-muted)]">size</p>
                <div className="flex flex-wrap gap-[var(--spacing-300)]">
                  <SegmentControl options={options} value={selected} onValueChange={setSelected} size="large" />
                  <SegmentControl options={options} value={selected} onValueChange={setSelected} size="medium" />
                </div>
              </div>
              <div>
                <p className="ts-caption-medium mb-[var(--spacing-200)] text-[var(--fg-muted)]">shape</p>
                <div className="flex flex-wrap gap-[var(--spacing-300)]">
                  <SegmentControl options={options} value={selected} onValueChange={setSelected} shape="soft" />
                  <SegmentControl options={options} value={selected} onValueChange={setSelected} shape="full" />
                </div>
              </div>
              <div>
                <p className="ts-caption-medium mb-[var(--spacing-200)] text-[var(--fg-muted)]">width</p>
                <div className="space-y-[var(--spacing-300)]">
                  <SegmentControl options={options} value={selected} onValueChange={setSelected} width="fixed" />
                  <SegmentControl options={options} value={selected} onValueChange={setSelected} width="hug" />
                </div>
              </div>
            </div>
          </MatrixCard>
          <div className="mt-[var(--spacing-500)] space-y-[var(--spacing-400)] rounded-[var(--radius-medium)] border border-dashed border-[var(--stroke-primary)] p-[var(--spacing-300)]">
            <SegmentControl options={options} value={selected} onValueChange={setSelected} size="large" shape="soft" />
            <SegmentControl options={options} value={selected} onValueChange={setSelected} width="fixed" shape="full" />
          </div>
        </section>

        <section className="rounded-[var(--radius-large)] bg-[var(--bg-layer-base)] p-[var(--spacing-500)]">
          <SectionTitle>Radio</SectionTitle>
          <MatrixCard title="state, selected, size">
            <div className="flex flex-wrap gap-[var(--spacing-300)]">
              <StateTile label="medium / false"><Radio label="label" /></StateTile>
              <StateTile label="large / false"><Radio label="label" size="large" /></StateTile>
              <StateTile label="medium / true"><Radio label="label" selected /></StateTile>
              <StateTile label="large / true"><Radio label="label" selected size="large" /></StateTile>
              <StateTile label="disabled"><Radio label="label" disabled /></StateTile>
              <StateTile label="disabled true"><Radio label="label" selected disabled /></StateTile>
            </div>
          </MatrixCard>
          <div className="mt-[var(--spacing-500)] grid w-fit grid-cols-2 gap-[var(--spacing-300)] rounded-[var(--radius-medium)] border border-dashed border-[var(--stroke-primary)] p-[var(--spacing-300)]">
            <Radio label="label" />
            <Radio label="label" selected />
            <Radio label="label" disabled />
            <Radio label="label" selected disabled />
          </div>
        </section>

        <section className="rounded-[var(--radius-large)] bg-[var(--bg-layer-base)] p-[var(--spacing-500)]">
          <SectionTitle>Tab</SectionTitle>
          <MatrixCard title="size / width">
            <div className="grid gap-[var(--spacing-500)] lg:grid-cols-2">
              <div>
                <p className="ts-caption-medium mb-[var(--spacing-200)] text-[var(--fg-muted)]">size</p>
                <div className="space-y-[var(--spacing-300)]">
                  <Tabs items={options} value={tab} onValueChange={setTab} size="large" />
                  <Tabs items={options} value={tab} onValueChange={setTab} size="medium" />
                </div>
              </div>
              <div>
                <p className="ts-caption-medium mb-[var(--spacing-200)] text-[var(--fg-muted)]">width</p>
                <div className="space-y-[var(--spacing-300)]">
                  <Tabs items={options} value={tab} onValueChange={setTab} width="fixed" />
                  <Tabs items={options} value={tab} onValueChange={setTab} width="hug" />
                </div>
              </div>
            </div>
          </MatrixCard>
          <div className="mt-[var(--spacing-500)] space-y-[var(--spacing-400)] rounded-[var(--radius-medium)] border border-dashed border-[var(--stroke-primary)] p-[var(--spacing-300)]">
            <Tabs items={options} value={tab} onValueChange={setTab} />
            <Tabs items={options} value={tab} onValueChange={setTab} width="fixed" />
          </div>
        </section>

        <section className="rounded-[var(--radius-large)] bg-[var(--bg-layer-base)] p-[var(--spacing-500)] xl:col-span-2">
          <SectionTitle>Switch</SectionTitle>
          <MatrixCard title="size / selected">
            <div className="flex flex-wrap gap-[var(--spacing-500)]">
              <StateTile label="large"><Switch size="large" selected={on} onClick={() => setOn(v => !v)} /></StateTile>
              <StateTile label="medium"><Switch selected={on} onClick={() => setOn(v => !v)} /></StateTile>
              <StateTile label="true"><Switch selected /></StateTile>
              <StateTile label="false"><Switch /></StateTile>
            </div>
          </MatrixCard>
          <div className="mt-[var(--spacing-500)] flex w-fit gap-[var(--spacing-300)] rounded-[var(--radius-medium)] border border-dashed border-[var(--stroke-primary)] p-[var(--spacing-300)]">
            <Switch selected />
            <Switch />
            <Switch selected size="large" />
            <Switch size="large" />
          </div>
        </section>
      </div>

      <div className="mt-10 space-y-10">
        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "Checkbox.selected",      type: "boolean | 'mixed'", default: "false",      description: "checkbox 선택 상태" },
            { prop: "Radio.selected",         type: "boolean",           default: "false",      description: "radio 선택 상태" },
            { prop: "Switch.selected",        type: "boolean",           default: "false",      description: "switch 선택 상태" },
            { prop: "size",                   type: "'large' | 'medium'", default: "'medium'",   description: "control 높이, 아이콘, typography 크기" },
            { prop: "label",                  type: "string",            default: "—",          description: "control label 텍스트" },
            { prop: "disabled",               type: "boolean",           default: "false",      description: "비활성화 상태" },
            { prop: "SegmentControl.options", type: "SegmentOption[]",   default: "—",          description: "segment item 목록" },
            { prop: "SegmentControl.value",   type: "string",            default: "—",          description: "현재 선택된 segment 값" },
            { prop: "onValueChange",          type: "(value) => void",    default: "—",          description: "SegmentControl / Tabs 값 변경 핸들러" },
            { prop: "shape",                  type: "'soft' | 'full'",    default: "'soft'",     description: "SegmentControl 라디우스 형태" },
            { prop: "width",                  type: "'hug' | 'fixed'",    default: "'hug'",      description: "SegmentControl / Tabs 너비 방식" },
            { prop: "Tabs.items",             type: "SegmentOption[]",   default: "—",          description: "tab item 목록" },
            { prop: "Tabs.value",             type: "string",            default: "—",          description: "현재 선택된 tab 값" },
            { prop: "className",              type: "string",            default: "—",          description: "추가 className" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-neutral",             value: "var(--gray-100)", role: "SegmentControl track / switch off / selected subtle 배경" },
            { token: "--bg-field",               value: "var(--gray-0)",   role: "SegmentControl selected item 배경" },
            { token: "--bg-primary-solid",       value: "var(--blue-500)", role: "selected checkbox/radio/switch icon 또는 track" },
            { token: "--bg-disabled",            value: "var(--gray-100)", role: "disabled switch 배경" },
            { token: "--bg-layer",               value: "var(--gray-0)",   role: "switch thumb" },
            { token: "--bg-neutral-solid",       value: "var(--gray-900)", role: "Tabs selected indicator" },
            { token: "--fg-neutral",             value: "var(--gray-900)", role: "enabled/selected 텍스트" },
            { token: "--fg-muted",               value: "var(--gray-500)", role: "unselected segment/tab 텍스트" },
            { token: "--fg-primary",             value: "var(--blue-500)", role: "selected checkbox/radio icon" },
            { token: "--fg-disabled",            value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--stroke-neutral",         value: "var(--gray-200)", role: "selected segment item stroke" },
            { token: "--stroke-primary",         value: "var(--blue-500)", role: "검증용 dashed preview stroke" },
            { token: "--radius-medium",          value: "12px",            role: "soft segment track/item" },
            { token: "--radius-full-h36",        value: "18px",            role: "medium full segment / switch radius" },
            { token: "--radius-full-h44",        value: "22px",            role: "large full segment radius" },
            { token: "--spacing-100",            value: "4px",             role: "segment/tab icon gap" },
            { token: "--spacing-200",            value: "8px",             role: "label gap / tab indicator inset" },
            { token: "--spacing-300",            value: "12px",            role: "preview padding / tab horizontal padding" },
            { token: "--spacing-negative-100",   value: "-4px",            role: "SegmentControl item overlap" },
            { token: "--size-h20",               value: "20px",            role: "medium checkbox/radio icon / switch thumb height" },
            { token: "--size-h22",               value: "22px",            role: "large checkbox/radio icon" },
            { token: "--size-h36",               value: "36px",            role: "medium SegmentControl item height" },
            { token: "--size-h44",               value: "44px",            role: "large SegmentControl item height / medium Tabs height" },
            { token: "--size-h52",               value: "52px",            role: "large Tabs height / large switch width" },
            { token: "--size-segment-item-medium", value: "60px",          role: "medium hug segment item width" },
            { token: "--size-segment-item-large",  value: "70px",          role: "large hug segment item width" },
            { token: "--size-segment-item-fixed",  value: "136px",         role: "fixed segment item width" },
            { token: "--size-segment-fixed",       value: "400px",         role: "fixed segment max width" },
            { token: "--size-tabs-fixed",          value: "400px",         role: "fixed tabs max width" },
          ]} />
        </div>
      </div>
    </div>
  );
}

type MenuPlaygroundType = "MenuItem" | "ToggleMenuItem" | "CheckboxMenuItem" | "MenuModal";

const menuPlaygroundTabs = [
  { value: "MenuItem", label: "Menu Item" },
  { value: "ToggleMenuItem", label: "Toggle Item" },
  { value: "CheckboxMenuItem", label: "Checkbox Item" },
  { value: "MenuModal", label: "Menu Modal" },
];

function MenuPage() {
  const [type, setType]             = useState<MenuPlaygroundType>("MenuItem");
  const [size, setSize]             = useState<MenuSize>("medium");
  const [kind, setKind]             = useState<MenuKind>("neutral");
  const [variant, setVariant]       = useState<MenuItemVariant>("ghost");
  const [selected, setSelected]     = useState(true);
  const [disabled, setDisabled]     = useState(false);
  const [description, setDescription] = useState(false);
  const [prefix, setPrefix]         = useState(true);
  const [suffix, setSuffix]         = useState(true);

  const prefixIcon = prefix ? <Icon name="person-outline" size={18} /> : undefined;
  const suffixIcon = suffix ? <Icon name="chevron-right-outline" size={18} /> : undefined;
  const itemDescription = description ? "Supporting text" : undefined;
  const hasItemSlots = type === "MenuItem";
  const hasPrefix = type === "MenuItem" || type === "ToggleMenuItem";
  const hasDescription = type === "MenuItem" || type === "ToggleMenuItem";
  const hasVariant = type === "ToggleMenuItem" || type === "MenuModal";

  const playgroundItem = (() => {
    if (type === "ToggleMenuItem") {
      return (
        <ToggleMenuItem
          label="Menu item"
          description={itemDescription}
          prefix={prefixIcon}
          size={size}
          kind={kind}
          selected={selected}
          variant={variant}
          disabled={disabled}
        />
      );
    }
    if (type === "CheckboxMenuItem") {
      return (
        <CheckboxMenuItem
          label="Menu item"
          size={size}
          kind={kind}
          selected={selected}
          disabled={disabled}
        />
      );
    }
    if (type === "MenuModal") {
      return (
        <>
          <MenuItem label="Profile" prefix={<Icon name="person-outline" size={18} />} suffix={<Icon name="chevron-right-outline" size={18} />} size={size} disabled={disabled} />
          <ToggleMenuItem label="Notifications" prefix={<Icon name="notification-outline" size={18} />} selected={selected} variant={variant} size={size} disabled={disabled} />
          <CheckboxMenuItem label="Show hidden files" selected={selected} size={size} disabled={disabled} />
          <MenuDivider />
          <MenuItem label="Delete" kind="critical" size={size} disabled={disabled} />
        </>
      );
    }
    return (
      <MenuItem
        label="Menu item"
        description={itemDescription}
        prefix={prefixIcon}
        suffix={suffixIcon}
        size={size}
        kind={kind}
        disabled={disabled}
      />
    );
  })();

  return (
    <div>
      <PageHeader title="Menu" description="Menu item, toggle item, checkbox item, divider, menu modal." />
      <div className="space-y-10">
        <div>
          <SectionTitle>Playground</SectionTitle>
          <div className="border border-[var(--stroke-neutral)] rounded-[var(--radius-large)] overflow-hidden">
            <div className="border-b border-[var(--stroke-neutral)] bg-[var(--bg-layer)] px-4">
              <Tabs
                items={menuPlaygroundTabs}
                value={type}
                onValueChange={(next) => setType(next as MenuPlaygroundType)}
                size="medium"
              />
            </div>
            <PreviewBox>
              <div className="w-[280px]">
                <MenuModal size={size}>
                  {playgroundItem}
                </MenuModal>
              </div>
            </PreviewBox>
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-4 border-t border-[var(--stroke-neutral)] bg-[var(--bg-layer)]">
              <PropSelect label="size" value={size} options={["large", "medium"]} onChange={setSize} />
              <PropSelect label="kind" value={kind} options={["neutral", "critical"]} onChange={setKind} />
              {hasVariant && <PropSelect label="variant" value={variant} options={["ghost", "subtle"]} onChange={setVariant} />}
              <PropToggle label="selected" value={selected} onChange={setSelected} />
              <PropToggle label="disabled" value={disabled} onChange={setDisabled} />
              {hasDescription && <PropToggle label="description" value={description} onChange={setDescription} />}
              {hasPrefix && <PropToggle label="prefix" value={prefix} onChange={setPrefix} />}
              {hasItemSlots && <PropToggle label="suffix" value={suffix} onChange={setSuffix} />}
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Parts</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[var(--radius-medium)] border border-[var(--stroke-neutral)] bg-[var(--bg-layer-base)] p-4">
              <code className="ts-caption-medium font-mono text-[var(--fg-muted)]">MenuItem</code>
              <div className="mt-3">
                <MenuModal>
                  <MenuItem label="Profile" prefix={<Icon name="person-outline" size={18} />} suffix={<Icon name="chevron-right-outline" size={18} />} />
                  <MenuItem label="Delete" kind="critical" />
                  <MenuItem label="Disabled" disabled />
                </MenuModal>
              </div>
            </div>
            <div className="rounded-[var(--radius-medium)] border border-[var(--stroke-neutral)] bg-[var(--bg-layer-base)] p-4">
              <code className="ts-caption-medium font-mono text-[var(--fg-muted)]">ToggleMenuItem</code>
              <div className="mt-3">
                <MenuModal>
                  <ToggleMenuItem label="Ghost selected" selected />
                  <ToggleMenuItem label="Subtle selected" selected variant="subtle" />
                  <ToggleMenuItem label="Disabled selected" selected disabled />
                </MenuModal>
              </div>
            </div>
            <div className="rounded-[var(--radius-medium)] border border-[var(--stroke-neutral)] bg-[var(--bg-layer-base)] p-4">
              <code className="ts-caption-medium font-mono text-[var(--fg-muted)]">CheckboxMenuItem</code>
              <div className="mt-3">
                <MenuModal>
                  <CheckboxMenuItem label="Unchecked" />
                  <CheckboxMenuItem label="Checked" selected />
                  <CheckboxMenuItem label="Disabled checked" selected disabled />
                </MenuModal>
              </div>
            </div>
            <div className="rounded-[var(--radius-medium)] border border-[var(--stroke-neutral)] bg-[var(--bg-layer-base)] p-4">
              <code className="ts-caption-medium font-mono text-[var(--fg-muted)]">MenuModal / Divider</code>
              <div className="mt-3">
                <MenuModal>
                  <MenuItem label="First item" />
                  <MenuDivider />
                  <MenuItem label="Second item" />
                </MenuModal>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Props</SectionTitle>
          <PropsTable rows={[
            { prop: "label",       type: "string",                 default: "—",        description: "menu item 텍스트" },
            { prop: "description", type: "string",                 default: "—",        description: "보조 설명 텍스트" },
            { prop: "prefix",      type: "ReactNode",              default: "—",        description: "왼쪽 아이콘 슬롯" },
            { prop: "suffix",      type: "ReactNode",              default: "—",        description: "오른쪽 아이콘/액션 슬롯" },
            { prop: "size",        type: "'large' | 'medium'",     default: "'medium'", description: "item 높이와 typography" },
            { prop: "kind",        type: "'neutral' | 'critical'", default: "'neutral'", description: "텍스트/아이콘 의미 색상" },
            { prop: "selected",    type: "boolean",                default: "false",    description: "ToggleMenuItem / CheckboxMenuItem 선택 상태" },
            { prop: "variant",     type: "'ghost' | 'subtle'",     default: "'ghost'",  description: "ToggleMenuItem 선택 배경 방식" },
            { prop: "disabled",    type: "boolean",                default: "false",    description: "비활성화 상태" },
            { prop: "children",    type: "ReactNode",              default: "—",        description: "MenuModal 내부 item 구성" },
            { prop: "trigger",     type: "ReactNode",              default: "—",        description: "MenuPopover를 여는 기준 요소" },
            { prop: "open",        type: "boolean",                default: "true",     description: "floating menu 표시 상태" },
            { prop: "align",       type: "'start' | 'end'",        default: "'start'",  description: "trigger 기준 menu 정렬" },
          ]} />
        </div>

        <div>
          <SectionTitle>Tokens</SectionTitle>
          <TokensTable rows={[
            { token: "--bg-layer",          value: "var(--gray-0)",   role: "menu modal 배경" },
            { token: "--bg-neutral",        value: "var(--gray-100)", role: "selected/subtle item 배경" },
            { token: "--bg-neutral-subtle", value: "var(--gray-0)",   role: "hover item 배경" },
            { token: "--fg-neutral",        value: "var(--gray-900)", role: "neutral 텍스트/아이콘" },
            { token: "--fg-critical",       value: "var(--red-500)",  role: "critical 텍스트" },
            { token: "--fg-disabled",       value: "var(--gray-300)", role: "disabled 텍스트/아이콘" },
            { token: "--stroke-neutral-subtle", value: "var(--gray-100)", role: "divider" },
            { token: "--radius-medium",     value: "12px",            role: "menu modal 라디우스" },
            { token: "--radius-small",      value: "8px",             role: "menu item 라디우스" },
            { token: "--spacing-100",       value: "4px",             role: "legacy menu spacing reference" },
            { token: "--spacing-200",       value: "8px",             role: "modal padding / popover offset / divider vertical padding / item gap" },
            { token: "--spacing-300",       value: "12px",            role: "item / divider horizontal padding" },
            { token: "--spacing-50",        value: "2px",             role: "legacy menu gap reference" },
            { token: "--size-h20",          value: "20px",            role: "menu checkbox/check icon size" },
            { token: "--size-h36",          value: "36px",            role: "medium item min-height" },
            { token: "--size-h44",          value: "44px",            role: "large item min-height" },
            { token: "--size-menu-modal-min-width", value: "240px",   role: "menu modal 최소 너비" },
            { token: "--size-menu-divider-height", value: "17px",     role: "menu divider 전체 높이" },
            { token: "--size-menu-divider-line", value: "1px",        role: "menu divider line 두께" },
            { token: "--effect-menu-modal", value: "0 0 2px 0 ... / 0 8px 32px 0 ...", role: "menu modal shadow" },
          ]} />
        </div>
      </div>
    </div>
  );
}

function TablePage() {
  return (
    <div>
      <PageHeader title="Table" description="HeaderCell, Cell, CheckboxCell, InputCell 조합의 테이블 컴포넌트." />
      <DataTable>
        <TableRow>
          <HeaderCell label="Name" />
          <HeaderCell label="Role" />
          <HeaderCell label="Status" />
        </TableRow>
        <TableRow>
          <CheckboxCell selected label="Min Kim" />
          <Cell label="Designer" description="Design system" />
          <Cell label="Active" />
        </TableRow>
        <TableRow>
          <CheckboxCell label="Jin Park" />
          <InputCell defaultValue="Engineer" />
          <Cell kind="critical" label="Blocked" />
        </TableRow>
      </DataTable>
    </div>
  );
}

function DialogPage() {
  return (
    <div>
      <PageHeader title="Dialog" description="확인, 입력, 선택 흐름을 담는 modal dialog." />
      <PreviewBox>
        <Dialog title="Dialog title" description="Dialog description text goes here." onClose={() => undefined}>
          <InputField label="Name" fullWidth defaultValue="Minim" />
        </Dialog>
      </PreviewBox>
    </div>
  );
}

function ContentPage() {
  return (
    <div>
      <PageHeader title="Content" description="라벨, 아이콘, 이미지, 사람 정보 슬롯 컴포넌트." />
      <div className="space-y-10">
        <PreviewBox>
          <SlotIconContent><Icon name="setting-outline" size={18} /></SlotIconContent>
          <SlotLabelContent label="Label content" description="Secondary line" />
          <ImageContent size="h44" />
          <PersonContent name="Min Kim" subtitle="Product designer" />
          <MultiPersonContent people={[{}, {}, {}]} />
        </PreviewBox>
      </div>
    </div>
  );
}

const PAGES: Record<Page, React.ComponentType> = {
  "colors":        ColorsPage,
  "typography":    TypographyPage,
  "spacing":       SpacingPage,
  "button":        ButtonPage,
  "toggle-button": ToggleButtonPage,
  "inline-button": InlineButtonPage,
  "action-chip":   ActionChipPage,
  "toggle-chip":   ToggleChipPage,
  "filter-chip":   FilterChipPage,
  "input-chip":    InputChipPage,
  "badge":         BadgePage,
  "fields":        FieldsPage,
  "selection-controls": SelectionControlsPage,
  "menu":          MenuPage,
  "table":         TablePage,
  "dialog":        DialogPage,
  "content":       ContentPage,
};

export default function App() {
  const [active, setActive] = useState<Page>("button");
  const ActivePage = PAGES[active];

  return (
    <div className="flex min-h-screen bg-[var(--bg-layer)] text-[var(--fg-neutral)]" style={{ fontFamily: "var(--font-base)" }}>

      {/* Sidebar */}
      <aside className="w-52 shrink-0 fixed top-0 left-0 h-full border-r border-[var(--stroke-neutral)] bg-[var(--bg-layer)] flex flex-col">
        <div className="px-5 py-5 border-b border-[var(--stroke-neutral)]">
          <p className="ts-caption-medium-strong text-[var(--fg-muted)] uppercase tracking-widest mb-0.5">Minim</p>
          <p className="ts-title-small text-[var(--fg-neutral)]">Design System</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {NAV.map(({ group, items }) => (
            <div key={group} className="mb-5">
              <p className="ts-caption-medium-strong text-[var(--fg-muted)] uppercase tracking-widest px-5 mb-1">{group}</p>
              {items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={[
                    "w-full text-left px-5 py-1.5 ts-body-medium transition-colors",
                    active === item.id
                      ? "text-[var(--fg-neutral)] bg-[var(--bg-neutral)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg-neutral)] hover:bg-[var(--bg-neutral-subtle)]",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="ml-52 flex-1 min-w-0">
        <div className={`${active === "selection-controls" ? "max-w-none mx-0 px-8" : "max-w-3xl mx-auto px-10"} py-12`}>
          <ActivePage />
        </div>
      </main>

    </div>
  );
}
